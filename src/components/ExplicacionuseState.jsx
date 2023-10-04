import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ExplicandoUseState = () => {


  const [nombre, setNombre] = useState("Pedro")

  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const cambiarNombre = () => {
    setNombre("Margarita");
    ToastAndroid.show('Se cambió el nombre', ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'gray',
      borderWidth: 3,
    },
  });

  return (
    <View >
      <Text>PERSONA APP</Text>
      <Text>{nombre}</Text>
      <Button onPress={cambiarNombre} title="Cambiar nombre" color="#841584" />
    </View>
  );
};

export default ExplicandoUseState