import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import ViewCart from "../components/ViewCart";
import { GET_ITEM_BY_ID } from "../queries/items";
import { ADD_ORDER_DETAIL } from "../queries/orders";
import formatPrice from "../utils/formatPrice";

export default function MenuDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
    variables: {
      getItemByIdId: id,
    },
  });
  const [
    addOrderDetail,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_ORDER_DETAIL);

  const [cupSize, setCupSize] = useState("regular");
  const [updatedPrice, setUpdatedPrice] = useState(data?.getItemById.price);

  useEffect(() => {
    setUpdatedPrice(data?.getItemById.price);
  }, [data?.getItemById.price]);

  useEffect(() => {
    if (cupSize === "small") {
      setUpdatedPrice(data?.getItemById.price - 5000);
    } else if (cupSize === "large") {
      setUpdatedPrice(data?.getItemById.price + 5000);
    } else {
      setUpdatedPrice(data?.getItemById.price);
    }
  }, [cupSize]);

  const addToOrder = () => {
    console.log("add order detail");
    addOrderDetail({
      variables: {
        accesstoken: localStorage.accesstoken,
        addOrderDetailId: data.getItemById.id,
        quantity: 1,
        orderId: +localStorage.OrderId,
        name: data.getItemById.name,
        price: updatedPrice,
        imageUrl: data.getItemById.imageUrl,
      },
    });
  };

  const cupSizeImg = (size) => {
    if (size === cupSize) {
      return require("../assets/coffee-cup-color.png");
    }
    return require("../assets/coffee-cup.png");
  };

  // useEffect(() => {
  //   if (!loading) {
  //     setOrderDetail({
  //       ...orderDetail,
  //       price: data.getItemById.price,
  //       addOrderDetailId: data.getItemById.id,
  //       orderId: 1,
  //       quantity: 1,
  //       name: data.getItemById.name,
  //       imageUrl: data.getItemById.imageUrl,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!loading && data) {
  //     let price = data.getItemById.price;
  //     setOrderDetail({ ...orderDetail, price });
  //     if (cupSize === "small") {
  //       price -= 5000;
  //     } else if (cupSize === "large") {
  //       price += 5000;
  //     }
  //     setOrderDetail({ ...orderDetail, price });
  //   }
  // }, [cupSize]);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error...</p>;
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-items-stretch">
      {/* Header */}
      <div className="flex items-center justify-between bg-p-dark px-4 py-4">
        <img
          onClick={() => navigate(-1)}
          src={leftarrow}
          alt="left arrow"
          className="h-6 w-6 cursor-pointer"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 fill-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Item Image */}
      <div className="flex h-1/2 w-full flex-col justify-items-stretch bg-[#1F3933] pb-4 shadow-lg">
        <div className="flex w-full flex-row items-center justify-center">
          <p className="text-3xl font-bold text-white">
            {data.getItemById.name}
          </p>
        </div>

        <div className="flex flex-row items-center justify-center">
          <img
            src={data.getItemById.imageUrl}
            alt={data.getItemById.name}
            className="h-64 w-64 rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="-my-8 h-full w-full rounded-t-[40px] bg-[#EFEAD8] shadow-lg">
        {/* Details */}
        <div className="flex w-full flex-col items-start p-5">
          {/* Size options */}
          <div className="mb-10 w-full">
            <div className="mb-6 flex items-center justify-between border-b-2 border-gray-500">
              <h1 className="text-xl font-semibold">Size Options</h1>
              <h1 className="text-base font-semibold text-gray-500">
                IDR {updatedPrice}
              </h1>
            </div>
            <div className="flex w-full items-baseline px-8">
              <div className="basis-1/3">
                <img
                  onClick={() => setCupSize("small")}
                  src={cupSizeImg("small")}
                  alt="small"
                  className="mx-auto h-8 w-8 cursor-pointer"
                />
                <p className="mt-2 text-center text-sm font-semibold">Small</p>
                <p className="text-center text-xs">12 fl oz</p>
              </div>
              <div className="basis-1/3">
                <img
                  onClick={() => setCupSize("regular")}
                  src={cupSizeImg("regular")}
                  alt="regular"
                  className="mx-auto h-10 w-10 cursor-pointer"
                />
                <p className="mt-2 text-center text-sm font-semibold">
                  Regular
                </p>
                <p className="text-center text-xs">16 fl oz</p>
              </div>
              <div className="basis-1/3">
                <img
                  onClick={() => setCupSize("large")}
                  src={cupSizeImg("large")}
                  alt="large"
                  className="mx-auto h-12 w-12 cursor-pointer"
                />
                <p className="mt-2 text-center text-sm font-semibold">Large</p>
                <p className="text-center text-xs">24 fl oz</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="w-full">
            <div className="text-xl font-semibold"></div>
            <div className="mt-2 h-full w-full rounded-[10px] border-2 border-black p-2">
              <p className="mt-[-30px] w-1/3 bg-[#EFEAD8] p-2 font-semibold text-gray-700">
                Description
              </p>
              <div className="px-1 text-justify font-medium">
                {data.getItemById.description}
              </div>
            </div>

            {/* <div className="mt-4 h-full w-full rounded-[10px] border-2 border-black p-2">
              <p className="mt-[-25px] w-1/3 bg-[#EFEAD8] p-1 font-semibold text-gray-700">
                Espresso
              </p>
              <div className="font-medium">
                <p>2 Shots</p>
                <p>Signature Espresso</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={addToOrder}
        className="fixed bottom-20 right-4 rounded-3xl bg-primary px-6 py-2 text-lg font-bold text-white"
      >
        Add to Order
      </button>

      {/* Cart */}
      <ViewCart />
    </div>
  );
}
