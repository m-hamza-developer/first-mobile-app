import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Practics() {
  const [name, setName] = useState('');
    return (
    <ScrollView style={{ flex: 1 }}>
      
      <Image source={require('@/assets/images/UserProfile.png')} style={{ width: 300, height: 300 }} />

      <Text>Practice Page</Text>

      <View style={{gap:20 }}>

      <Image source={{ uri: 'https://images.unsplash.com/photo-1781444554216-60fa5ac34903?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={{ width: 300, height: 300}} />
      
      <Image source={require('@/assets/images/UserProfile.png')} style={{ width: 300, height: 300 }} />
      </View>

      <TextInput
  value={name}
  onChangeText={setName}
  placeholder="Enter your name"
  style={{ borderWidth: 1, padding: 10 }}
   />

   <Text>UserName : {name}</Text>

      <Text>Practice Page</Text>

      <Link href="/">
        Go to Practice Page
      </Link>

       <Link href="/">
        Go to Practice Page
      </Link>

       <Link href="/">
        Go to Practice Page
      </Link>
     
     <Button title="Press Me" onPress={() => alert('Pressed!')} color="#34c0e7"/>


    <View style={styles.mainbtn }>
      <Pressable
  onPress={() => console.log('pressed')}
  style={({ pressed }) => [
    styles.btn,
    pressed && { opacity: 0.7 }   // visual feedback on press
  ]}
>
  <Text style={styles.btnText}>Follow</Text>
</Pressable>
</View>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
  mainbtn:{
    marginTop: 20, alignItems: 'center' 
  },
  btn: {
    backgroundColor: 'blue',
    width: 200,
    padding: 10,
    borderRadius: 8,
  },
  btnText :{
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});