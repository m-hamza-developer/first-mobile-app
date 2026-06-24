import * as Device from 'expo-device';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Redirect, router } from 'expo-router';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

export default function HomeScreen() {
   
  // Redirect('/slash');

  return (
    <Redirect href="/splash" />
    // <ThemedView style={styles.container}>
    //   <SafeAreaView style={styles.safeArea}>
    //     <ThemedView style={styles.heroSection}>
    //       <AnimatedIcon />
    //       <ThemedText type="title" style={styles.title}>
    //         Welcome to&nbsp;Expo
    //       </ThemedText>
    //     </ThemedView>

    //     <ThemedText type="code" style={styles.code}>
    //       get started
    //     </ThemedText>

    //     <Pressable onPress={() => {router.push('/practics')}}>
    //       <Text> hello</Text>
    //     </Pressable>



    //     <ThemedView type="backgroundElement" style={styles.stepContainer}>
    //       <HintRow
    //         title="Try editing"
    //         hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
    //       />
    //       <HintRow title="Dev tools" hint={getDevMenuHint()} />
    //       <HintRow
    //         title="Fresh start"
    //         hint={<ThemedText type="code">npm run reset-project</ThemedText>}
    //       />
    //     </ThemedView>

    //     {Platform.OS === 'web' && <WebBadge />}
    //   </SafeAreaView>
    // </ThemedView>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home Screen</Text>  
    //     <Pressable onPress={() => {router.push('/profile')}} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5  ,width: 100 , textAlign: 'center', alignItems: 'center'}}>
    //       <Text style={{ color: 'white', fontWeight: 'bold' }}>
    //         See profile
    //       </Text>
    //     </Pressable>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   code: {
//     textTransform: 'uppercase',
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: 'stretch',
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });
