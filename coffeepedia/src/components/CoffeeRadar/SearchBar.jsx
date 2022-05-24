import search from "../../assets/search(2).png";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

export default function SearchBar({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <div className="p-4 bg-p-dark">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className="grid grid-cols-8 gap-4 rounded-[30px] bg-white p-2 shadow-lg ">
          <input
            className="col-span-7 w-full px-4 focus:outline-none"
            type=""
            placeholder="Search"
          />
          <img className="h-6 w-6 cursor-pointer" src={search} alt="" />
        </div>
      </Autocomplete>
    </div>
  );
}
