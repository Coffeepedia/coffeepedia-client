import { useState } from "react";

export default function OrderHistoryPage() {
  const data = {
    getAllOrder: [
      {
        id: "1",
        UserId: 1,
        CoffeeShopId: "ChIJ5ec-ZqNZei4RA3sWixI4LmQ",
        status: "delivered",
        createdAt: "2022-05-23T14:43:36.865Z",
        updatedAt: "2022-05-23T20:17:48.323Z",
        OrderDetails: [
          {
            id: "20",
            ItemId: 4,
            OrderId: 1,
            name: "Espresso",
            price: 20000,
            quantity: 2,
            imageUrl:
              "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T19:17:52.350Z",
            updatedAt: "2022-05-23T19:20:05.919Z",
          },
          {
            id: "19",
            ItemId: 3,
            OrderId: 1,
            name: "Cappuccino",
            price: 55000,
            quantity: 3,
            imageUrl:
              "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T19:17:48.389Z",
            updatedAt: "2022-05-23T19:20:06.583Z",
          },
          {
            id: "18",
            ItemId: 2,
            OrderId: 1,
            name: "Caffè Misto",
            price: 37000,
            quantity: 3,
            imageUrl:
              "https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T19:17:45.394Z",
            updatedAt: "2022-05-23T19:20:07.351Z",
          },
          {
            id: "17",
            ItemId: 1,
            OrderId: 1,
            name: "Caffè Americano",
            price: 42000,
            quantity: 3,
            imageUrl:
              "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T19:17:42.160Z",
            updatedAt: "2022-05-23T19:20:08.177Z",
          },
          {
            id: "21",
            ItemId: 11,
            OrderId: 1,
            name: "Matcha Tea Latte",
            price: 30000,
            quantity: 1,
            imageUrl:
              "https://globalassets.starbucks.com/assets/8b1b6d808cca4787afd2b30cf8dd5676.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T20:26:27.460Z",
            updatedAt: "2022-05-23T20:26:27.460Z",
          },
        ],
        errorText: null,
      },
      {
        id: "2",
        UserId: 1,
        CoffeeShopId: "ChIJ5ec-ZqNZei4RA3sWixI4LmQ",
        status: "delivered",
        createdAt: "2022-05-23T20:33:48.562Z",
        updatedAt: "2022-05-23T20:50:35.303Z",
        OrderDetails: [
          {
            id: "23",
            ItemId: 3,
            OrderId: 2,
            name: "Cappuccino",
            price: 50000,
            quantity: 4,
            imageUrl:
              "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T20:48:02.017Z",
            updatedAt: "2022-05-23T20:48:09.451Z",
          },
          {
            id: "24",
            ItemId: 4,
            OrderId: 2,
            name: "Espresso",
            price: 25000,
            quantity: 1,
            imageUrl:
              "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T20:58:28.960Z",
            updatedAt: "2022-05-23T20:58:28.960Z",
          },
          {
            id: "22",
            ItemId: 1,
            OrderId: 2,
            name: "Caffè Americano",
            price: 42000,
            quantity: 4,
            imageUrl:
              "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T20:47:51.707Z",
            updatedAt: "2022-05-23T20:58:39.503Z",
          },
        ],
        errorText: null,
      },
      {
        id: "4",
        UserId: 1,
        CoffeeShopId: "ChIJ5ec-ZqNZei4RA3sWixI4LmQ",
        status: "delivered",
        createdAt: "2022-05-23T21:02:16.778Z",
        updatedAt: "2022-05-23T21:05:32.936Z",
        OrderDetails: [
          {
            id: "27",
            ItemId: 13,
            OrderId: 4,
            name: "Hot Chocolate",
            price: 48500,
            quantity: 18,
            imageUrl:
              "https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T21:03:11.648Z",
            updatedAt: "2022-05-23T21:03:36.618Z",
          },
          {
            id: "26",
            ItemId: 30,
            OrderId: 4,
            name: "Iced Passion Tea",
            price: 47000,
            quantity: 12,
            imageUrl:
              "https://globalassets.starbucks.com/assets/8b91a3ac49114445b4b6f2acf58a03ec.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T21:03:01.526Z",
            updatedAt: "2022-05-23T21:03:38.694Z",
          },
          {
            id: "25",
            ItemId: 16,
            OrderId: 4,
            name: "Mocha Cookie Crumble",
            price: 47000,
            quantity: 14,
            imageUrl:
              "https://globalassets.starbucks.com/assets/1fd99578d31f4072a52892398d8f1fa8.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-23T21:02:47.381Z",
            updatedAt: "2022-05-23T21:03:41.404Z",
          },
        ],
        errorText: null,
      },
      {
        id: "5",
        UserId: 1,
        CoffeeShopId: "ChIJ5ec-ZqNZei4RA3sWixI4LmQ",
        status: "unpaid",
        createdAt: "2022-05-23T22:33:35.675Z",
        updatedAt: "2022-05-23T22:33:35.675Z",
        OrderDetails: [],
        errorText: null,
      },
      {
        id: "6",
        UserId: 1,
        CoffeeShopId: "ChIJLWWHkMDxaS4Rd4JOiJmUb6U",
        status: "unpaid",
        createdAt: "2022-05-24T03:41:57.024Z",
        updatedAt: "2022-05-24T03:41:57.024Z",
        OrderDetails: [
          {
            id: "30",
            ItemId: 1,
            OrderId: 6,
            name: "Caffè Americano",
            price: 42000,
            quantity: 2,
            imageUrl:
              "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-24T03:42:07.344Z",
            updatedAt: "2022-05-24T03:42:11.364Z",
          },
          {
            id: "32",
            ItemId: 8,
            OrderId: 6,
            name: "Caffè Mocha",
            price: 53000,
            quantity: 2,
            imageUrl:
              "https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-24T03:43:05.319Z",
            updatedAt: "2022-05-24T03:43:14.957Z",
          },
          {
            id: "31",
            ItemId: 5,
            OrderId: 6,
            name: "Flat White",
            price: 42000,
            quantity: 2,
            imageUrl:
              "https://globalassets.starbucks.com/assets/fedee22e49724cd09fbcc7ee2e567377.jpg?impolicy=1by1_wide_topcrop_630",
            createdAt: "2022-05-24T03:42:40.982Z",
            updatedAt: "2022-05-24T03:59:44.786Z",
          },
        ],
        errorText: null,
      },
    ],
  };

  const [rating, setRating] = useState({});

  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="mb-4 bg-p-dark pb-8 shadow-md">
        <div className="p-4 text-2xl font-semibold text-white">History</div>
      </div>

      {/* Card */}
      {data.getAllOrder
        .filter((e) => e.status !== "unpaid")
        .map((order) => (
          <div key={order.id} className="mb-2 bg-white p-4">
            {/* Header */}
            <div className="flex justify-between">
              {/* Timestamp */}
              <div className="text-base font-semibold uppercase">
                {new Date(order.createdAt).toLocaleDateString("id-ID")},{" "}
                {new Date(order.createdAt).toLocaleTimeString("en-US")}
              </div>

              {/* Total Price */}
              <div className="items-center flex space-x-2">
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
                    (total, item) => total + item.price,
                    0
                  )}
                </div>
              </div>
            </div>

            {/* Resto */}
            <div className="mb-4 text-sm font-semibold text-gray-700">
              {order.CoffeeShopId}
            </div>

            {/* Items */}
            <div className="mb-4 flex space-x-1 border-b border-gray-700 pb-4">
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
            <div className="items-center flex justify-between">
              <button className="text-xs font-bold uppercase text-red-500">
                Order Again
              </button>

              <div class="items-center flex">
                {[1, 2, 3, 4, 5].map((rate) => (
                  <svg
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
        ))}
    </section>
  );
}
