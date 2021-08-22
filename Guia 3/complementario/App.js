import React from 'react'
import { View, Text, StyleSheet,Image, ScrollView } from 'react-native'
import {Card} from 'react-native-elements'

const comidas=[
  {
    nombre:'Pupusas',
    ingredientes:" 2 libras de maíz maduro y seco, 2 cucharadas de cal, Agua (la necesaria), 1 libra de quesillo, 1/2 libra de frijoles",
    img:'https://www.recetassalvadorenas.com/wp-content/uploads/2014/03/rosalba-e1504404527338.jpg'
  },
  {
    nombre:'Yuca frita',
    ingredientes:"500 gramos de Yuca, Sal, Pimienta negra molida, Aceite de oliva virgen",
    img:'https://wikisivar.com/wp-content/uploads/2019/05/Yuca-Frita-con-curtido.jpg'
  },
  {
    nombre:'Chilate',
    ingredientes:"1 taza de masa de maíz, 1 raíz mediana de jengibre",
    img:'https://saborgourmet.com//wp-content/uploads/chilate-salvadore%C3%B1o-ingredientes.jpg'
  },
  {
    nombre:'Riguas',
    ingredientes:"25 elotes no muy tiernos, Una cucharadita de azúcar Sal a su gusto, Crema y queso para acompañar, Un rollo de hojas de plátano",
    img:'https://www.recetassalvadorenas.com/wp-content/uploads/2014/06/riguas.jpg'
  },
  {
    nombre:'Sopa de pata',
    ingredientes:"4 Patas enteras de vaca troceadas en 5 partes cada una ,2 Kilos tripa de res muy limpia 1 Col a trozos grandes 5 Yucas medianas a trozos medianos 5 Plátanos semi maduros 5 Güisquiles (Zapayos) Caldo de ternera (sazonador en pollo) 800 gramos judía verde fina (ejotes) --- Para la salsa: 2 Cebolla 1 Pimiento verde y rojo 1 Cabeza ajo 1 manojo entero Cilantro 4 Ramitas apio 1 Kilo tomate muy maduro 5 hojas laurel 3 cucharaditas pimienta negra 200 gramos semilla de girasol 150 de cesamo o ajonjoli 4 Cucharaditas achiote 250 g maní tostado 1 Yuca grande troceada 4 Cucharaditas comino 5 Ramitas perejil 3 Limones (Para picada)",
    img:'https://guanacos.com/wp-content/uploads/2020/11/Sopa-de-pata.jpg'
  },
]

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
      <Card>
        <Card.Title>Comidas típicas</Card.Title>
        <Card.Divider style={{borderColor:'gray',borderWidth:2}}/>
        {
          comidas.map((comida,i)=>(
            <>
            <View style={styles.cardContainer}  key={i}>
              <Image 
                style={styles.img}
                resizeMode="cover"
                source={{uri:comida.img}}
              />
              <View style={styles.infoContainer}>

              <Text style={styles.title}>{comida.nombre}</Text>
              <Text style={{textAlign:'left'}}>{comida.ingredientes}</Text>
              </View>
            </View>
              <View style={{height:2,width:'100%',backgroundColor:'gray'}}/>
            </>
          ))
        }
      </Card>
    </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"rgb(1, 22, 39)"
  },
  cardContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:20,
    paddingVertical:15,
  },
  img:{
    width: 125,
    height: 125,
    borderRadius:100
  },
  infoContainer:{
    flex:1,
    marginLeft:15,
  },
  title:{
    fontSize:18,
    fontWeight:'bold'
  },
})

export default App
