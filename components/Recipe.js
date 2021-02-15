import React, {useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {View, FlatList} from 'react-native';
import RecipeItem from './RecipeItem';

const Recipe = () => {
  const {myList} = useContext(DataContext);
  return (
    <View>
      <FlatList
        data={myList}
        renderItem={({item}) => <RecipeItem item={item} />}
        keyExtractor={(item) => item.id.toString()}></FlatList>
    </View>
  );
};

export default Recipe;
