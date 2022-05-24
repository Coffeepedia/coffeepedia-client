import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import preparing from "../assets/svg/preparing.svg";
import sent from "../assets/svg/sent.svg";
import { GET_ORDER_BY_ID, UPDATE_STATUS_ORDER } from "../queries/orders";

export default function OrderTrackingPage() {
  const { id } = useParams();
  const getOrderByIdVariables = {
    accesstoken: localStorage.accesstoken,
    getOrderByIdId: id,
  };

  const { loading, error, data, refetch } = useQuery(GET_ORDER_BY_ID, {
    variables: getOrderByIdVariables,
  });

  useEffect(() => {
    if (
      data?.getOrderById.status !== "sent" ||
      data?.getOrderById.status !== "delivered"
    ) {
      setInterval(() => {
        console.log("terpanggil");
        refetch();
      }, 5000);
    }
  }, [data?.getOrderById.status]);

  const navigate = useNavigate();

  const getTotalPrice = () => {
    return data.getOrderById.OrderDetails.map(
      (order) => order.price * order.quantity
    ).reduce((total, price) => total + price);
  };

  const done = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="z-20 h-8 w-8 fill-green-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const [recieveOrder] = useMutation(UPDATE_STATUS_ORDER);

  const handleRecieved = () => {
    recieveOrder({
      variables: {
        updateOrderId: +localStorage.OrderId,
        accesstoken: localStorage.accesstoken,
        status: "delivered",
      },
    });
  };

  const generateOrderId = () => {
    return data.getOrderById.id + data.getOrderById.UserId + "CFPDA";
  };

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error...</p>;
  }

  return (
    <section className="flex h-full min-h-screen w-screen max-w-[620px] flex-col">
      {/* Top Half */}
      <section className="min-h-1/2 h-1/2 w-full bg-p-dark">
        {/* Head Nav */}
        <header className="relative py-4">
          <svg
            onClick={() => navigate(-1)}
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 left-3 h-6 w-6 cursor-pointer stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className="font-white text-center text-lg font-semibold text-white">
            Track Your Order
          </div>
        </header>
      </section>

      {/* Bottom Half */}
      <section className="h-full w-full bg-s-light px-6 pb-6">
        {/* Order Details */}
        <div className="-mb-6 -translate-y-24 rounded-2xl bg-[#f5f5f5] p-6 shadow-md">
          <div className="mb-2 border-b-2 pb-2">
            <div className="flex items-center space-x-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-orange-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg> */}
              <h1 className="mb-1 text-xl font-bold">Kene Coffee House</h1>
            </div>

            <div className="flex items-center space-x-3">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-p-dark"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg> */}
              <p className="text-xs font-semibold text-gray-600">
                Jl. Kaliwaru No.84, Kaliwaru, Condongcatur, Kabupaten Sleman
              </p>
            </div>
          </div>

          {data.getOrderById.OrderDetails.map((order) => (
            <div
              key={order.id}
              className="mb-2 flex items-center justify-between"
            >
              <div className="space-x-2 text-sm font-semibold">
                <span className="text-primary">{order.quantity + "x"}</span>
                <span className="">{order.name}</span>
              </div>
              <span className="text-sm font-semibold">
                IDR {order.price * order.quantity}
              </span>
            </div>
          ))}

          <div className="mt-1 flex items-center justify-between border-t-2 pt-1">
            <div className="space-x-2 text-sm font-semibold">
              <span className="">Total</span>
            </div>
            <span className="text-sm font-semibold">IDR {getTotalPrice()}</span>
          </div>
        </div>

        {/* Card Tracker */}
        <div className="-translate-y-10 rounded-2xl bg-[#f5f5f5] shadow-lg">
          {/* Order Id */}
          <div className="mb-4 border-b-2 px-6 pt-6 pb-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-700">Order ID.</span>
              <span className="text-gray-400">{generateOrderId()}</span>
            </div>
          </div>

          {/* Tracker */}
          <div className="flex flex-col px-6 pb-6">
            {/* Paid */}
            <div className="flex space-x-4">
              {done}

              <div className="">
                <h1 className="text-sm font-semibold text-gray-900">
                  Payment success
                </h1>
                <p className="text-xs text-gray-400">09:00am - May 13, 2021</p>
              </div>
            </div>

            <div className="relative h-10 w-full">
              <div className="absolute left-3 top-1 h-2/3 w-[2px] bg-gray-400"></div>
            </div>

            {/* Ready */}
            <div className="flex space-x-4">
              {data.getOrderById.status === "paid" ||
              data.getOrderById.status === "unpaid" ? (
                <img
                  src={preparing}
                  alt="preparing"
                  className="z-20 h-8 w-8 p-1"
                />
              ) : data.getOrderById.status === "ready" ? (
                done
              ) : (
                done
              )}

              <div className="">
                <h1 className="text-sm font-semibold text-gray-900">
                  The restaurant is preparing your order
                </h1>
                <p className="text-xs text-gray-400">09:30am - May 13, 2021</p>
              </div>
            </div>

            <div className="relative h-10 w-full">
              <div className="absolute left-3 top-1 h-2/3 w-[2px] bg-gray-400"></div>
            </div>

            {/* Sent */}
            <div className="flex space-x-4">
              {data.getOrderById.status === "ready" ? (
                <img src={sent} alt="sent" className="z-20 h-8 w-8 p-1" />
              ) : data.getOrderById.status === "sent" ||
                data.getOrderById.status === "delivered" ? (
                done
              ) : (
                <img
                  src={sent}
                  alt="sent"
                  className="z-20 h-8 w-8 p-1 opacity-50"
                />
              )}

              <div
                className={
                  data.getOrderById.status === "paid" ? "opacity-50" : ""
                }
              >
                <h1 className="text-sm font-semibold text-gray-900">
                  Your food is on the way
                </h1>
                <p className="text-xs text-gray-400">09:35am - May 13, 2021</p>
              </div>
            </div>

            <div className="relative h-10 w-full">
              <div className="absolute left-3 top-1 h-2/3 w-[2px] bg-gray-400"></div>
            </div>

            {/* Delivered */}
            <div className="flex space-x-4">
              {data.getOrderById.status === "delivered" ? (
                done
              ) : data.getOrderById.status === "sent" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-20 h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-20 h-8 w-8 opacity-50"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              <div
                className={
                  data.getOrderById.status === "paid" ||
                  data.getOrderById.status === "ready"
                    ? "opacity-50"
                    : ""
                }
              >
                <h1 className="text-sm font-semibold text-gray-900">
                  You have recieved your order
                </h1>
                <p className="text-xs text-gray-400">09:35am - May 13, 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recieve Confirmation Button */}
        {data.getOrderById.status === "sent" && (
          <button
            onClick={handleRecieved}
            className="w-full rounded-lg bg-primary py-2 font-semibold text-white"
          >
            I have received my order
          </button>
        )}
      </section>
    </section>
  );
}
