import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import {
  DELETE_ORDER_ITEM,
  GET_ORDER_BY_ID,
  PATCH_QUANTITY,
} from "../queries/orders";
import { DO_PATCH_AFTER_PAYMENT, DO_PAYMENT } from "../queries/payments";

export default function OrderPage() {
  const navigate = useNavigate();
  const getOrderByIdVariables = {
    accesstoken: localStorage.accesstoken,
    getOrderByIdId: localStorage.OrderId,
  };

  const { loading, error, data, refetch } = useQuery(GET_ORDER_BY_ID, {
    variables: getOrderByIdVariables,
  });

  useEffect(() => {
    refetch();
  }, []);

  const [patchQuantity] = useMutation(PATCH_QUANTITY, {
    refetchQueries: [
      {
        query: GET_ORDER_BY_ID,
        variables: getOrderByIdVariables,
      },
    ],
  });
  const [delOrderItem] = useMutation(DELETE_ORDER_ITEM, {
    refetchQueries: [
      {
        query: GET_ORDER_BY_ID,
        variables: getOrderByIdVariables,
      },
    ],
  });

  const totalPrice = () => {
    let total = 0;
    data.getOrderById.OrderDetails.forEach((orderItem) => {
      total += orderItem.price * orderItem.quantity;
    });
    return total;
  };

  const updateQuantity = (action, orderItemId, currQty) => {
    if (action === "decrement" && currQty === 1) {
      delOrderItem({
        variables: {
          accesstoken: localStorage.accesstoken,
          deleteOrderDetailId: orderItemId,
        },
      });
    } else {
      patchQuantity({
        variables: {
          accesstoken: localStorage.accesstoken,
          updateOrderDetailId: orderItemId,
          action: action,
          quantity: null,
        },
      });
    }
  };

  // PAYMENT
  const [pay] = useMutation(DO_PAYMENT, {
    variables: {
      email: localStorage.email,
      totalPrice: totalPrice(),
      orderId: +localStorage.OrderId,
      accesstoken: localStorage.accesstoken,
    },
    onCompleted: (data) => {
      window.snap.pay(data.DoPayment.token, {
        onSuccess: function (result) {
          update();
        },
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [update] = useMutation(DO_PATCH_AFTER_PAYMENT, {
    variables: {
      status: "paid",
      updateOrderId: localStorage.OrderId,
      accesstoken: localStorage.accesstoken,
    },
    onCompleted: (data) => {
      if (data.UpdateOrder.message[0] === "Order status updated to paid") {
        navigate(`/order/1`);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return (
    <>
      <div className="container-sm h-full min-h-screen bg-[#EFEAD8]">
        {/* Header */}
        <div className="h-[165px] bg-[#1F3933] p-4">
          <div className="mb-4 grid grid-cols-10">
            <img
              onClick={() => navigate(-1)}
              src={leftarrow}
              alt=""
              className="h-6 w-6 cursor-pointer"
            />
            <p className="col-span-9 mt-[-6px] text-2xl font-semibold text-white">
              Your Order
            </p>
          </div>
          <p className="text-lg font-bold text-white">Pickup Store</p>
          <div className="text-m w-full border-b-2 border-gray-400 bg-[#1F3933] font-medium text-white">
            {data.getOrderById.CoffeeShopId}
          </div>
        </div>

        <div className="mb-24 flex flex-col">
          {/* Card */}
          {[...data.getOrderById.OrderDetails]
            .sort((a, b) => a.id - b.id)
            .map((orderItem) => (
              <div key={orderItem.id} className="w-full p-4">
                <div className="h-full w-full rounded-2xl bg-white">
                  <div className="grid grid-cols-3 gap-4 p-3">
                    <div className="...">
                      <img
                        src={orderItem.imageUrl}
                        alt={orderItem.name}
                        className="rounded-2xl object-cover"
                      />
                    </div>
                    <div className="... col-span-2">
                      <p className="text-lg font-bold">{orderItem.name}</p>
                      <p className="text-sm font-semibold">Grande</p>
                      <p className="text-sm font-semibold">
                        IDR {orderItem.price}
                      </p>

                      {/* Quantity */}
                      <div className="bg-cyan mt-2 flex flex-row items-center">
                        <svg
                          onClick={() =>
                            updateQuantity(
                              "decrement",
                              orderItem.id,
                              orderItem.quantity
                            )
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer stroke-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="mx-4 font-semibold">
                          {orderItem.quantity}
                        </p>

                        <svg
                          onClick={() =>
                            updateQuantity(
                              "increment",
                              orderItem.id,
                              orderItem.quantity
                            )
                          }
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 cursor-pointer stroke-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col">
          <div
            className="h-[100px] w-screen max-w-[620px]"
            style={{ position: "fixed", bottom: 0 }}
          >
            <div className="w-full rounded bg-p-dark">
              <div className="flex flex-row items-center justify-between p-4">
                <div className="grow text-center text-2xl font-bold text-white">
                  IDR {totalPrice()}
                </div>
                <div className="">
                  <button
                    onClick={pay}
                    className="h-10 w-[115px] rounded-[30px] bg-primary text-lg font-semibold text-white"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
