import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Navbr() {
    const [activeTab, setActiveTab] = useState("Home");
    return (
<View style={styles.bottomNav}>
  <BottomTab
    icon="home"
    title="Home"
    active={activeTab === "Home"}
    onPress={() => setActiveTab("Home")}
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
    onPress={() => setActiveTab("Profile")}
  />
</View>
    )
}


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

  bottomNav: {
    position: "absolute",
    bottom: 0,
    height: 85,
    width: "100%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#F0F0F0",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 8,
  },

  bottomItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

});