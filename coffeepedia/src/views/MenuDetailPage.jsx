import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
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
  const [orderDetail, setOrderDetail] = useState({
    accesstoken: null,
    addOrderDetailId: null,
    orderId: null,
    quantity: null,
    name: null,
    price: null,
    imageUrl: null,
  });

  const addToOrder = () => {
    console.log("add order detail");
  };

  const cupSizeImg = (size) => {
    if (size === cupSize) {
      return require("../assets/coffee-cup-color.png");
    }
    return require("../assets/coffee-cup.png");
  };

  useEffect(() => {
    if (!loading && data) {
      setOrderDetail({ ...orderDetail, price: data.getItemById.price });
    }
  }, []);

  useEffect(() => {
    if (!loading && data) {
      let price = data.getItemById.price;
      setOrderDetail({ ...orderDetail, price });
      if (cupSize === "small") {
        price -= 5000;
      } else if (cupSize === "large") {
        price += 5000;
      }
      setOrderDetail({ ...orderDetail, price });
    }
  }, [cupSize]);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error...</p>;
  }

  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-items-stretch">
      {/* Header */}
      <div className="flex h-1/2 w-full flex-col justify-items-stretch bg-[#1F3933] p-4 shadow-lg ">
        <img
          onClick={() => navigate(-1)}
          src={leftarrow}
          alt="left arrow"
          className="h-6 w-6 cursor-pointer"
        />
        <div className="flex w-full flex-row items-center justify-center p-2">
          <p className="text-3xl font-bold text-white">
            {data.getItemById.name}
          </p>
        </div>

        <div className="flex flex-row items-center justify-center">
          <img
            src={data.getItemById.imageUrl}
            alt=""
            className="h-72 w-64 p-2"
          />
        </div>
      </div>

      <div className="-my-8 h-full w-full rounded-t-[40px] bg-[#EFEAD8] shadow-lg">
        {/* Button Add to Order */}
        {/* <div className="flex flex-col items-center">
          <div className="flex h-[92px] w-[92px] flex-row items-center justify-center rounded-full bg-white p-3 shadow-lg hover:bg-[#557B83]">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
              alt="Coffeepedia Logo"
              className="h-[50px]"
            />
          </div>
        </div> */}

        <div className="flex w-full flex-col items-start p-5">
          {/* Size options */}
          <div className="mb-10 w-full">
            <div className="mb-6 flex items-center justify-between border-b-2 border-gray-500">
              <h1 className="text-xl font-semibold">Size Options</h1>
              <h1 className="text-base font-semibold text-gray-500">
                {formatPrice(data.getItemById.price)}
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

          <div className="w-full">
            <div className="text-xl font-semibold"></div>
            <div className="mt-2 h-full w-full rounded-[10px] border-2 border-black p-2">
              <p className="mt-[-30px] w-1/3 bg-[#EFEAD8] p-2 font-semibold text-gray-700">
                Description
              </p>
              <div className="text-justify font-medium">
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
        className="fixed bottom-4 right-4 rounded-3xl bg-primary px-6 py-2 text-lg font-bold text-white"
      >
        Add to Order
      </button>
    </div>
  );
}
