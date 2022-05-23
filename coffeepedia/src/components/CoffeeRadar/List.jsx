import { useState, useEffect, createRef } from "react";
import PlaceDetail from "./PlaceDetail";

export default function List({ places, childClicked }) {
  const [elRefs, setElRefs] = useState([]);

  const clickHandler = (data) => {
    console.log(data);
  };

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
          onClick={() => clickHandler(place.place_id)}
          key={i}
          className="pointer-events-auto hover:bg-gray-200"
        >
          <PlaceDetail
            place={place}
            selected={childClicked === place.place_id}
            refProp={elRefs[i]}
          />
        </div>
      ))}
    </div>
  );
}
