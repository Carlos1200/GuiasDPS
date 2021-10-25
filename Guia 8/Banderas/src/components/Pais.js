import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { Image } from "react-native-elements/dist/image/Image";
const Pais = ({ resultado,bandera }) => {
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [area, setArea] = useState() ;
  useEffect(() => {
    setinfo(resultado);
    lengua.length = 0;
    Object.values(info).map((e) => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setArea(e.area.total)
      Object.values(e.linguas).map((l) => {
        lengua.push(l.nome);
      });
    });
  });
  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.label}>Capital:{capital}</Text>
        <Text style={styles.label}>Region:{region}</Text>
        <Text style={styles.label}>Lengua:{lengua.toString()}</Text>
        <Text style={styles.label}>Area:{area}Km^2</Text>
      <View style={{justifyContent:'center',marginTop:10}}>
        <Image style={{width:100,height:100}} source={{uri:bandera.toString()}}/>
      </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  label:{
    color:'black',marginVertical:5,fontWeight:'bold',fontSize:18
  }
})
export default Pais;
