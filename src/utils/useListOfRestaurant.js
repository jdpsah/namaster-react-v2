import { useEffect, useState } from "react";

const useListOfRestaurant = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await fetch();
    const jsonData = await result.json();
    setListOfRestaurant(jsonData);
  };
  return listOfRestaurant;
};

export default useListOfRestaurant;
