import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from "react-native";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CustonButton1 from "@/components/CustomButton1";
import InputField from "@/components/InputField";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

// networks
const networks = [
  { id: 1, name: "EKEDC", image: require("../../../assets/images/EKEDC.png") },
  { id: 2, name: "IKEDC", image: require("../../../assets/images/IKEDC.png") },
  { id: 3, name: "AEDC", image: require("../../../assets/images/AEDC.png") },
  { id: 4, name: "IBEDC", image: require("../../../assets/images/ABEDC.png") },
  { id: 5, name: "KEDCO", image: require("../../../assets/images/KEDCO.png") },
  { id: 6, name: "YEDC", image: require("../../../assets/images/YEDC.png") },
];

// amounts
const amounts = ["₦100", "₦200", "₦500", "₦1,000", "₦2,000", "₦5,000"];

// data plan
const dataPlans = [
  { id: 1, name: "DStv Padi", price: "₦350", days: "30 Days" },
  { id: 2, name: "DStv Yanga", price: "₦700", days: "30 Days" },
  { id: 3, name: "DStv Conpact", price: "₦1,500", days: "30 Days" },
  { id: 4, name: "DStv Compact Plus", price: "₦3,000", days: "30 Days" },
  { id: 5, name: "DStv Compact Plus", price: "₦3,000", days: "30 Days" },
  { id: 6, name: "DStv Stream Premium", price: "₦3,000", days: "30 Days" },
];

