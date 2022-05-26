import axios from "axios";

const url = "https://cfpd-service-coffee-shops.herokuapp.com/maps/nearbySearch";

export const getPlacesData = async (sw, ne, center) => {
  try {
    const { data } = await axios.get(url, {
      params: {
        latitude: ne.lat + (center.lat - ne.lat),
        longitude: sw.lng + (center.lng - sw.lng),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
