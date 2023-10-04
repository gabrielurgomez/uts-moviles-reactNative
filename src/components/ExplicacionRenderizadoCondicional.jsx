import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ExplicacionRenderizadoCondicional = () => {
  //Este componente muestra un texto diciendo si el numero es mayor a 5 o no
  const [numero, setNumero] = useState(9)
  const [esMayor, setEsMayor] = useState(false)
  const [esMenor, setEsMenor] = useState(false)

  useEffect(() => {

    if (numero > 10) {
      console.log("Es mayor a 5")
      setEsMayor(true)
    } else {
      console.log("Es menos o igual a 5")
      setEsMenor(true)
    }


    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

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
      <Text>EVALUAR SI NUMERO ES MAYOR A 5</Text>
      {esMayor && <Text>El numero es mayor a 5</Text>}
      {esMenor && <Text>El numero es menor a 5</Text>}
    </View>
  );
};

export default ExplicacionRenderizadoCondicional