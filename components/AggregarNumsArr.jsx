import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';

const AgregarNumsMayores10 = () => {

    const [arrMayores10, setArrMayores10] = useState([]);
    const [numero1, setNumero1] = useState(0);
    let [contador, setContador] = useState(0)
    const [mostrarResultado, setMostrarResultado] = useState(false);
    
 
    const agg = () => {
        console.clear();
        contador++;
        setContador(contador);

        console.log("se va a evaluar el numero "+numero1)

        if(contador <= 8)
        {
            if(numero1>10){
                arrMayores10.push(numero1);
                console.log("se ha agregado el numero "+numero1+" al array")
            }else{
                console.log("el numero "+numero1+" no se agrego por que no es mayor a 10")
            }
            
            console.log("Se han evaluado "+contador+" de un total de 8 numeros")
        }else{
            setMostrarResultado(true)
        }

        setNumero1(0);
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
          <Text>ARR SOLO MAYORES 10</Text>

          <TextInput style={estilos.inputsTexto} onChangeText={setNumero1} value={numero1} placeholder="Numero 1" keyboardType="numeric" />
          <Button onPress={agg} title="VALIDAR Y AGREGAR" color="#841584" />
          {mostrarResultado && (<Text>Los mayores a 10 son {arrMayores10}</Text>)}
        </View>
      );


}

export default AgregarNumsMayores10