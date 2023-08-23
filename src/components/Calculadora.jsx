import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const Calculadora = () => {

  const [numero1, setNumero1] = useState(10);
  const [numero2, setNumero2] = useState(30);
  const [resultado, setResultado] = useState(0);
  
  const [mostrarResultado, setMostrarResultado ] = useState(false);
 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const Sumar = () => {
    let rta = parseInt(numero1) + parseInt(numero2);
    setResultado(rta);
    setMostrarResultado(true);
    ToastAndroid.show('Se ha realizado la suma!', ToastAndroid.SHORT);
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
      <Text>CALCULADORA</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero1} value={numero1} placeholder="Numero 1" keyboardType="numeric" />

      <TextInput style={estilos.inputsTexto} onChangeText={setNumero2} value={numero2} placeholder="Número 2" keyboardType="numeric" />

      <Button onPress={Sumar} title="Sumar" color="#841584" />

      {resultado>10 && (<Text>El resultado es {resultado}</Text>)}

    


    </View>
  );
};

export default Calculadora