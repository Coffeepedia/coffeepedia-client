import { useNavigate } from "react-router-dom";
import MapRating from "../MapRating";
import altphotos from "../../assets/altphotos.png";

export default function PlaceDetail({ place, selected, refProp, coffees }) {
  const navigate = useNavigate();
  const apiVicto = "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c";
  console.log(apiVicto);
  const url = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${place?.photos?.[0]?.photo_reference}&maxwidth=620&key=${apiVicto}`;
  const clickHandler = (data) => {
    navigate(`/coffeeshops/${data}`);
  };
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <>
      {coffees.map((e) => e.place_id).includes(place.place_id) ? (
        <div
          onClick={() => clickHandler(place.place_id)}
          className="grid grid-cols-4 p-4 shadow-lg"
        >
          <div className="col-span-3 self-center">
            <div className="row m-x-4 items-center flex">
              <p className="mr-2 text-base font-semibold">{place.name}</p>
              <div className="p-2 ">
                <button className="cursor-default rounded-lg bg-green-300 py-1 px-2 text-xs font-semibold uppercase text-green-600">
                  Partner
                </button>
              </div>
            </div>
            <p className="text-sm">{place.vicinity}</p>
            <MapRating
              rating={place.rating}
              totalReviews={place.user_ratings_total}
            />
          </div>
          <div className="self-center justify-self-end">
            {place?.photos?.[0]?.photo_reference ? (
              <img
                src={url}
                alt="Kopi"
                className="h-24 w-24 rounded-lg object-cover shadow-lg"
              />
            ) : (
              <img
                src={altphotos}
                alt="Kopi"
                className="h-24 w-24 rounded-lg object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 p-4 shadow-lg">
          <div className="col-span-3 self-center">
            <div className="row m-x-4 items-center flex justify-between">
              <p className="text-base font-semibold">{place.name}</p>
              <div className="p-2 "></div>
            </div>
            <p className="text-sm">{place.vicinity}</p>
            <MapRating
              rating={place.rating}
              totalReviews={place.user_ratings_total}
            />
          </div>
          <div className="self-center justify-self-end">
            {place?.photos?.[0]?.photo_reference ? (
              <img
                src={url}
                alt="Kopi"
                className="h-24 w-24 rounded-lg object-cover shadow-lg"
              />
            ) : (
              <img
                src={altphotos}
                alt="Kopi"
                className="h-24 w-24 rounded-lg object-cover shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
