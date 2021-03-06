import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>CalCalorias</Text>
    </View>
  );
};

Header.defaultProps = {
  brand: 'CalCalorias',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#141738',
  },

  text: {
    color: '#F2506E',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
