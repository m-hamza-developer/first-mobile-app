import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import { router } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {

  const [fontsLoaded] = useFonts({
    RobotoRegular: require('@/assets/font/Roboto-Regular.ttf'),
    RobotoMedium: require('@/assets/font/Roboto-SemiBold.ttf'),
    RobotoBold: require('@/assets/font/Roboto-Bold.ttf'),
    RobotoExtraBold: require('@/assets/font/Roboto-ExtraBold.ttf'),
  });

  const [name, setName] = useState('Muhammad Usama');
  const [email, setEmail] = useState('usama@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [phone, setPhone] = useState('123-456-7890');
  const [address, setAddress] = useState('123 Main St, Anytown, USA,1234 Maple Street, Springfield, IL 62704, USA is a quiet residential area with tree-lined roads and a peaceful environment.');

  const SaveChanges = () => {
    console.log('Saved data:', { name, email, bio, phone, address });
    alert('Changes saved successfully!');
  };

  if (!fontsLoaded) return null;
  return (
    <>
     
     <KeyboardAvoidingView  style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <ScrollView >
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
              {/* <StatusBar backgroundColor="transparent" barStyle="light-content" /> */}
          <Pressable
            style={({ pressed }) => ({
              padding: 15,
              backgroundColor: pressed ? '#353535' : 'lightgray',
              borderRadius: 50,
              flexDirection: 'row',
              alignItems: 'center',
              width: 50,
              opacity: pressed ? 0.7 : 1,
              transform: [{ scale: pressed ? 0.95 : 1 }],
            })}
            onPress={router.back}
          >
            <AntDesign name="arrow-left" size={20} color="black" />
          </Pressable>
     

        <View style={{ }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'RobotoBold', textAlign: 'center' }}>Profile Page</Text>
          <Image source={require('@/assets/images/UserProfile.png')} style={{ width: 150, height: 150, marginTop: 20, borderRadius: 100, display: 'flex', alignSelf: 'center' }} />

          <View>
            <Text style={{ fontSize: 18, marginTop: 20, fontFamily: 'RobotoRegular' }}>Name :</Text>
            <TextInput placeholder="Enter your name" value={name} onChangeText={setName} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5, fontFamily: 'RobotoRegular' }} />

            <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'RobotoRegular' }}>Email :</Text>
            <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5, fontFamily: 'RobotoRegular' }} />

            <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'RobotoRegular' }}>Bio :</Text>
            <TextInput placeholder="Enter your bio" multiline={true}
              numberOfLines={4} value={bio} onChangeText={setBio} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5, fontFamily: 'RobotoRegular' }} />

            <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'RobotoRegular' }}>Phone Number :</Text>
            <TextInput placeholder="Enter your phone" value={phone} onChangeText={setPhone} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5, fontFamily: 'RobotoRegular' }} />

            <Text style={{ fontSize: 18, marginTop: 15, fontFamily: 'RobotoRegular' }}>Address :</Text>
            <TextInput placeholder="Enter your address" multiline={true} numberOfLines={4} value={address} onChangeText={setAddress} style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5, fontFamily: 'RobotoRegular' }} />
          </View>

          <Pressable
            onPress={SaveChanges}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#184252' : 'lightblue',
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
                alignItems: 'center',
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'RobotoBold',
              }}
            >
              Save Changes
            </Text>
          </Pressable>

        </View>
        </SafeAreaView>
      </ScrollView>

      </KeyboardAvoidingView>
    </>
  )
}
