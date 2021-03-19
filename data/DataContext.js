import React, {useState, useEffect, createContext} from 'react';
import foodDB from './taco.json';
export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [foodList, setFoodList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [calculated, setCalculated] = useState({
    kcal: 0,
    kj: 0,
    protein: 0,
    cholesterol: 0,
    carbohydrate: 0,
    fiber: 0,
    sodium: 0,
    total_fats: 0,
    saturated: 0,
    trans: 0,
    portion: 0,
  });

  useEffect(() => {
    const fetchFoods = () => {
      try {
        setIsLoaded(true);
        setFoodList(foodDB);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };

    fetchFoods();
  }, []);

  const searchItem = (searchString) => {
    setSearchList(
      foodList.filter((item) =>
        item.name.toLowerCase().includes(searchString.toLowerCase()),
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
          name: item.name,
          kcal: item.kcal,
          kj: item.kj,
          protein: item.protein,
          cholesterol: item.cholesterol,
          carbohydrate: item.carbohydrate,
          fiber: item.fiber,
          sodium: item.sodium,
          saturated: item.saturated,
          monounsaturated: item.monounsaturated,
          polyunsaturated: item.polyunsaturated,
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
        calculated,
        setCalculated,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
