import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
import { FlatList } from 'react-native';
//import Sound from 'react-native-sound';

const MostrarDatosMySQL = () => {
  const [nombre, setNombre] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const ConsultarClientes = async () => {
    const rta = await fetch("http://10.11.8.104:4000/api/clientes");
    const clientes = await rta.json();
    //console.log(clientes);
    setNombre(clientes[0].nombre)
    ToastAndroid.show('Se ha consultado los clientes', ToastAndroid.SHORT);
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    persona: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }, inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'gray',
      borderWidth: 3,
    }
  });

  return (
    <View >
      <Text>CONSULTAR</Text>
      <Button onPress={ConsultarClientes} title="CONSULTAR" color="#841584" />
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin', edad: 34 },
            { key: 'Dan', edad: 34 },
            { key: 'Dominic', edad: 23 },
            { key: 'Jackson', edad: 27 },
            { key: 'James', edad: 45 },
            { key: 'Joel', edad: 34 },
            { key: 'John', edad: 34 },
            { key: 'Jillian', edad: 34 },
            { key: 'Jimmy', edad: 34 },
            { key: 'Julie', edad: 34 },
          ]}
          renderItem={({ item }) => <Text style={styles.persona}>{item.key} - {item.edad}</Text>}
        />
      </View>
      <Text>{nombre}</Text>
    </View>
  );
};

export default MostrarDatosMySQL