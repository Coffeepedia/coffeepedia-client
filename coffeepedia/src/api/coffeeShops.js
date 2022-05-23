import axios from "axios";

const url = "http://localhost:4002/coffeeshops";

export const getCoffeesData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
