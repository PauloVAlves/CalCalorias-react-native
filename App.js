import React, {useState, useEffect} from 'react';
import DataProvider from './data/DataContext'
import NavScreen from './components/NavScreen';


const App = () => {
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

  

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (!isLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <DataProvider>
        <NavScreen/>
      </DataProvider>
    );
  }
};



export default App;
