import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import SearchFood from './components/SearchFood'
import SearchResult from './components/SearchResult';




const App = () => {
  
  const API_URL = 'https://floating-lowlands-85751.herokuapp.com/api/food';
  /* const API_URL = 'http://localhost:5000/api/food' */
  /* const API_URL = 'foodList.json' */
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
      }).then((res => res.json()))
      .then((result) => {
        setIsLoaded(true);
        setFoodList(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error)
      })
    };
    
    fetchFoods();
  }, []);

  const searchItem = (searchString) => {
    setSearchList(foodList.filter((item) => (
      item.description.toLowerCase().includes(searchString.toLowerCase())
    )))
  }

  const deleteItem = (id) => {
    setFoodList(prev => {
      prev.filter((item) => item.id !== id);
    })
  }

  const addToRecipe = (item) => {
    setMyList((prevList) => {
      return [{item}, ...prevList]
    })
  }

  if(error){return (<View><Text>Error: {error.message}</Text></View>)}
  else if(!isLoaded) {return (<View><Text>Loading</Text></View>)}
  else {
    return(
      
      <View style={styles.container}>      
        <Header />
        <SearchFood searchItem={searchItem}/>
        <SearchResult searchList={searchList} addToRecipe={addToRecipe}/>
      {/*  <FlatList data={searchList} renderItem={({item}) => 
        (
          <ListItem item={item} deleteItem={deleteItem}/>
        )}/> */}
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },  
})

export default App;