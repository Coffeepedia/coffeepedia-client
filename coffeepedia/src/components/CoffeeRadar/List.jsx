import { useState, useEffect, createRef } from "react";
import PlaceDetail from "./PlaceDetail";

export default function List({ places, childClicked }) {
  const [elRefs, setElRefs] = useState([]);

  const clickHandler = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div>
      {places.map((place, i) => (
        <div
          onClick={() => clickHandler(place.place_id)}
          key={i}
          className="pointer-events-auto hover:bg-gray-200"
        >
          <PlaceDetail
            place={place}
            selected={Number(childClicked) === i}
            refProp={elRefs[i]}
          />
        </div>
      ))}
    </div>
  );
}
