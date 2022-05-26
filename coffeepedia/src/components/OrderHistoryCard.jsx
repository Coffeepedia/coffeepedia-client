import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_COFFEE_SHOP_BY_ID } from "../queries/coffeeShops";
import DropdownMenu from "./DropdownMenu";
import LoadingSmall from "./LoadingSmall";

export default function OrderHistoryCard({ order }) {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_COFFEE_SHOP_BY_ID, {
    variables: {
      placeId: order.CoffeeShopId,
    },
  });

  const [rating, setRating] = useState({});
  return (
    <div className="mb-2 cursor-pointer bg-white p-4">
      {/* Header */}
      <div
        onClick={() => navigate(`/order/${order.id}`)}
        className="flex justify-between"
      >
        {/* Timestamp */}
        <div className="text-base font-semibold uppercase">
          {new Date(order.createdAt).toLocaleDateString("id-ID")},{" "}
          {new Date(order.createdAt).toLocaleTimeString("en-US")}
        </div>

        {/* Total Price */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-base font-semibold">
            IDR{" "}
            {order.OrderDetails.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </div>
        </div>
      </div>

      {/* Resto */}
      <div
        onClick={() => navigate(`/order/${order.id}`)}
        className="mb-4 text-sm font-semibold text-gray-700"
      >
        {loading ? <LoadingSmall /> : data.getCoffeeShopById.name}
      </div>

      {/* Items */}
      <div
        onClick={() => navigate(`/order/${order.id}`)}
        className="mb-4 flex space-x-1 border-b border-gray-700 pb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 fill-p-dark"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span>⸱</span>
        <div className="text-justify text-xs font-semibold text-gray-700">
          {order.OrderDetails.map(
            (item) => item.name + ` (${item.quantity})`
          ).join(", ")}
          .
        </div>
      </div>

      {/* Review */}
      <div className="flex items-center justify-between">
        <button className="text-xs font-bold uppercase text-red-500">
          Order Again
        </button>

        <div class="flex items-center">
          {[1, 2, 3, 4, 5].map((rate) => (
            <svg
              key={rate}
              onClick={() => setRating({ ...rating, [order.id]: rate })}
              className={
                rate <= rating[order.id]
                  ? "h-5 w-5 text-yellow-400"
                  : "h-5 w-5 text-gray-300"
              }
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
