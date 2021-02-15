import React, {useState, useContext} from 'react'

export const DataContext = useContext();

const DataProvider = ({children}) => {
  const [foodList, setFoodList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [searchList, setSearchList] = useState([]);


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
      if(item.id === id) {
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
}


return(
  <DataContext.Provider value={{foddList, setFoodList, searchList, myList, searchItem, deleteItem, addToRecipe}}>
    {children}
  </DataContext.Provider>
)
}

export default DataProvider;