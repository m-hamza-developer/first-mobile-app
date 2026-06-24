import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";



const categories = [
  {
    title: "Favorites",
    icon: "heart",
  },
  {
    title: "Music",
    icon: "musical-notes",
  },
  {
    title: "Books",
    icon: "book",
  },
  {
    title: "Games",
    icon: "game-controller",
  },
];



const recommendations = [
  {
    title:"Chill Vibes",
    subtitle:"Relax and unwind",
    rating:"4.8",
    icon:"musical-notes"
  },
  {
    title:"Top Reads",
    subtitle:"Best books for you",
    rating:"4.7",
    icon:"book"
  },
  {
    title:"Fun Games",
    subtitle:"Play and enjoy",
    rating:"4.6",
    icon:"game-controller"
  },
  {
    title:"Daily Favorites",
    subtitle:"Your daily pick",
    rating:"4.9",
    icon:"heart"
  }
];





export default function HomeScreen(){

    const [activeTab, setActiveTab] = useState("Home");


return(

<View style={styles.container}>


<ScrollView
showsVerticalScrollIndicator={false}
contentContainerStyle={{
paddingBottom:100
}}
>


{/* HEADER */}

<View style={styles.header}>


<View>

<Text style={styles.heading}>
Hello, Alex!
</Text>


<Text style={styles.subHeading}>
Find the things that you love!
</Text>


</View>



<TouchableOpacity style={styles.profileCircle} onPress={()=>router.push('/userprofile')}>

<Ionicons
name="person"
size={30}
color="#56C5C5"
/>

</TouchableOpacity>


</View>






{/* SEARCH BAR */}


<View style={styles.searchBox}>


<Ionicons
name="search"
size={25}
color="#888"
/>


<TextInput

placeholder="Search for things you love..."

placeholderTextColor="#999"

style={styles.input}

/>


</View>







{/* CATEGORY HEADER */}


<View style={styles.sectionHeader}>


<Text style={styles.sectionTitle}>
Categories
</Text>


<Text style={styles.viewAll}>
View All
</Text>


</View>





{/* CATEGORY CARDS */}


<ScrollView

horizontal

showsHorizontalScrollIndicator={false}

>

{
categories.map((item,index)=>(


<TouchableOpacity

key={index}

style={styles.categoryCard}

>


<Ionicons

name={item.icon}

size={45}

color="#56C5C5"

/>


<Text style={styles.categoryText}>
{item.title}
</Text>


</TouchableOpacity>


))

}

</ScrollView>








{/* PROMO BANNER */}


<View style={styles.banner}>


<View style={{flex:1}}>


<Text style={styles.bannerTitle}>

Discover{"\n"}

What You Love

</Text>



<Text style={styles.bannerDescription}>

Explore new things{"\n"}

and enjoy every moment.

</Text>





<TouchableOpacity

style={styles.exploreButton}

>

<Text style={styles.buttonText}>
Explore Now
</Text>


</TouchableOpacity>



</View>





<View style={styles.bannerIllustration}>


<Ionicons

name="people"

size={100}

color="#56C5C5"

/>


</View>


</View>









{/* RECOMMENDATION */}


<View style={styles.sectionHeader}>


<Text style={styles.sectionTitle}>
Recommended For You
</Text>


<Text style={styles.viewAll}>
View All
</Text>


</View>





<ScrollView

horizontal

showsHorizontalScrollIndicator={false}

>


{
recommendations.map((item,index)=>(


<View

key={index}

style={styles.recommendCard}

>



<Ionicons

name="heart-outline"

size={22}

color="#999"

style={styles.favoriteIcon}

/>





<View style={styles.iconContainer}>


<Ionicons

name={item.icon}

size={32}

color="#56C5C5"

/>


</View>





<Text style={styles.cardTitle}>

{item.title}

</Text>




<Text style={styles.cardSubtitle}>

{item.subtitle}

</Text>




<View style={styles.rating}>


<Text>

{item.rating}

</Text>


<Ionicons

name="star"

size={15}

color="#FFC107"

/>


</View>



</View>


))

}


</ScrollView>



</ScrollView>









{/* BOTTOM NAV */}



{/* <View style={styles.bottomNav}>


<BottomTab

icon="home"

title="Home"

active

/>


<BottomTab

icon="compass"

title="Explore"

/>


<BottomTab

icon="heart-outline"

title="Favorites"

/>


<BottomTab

icon="person-outline"

title="Profile"

/>



</View> */}

<View style={styles.bottomNav}>
  <BottomTab
    icon="home"
    title="Home"
    active={activeTab === "Home"}
   onPress={() => {
  setActiveTab("Home");
  router.push("/home");
  }}
  />

  <BottomTab
    icon="compass"
    title="Explore"
    active={activeTab === "Explore"}
    onPress={() => setActiveTab("Explore")}
  />

  <BottomTab
    icon="heart-outline"
    title="Favorites"
    active={activeTab === "Favorites"}
    onPress={() => setActiveTab("Favorites")}
  />

  <BottomTab
    icon="person-outline"
    title="Profile"
    active={activeTab === "Profile"}
    onPress={() => {
  setActiveTab("Home");
  router.push("/userprofile");
}}
  />
</View>


</View>

)

}









