import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import detailScreen from "../screens/Detalles";
import Inicio from "../screens/Inicio";
import Perfil from "../screens/Perfil";
import { View } from "react-native";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                tabBarIcon:({color,size})=>showIcon(route,color,size),
            })}
        >
            <Tab.Screen name="Inicio" component={Inicio} options={{title:"inicio"}}/>
            <Tab.Screen name="Detalles" component={detailScreen} options={{title:"detalles"}}/>
            <Tab.Screen name="Perfil" component={Perfil} options={{title:"perfil"}}/>
        </Tab.Navigator> 
    );
}

function showIcon(route, color, size) {
    let icon;
    if (route.name === "Inicio") {
      icon = "account-cowboy-hat-outline";
    } else if (route.name === "Detalles") {
      icon = "deathly-hallows";
    } else if (route.name === "Perfil") {
      icon = "minecraft";
    }
  
    return (
      <Icon type="material-community" name={icon} color={color} size={size} />
    );
  }