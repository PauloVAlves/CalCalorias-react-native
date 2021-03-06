import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ResultItem = ({item, openModal}) => {
  return (
    <TouchableOpacity style={styles.resultItem}>
      <View style={styles.resultView}>
        <Text style={styles.resultName}>{item.name}</Text>
        <TouchableOpacity>
          <Icon
            name="plus"
            size={30}
            color="#0033cc"
            onPress={() => {
              openModal(item.id);
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resultItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },

  resultView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  resultName: {
    fontSize: 22,
    maxWidth: 260,
  },
});

export default ResultItem;
