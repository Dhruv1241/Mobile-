import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../UI/api";
    
const Fetch = (endpoint) => {
  const [data, setdata] = useState();

  useEffect(() => {
    makeApi();
  }, [endpoint]);
  const makeApi = async () => {
    const res = await fetchDataFromApi(endpoint);
    setdata(res);
  };
  return { data };
};
export default Fetch;
