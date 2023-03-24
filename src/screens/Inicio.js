import React, { useState } from "react";
import { Text,View, TextInput,Button,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
    const [formulario, setFormulario] = useState({nombre:"",email:""});
    const navigation = useNavigation();
  return (
    <View style={styles.viewContent}>
      <Text>Bienvenido al inicio</Text>
        <TextInput placeholder="Nombre" 
        onChangeText= {(nombre)=> setFormulario({...formulario,nombre})}
        value={formulario.nombre} />
        <TextInput placeholder="Email"
        onChangeText= {(email)=> setFormulario({...formulario,email})}
        value={formulario.email} />
        <Button title="Ir a Perfil" onPress={() => navigation.navigate("Perfil", {formulario:formulario})} />
    </View>
  );
}

const styles = StyleSheet.create({
    viewContent: {
        marginTop: 50,
    }});