import { useNavigate } from "react-router-dom";
import Pricing from "../components/Pricing";
import Rating from "../components/Rating";

export default function CoffeeShopDetailPage() {
  const coffeeShop = {
    business_status: "OPERATIONAL",
    geometry: {
      location: {
        lat: -7.761909200000001,
        lng: 110.3967393,
      },
      viewport: {
        northeast: {
          lat: -7.760636420107278,
          lng: 110.3980832798927,
        },
        southwest: {
          lat: -7.763336079892722,
          lng: 110.3953836201073,
        },
      },
    },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
    icon_background_color: "#FF9E67",
    icon_mask_base_uri:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet",
    name: "Kene Coffee House",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        height: 715,
        html_attributions: [
          '<a href="https://maps.google.com/maps/contrib/114288037740944169887">joe ki</a>',
        ],
        photo_reference:
          "Aap_uECn8v5wHhwH7Z8YBGiCco_PCfNIxQ2UEWuknRwzFy1xabV-cKQjs4SHvXPs4VPNHjoscja_EpB1Xix7yR4G-m71zV_e3ayLfB5wvAV6QsuRKYt-S32SzoDJA8Jbir7QhQPPTvYIPxC2Oh0uXs9aUcyxbOspJAtqwLPw2ySECW2LoRgQ",
        width: 1024,
      },
    ],
    place_id: "ChIJ5ec-ZqNZei4RA3sWixI4LmQ",
    plus_code: {
      compound_code:
        "69QW+6M Condongcatur, Sleman Regency, Special Region of Yogyakarta",
      global_code: "6P4G69QW+6M",
    },
    price_level: 2,
    rating: 4.6,
    reference: "ChIJ5ec-ZqNZei4RA3sWixI4LmQ",
    scope: "GOOGLE",
    types: ["cafe", "food", "store", "point_of_interest", "establishment"],
    user_ratings_total: 765,
    vicinity: "Jl. Kaliwaru No.84, Kaliwaru, Condongcatur, Kabupaten Sleman",
  };

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

  const navigate = useNavigate();

  return (
    <section className="relative flex h-screen min-h-screen w-screen max-w-[620px] flex-col items-center">
      {/* Floating button */}
      <button className="fixed bottom-0 right-0 z-10 m-4 rounded-3xl  bg-primary px-6 py-2 font-bold text-white shadow-2xl">
        Order
      </button>

      {/* Banner Image */}
      <div className="relative h-[55%]">
        <img
          src="https://img.freepik.com/free-psd/arrangement-coffee-cup-mock-up_23-2149012045.jpg?t=st=1653194883~exp=1653195483~hmac=2ef071e3900c500339e774de3ef2875ef16d2ce72112c66819f548964fa7f590&w=996"
          alt="coffee shop"
          className="h-full object-cover"
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
      <section className="absolute bottom-0 h-1/2 w-full rounded-t-[48px] bg-white px-8 pt-8">
        <div className="mb-2 text-2xl font-bold text-gray-700">
          {coffeeShop.name}
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
              <Pricing priceLevel={coffeeShop.price_level} />
            </div>

            <span className="basis-1/5 text-center text-xs font-semibold">
              {coffeeShop.opening_hours.open_now ? <Open /> : <Closed />}
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
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://cdn.pixabay.com/photo/2016/03/26/23/23/starbucks-1281880_960_720.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://cdn.pixabay.com/photo/2020/08/17/14/37/coffee-5495609_960_720.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://cdn.pixabay.com/photo/2020/10/07/12/33/cafe-5635015_960_720.jpg"
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
