import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ListarProductosTienda = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //ESTO SE EJECUTA UNA SOLA VEZ
        ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
    }, [])

    const consultarProductos = async () => {
        //ToastAndroid.show('Se consultará productos', ToastAndroid.SHORT);
        console.log('çonsultando productos...')
        let rtaJson = await fetch('http://10.10.15.228:4000/api/productos', { method: 'GET', cache: 'no-cache', headers: { 'Content-Type': 'application/json' } })

        console.log(rtaJson.status)

        if (rtaJson.status == 200) {
            let productosEncontrados = await rtaJson.json()
            console.log(productosEncontrados)
            //setProductos(productosEncontrados)
        }

        if (rtaJson.status == 204) {
            console.log("No se encontraron productos")
            ToastAndroid.show('No se encontraron productos', ToastAndroid.SHORT);
        }

        if (rtaJson.status == 500) {
            let rtaError = rtaJson.json()
            console.log(rtaError.message)
            ToastAndroid.show('Error en el servidor', ToastAndroid.SHORT);
        }

        if (rtaJson.status == 404) {
            let rtaError = rtaJson.json()
            console.log(rtaError.message)
            ToastAndroid.show('Endpoint no encontrda', ToastAndroid.SHORT);
        }
    }
    const estilos = StyleSheet.create({ inputsTexto: { height: 40, width: 80, margin: 10, borderWidth: 1, padding: 10, borderColor: 'gray', borderWidth: 3 }, });

    return (
        <View >
            <Button onPress={consultarProductos} title="Consultar" color="#841584" />
            {productos.length > 0 && (<Text>Total encontrados: {productos.length}</Text>)}
        </View>
    );
};

export default ListarProductosTienda