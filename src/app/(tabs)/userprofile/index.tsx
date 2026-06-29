import { Feather, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import Navbr from "@/components/button-navbr";

export default function ProfileScreen() {

  const [profileImage, setProfileImage] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

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

  const openCamera = async () => {
  const permission = await ImagePicker.requestCameraPermissionsAsync();

  if (!permission.granted) {
    alert("Camera permission is required.");
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ["images"],
    quality: 1,
    allowsEditing: true,
    aspect: [1, 1],
  });
if (!result.canceled) {
  const uri = result.assets[0].uri;

  setProfileImage(uri);
  await AsyncStorage.setItem("profileImage", uri);
}
  setModalVisible(false);
};

const openGallery = async () => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    alert("Gallery permission is required.");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    quality: 1,
    allowsEditing: true,
    aspect: [1, 1],
  });

if (!result.canceled) {
  const uri = result.assets[0].uri;

  setProfileImage(uri);
  await AsyncStorage.setItem("profileImage", uri);
}
  setModalVisible(false);
};
const removeImage = () => {
  setProfileImage(null);
  setModalVisible(false);
};

useEffect(() => {
  loadImage();
}, []);

const loadImage = async () => {
  const img = await AsyncStorage.getItem("profileImage");
  if (img) {
    setProfileImage(img);
  }
};

  return (
    <>
     {/* <View style={styles.container}> */}
      <ScrollView  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 50 }}>
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
          {/* <Image
            // source={{
            //   uri: "https://i.pravatar.cc/300",

            // }}
            source={
              require("@/assets/images/UserProfile.png")
            }
            style={styles.avatar}
          /> */}


          <View style={styles.imageContainer}>
  <Image
    source={
      profileImage
        ? { uri: profileImage }
        : require("@/assets/images/UserProfile.png")
    }
    style={styles.avatar}
  />

  <TouchableOpacity
    style={styles.editIcon}
    onPress={() => setModalVisible(true)}
  >
  <MaterialIcons name="photo-camera" size={20} color="#fff" />
  </TouchableOpacity>
</View>

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
        <Modal
  transparent
  visible={modalVisible}
  animationType="fade"
  onRequestClose={() => setModalVisible(false)}
>
  <TouchableOpacity
    style={styles.modalOverlay}
    activeOpacity={1}
    onPress={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>

      <TouchableOpacity
        style={styles.option}
        onPress={openCamera}
      >
        <MaterialIcons
          name="photo-camera"
          size={24}
          color="#68C6C2"
        />
        <Text style={styles.optionText}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={openGallery}
      >
        <MaterialIcons
          name="photo-library"
          size={24}
          color="#68C6C2"
        />
        <Text style={styles.optionText}>Select Image</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={removeImage}
      >
        <MaterialIcons
          name="delete"
          size={24}
          color="red"
        />
        <Text style={[styles.optionText, { color: "red" }]}>
          Remove
        </Text>
      </TouchableOpacity>

    </View>
  </TouchableOpacity>
</Modal>

      </ScrollView>
    {/* </View> */}
    </>
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
    // backgroundColor: "#FFFFFF",
    // marginTop: 30,
  },

  header: {
    backgroundColor: "#68C6C2",
    alignItems: "center",
    paddingTop: "20%",
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
  imageContainer: {
  marginTop: 35,
  alignItems: "center",
  justifyContent: "center",
},

editIcon: {
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "#68C6C2",
  width: 34,
  height: 34,
  borderRadius: 17,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: "#fff",
},

modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",
  alignItems: "center",
},

modalContainer: {
  width: "80%",
  backgroundColor: "#fff",
  borderRadius: 15,
  paddingVertical: 15,
},

option: {
  flexDirection: "row",
  alignItems: "center",
  padding: 18,
},

optionText: {
  marginLeft: 15,
  fontSize: 17,
},
});