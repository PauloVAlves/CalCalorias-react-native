import React, {useState} from 'react';
import {FlatList, View, Alert, StyleSheet} from 'react-native';
import ModalQuantity from './ModalQuantity';
import ResultItem from './ResultItem';

const SearchResult = ({searchList, addToRecipe}) => {
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
    <View>
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

export default SearchResult;
