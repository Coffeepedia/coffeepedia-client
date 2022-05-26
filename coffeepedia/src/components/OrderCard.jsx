import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import LoadingSmall from "./LoadingSmall";
import { useQuery } from "@apollo/client";
import { GET_ITEM_BY_ID } from "../queries/items";

export default function OrderCard({
  orderItem,
  updateQuantity,
  patchQtyLoading,
  delOrderItemLoading,
}) {
  const [cupSize, setCupSize] = useState("Regular");
  const { loading, error, data } = useQuery(GET_ITEM_BY_ID, {
    variables: {
      getItemByIdId: orderItem.ItemId,
    },
    onCompleted: () => {
      console.log(orderItem.price, data.getItemById.price);
      if (orderItem.price > data.getItemById.price) {
        setCupSize("Large");
      } else if (orderItem.price < data.getItemById.price) {
        setCupSize("Small");
      } else setCupSize("Regular");
    },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error...</p>;
  }

  return (
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
            <p className="text-sm font-semibold">{cupSize}</p>
            <p className="text-sm font-semibold">IDR {orderItem.price}</p>

            {/* Quantity */}
            <div className="bg-cyan mt-2 flex flex-row items-center">
              <svg
                onClick={() =>
                  updateQuantity("decrement", orderItem.id, orderItem.quantity)
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

              {patchQtyLoading || delOrderItemLoading ? (
                <LoadingSmall />
              ) : (
                <p className="mx-4 font-semibold">{orderItem.quantity}</p>
              )}

              <svg
                onClick={() =>
                  updateQuantity("increment", orderItem.id, orderItem.quantity)
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
  );
}
