import React from 'react';
import {View} from 'react-native';
import Calculate from './Calculate';
import Recipe from './Recipe';

const RecipeScreen = () => {
  return (
    <View>
      <Calculate />
      <Recipe />
    </View>
  );
};

export default RecipeScreen;
