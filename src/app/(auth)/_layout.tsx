import { Stack } from "expo-router";
import { Image, View } from "react-native";

export default function AuthLayout() {
    return(
        <>
    <View style={{ flex: 1, backgroundColor: 'white' }} >
         {/* Top Splash / Design Image */}
      {/* <Image
        source={require("@/assets/images/topdesign.png")}
        style={{
          width: "100%",
          height: "15%",
          resizeMode: "cover",
        }}
      /> */}

      {/* Screens */}
        <Stack screenOptions={{headerShown: false}} style={{ flex: 1 }} />
        </View>
        </>
    
    )
}