import axios from "axios";

const params = {
  headers: {
    authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_URL + url, params);
    return data;
  } catch (err) {
    console.log(err);
  }
};
