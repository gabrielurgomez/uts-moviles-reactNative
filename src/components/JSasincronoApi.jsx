import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const Pokeapi = () => {
    const [nombrePokemon, setNombrePokemon] = useState('');

    useEffect(() => {
        //ESTO SE EJECUTA UNA SOLA VEZ
        ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
    }, [])

    const ConsultarPokemon = () => {
        console.log(nombrePokemon)
        ToastAndroid.show('Se ha realizado la suma!', ToastAndroid.SHORT);
    }

    const estilos = StyleSheet.create({
        inputsTexto: { height: 40, width: 80, margin: 10, borderWidth: 1, padding: 10, borderColor: 'gray', borderWidth: 3 },
    });

    return (
        <View >
            <Text>CONSULTAR</Text>
            <TextInput style={estilos.inputsTexto} onChangeText={setNombrePokemon} value={nombrePokemon} placeholder="Nombre" />
            <Button onPress={ConsultarPokemon} title="Consultar" color="#841584" />
            <Text>{nombrePokemon}</Text>
        </View>
    );
};

export default Pokeapi