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
  const apiVicto = process.env.REACT_APP_API_VICTO;
  const apiFree = process.env.REACT_APP_API_FREE;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: apiVicto,
      }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={15}
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
            {coffees.map((e) => e.place_id).includes(place.place_id) ? (
              <LocationMarkerIcon
                onClick={() => setChildClicked(place.place_id)}
                className="h-10 text-green-600 hover:h-12"
              />
            ) : (
              <LocationMarkerIcon
                onClick={() => setChildClicked(place.place_id)}
                className="h-8 text-gray-500 hover:h-9"
              />
            )}
          </div>
        </div>
      ))}
    </GoogleMapReact>
  );
}
