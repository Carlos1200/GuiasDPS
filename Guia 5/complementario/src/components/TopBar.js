import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const TopBar = ({onpress}) => {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.text}>Reservas</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onpress}>
                <Text>Reservar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    contenedor:{
        backgroundColor:'#112031',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:15
    },
    text:{
        color: 'white',
        fontSize:18
    },
    button:{
        backgroundColor:'#D4ECDD',
        paddingVertical:5,
        paddingHorizontal:7,
        borderRadius:10
    }

})
