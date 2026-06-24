import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    // <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}>
      <ScrollView style={{ flex: 1 }}
     contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
    keyboardShouldPersistTaps="handled">

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
        
        {/* Header */}
        {/* <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View> */}

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Enter your Personal Data</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>

          <TextInput placeholder="First Name" style={styles.input} />
          <TextInput placeholder="Last Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Phone Number" style={styles.input} />

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

          {/* Confirm Password */}
          <View style={styles.passwordBox}>
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
          </View>

          {/* Signup Button */}
          <TouchableOpacity style={styles.button} onPress={()=>router.push('/home')}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          {/* OR */}
          <Text style={styles.orText}>or signup with google</Text>

          {/* Google Button */}
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Login */}
          <Text style={styles.loginText} onPress={() => router.push('/signin')}>
            Already have an Account? <Text style={styles.loginLink}>Login</Text>
          </Text>

        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    // </SafeAreaView>
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
    marginTop: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#67c7c1",
  },

  subtitle: {
    fontSize: 20,
    color: "gray",
    marginTop: 3,
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
    marginBottom: 12,
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
    marginVertical: 15,
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