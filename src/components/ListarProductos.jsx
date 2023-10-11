import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button, FlatList } from 'react-native';
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
        let rtaJson = await fetch('http://10.10.9.101:4000/api/productos', { method: 'GET', cache: 'no-cache', headers: { 'Content-Type': 'application/json' } })

        console.log(rtaJson.status)

        switch (rtaJson.status) {
            case 200:
                let productosEncontrados = await rtaJson.json()
                console.log(productosEncontrados)
                setProductos(productosEncontrados)
                ToastAndroid.show("se consultaron los productos", ToastAndroid.SHORT)
                break;

            case 204:
                console.log("No se encontraron productos")
                ToastAndroid.show('No se encontraron productos', ToastAndroid.SHORT);
                break;

            case 500:

                let rtaError = rtaJson.json()
                console.log(rtaError.message)
                ToastAndroid.show('Error en el servidor', ToastAndroid.SHORT);
                break;

            case 404:
                let rtaError2 = rtaJson.json()
                console.log(rtaError2.message)
                ToastAndroid.show('Endpoint no encontrda', ToastAndroid.SHORT);
                break;
        }

    }
    const estilos = StyleSheet.create({ inputsTexto: { height: 40, width: 80, margin: 10, borderWidth: 1, padding: 10, borderColor: 'gray', borderWidth: 3 }, });

    return (
        <View style={{ padding: 10 }}>
            <Button onPress={consultarProductos} title="Consultar" color="#841584" />
            
            {productos.length > 0 && (
                <>
                    <Text>Total encontradoss: {productos.length}</Text>

                    <FlatList data={productos}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={{ padding: 10, borderBottomWidth: 1 }}>
                                <Text>{item.nombre}</Text>
                            </View>
                        )}
                    />
                </>
            )}
        </View>
    );
};

export default ListarProductosTienda