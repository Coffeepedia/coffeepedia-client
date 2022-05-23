import GoogleMapReact from "google-map-react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  const apiVicto = "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c";
  const apiFree = "AIzaSyALtc-O5li5iNVzInPwqmitUEC57NCuyeA";

  const clickHandler = (data) => {
    console.log(data);
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: apiFree,
      }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={""}
      onChange={(e) => {
        console.log(e);
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBounds({
          center: e.center,
          ne: e.marginBounds.ne,
          sw: e.marginBounds.sw,
        });
      }}
      onChildClick={(child) => {
        setChildClicked(child);
      }}
    >
      {places?.map((place, i) => (
        <div
          lat={Number(place.geometry.location.lat)}
          lng={Number(place.geometry.location.lng)}
          key={i}
        >
          <div onClick={() => clickHandler(place.place_id)}>
            <LocationMarkerIcon className="h-8 text-gray-600 hover:h-9 hover:text-green-600" />
          </div>
        </div>
      ))}
    </GoogleMapReact>
  );
}
