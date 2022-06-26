import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ProductCard, SearchBar} from './components';
import products from './products.json';

const App = () => {
  const [items, setItems] = useState(products);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={items}
        renderItem={({item}) => <ProductCard item={item} />}
        numColumns={2}
        ListHeaderComponent={
          <SearchBar products={products} setItems={setItems} />
        }
        keyExtractor={(_item, index) => index}
      />
    </SafeAreaView>
  );
};

export default App;
