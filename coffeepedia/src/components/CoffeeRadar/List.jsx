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

  return (
    <div>
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
