import axios from "axios";

const url = "http://localhost:4002";

export const getCoffeeDetail = async (id) => {
  try {
    const { data } = await axios.get(`${url}/maps/placeDetail?place_id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
