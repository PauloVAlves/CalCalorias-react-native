import React from 'react';
import {View} from 'react-native';
import Calculate from './Calculate';
import Recipe from './Recipe';


const RecipeScreen = ({myList, deleteItem}) => {
  return (
    <View>
      <Calculate myList={myList}/>
      <Recipe myList={myList} deleteItem={deleteItem}/>
      
    </View>
  );
};

export default RecipeScreen;
