import axios from "axios";

const url = process.env.REACT_APP_COFFEESHOPS;

export const getCoffeeDetail = async (id) => {
  try {
    const { data } = await axios.get(`${url}/maps/placeDetail?place_id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
