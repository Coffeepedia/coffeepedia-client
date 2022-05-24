import GoogleMapReact from "google-map-react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import mapStyles from "./mapStyles";

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  coffees,
  setChildClicked,
}) {
  const apiVicto = "AIzaSyDSs66WVUrz42nhXym57VSndmOyUF7Jq9c";
  const apiFree = "AIzaSyALtc-O5li5iNVzInPwqmitUEC57NCuyeA";

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: apiFree,
      }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        styles: mapStyles.test,
      }}
      onChange={(e) => {
        console.log(e);
        setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        setBounds({
          center: e.center,
          ne: e.marginBounds.ne,
          sw: e.marginBounds.sw,
        });
      }}
    >
      {places?.map((place, i) => (
        <div
          lat={Number(place.geometry.location.lat)}
          lng={Number(place.geometry.location.lng)}
          key={i}
        >
          <div>
            <LocationMarkerIcon
              onClick={() => setChildClicked(place.place_id)}
              className="h-8 text-gray-600 hover:h-9 hover:text-green-600"
            />
          </div>
        </div>
      ))}
    </GoogleMapReact>
  );
}
