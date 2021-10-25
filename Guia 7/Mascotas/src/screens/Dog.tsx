import React from 'react';
import {View, FlatList} from 'react-native';
import Data from '../data/Dogs.json';
import Item from '../components/Item';

const Dog = () => {
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

export default Dog;
