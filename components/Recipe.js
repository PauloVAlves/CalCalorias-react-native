import React from 'react';
import {View, FlatList} from 'react-native';
import RecipeItem from './RecipeItem';

const Recipe = ({myList, deleteItem}) => {
  return (
    <View>
      <FlatList
      data={myList}
      renderItem={({item}) => (
        <RecipeItem item={item} deleteItem={deleteItem} />
      )}
      keyExtractor={(item) => item.id}
      >

    
        </FlatList>
    </View>
  );
};

export default Recipe;
