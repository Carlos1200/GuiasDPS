import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface Props {
  nombre: string;
  localizacion: string;
  img: string;
}

const Item = ({nombre, localizacion, img}: Props) => {
  return (
    <View style={styles.contenedor}>
      <Image style={styles.image} source={{uri: img}} resizeMode="cover" />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{nombre}</Text>
        <Text style={styles.label}>{localizacion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: '#9A9483',
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  labelContainer: {
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  label: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Item;