// function BottomTab({
// icon,
// title,
// active
// }){


// return(

// <View style={styles.bottomItem}>


// <Ionicons

// name={icon}

// size={26}

// color={
// active 
// ? "#56C5C5"
// :"#999"
// }

// />



// <Text

// style={{

// fontSize:12,

// color:

// active

// ?

// "#56C5C5"

// :

// "#999"

// }}

// >

// {title}

// </Text>



// </View>

// )


// }


function BottomTab({ icon, title, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bottomItem}>
      <Ionicons
        name={icon}
        size={26}
        color={active ? "#56C5C5" : "#999"}
      />

      <Text
        style={{
          fontSize: 12,
          color: active ? "#56C5C5" : "#999",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}







const styles = StyleSheet.create({


container:{
flex:1,
backgroundColor:"#fff"
},



header:{
marginTop:55,
paddingHorizontal:25,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},


heading:{
fontSize:32,
fontWeight:"700",
color:"#56C5C5"
},


subHeading:{
fontSize:17,
color:"#444",
marginTop:5
},



profileCircle:{
width:65,
height:65,
borderRadius:40,
borderWidth:2,
borderColor:"#56C5C5",
justifyContent:"center",
alignItems:"center"
},




searchBox:{
margin:25,
height:65,
borderRadius:20,
borderWidth:1,
borderColor:"#ffffff",
backgroundColor:"#ffffff",
flexDirection:"row",
alignItems:"center",
paddingHorizontal:20,

shadowColor:"#000",
shadowOpacity:0.08,
shadowRadius:10,
elevation:4

},


input:{
flex:1,
fontSize:16,
marginLeft:15
},




sectionHeader:{
paddingHorizontal:25,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:15
},


sectionTitle:{
fontSize:22,
fontWeight:"700",
color:"#163B3D"
},


viewAll:{
fontSize:16,
color:"#56C5C5"
},





categoryCard:{
width:140,
height:150,
marginLeft:25,
borderRadius:25,
backgroundColor:"#FAFFFF",
borderWidth:1,
borderColor:"#E5EEEE",
justifyContent:"center",
alignItems:"center"
},


categoryText:{
fontSize:17,
marginTop:15
},







banner:{
margin:25,
height:260,
borderRadius:25,
backgroundColor:"#F2FBFB",
padding:25,
flexDirection:"row"
},



bannerTitle:{
fontSize:28,
fontWeight:"700",
color:"#56C5C5"
},


bannerDescription:{
fontSize:16,
lineHeight:24,
marginVertical:15,
color:"#444"
},



exploreButton:{
backgroundColor:"#56C5C5",
paddingHorizontal:35,
paddingVertical:12,
borderRadius:15
},


buttonText:{
color:"#fff",
fontWeight:"700",
fontSize:16
},



bannerIllustration:{
justifyContent:"center",
alignItems:"center"
},





recommendCard:{
width:200,
height:190,
marginLeft:25,
borderRadius:22,
borderWidth:1,
borderColor:"#eee",
alignItems:"center",
justifyContent:"center"
},


favoriteIcon:{
position:"absolute",
right:12,
top:12
},



iconContainer:{
width:70,
height:70,
borderRadius:20,
backgroundColor:"#EFFBFB",
justifyContent:"center",
alignItems:"center"
},


cardTitle:{
fontSize:16,
fontWeight:"700",
marginTop:12
},


cardSubtitle:{
fontSize:13,
color:"#777",
marginTop:5
},


rating:{
flexDirection:"row",
alignItems:"center",
gap:5,
marginTop:10
},




bottomNav:{
position:"absolute",
bottom:0,
height:80,
width:"100%",
backgroundColor:"#fff",
borderTopWidth:1,
borderColor:"#eee",
flexDirection:"row",
justifyContent:"space-around",
alignItems:"center"
},


bottomItem:{
alignItems:"center",
gap:5
}



});