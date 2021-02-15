import React, {useState, useEffect, createContext} from 'react';

export const DataContext = createContext();

const DataProvider = ({children}) => {
  const [foodList, setFoodList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const API_URL = 'https://serene-beyond-49841.herokuapp.com/api/food';
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [calculated, setCalculated] = useState({
    id: 0,
    cal: 0,
    carboidratos: 0,
    proteinas: 0,
    gTotais: 0,
    gSaturadas: 0,
    gTrans: 0,
    colesterol: 0,
    fibra: 0,
    sodio: 0,
    ferro: 0,
  });

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
        if (item.category_id === 3) {
          let food = {
            id: item.id,
            name: item.description,
            cal: item.attributes.energy.kcal,
            base: item.base_qty,
            quantity: Number(quantity),
            carboidratos: item.attributes.carbohydrate.qty,
            proteinas: item.attributes.protein.qty,
            colesterol: item.attributes.cholesterol.qty,
            fibra: item.attributes.fiber.qty,
            sodio: item.attributes.sodium.qty,
            ferro: item.attributes.iron.qty,
          };
          setMyList([...myList, food]);
        } else {
          let food = {
            id: item.id,
            name: item.description,
            cal: item.attributes.energy.kcal,
            base: item.base_qty,
            quantity: Number(quantity),
            carboidratos: item.attributes.carbohydrate.qty,
            proteinas: item.attributes.protein.qty,
            gTotais: item.attributes.fatty_acids.saturated.qty,
            gSaturadas: item.attributes.fatty_acids.saturated.qty,
            gTrans: item.attributes.fatty_acids.saturated.qty,
            colesterol: item.attributes.cholesterol.qty,
            fibra: item.attributes.fiber.qty,
            sodio: item.attributes.sodium.qty,
            ferro: item.attributes.iron.qty,
          };
          setMyList([...myList, food]);
        }
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
