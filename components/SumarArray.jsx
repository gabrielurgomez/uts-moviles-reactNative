import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const sumarArray = () => {

  const [num, setNum ] = useState(0)
  const [miArray, setMiArray] = useState([]);
  
  const [mostrarResultado, setMostrarResultado ] = useState(false);
  const [resultado, setResultado ] = useState(0);
 
  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const aggNumeroArray = () => {
    console.log(num)
    miArray.push(num)
    setNum(0)
    ToastAndroid.show('Se ha agregado el numero '+num+", hasta el momento va: "+miArray, ToastAndroid.SHORT);
  }

  const sumarArray = () => {
    let total = parseInt(0);

    miArray.forEach((n) => {
      total = total + parseInt(n)
    })

    setResultado(total)
    setMostrarResultado(true);
    
    ToastAndroid.show('Se ha agregado el numero '+num, ToastAndroid.SHORT);
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
      <Text>SUMAR ARRAY</Text>

      <TextInput style={estilos.inputsTexto} onChangeText={setNum} value={num} placeholder="Numero 1" keyboardType="numeric" />

      <Button onPress={aggNumeroArray} title="Agregar al array" color="#841584" />

      <Button onPress={sumarArray} title="Sumar" color="#FF0000" />

      {mostrarResultado && (<Text>La suma del array es {resultado}</Text>)}


    </View>
  );
};

export default sumarArray