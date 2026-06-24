import { router } from "expo-router";
import { SafeAreaProviderCompat } from "expo-router/build/react-navigation";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
    return(
        <>

        <ScrollView style={{ flex: 1 , backgroundColor: 'white'}} >

               <Image
                    source={require("@/assets/images/topdesign.png")}
                    style={{
                      width: "100%",
                      height: "20%",
                      resizeMode: "cover",
                    }}
                />

            <View> 
            <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 30, fontFamily: 'RobotoBold' , color: '#64C3BF' , textAlign: 'center' }}>Welcome!</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 6, fontFamily: 'RobotoBold' , textAlign: 'center'}}>Find the things that you Love!</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Image source={require('@/assets/images/splashlogo.png')} style={{ width: 300, height: 300 }}/>
            </View>

            <View>
                <Pressable onPress={()=>router.push('/signup')} style={{ backgroundColor: '#64C3BF', padding: 15, borderRadius: 10, marginTop: 30, alignItems: 'center', marginHorizontal: 20}} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', fontFamily: 'RobotoBold'}}>Signup</Text>
                </Pressable>

                 <Pressable onPress={()=>router.push('/signin')} style={{ borderColor: '#64C3BF', borderWidth: 2, padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center', marginHorizontal: 20}} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#64C3BF', fontFamily: 'RobotoBold'}}>Login</Text>
                </Pressable>

            </View>
        </ScrollView>  
 

        </>
    )
}