import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbr from "@/components/button-navbr";

export default function ProfileScreen() {
    const field = [
        {
            label: "Name",
            value: "Hanzala Dilshad",
        },
        {
            label: "Email",
            value: "hanzaladilshad22@gmail.com",
        },
        {
            label: "Phone Number",
            value: "+923068906862",
        },
        {
            label: "Address",
            value: "old shujabaad road near MNS university, Multan",
        },
        {
            label: "City",
            value: "Multan",
        },
        {
            label: "Country",
            value: "Pakistan",
        },
    ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconLeft} onPress={() => router.back()}>
            <Feather name="chevron-left" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Profile</Text>

          <TouchableOpacity style={styles.iconRight}>
            <Feather name="settings" size={18} color="#fff" />
          </TouchableOpacity>

          {/* Profile Image */}
          <Image
            // source={{
            //   uri: "https://i.pravatar.cc/300",

            // }}
            source={
              require("@/assets/images/UserProfile.png")
            }
            style={styles.avatar}
          />

          <Text style={styles.name}>Hanzala Dilshad</Text>
          <Text style={styles.role}>UI/UX Designer</Text>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1000</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>1000</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* <Field label="First Name" value="Hanzala" />
          <Field label="Last Name" value="Dilshad" />
          <Field
            label="Email"
            value="hanzaladilshad22@gmail.com"
          />
          <Field
            label="Phone Number"
            value="+923068906862"
          />
          <Field
            label="Address"
            value="old shujabaad road near MNS university, Multan"
          />
          <Field label="City" value="Multan" /> */}


          {field.map((item, index) => {
            return (
                <>
                <View style={styles.fieldContainer} key={index}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value}</Text>
                <View style={styles.line} />
                </View>
                </>
             )
          })}

          <TouchableOpacity style={styles.logoutBtn} onPress={() => router.push('/signin')}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* <Navbr/> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const Field = ({ label, value }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // marginTop: 30,
  },

  header: {
    backgroundColor: "#68C6C2",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  iconLeft: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 5,
    borderRadius: 50,
    position: "absolute",
    left: 20,
    top: 30,
  },

  iconRight: {
    position: "absolute",
    right: 20,
    top: 30,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 35,
    marginBottom: 12,
  },

  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  role: {
    color: "#EAF9F8",
    fontSize: 13,
    marginTop: 4,
  },

  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  stat: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },

  statNumber: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 5,
  },

  statLabel: {
    color: "#EAF9F8",
    fontSize: 12,
  },

  form: {
    paddingHorizontal: 25,
    paddingTop: 25,
  },

  fieldContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 12,
    color: "#000",
    fontWeight: "600",
    marginBottom: 10,
  },

  value: {
    textAlign: "center",
    color: "#9A9A9A",
    fontSize: 18,
  },

  line: {
    height: 1,
    backgroundColor: "#D0D0D0",
    marginTop: 8,
  },

  logoutBtn: {
    backgroundColor: "#68C6C2",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
    marginHorizontal: 45,
  },

  logoutText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});