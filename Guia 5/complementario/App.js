import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Formulario} from './src/components/Formulario';
import {Reservas} from './src/components/Reservas';
import {TopBar} from './src/components/TopBar';

const App = () => {
  const [reservar, setReservar] = useState(false);
  const [reservas, setReservas] = useState([]);
  useEffect(() => {
    obtenerReservas();
  }, []);

  const obtenerReservas = async () => {
    const reservaStorage = await AsyncStorage.getItem('reserv');
    const reservaNueva=JSON.parse(reservaStorage);
    setReservas(reservaNueva);
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TopBar onpress={setReservar} />
      {reservar ? (
        <Formulario
          setReservas={setReservas}
          reserva={reservas}
          setReservar={setReservar}
        />
      ) : (
        <Reservas reservas={reservas} />
      )}
    </View>
  );
};

export default App;
