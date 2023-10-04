import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Pokeapi from './src/components/JSasincronoApi.jsx'
//import ExplicandoUseState from './src/components/ExplicacionuseState.jsx'
//import ExplicacionRenderizadoCondicional from './src/components/ExplicacionRenderizadoCondicional.jsx'
//import Calculadora from "./src/components/Calculadora.jsx";
//import MiPrimerComponente from "./src/components/MiPrimerComponente.jsx";
//import SumarArray from "./src/components/SumarArray.jsx";
//import EvaluarArray from './src/components/EvaluarArray';
//import AgregarNumsMayores10 from "./src/components/AggregarNumsArr";
//import MostrarDatosMySQL from "./src/components/MostrarDatosMySQL";
import ListarProductosTienda from './src/components/ListarProductos';

export default function App() {

  return (
    <View style={estilos.container}>
      <ListarProductosTienda />
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
