import React from 'react'
import { FlatList, View,Text } from 'react-native'
import { Reserva } from './Reserva'

export const Reservas = ({reservas}) => {
    return (
        <View style={{flex:1}}>
            {!reservas?(<Text style={{textAlign:'center',marginTop:30,fontSize:25}}>No hay reservas</Text>):
                (
                    <FlatList
                data={[reservas]}
                renderItem={({item})=><Reserva reserva={item} />}
                keyExtractor={(item,index)=>index}
            />
                )
            }
        </View>
    )
}
