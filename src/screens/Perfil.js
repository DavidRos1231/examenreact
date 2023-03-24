import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { useRoute } from "@react-navigation/native";
export default function Perfil() {
    const route = useRoute();
    console.log(route.params.formulario);
    const nombre = route.params.formulario.nombre;
    const email = route.params.formulario.email;
    
  return (

    <View style={styles.container}>
      <Text style={styles.Text}>Name: {nombre}</Text>
        <Text style={styles.Text}>Email: {email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.Text}>Boton</Text>
      </TouchableOpacity>
    </View>
  ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    Text:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
    },
    button:{
        backgroundColor:'black',
        padding:10,
        borderRadius:10,
    }
});
