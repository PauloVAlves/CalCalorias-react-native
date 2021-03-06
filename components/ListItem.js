import React from 'react';
import {useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = () => {
  const {item, deleteItem} = useContext(DataContext);
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.listView}>
        <Text style={styles.listItemName}>{item.name}</Text>
        <Icon
          name="remove"
          size={20}
          color="#cc3300"
          onPress={() => deleteItem(item.id)}
        />
      </View>
      <View style={styles.listView}>
        <Text style={styles.listItemQuantity}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },

  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  listItemName: {
    fontSize: 18,
  },
  listItemQuantity: {
    fontSize: 12,
  },
});

export default ListItem;
