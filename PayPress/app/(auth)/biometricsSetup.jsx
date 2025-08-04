import React, { useState } from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import CustonButton1 from "@/components/CustomButton1";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Primary }}>
      <View style={styles.mainContainer}>
        <View style={{}}>
          <Ionicons
            name="finger-print-outline"
            size={120}
            color={"#fff"}
            style={{ alignSelf: "center", marginVertical: 50 }}
          />
          <View style={styles.bioTxtContainer}>
            <Text style={styles.bioTxt}>
              Secure your account with{"\n"}biometrics
            </Text>
            <Text style={styles.bioTxtSub}>
              {" "}
              Add an extra layer of security to your Paycoin app.
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View style={{ marginVertical: 20 }}>
              <CustonButton1
                text={"SET UP BIOMETRICS"}
                onPress={() => {
                  // handle login action here
                  router.navigate("./biometrics");
                }}
                color={Colors.Secondary}
              />
            </View>
            <View>
              <CustonButton1
                text={"NOT NOW"}
                onPress={() => {
                  // handle login action here
                  router.navigate("");
                }}
                color={Colors.white}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
  },
  bioTxtContainer: {
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  bioTxt: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: Colors.white,
    textAlign: "center",
  },
  bioTxtSub: {
    fontFamily: "PoppinsRegular",
    color: Colors.white,
    textAlign: "center",
    marginTop: 10,
  },
});
