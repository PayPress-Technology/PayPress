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
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function Fund_Wallet() {
  const [error, setError] = useState("");

  return (
    <ThemedContainer style={{ flex: 1, backgroundColor: "#B6CDEB  " }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <View style={styles.mainContainer}>
          <View style={styles.bioTxtContainer}>
            {/* main header */}
            <Text style={styles.bioTxt}>Top Up your wallet</Text>

            {/*  */}
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.bioSubTxt}>Amount</Text>

              <TextInput
                // value={password}
                // onChangeText={setPassword}
                // secureTextEntry={!showPassword}
                keyboardType="numeric"
                autoCapitalize="none"
                placeholder="Enter Amount"
                placeholderTextColor={Colors.white}
                autoCorrect={false}
                style={styles.input}
              />
            </View>

            {/* Payment source */}

            <View>
              <Text style={styles.bioSubTxt}>Payment Source</Text>
              {/*  */}
              <View style={styles.BtnContainer}>
                <TouchableOpacity
                  //   onPress={}
                  style={styles.button}
                >
                  <Text style={styles.BtnTxt}>Pay with Transfer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  //   onPress={}
                  style={styles.button}
                >
                  <Text style={styles.BtnTxt}>Pay with USSD</Text>
                </TouchableOpacity>
              </View>

              {/*  */}
              <View style={styles.BtnContainer}>
                <TouchableOpacity
                  //   onPress={}
                  style={styles.button}
                >
                  <Text style={styles.BtnTxt}>Debit Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  //   onPress={}
                  style={styles.button}
                >
                  <Text style={styles.BtnTxt}>Pay with Remita</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End of sources */}
          </View>

          {/* fund wallet button */}
          <View>
            <CustonButton1
              text={"Fund Wallet"}
              onPress={() => {
                router.navigate("/fundSuccess");
              }}
              color={Colors.Secondary}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    width: "90%",
    height: "80%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignSelf: "center",
    justifyContent: "space-between",
    marginVertical: "10%",
    paddingVertical: 30,
    marginBottom: 50,
  },
  bioTxtContainer: {
    // alignItems: "center",
    paddingHorizontal: 5,
  },
  bioTxt: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: "#fff",
    marginLeft: 20,
    // textAlign: "center",
  },
  bioSubTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    color: "#fff",
    // textAlign: "center",
    marginLeft: 20,
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.Primary,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "center",
    paddingLeft: 30,
    marginBottom: 20,
    borderColor: Colors.Secondary,
    borderWidth: 3,
    color: Colors.white,
    fontFamily: "PoppinsSemiBold",
  },
  button: {
    // width: "40%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: Colors.Secondary,
  },
  BtnTxt: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 10,
    gap: 5,
  },
});
