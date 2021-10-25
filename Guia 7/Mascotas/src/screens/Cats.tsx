import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Item from '../components/Item';
import Data from '../data/Cats.json';

const Cats = () => {
  return (
    <View>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item
            nombre={item.nombre}
            localizacion={item.localizacion}
            img={item.img}
          />
        )}
      />
    </View>
  );
};

export default Cats;
