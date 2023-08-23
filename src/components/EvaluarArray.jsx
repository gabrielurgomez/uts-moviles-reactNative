import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const EvaluarArray = () => {

  let arrInicial = [5, 8, 12, 11, 6, 13, 8, 15, 6, 4, 11, 0, 8];
  const [arrMayores10, setArrMayores10] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const validarArrayMayores10 = async () => {

    /*const response = await fetch("http://10.11.8.75:4000");
    const rta = await response.json();
    console.log(rta);*/
  
    try {
      const response = await fetch("http://192.168.23.71:4000/api/clientes", {
        cache: 'no-cache',
        //method: "GET",
        //body: JSON.stringify(documento),
        //headers: { "Content-Type": "application/json" }
      });

      const rta = await response.json();
      console.log(rta);

      setNombre(rta[0].nombre)
      
    } catch (error) {
      console.log("error =>",error)
    }

    arrInicial.forEach((n) => {
      if (n > 10) {
        arrMayores10.push(n)
      }
    })

    setMostrarResultado(true);
    //ToastAndroid.show('Se ha agregado el numero '+num, ToastAndroid.SHORT);
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
      <Text>VALIDAR ARRAY, MUESTRA CUALES SON MAYORES A 10</Text>
      <Button onPress={validarArrayMayores10} title="Sumar" color="#FF0000" />
      {mostrarResultado && (<Text>Los mayores a 10 son {arrMayores10}</Text>)}
      <Text>{nombre}</Text>
    </View>
  );
};

export default EvaluarArray