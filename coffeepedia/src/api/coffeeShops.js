import axios from "axios";

const url = "https://cfpd-service-coffee-shops.herokuapp.com/coffeeshops";

export const getCoffeesData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
