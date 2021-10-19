import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#674', fontSize: 25, fontWeight: 'bold'}}>
        MIS SITIOS ARQUEOLOGICOS
      </Text>
      <TouchableHighlight
        style={styles.botones}
        onPress={() =>
          navigation.navigate('Web', {
            sitio: 'casablanca',
          })
        }>
        <Text style={styles.texto}>CASA BLANCA</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.botones}
        onPress={() =>
          navigation.navigate('Web', {
            sitio: 'joyaceren',
          })
        }>
        <Text style={styles.texto}>JOYA DE CEREN</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.botones}
        onPress={() =>
          navigation.navigate('Web', {
            sitio: 'sanandres',
          })
        }>
        <Text style={styles.texto}>SAN ANDRES</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botones: {
    height: 40,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#abc',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 30,
  },
});

export default HomeScreen;
