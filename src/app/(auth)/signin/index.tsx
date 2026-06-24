import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Signin() {
     const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
            <ScrollView style={{ flex: 1 , backgroundColor: 'white'}} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} keyboardShouldPersistTaps="handled">
              
                  <Image
                       source={require("@/assets/images/topdesign.png")}
                       style={{
                         width: "100%",
                         height: "20%",
                         resizeMode: "cover",
                       }}
                     />
              

                   <Pressable onPress={()=>router.back()} style={{ padding: 10 , position: 'absolute', top: 10, left: 10, zIndex: 1 , backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 50, opacity: 0.8 , marginTop: "5%" }}  >
                   <AntDesign name="arrow-left" size={24} color="white" />
                  </Pressable>
              
                <View> 
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 20, fontFamily: 'RobotoBold' , color: '#64C3BF' , textAlign: 'center' }}>Welcome Back!</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 6, fontFamily: 'RobotoBold' , textAlign: 'center'}}>Login</Text>
                </View>
    
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <Image source={require('@/assets/images/splashlogo.png')} style={{ width: 200, height: 200 }}/>
                </View>

                 <View style={styles.form}>
                
                          {/* <TextInput placeholder="First Name" style={styles.input} />
                          <TextInput placeholder="Last Name" style={styles.input} /> */}
                          <TextInput placeholder="Email" style={styles.input} />
                          {/* <TextInput placeholder="Phone Number" style={styles.input} /> */}
                
                          {/* Password */}
                          <View style={styles.passwordBox}>
                            <TextInput
                              placeholder="Create Password"
                              secureTextEntry={!showPassword}
                              style={styles.passwordInput}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                              <Ionicons
                                name={showPassword ? "eye-off" : "eye"}
                                size={20}
                                color="gray"
                              />
                            </TouchableOpacity>
                          </View>

                          <Text style={{ fontSize: 12, fontWeight: 'bold',  fontFamily: 'RobotoBold' , textAlign: 'right' ,color: '#64C3BF'}}>forgot password</Text>
                
                          {/* Confirm Password */}
                          {/* <View style={styles.passwordBox}>
                            <TextInput
                              placeholder="Confirm Password"
                              secureTextEntry={!showConfirm}
                              style={styles.passwordInput}
                            />
                            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                              <Ionicons
                                name={showConfirm ? "eye-off" : "eye"}
                                size={20}
                                color="gray"
                              />
                            </TouchableOpacity>
                          </View> */}
                
                          {/* Signup Button */}
                          <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
                            <Text style={styles.buttonText}>Login</Text>
                          </TouchableOpacity>
                
                          {/* OR */}
                          <Text style={styles.orText}>or signin with google</Text>
                
                          {/* Google Button */}
                          <TouchableOpacity style={styles.googleButton}>
                            <Text style={styles.googleText}>Continue with Google</Text>
                          </TouchableOpacity>
                
                          {/* Login */}
                          <Text style={styles.loginText} onPress={() => router.push('/signup')}>
                            Already have an Account? <Text style={styles.loginLink}>Signup</Text>
                          </Text>
                
                        </View>
    
                {/* <View>
                    <Pressable onPress={()=>router.push('/signup')} style={{ backgroundColor: '#64C3BF', padding: 15, borderRadius: 10, marginTop: 30, alignItems: 'center', marginHorizontal: 20}} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', fontFamily: 'RobotoBold'}}>Signup</Text>
                    </Pressable>
    
                     <Pressable onPress={()=>router.push('/signin')} style={{ borderColor: '#64C3BF', borderWidth: 2, padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center', marginHorizontal: 20}} >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#64C3BF', fontFamily: 'RobotoBold'}}>Login</Text>
                    </Pressable>
    
                </View> */}
            </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 140,
    backgroundColor: "#67c7c1",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    padding: 20,
    justifyContent: "flex-start",
  },

  titleContainer: {
    alignItems: "center",
    marginTop: 30,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#67c7c1",
  },

  subtitle: {
    fontSize: 20,
    color: "gray",
    marginTop: 5,
  },

  form: {
    padding: 20,
  },

  input: {
    borderWidth: 2,
    borderColor: "#67c7c1",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  passwordBox: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#67c7c1",
    borderRadius: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 6,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },

  button: {
    backgroundColor: "#67c7c1",
    padding: 15,
    borderRadius: 10    ,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "gray",
  },

  googleButton: {
    backgroundColor: "#67c7c1",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  googleText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  loginText: {
    textAlign: "center",
    marginTop: 15,
    color: "gray",
  },

  loginLink: {
    color: "#67c7c1",
    fontWeight: "bold",
  },
});