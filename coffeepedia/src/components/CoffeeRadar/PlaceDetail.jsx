export default function PlaceDetail({ place, selected, refProp, coffees }) {
  const clickHandler = (data) => {
    console.log(data);
  };
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="grid grid-cols-4 p-4">
      <div className="col-span-3 self-center">
        <p className="text-lg font-semibold">{place.name}</p>
        <p>{place.vicinity}</p>
        <p>{place.rating}</p>
      </div>
      <div className="self-center justify-self-end">
        <div className="p-2 ">
          {coffees
            ?.filter((e) => e.place_id === place.place_id)
            .map((coffee) => (
              <button
                onClick={() => clickHandler(place.place_id)}
                className="h-8 w-24 rounded-lg bg-green-600 text-xs text-white shadow-lg"
              >
                Coffeeshop Partner
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
