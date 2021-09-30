import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';

export const Formulario = ({setReservas, reserva=[], setReservar}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [area, guardarArea] = useState('');

  const [error, setError] = useState(null);

  const areas = ['Fumadores', 'No Fumadores'];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const confirmarHora = hora => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
    guardarHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };

  const crearReserva = async () => {
    if (!nombre || !cantidad || cantidad <= 0 || !fecha || !hora || !area) {
      setError('Revisa tus campos');

      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    console.log(reserva);
    const reservaNueva=[...reserva,{nombre,cantidad,fecha,hora,area}];
    console.log(reservaNueva);
    setReservas(reservaNueva);
    await AsyncStorage.setItem(
      'reserv',
      JSON.stringify(reservaNueva),
    );
    setNombre('');
    setCantidad('');
    guardarFecha('');
    guardarHora('');
    guardarArea('');
    setReservar(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservar Mesa</Text>
      {error && (
        <Text style={{fontSize: 18, color: 'red', textAlign: 'center'}}>
          {error}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={value => setNombre(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha</Text>
        <Button title="Seleccione una fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={confirmarFecha}
          onCancel={hideDatePicker}
          locale="es_ES"
          headerTextIOS="Elige la fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text style={styles.label}>{fecha}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hora</Text>
        <Button title="Seleccionar Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={confirmarHora}
          onCancel={hideTimePicker}
          locale="es_ES"
          headerTextIOS="Elige una Hora"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
        <Text style={styles.label}>{hora}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cantidad de Personas</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={cantidad}
          onChangeText={value => setCantidad(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Área</Text>
        <SelectDropdown
          data={areas}
          onSelect={selectedItem => {
            guardarArea(selectedItem);
          }}
          buttonStyle={{
            width: '100%',
            borderRadius: 20,
            backgroundColor: '#D4ECDD',
          }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={crearReserva}>
          <Text style={styles.buttonText}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#345B63',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 5,
    color: 'black',
    fontSize: 18,
    paddingHorizontal: 7,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#D4ECDD',
    marginTop: 25,
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
