import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const RecipeItem = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.quantity}</Text>
      <Pressable>
        <Icon name="times" />
      </Pressable>
    </View>
  );
};

export default RecipeItem;
