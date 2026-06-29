import { 
  useRef, 
  useState, 
  useEffect 
} from "react";

import {
  View,
  Text,
  Button,
  Image,
  Alert
} from "react-native";

import { 
  SafeAreaView 
} from "react-native-safe-area-context";

import {
  CameraView,
  useCameraPermissions
} from "expo-camera";


import * as ImagePicker from "expo-image-picker";

// import * as Notifications from "expo-notifications";



export default function Api() {


  const [permission, requestPermission] = 
  useCameraPermissions();


  const cameraRef = useRef(null);


  const [photoUri, setPhotoUri] = useState(null);



  // Notification Setup
//   useEffect(()=>{


//     const setupNotification = async()=>{


//       // Permission
//       const {status} =
//       await Notifications.requestPermissionsAsync();


//       if(status !== "granted"){

//         Alert.alert(
//           "Permission Required",
//           "Notification permission is required"
//         );

//       }



//       // Android Channel

//       await Notifications.setNotificationChannelAsync(
//         "default",
//         {
//           name:"default",

//           importance:
//           Notifications.AndroidImportance.HIGH,

//         }
//       );


//     }



//     setupNotification();


//   },[]);




  // Camera Permission

  if(!permission){
    return <View/>
  }



  if(!permission.granted){

    return(

      <SafeAreaView>

        <Text>
          Camera permission is required
        </Text>


        <Button

          title="Grant Permission"

          onPress={requestPermission}

        />

      </SafeAreaView>

    )

  }




  // Capture Image

  const takePhoto = async()=>{


    if(cameraRef.current){


      const photo =
      await cameraRef.current.takePictureAsync();



      setPhotoUri(photo.uri);


    }


  }




  // Select Image From Gallery

  const pickImage = async()=>{


    const permission =
    await ImagePicker
    .requestMediaLibraryPermissionsAsync();



    if(!permission.granted){

      Alert.alert(
        "Permission Required",
        "Gallery permission required"
      );

      return;

    }




    const result =
    await ImagePicker
    .launchImageLibraryAsync({

      mediaTypes:["images"],

      allowsEditing:true,

      aspect:[1,1],

      quality:1,

    });



    if(!result.canceled){

      setPhotoUri(
        result.assets[0].uri
      );

    }


  }





  // Remove Image

  const removePhoto = ()=>{

    setPhotoUri(null);

  }





  // Notification

  const sendNotification = async()=>{


    await Notifications
    .scheduleNotificationAsync({

      content:{

        title:"Reminder",

        body:"Complete your task"

      },


      trigger:{

        seconds:5

      }


    });



    Alert.alert(
      "Notification Scheduled",
      "You will receive notification after 5 seconds"
    );


  }




  return(


    <SafeAreaView

      style={{

        flex:1,

        alignItems:"center",

        justifyContent:"center",

        gap:15

      }}

    >



      {
        photoUri ?


        (

          <>

            <Image

              source={{
                uri:photoUri
              }}

              style={{

                height:200,

                width:200,

                borderRadius:100

              }}

            />



            <Button

              title="Remove Image"

              onPress={removePhoto}

            />


          </>


        )


        :


        (

          <CameraView

            ref={cameraRef}


            style={{

              height:200,

              width:200,

              borderRadius:100,

              overflow:"hidden"

            }}

          />

        )

      }




      {
        !photoUri &&

        <Button

          title="Capture Photo"

          onPress={takePhoto}

        />

      }




      <Button

        title="Select From Gallery"

        onPress={pickImage}

      />




      <Button

        title="Send Notification"

        onPress={sendNotification}

      />




    </SafeAreaView>


  )

}