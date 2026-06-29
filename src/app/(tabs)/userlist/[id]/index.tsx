import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getUserById } from "@/services/api";
import Loading from "@/components/Loading";

export default function UserDetails() {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(id)
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (!user) return null;

  const fields = [
    { icon: "person-outline", label: "Username", value: user.username },
    { icon: "mail-outline", label: "Email", value: user.email },
    { icon: "call-outline", label: "Phone", value: user.phone },
    { icon: "globe-outline", label: "Website", value: user.website },
    { icon: "business-outline", label: "Company", value: user.company.name },
    { icon: "location-outline", label: "City", value: user.address.city },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.name.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.role}>{user.company.catchPhrase}</Text>
      </View>

      {/* Info Cards */}
      <View style={styles.infoContainer}>
        {fields.map((field, index) => (
          <View key={index} style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Ionicons name={field.icon} size={20} color="#56C5C5" />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.label}>{field.label}</Text>
              <Text style={styles.value}>{field.value}</Text>
            </View>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    backgroundColor: "#56C5C5",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backBtn: {
    position: "absolute",
    top: 55,
    left: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#56C5C5",
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },
  role: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  infoContainer: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#EFFBFB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  infoText: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
});
