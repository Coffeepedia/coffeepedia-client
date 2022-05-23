import axios from "axios";

const url = "http://localhost:4002/maps/nearbySearch";

export const getPlacesData = async (sw, ne, center) => {
  try {
    const { data } = await axios.get(url, {
      params: {
        latitude: ne.lat + (center.lat - ne.lat),
        longitude: sw.lng + (center.lng - sw.lng),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
