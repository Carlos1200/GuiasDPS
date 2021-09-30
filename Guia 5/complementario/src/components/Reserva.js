import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export const Reserva = ({reserva}) => {
    const {nombre,
        cantidad,
        fecha,
        hora,
        area}=reserva;
    return (
        <View style={styles.container}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.text}>Cantidad: {cantidad}</Text>
            <Text style={styles.text}>Fecha: {fecha}</Text>
            <Text style={styles.text}>Hora: {hora}</Text>
            <Text style={styles.text}>Área: {area}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#345B63',
        marginTop:10,
        marginHorizontal:30,
        padding: 20,
        borderRadius:20
    },
    nombre:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    text:{
        color:'white',
        fontSize:18
    }
})
