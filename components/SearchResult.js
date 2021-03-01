import React, {useState, useContext} from 'react';
import {DataContext} from '../data/DataContext';
import {FlatList, View, Alert, StyleSheet} from 'react-native';
import ModalQuantity from './ModalQuantity';
import ResultItem from './ResultItem';

const SearchResult = () => {
  const {searchList, addToRecipe} = useContext(DataContext);
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (id) => {
    setModalVisible(true);
    setId(id);
  };

  const modalEvent = () => {
    setModalVisible(!modalVisible);
  };

  const getData = (id, quantity) => {
    if (!quantity) {
      Alert.alert('Erro', 'Informe a quantidade');
    } else {
      addToRecipe(id, quantity);
      setQuantity('');
      setModalVisible(!modalVisible);
      Alert.alert('Adicionado à receita');
    }
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={searchList}
        renderItem={({item}) => (
          <ResultItem item={item} openModal={openModal} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <ModalQuantity
        id={id}
        getData={getData}
        quantity={quantity}
        modalEvent={modalEvent}
        modalVisible={modalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingBottom: 250,
  },
});

export default SearchResult;
