import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import RecipeScreen from './components/RecipeScreen';
import Recipe from './components/Recipe';
import SearchFood from './components/SearchFood';
import SearchResult from './components/SearchResult';
import TableFood from './components/TableFood';

const Tab = createMaterialTopTabNavigator();
const App = () => {
  const API_URL = 'https://floating-lowlands-85751.herokuapp.com/api/food';
  const [foodList, setFoodList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [myList, setMyList] = useState([]);
  const [searchList, setSearchList] = useState([]);

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
      <NavigationContainer style={styles.container}>
        <Header />
        <Tab.Navigator>
          <Tab.Screen name="Procurar">
            {/* 
              The next line have to be in one line for some reason,
              once I format, everything breaks.
            */}
            {(props) => <SearchFood {...props} searchItem={searchItem} searchList={searchList} addToRecipe={addToRecipe} /> }
          </Tab.Screen>

          <Tab.Screen name="Receita">
            {(props) => <RecipeScreen {...props} myList={myList} deleteItem={deleteItem}/>}
          </Tab.Screen>

          <Tab.Screen name="Tabela">
            {(props) => <TableFood {...props} myList={myList}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
