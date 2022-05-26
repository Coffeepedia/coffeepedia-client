import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pricing from "../components/Pricing";
import Rating from "../components/Rating";
import { ADD_ORDER } from "../queries/orders";
import { useMutation } from "@apollo/client";
import axios from "axios";
import Loading from "../components/Loading";

export default function CoffeeShopDetailPage() {
  const { id } = useParams();
  const [coffeeShop, setCoffeeShop] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://cfpd-service-coffee-shops.herokuapp.com/maps/placeDetail?place_id=${id}`
        );
        setCoffeeShop({ ...data });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError({ ...error.response.data });
        console.log(error);
      }
    })();
  }, []);

  const Open = () => (
    <span className="rounded-lg bg-green-300 px-2 py-[2px] text-[10px] uppercase text-primary">
      Open
    </span>
  );

  const Closed = () => (
    <span className="rounded-lg bg-red-300 px-2 py-[2px] text-[10px] uppercase text-red-600">
      Closed
    </span>
  );

  const [addOrder] = useMutation(ADD_ORDER, {
    onCompleted: (data) => {
      localStorage.setItem("OrderId", data.AddOrder.Order.id);
      navigate(`/menu`);
    },
  });

  const navigate = useNavigate();

  const orderMenuHandler = () => {
    if (localStorage.getItem("accesstoken")) {
      addOrder({
        variables: {
          addOrderId: id,
          accesstoken: localStorage.accesstoken,
        },
      });
    } else {
      navigate("/login");
    }
  };

  if (loading) {
    return <Loading />;
  } else if (Object.keys(error).length) {
    return <p>Error...</p>;
  }

  return (
    <section className="relative flex h-screen min-h-screen w-screen max-w-[620px] flex-col items-center">
      {/* Floating button */}
      <button
        onClick={orderMenuHandler}
        className="fixed bottom-0 right-0 z-10 m-4 rounded-3xl bg-primary px-6 py-2 font-bold text-white shadow-2xl"
      >
        Order
      </button>

      {/* Banner Image */}
      <div className="relative h-[40%] w-full">
        <img
          src={
            coffeeShop?.photos?.[0] + "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c"
          }
          alt="coffee shop"
          className="h-full w-full object-cover"
        />
        <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 m-8 h-8 w-8 rounded-lg bg-black bg-opacity-50 stroke-s-light"
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
      </div>

      {/* Detail */}
      <section className="absolute bottom-0 h-2/3 w-full rounded-t-[48px] bg-white px-8 pt-8">
        <div className="flex items-center justify-between">
          <div className="mb-2 text-2xl font-bold text-gray-700">
            {coffeeShop.name}
          </div>
          <span className="rounded-xl bg-green-300 px-2 py-1 text-[10px] uppercase text-primary">
            Partner
          </span>
        </div>

        <Rating
          rating={coffeeShop.rating}
          totalReviews={coffeeShop.user_ratings_total}
        />

        {/* Location */}
        <div className="mb-3 flex space-x-2 border-b-2 border-p-light pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-gray-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-700">{coffeeShop.vicinity}</span>
        </div>

        {/* Additional Detail Bar */}
        <div className="mb-6 flex flex-col">
          {/* Head */}
          <div className="flex items-center pb-2">
            {/* Travel time */}
            <span className="basis-1/5 text-center text-xs font-semibold text-gray-700">
              Pricing
            </span>

            <span className="basis-1/5 text-center text-xs font-semibold text-gray-700">
              Status
            </span>

            <span className="basis-1/5 text-center text-xs font-semibold text-gray-700">
              Dine in
            </span>

            <span className="basis-1/5 text-center text-xs font-semibold text-gray-700">
              Take Away
            </span>

            <span className="basis-1/5 text-center text-xs font-semibold text-gray-700">
              Delivery
            </span>
          </div>

          {/* Row */}
          <div className="flex items-center">
            <div className="basis-1/5 text-center">
              {<Pricing priceLevel={coffeeShop.price_level} />}
            </div>

            <span className="basis-1/5 text-center text-xs font-semibold">
              {coffeeShop?.opening_hours?.open_now ? <Open /> : <Closed />}
            </span>

            <span className="flex basis-1/5 justify-center text-center text-xs font-semibold text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="flex basis-1/5 justify-center text-center text-xs font-semibold text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="flex basis-1/5 justify-center text-center text-xs font-semibold text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* More Images */}
        <section className="overflow-hidden text-gray-700">
          <h1 className="text-xl font-semibold text-gray-700">Photos</h1>
          <div className="container mx-auto py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex flex-wrap">
                {/* {coffee.photos?.map((photo) => (
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src={photo + "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c"}
                    />
                  </div>
                ))} */}
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={
                      coffeeShop?.photos?.[1] +
                      "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c"
                    }
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={
                      coffeeShop?.photos?.[2] +
                      "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c"
                    }
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={
                      coffeeShop?.photos?.[3] +
                      "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
