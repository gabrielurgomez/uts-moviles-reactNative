import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ToastAndroid, } from 'react-native';
//import Sound from 'react-native-sound';

const Evolucionapp = () => {
  const [mostrarBlastoise, setMostrarBlastoide] = useState(false);
  const [mostrarCharizard, setMostrarCharizard] = useState(false);

  useEffect(() => {
    //setMostrarBlastoide(true);
  }, [])

  const verBlastoise = () => {
    //let sound = new Sound('../assets/sonidoSquirtle.mp3');
    //sound.play()
    
    setMostrarBlastoide(true);
    ToastAndroid.show('La evolucion de sqruitle es blastoise!!', ToastAndroid.SHORT);
  }

  const verCharizard = () => {
    setMostrarCharizard(true);
    ToastAndroid.show('La evolucion de charmander es charizard!!', ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputs: {
      padding: 10,
      height: 40,
      width: 180,
      borderColor: 'gray',
      borderWidth: 3,
    },
    tinyLogo: {
      width: 100,
      height: 100,
    }
  });

  return (
    <View >
      <Text>EVOLUCIONAAP</Text>

      <TouchableHighlight onPress={verBlastoise}>
        <Image style={estilos.tinyLogo} source={require('../assets/squirtle.png')} />
      </TouchableHighlight>

      {mostrarBlastoise && (
        <Image style={estilos.tinyLogo} source={require('../assets/blastoise.png')} />
      )}

      <TouchableHighlight onPress={verCharizard}>
        <Image style={estilos.tinyLogo} source={require('../assets/charmander.png')} />
      </TouchableHighlight>

      {mostrarCharizard && (
        <Image style={estilos.tinyLogo} source={require('../assets/charizard.png')} />
      )}



    </View>
  );
};

export default Evolucionapp