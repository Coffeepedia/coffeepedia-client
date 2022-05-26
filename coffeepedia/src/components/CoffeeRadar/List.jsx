import { useState, useEffect, createRef } from "react";
import PlaceDetail from "./PlaceDetail";
import { getCoffeesData } from "../../api/coffeeShops";

export default function List({ places, childClicked }) {
  const [elRefs, setElRefs] = useState([]);

  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    getCoffeesData().then((data) => {
      setCoffees(data);
    });
  }, []);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  const Disclaimer = () => {
    const parterIds = coffees.map((e) => e.place_id);
    const partnersInLocation = places.filter((place) =>
      parterIds.includes(place.place_id)
    );
    if (partnersInLocation.length) {
      return null;
    }
    return (
      <div className="w-screen border bg-gray-100 p-4">
        <h1 className="text-red-600">
          There is no Coffeepedia Partner in your area
        </h1>
        <p className="font-semibold">Try to search near "Senopati"</p>
      </div>
    );
  };

  return (
    <div>
      <Disclaimer />
      {places.map((place, i) => (
        <div
          ref={elRefs[i]}
          key={i}
          className={
            childClicked === place.place_id
              ? "pointer-events-auto bg-gray-200"
              : "pointer-events-auto hover:bg-gray-200"
          }
        >
          <PlaceDetail
            coffees={coffees}
            place={place}
            selected={childClicked === place.place_id}
            refProp={elRefs[i]}
          />
        </div>
      ))}
    </div>
  );
}
