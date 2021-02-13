import React from 'react';
import {View} from 'react-native';
import Recipe from './Recipe';

const RecipeScreen = ({myList}) => {
  return (
    <View>
      <Recipe myList={myList} />
    </View>
  );
};

export default RecipeScreen;
