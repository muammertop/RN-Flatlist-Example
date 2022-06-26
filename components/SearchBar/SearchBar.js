import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const SearchBar = ({products, setItems}) => {

  const changeHandle = text => {
    const newItems = products.filter(item => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });

    setItems(newItems);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={'Ara...'}
      placeholderTextColor={'#212121'}
      onChangeText={v => {
        changeHandle(v);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#eceff1',
    color: '#212121',
  },
});

export default SearchBar;
