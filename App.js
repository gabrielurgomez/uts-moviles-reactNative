import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Calculadora from "./components/Calculadora";
import SumarArray from "./components/SumarArray";
import EvaluarArray from './components/EvaluarArray';
import AgregarNumsMayores10 from "./components/AggregarNumsArr";
import MostrarDatosMySQL from "./components/MostrarDatosMySQL";



export default function App() {
  
  return (
    <View style={estilos.container}>
      <MostrarDatosMySQL/>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