export default function ElectricityBills() {
  const [selectedNetwork, setSelectedNetwork] = React.useState(null);
  const [selectedAmount, setSelectedAmount] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [customAmount, setCustomAmount] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);
  const [meterNumber, setMeterNUmber] = React.useState("");

  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View style={style.headContainer}>
              {/* Back Icon */}
              <TouchableOpacity
                style={{
                  padding: 15,
                }}
                onPress={() => router.back()}
              >
                <Ionicons
                  name="arrow-back-circle-outline"
                  size={30}
                  color={Colors.gray}
                />
              </TouchableOpacity>

              {/* header */}
              <ThemedText style={style.Headtxt}>Electricity Bills</ThemedText>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Select network */}
              <View style={style.providerSection}>
                <ThemedText style={[style.Headtxt, { marginVertical: 10 }]}>
                  Select Provider
                </ThemedText>
                <View style={style.providerGrid}>
                  {networks.map((network) => (
                    <TouchableOpacity
                      key={network.id}
                      style={[
                        style.providerCard,
                        selectedNetwork?.id === network.id &&
                          style.selectedNetworkCard,
                      ]}
                      onPress={() => setSelectedNetwork(network)}
                    >
                      <Image
                        source={network.image}
                        style={style.providerImage}
                      />
                      <Text style={style.providerName}>{network.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Meter Info */}
              <View style={{ marginBottom: 20 }}>
                <ThemedText
                  style={{
                    fontSize: 14,
                    fontFamily: "PoppinsMedium",
                    marginHorizontal: 20,
                  }}
                >
                  Meter Information
                </ThemedText>

                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Enter meter number"
                  placeholderTextColor="#7F7F7F"
                  autoCorrect={false}
                  style={style.input}
                  value={meterNumber}
                  onChangeText={setMeterNUmber}
                />

                {/* button */}
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.Primary,
                    borderRadius: 100,
                    padding: 13,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../../assets/images/searchIcon.png")}
                    style={{ width: 13.3, height: 13.3 }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "PoppinsMedium",
                      color: Colors.white,
                    }}
                  >
                    Verify Meter
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={style.networkSection}>
                <ThemedText
                  style={[
                    style.Headtxt,
                    { fontSize: 15, marginBottom: 10, marginHorizontal: 20 },
                  ]}
                >
                  Select Amount
                </ThemedText>
                <View style={style.amountGrid}>
                  {amounts.map((amount, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        style.amountCard,
                        selectedAmount === amount && style.selectedAmountCard,
                      ]}
                      onPress={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                    >
                      <Text
                        style={[
                          style.amountText,
                          selectedAmount === amount && style.selectedAmountText,
                        ]}
                      >
                        {amount}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {/* transaction summary */}
                <View style={{ marginBottom: 200, marginTop: 30 }}>
                  <ThemedText style={[style.Headtxt, { fontSize: 15 }]}>
                    Transaction Summary
                  </ThemedText>

                  {/* network */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Provider:</Text>
                    <ThemedText style={style.transBlkTxt}>
                      {selectedNetwork ? selectedNetwork.name : "-"}
                    </ThemedText>
                  </View>

                  {/* smart card */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Meter:</Text>
                    <ThemedText style={style.transBlkTxt}>
                      {meterNumber || "-"}
                    </ThemedText>
                  </View>

                  {/* Data plan */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Customer:</Text>
                    <ThemedText style={style.transBlkTxt}>{"-"}</ThemedText>
                  </View>

                  {/* Amount */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Amount:</Text>
                    <ThemedText style={style.transBlkTxt}>
                      {selectedAmount || customAmount || "-"}
                    </ThemedText>
                  </View>

                  {/* divider */}
                  <View style={style.divider}></View>

                  {/* total */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Total:</Text>
                    <ThemedText style={style.transBlkTxt}>
                      {selectedAmount || customAmount || "-"}
                    </ThemedText>
                  </View>

                  {/* button */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.Primary,
                      borderRadius: 100,
                      padding: 15,
                      marginHorizontal: 20,
                      marginVertical: 30,
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../../../assets/images/payElectricityBills.png")}
                      style={{ width: 10.5, height: 20.17 }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: "PoppinsMedium",
                        color: Colors.white,
                      }}
                    >
                      Pay Electricity Bill
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={style.overlay}>
            <TouchableWithoutFeedback>
              <View style={style.bottomSheet}>
                <Text style={style.headSheetTxt}>Confirm Purchase</Text>
                {/* sub text */}
                <Text style={style.subSheetTxt}>
                  Please confirm your purchase
                </Text>

                {/* transaction history */}
                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Network:</Text>
                    <Text style={style.transBlkTxt}>
                      {selectedNetwork ? selectedNetwork.name : "-"}
                    </Text>
                  </View>
                  {/* phone number */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Phone:</Text>
                    <Text style={style.transBlkTxt}>{phoneNumber}</Text>
                  </View>
                  {/* Data plan or Amount */}

                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Data Plan:</Text>
                    <Text style={style.transBlkTxt}>
                      {selectedData ? selectedData.size : "-"}
                    </Text>
                  </View>

                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Amount:</Text>
                    <Text style={style.transBlkTxt}>
                      {selectedData
                        ? selectedData?.price
                        : selectedAmount || customAmount}
                    </Text>
                  </View>
                  {/* divider */}
                  <View style={style.divider}></View>
                  {/* total */}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Total:</Text>
                    <Text style={style.transBlkTxt}>
                      {selectedData
                        ? selectedData?.price
                        : selectedAmount || customAmount}
                    </Text>
                  </View>
                </View>

                {/* buttons */}
                <View
                  style={{
                    flexDirection: "row",
                    padding: 20,
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                  }}
                >
                  {/* cancel */}
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={{
                      borderWidth: 1,
                      borderColor: Colors.gray,
                      borderRadius: 8,
                      paddingHorizontal: 30,
                      paddingVertical: 10,
                    }}
                  >
                    <Text style={style.headSheetTxt}>Cancel</Text>
                  </TouchableOpacity>

                  {/* confirm */}
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      alert("Purchase confirmed!");
                    }}
                    style={{
                      borderWidth: 1,
                      borderColor: Colors.Primary,
                      borderRadius: 8,
                      paddingHorizontal: 30,
                      paddingVertical: 10,
                      backgroundColor: Colors.Primary,
                    }}
                  >
                    <Text style={[style.headSheetTxt, { color: Colors.white }]}>
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ThemedContainer>
  );
}

const style = StyleSheet.create({
  headContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  Headtxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginHorizontal: 10,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    margin: 20,
  },
  mainPinTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
  },
  subPinTxt: {
    fontFamily: "PoppinsMedium",
    color: Colors.green,
    fontSize: 10,
  },

  // Network Section
  providerSection: {
    marginHorizontal: 20,
  },
  providerImage: {
    width: 35,
    height: 35,
  },
  providerGrid: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  providerCard: {
    // flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.gray,
    marginBottom: 20,
    height: 95,
    width: 113,
    gap: 5,
  },
  providerName: {
    fontFamily: "PoppinsBold",
    fontSize: 10,
  },
  selectedNetworkCard: {
    borderColor: Colors.Primary,
    backgroundColor: "#D4E4FA",
    elevation: 5,
  },

  transGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  transGrayTxt: {
    color: Colors.gray,
    fontFamily: "PoppinsMedium",
    fontSize: 14,
    marginVertical: 5,
  },
  transBlkTxt: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    marginVertical: 5,
    color: Colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 20,
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
  },
  // modal
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  headSheetTxt: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
  },
  subSheetTxt: {
    fontSize: 15,
    fontFamily: "PoppinsMedium",
    color: Colors.gray,
    textAlign: "center",
  },

  input: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: "center",
    paddingLeft: 40,
    marginBottom: 20,
  },

  // Data Plans
  dataPlansContainer: {
    gap: 20,
    marginBottom: 20,
    marginHorizontal: 8,
  },
  dataPlanCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    borderWidth: 2,
    borderColor: "transparent",
    marginHorizontal: 10,
    height: 56,
  },
  selectedDataPlanCard: {
    borderColor: Colors.Primary,
    backgroundColor: Colors.white,
  },
  dataPlanLeft: {
    gap: 4,
  },
  dataPlanSize: {
    fontSize: 15,
    color: Colors.text,
    fontFamily: "PoppinsSemiBold",
  },
  dataPlanDays: {
    fontSize: 13,
    color: Colors.gray,
    fontFamily: "PoppinsRegular",
  },
  selectedDataPlanText: {
    color: Colors.Primary,
  },
  selectedDataPlanSubText: {
    color: Colors.Primary,
    opacity: 0.7,
  },
  dataPlanPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    fontFamily: "PoppinsSemiBold",
  },

  //   Amount
  amountGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  amountCard: {
    width: 96,
    height: 36,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedAmountCard: {
    borderColor: Colors.Primary,
    backgroundColor: "#E8F4FF",
  },
  amountText: {
    fontSize: 12,
    // fontWeight: "600",
    fontFamily: "PoppinsSemiBold",
    color: Colors.text,
  },
  selectedAmountText: {
    color: Colors.Primary,
  },
});
