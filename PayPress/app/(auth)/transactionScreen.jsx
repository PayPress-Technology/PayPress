// import React from "react";
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   StatusBar,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";
// import PinView from "react-native-pin-view";

// export default function CreatePinScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />

//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.back()}
//         >
//           <Ionicons name="arrow-back" size={24} color="#000" />
//         </TouchableOpacity>
//       </View>

//       {/* Content */}
//       <View style={styles.content}>
//         <Text style={styles.title}>Create your E- Digit PIN</Text>
//         <Text style={styles.subtitle}>Create 6 PIN for your account</Text>

//         <PinView
//           inputSize={6}
//           onComplete={(pin) => {
//             console.log("PIN entered:", pin);
//             // Handle PIN completion
//             // router.push('/dashboard');
//           }}
//           pinLength={6}
//           buttonSize={70}
//           buttonAreaStyle={{
//             backgroundColor: "#0B57BD",
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//             paddingTop: 50,
//             paddingBottom: 30,
//             flex: 1,
//             marginTop: 20,
//           }}
//           inputAreaStyle={{
//             marginBottom: 60,
//           }}
//           inputViewEmptyStyle={{
//             backgroundColor: "rgba(11, 87, 189, 0.2)",
//             borderWidth: 2,
//             borderColor: "rgba(11, 87, 189, 0.3)",
//             width: 16,
//             height: 16,
//             borderRadius: 8,
//           }}
//           inputViewFilledStyle={{
//             backgroundColor: "#0B57BD",
//             width: 16,
//             height: 16,
//             borderRadius: 8,
//             borderWidth: 0,
//           }}
//           buttonViewStyle={{
//             backgroundColor: "#fff",
//             borderWidth: 0,
//             borderRadius: 35,
//             elevation: 5,
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             shadowOpacity: 0.15,
//             shadowRadius: 6,
//           }}
//           buttonTextStyle={{
//             color: "#0B57BD",
//             fontSize: 28,
//             fontFamily: "PoppinsSemiBold",
//           }}
//           onButtonPress={(key) => {
//             console.log("Button pressed:", key);
//           }}
//           deleteText="⌫"
//           showDeleteButton={true}
//           deleteButtonStyle={{
//             backgroundColor: "transparent",
//             elevation: 0,
//             shadowOpacity: 0,
//           }}
//           deleteButtonTextStyle={{
//             color: "#fff",
//             fontSize: 24,
//           }}
//         />

//         {/* Step Text */}
//         <Text style={styles.stepText}>Step 2</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   backButton: {
//     padding: 8,
//     borderRadius: 20,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontFamily: "PoppinsBold",
//     color: "#000",
//     marginBottom: 8,
//     lineHeight: 34,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontFamily: "PoppinsRegular",
//     color: "#666",
//     lineHeight: 22,
//     marginBottom: 40,
//   },
//   stepText: {
//     textAlign: "center",
//     color: "#fff",
//     fontSize: 16,
//     fontFamily: "PoppinsMedium",
//     position: "absolute",
//     bottom: 30,
//     left: 0,
//     right: 0,
//   },
// });
