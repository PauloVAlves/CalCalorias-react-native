import React from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import RecipeScreen from './components/RecipeScreen';
import SearchFood from './components/SearchFood';
import TableFood from './components/TableFood';


const Tab = createMaterialTopTabNavigator();
const NavScreen = () => {
  return(
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NavScreen;