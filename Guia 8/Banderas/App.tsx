import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Formulario from './src/components/Formulario';
import Pais from './src/components/Pais';

export default function App() {
  const [busqueda, guardarbusqueda] = useState({
    pais: '',
  });
  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});
  const [banderaResponse, setBanderaResponse] = useState();
  useEffect(() => {
    const {pais} = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        const bandera = `https://restcountries.com/v3.1/name/${pais}`;
        try {
          const [paises, banderas] = await Promise.all([
            fetch(url).then(value => value.json()),
            fetch(bandera).then(value => value.json()),
          ]);
          setBanderaResponse(banderas[0].flags.png);
          guardarresultado(paises);
          guardarconsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  }, [consultar]);
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
      [{Text: 'Ok'}];
  };
  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario
          busqueda={busqueda}
          setBusqueda={guardarbusqueda}
          guardarconsultar={guardarconsultar}
        />
        {banderaResponse && (
          <Pais resultado={resultado} bandera={banderaResponse} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
});
