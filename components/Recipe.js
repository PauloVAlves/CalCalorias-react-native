import React from 'react';
import {View} from 'react-native';
import RecipeItem from './RecipeItem';

const Recipe = ({myList}) => {
  return (
    <View>
      {myList.map((item) => (
        <RecipeItem item={item} key={item.id} />
      ))}
    </View>
  );
};

export default Recipe;
