import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const checkStock = inStock => {
  return !inStock && <Text style={styles.stock}>STOKTA YOK</Text>;
};

const ProductCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.imgURL}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      {checkStock(item.inStock)}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#eceff1',
    margin: 10,
    padding: 10,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  price: {
    fontSize: 18,
    color: '#bdbdbd',
  },
  stock: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
});

export default ProductCard;
