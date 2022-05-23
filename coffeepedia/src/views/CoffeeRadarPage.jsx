import { useEffect, useState } from "react";
import leftarrow from "../assets/leftarrow.png";
import Map from "../components/CoffeeRadar/Map";

import List from "../components/CoffeeRadar/List";
import { getPlacesData } from "../api";
import SearchBar from "../components/CoffeeRadar/SearchBar";

export default function OrderPage() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    setCoordinates({ lat: -6.230685467887753, lng: 106.80885546903032 });
    // navigator.geolocation.getCurrentPosition(
    //   ({ coords: { latitude, longitude } }) => {
    //     setCoordinates({ lat: latitude, lng: longitude });
    //   }
    // );
  }, []);

  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne, bounds.center).then((data) => {
        setPlaces(data.filter((place) => place.name && place.rating >= 4));
      });
    }
  }, [bounds]);
  return (
    <>
      <div className="container-sm h-full bg-white">
        <div className="h-[80px] bg-[#1F3933] p-4">
          <div className="mb-4 mt-3 grid grid-cols-10">
            <img src={leftarrow} alt="" className="h-6 w-6" />
            <p className="col-span-9 mt-[-6px] text-2xl font-semibold text-white">
              Store
            </p>
          </div>
        </div>
        <div className="flex h-screen flex-col">
          <SearchBar setCoordinates={setCoordinates} />
          {/* Google Map */}
          <div className="h-[600px] w-full">
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
          </div>
          <div className="flex h-full w-full flex-col overflow-y-auto ">
            <div className="h-[120px] w-full items-stretch justify-items-stretch">
              <List
                places={places}
                key={places.place_id}
                childClicked={childClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
