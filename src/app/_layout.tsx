import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  // });

  useEffect(() => {
    SplashScreen.hide();

  }, []);



  return <Stack 
   screenOptions={{
        headerShown: false
      }}
  />;
}
