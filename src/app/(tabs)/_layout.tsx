import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function TabsLayout(){


return (

<Tabs
screenOptions={{
headerShown:false,
tabBarShowLabel:true,
tabBarActiveTintColor:"#56C5C5",
tabBarInactiveTintColor:"#999",

tabBarStyle:{
height:80,
position:"absolute",
bottom:0,
borderTopWidth:1,
borderColor:"#eee",
backgroundColor:"#fff"
},

tabBarIconStyle:{
marginTop:15
}
}}
>

<Tabs.Screen

name="home"


options={{
    title:"Home",
tabBarIcon:({color})=>(

<Ionicons
name="home"
size={26}
color={color}
/>

)
}}

/>



<Tabs.Screen

name="userlist"

options={{
title : "Users",
tabBarIcon:({color})=>(

<Ionicons
name="compass"
size={26}
color={color}
/>

)
}}

/>



{/* <Tabs.Screen

name="favorites"

options={{
tabBarIcon:({color})=>(

<Ionicons
name="heart-outline"
size={26}
color={color}
/>

)
}}

/> */}



<Tabs.Screen

name="userprofile"

options={{
    title : "Profile",
tabBarIcon:({color})=>(

<Ionicons
name="person-outline"
size={26}
color={color}
/>

)
}}

/>

<Tabs.Screen

name="api"

options={{
    title : "Api",
tabBarIcon:({color})=>(

<Ionicons
name="settings-outline"
size={26}
color={color}
/>

)
}}

/>



</Tabs>

)

}