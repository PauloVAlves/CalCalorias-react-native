import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RecipeItem = ({item, deleteItem}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.quantity}</Text>
      <Pressable onPress={() => deleteItem(item.id)}>
        <Icon name="times"/>
      </Pressable>
    </View>
  );
};

export default RecipeItem;
