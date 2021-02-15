import React, {useState, useEffect, createContext} from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [foodList, setFoodList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const API_URL = 'https://floating-lowlands-85751.herokuapp.com/api/food';
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = () => {
      fetch(API_URL, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setFoodList(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          },
        );
    };

    fetchFoods();
  }, []);

  const searchItem = (searchString) => {
    setSearchList(
      foodList.filter((item) =>
        item.description.toLowerCase().includes(searchString.toLowerCase()),
      ),
    );
  };

  const deleteItem = (id) => {
    setMyList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const addToRecipe = (id, quantity) => {
    searchList.forEach((item) => {
      if (item.id === id) {
        let food = {
          id: item.id,
          name: item.description,
          cal: item.attributes.energy.kcal,
          base: item.base_qty,
          quantity: Number(quantity),
        };
        setMyList([...myList, food]);
      }
    });
  };

  return (
    <DataContext.Provider
      value={{
        foodList,
        setFoodList,
        searchList,
        myList,
        searchItem,
        deleteItem,
        addToRecipe,
        isLoaded,
        error,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
