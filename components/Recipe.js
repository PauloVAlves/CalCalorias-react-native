import React, {useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {View, FlatList, StyleSheet} from 'react-native';
import RecipeItem from './RecipeItem';

const Recipe = () => {
  const {myList} = useContext(DataContext);
  return (
    <View style={styles.list}>
      <FlatList
        data={myList}
        renderItem={({item}) => <RecipeItem item={item} />}
        keyExtractor={(item) => item.id.toString()}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingBottom: 250,
  },
});

export default Recipe;
