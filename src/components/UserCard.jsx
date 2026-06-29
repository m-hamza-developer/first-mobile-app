import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";


export default function UserCard({
user,
onPress
}){


return(

<TouchableOpacity
style={styles.card}
onPress={onPress}
>


<Text style={styles.name}>
{user.name}
</Text>


<Text>
📧 {user.email}
</Text>


<Text>
🏢 {user.company.name}
</Text>


</TouchableOpacity>

)

}



const styles=StyleSheet.create({

card:{
backgroundColor:"#fff",
padding:20,
margin:10,
borderRadius:15,
elevation:3
},

name:{
fontSize:18,
fontWeight:"700",
marginBottom:8
}


})