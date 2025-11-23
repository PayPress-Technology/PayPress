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
  { id: 1, name: "MTN", image: require("../../../assets/images/MTN.png") },
  {
    id: 2,
    name: "Airtel",
    image: require("../../../assets/images/Airtel.png"),
  },
  { id: 3, name: "Glo", image: require("../../../assets/images/Glo.png") },
  {
    id: 4,
    name: "9Mobile",
    image: require("../../../assets/images/9Mobile.png"),
  },
];

// amounts
const amounts = [
  "₦100",
  "₦200",
  "₦500",
  "₦1,000",
  "₦2,000",
  "₦5,000",
  "₦10,000",
];

// data plan
const dataPlans = [
  { id: 1, size: "1GB", price: "₦350", days: "30 Days" },
  { id: 2, size: "2GB", price: "₦700", days: "30 Days" },
  { id: 3, size: "5GB", price: "₦1,500", days: "30 Days" },
  { id: 4, size: "10GB", price: "₦3,000", days: "30 Days" },
];

export default function Airtime() {
  const [selectedNetwork, setSelectedNetwork] = React.useState(null);
  const [selectedAmount, setSelectedAmount] = React.useState(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("Airtime");
  const [customAmount, setCustomAmount] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

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
              <ThemedText style={style.Headtxt}>Airtime & Data</ThemedText>
            </View>

            {/* Tabs */}
            <View style={style.tabsContainer}>
              {/* Airtime */}
              <TouchableOpacity
                style={[style.tab, activeTab === "Airtime" && style.activeTab]}
                onPress={() => setActiveTab("Airtime")}
              >
                <ThemedText
                  style={[
                    style.tabTxt,
                    activeTab === "Airtime" && style.activeTabTxt,
                  ]}
                >
                  Airtime
                </ThemedText>
              </TouchableOpacity>

              {/* Data */}
              <TouchableOpacity
                style={[style.tab, activeTab === "Data" && style.activeTab]}
                onPress={() => setActiveTab("Data")}
              >
                <ThemedText
                  style={[
                    style.tabTxt,
                    activeTab === "Data" && style.activeTabTxt,
                  ]}
                >
                  Data
                </ThemedText>
              </TouchableOpacity>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              {/* Select network */}
              <View style={style.networkSection}>
                <ThemedText style={[style.Headtxt, { marginVertical: 10 }]}>
                  Select Network
                </ThemedText>
                <View style={style.networkGrid}>
                  {networks.map((network) => (
                    <TouchableOpacity
                      key={network.id}
                      style={[
                        style.networkCard,
                        selectedNetwork?.id === network.id &&
                          style.selectedNetworkCard,
                      ]}
                      onPress={() => setSelectedNetwork(network)}
                    >
                      <Image
                        source={network.image}
                        style={style.networkImage}
                      />
                      <Text style={style.networkName}>{network.name}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Phone Number */}
              <View style={style.section}>
                <View style={style.inputContainer}>
                  <InputField
                    mainTxt="Phone Number"
                    holder="09057716700"
                    edit={true}
                    txtType="number-pad"
                    valueTxt={phoneNumber}
                    onChangeTxt={setPhoneNumber}
                  />
                </View>
              </View>

              {/* Airtime Content */}
              {activeTab === "Airtime" && (
                <View style={style.networkSection}>
                  <ThemedText
                    style={[style.Headtxt, { fontSize: 15, marginBottom: 10 }]}
                  >
                    Select Amount
                  </ThemedText>

                  {/* Custom Amount Input */}
                  <TextInput
                    style={style.customAmountInput}
                    placeholder={selectedAmount || "Enter custom amount"}
                    placeholderTextColor={Colors.gray}
                    keyboardType="numeric"
                    value={customAmount}
                    onChangeText={(text) => {
                      setCustomAmount(text);
                      setSelectedAmount(null);
                    }}
                  />

                  {/* transaction summary */}
                  <View style={{ marginBottom: 200 }}>
                    <ThemedText style={[style.Headtxt, { fontSize: 15 }]}>
                      Transaction Summary
                    </ThemedText>

                    {/* network */}
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Network:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {selectedNetwork ? selectedNetwork.name : "-"}
                      </ThemedText>
                    </View>

                    {/* phone number */}
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Phone:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {phoneNumber || "-"}
                      </ThemedText>
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
                    <View style={{ marginTop: 50 }}>
                      <CustonButton1
                        text={"Buy Airtime"}
                        onPress={() => {
                          if (!phoneNumber.trim()) {
                            alert("Phone number is required");
                            return;
                          }
                          if (!selectedNetwork) {
                            alert("Please select a network");
                            return;
                          }
                          if (!selectedAmount && !customAmount.trim()) {
                            alert("Please select or enter an amount");
                            return;
                          }
                          setModalVisible(true);
                        }}
                        color={Colors.Primary}
                        TxtColor={Colors.white}
                      />
                    </View>
                  </View>
                </View>
              )}

              {/* Data Content */}
              {activeTab === "Data" && (
                <View style={style.networkSection}>
                  <ThemedText
                    style={[style.Headtxt, { fontSize: 15, marginBottom: 10 }]}
                  >
                    Select Data Plan
                  </ThemedText>
                  <View style={style.dataPlansContainer}>
                    {dataPlans.map((plan) => (
                      <TouchableOpacity
                        key={plan.id}
                        style={[
                          style.dataPlanCard,
                          selectedData?.id === plan.id &&
                            style.selectedDataPlanCard,
                        ]}
                        onPress={() => setSelectedData(plan)}
                      >
                        <View style={style.dataPlanLeft}>
                          <Text
                            style={[
                              style.dataPlanSize,
                              selectedData?.id === plan.id &&
                                style.selectedDataPlanText,
                            ]}
                          >
                            {plan.size}
                          </Text>
                          <Text
                            style={[
                              style.dataPlanDays,
                              selectedData?.id === plan.id &&
                                style.selectedDataPlanSubText,
                            ]}
                          >
                            {plan.days}
                          </Text>
                        </View>
                        <Text
                          style={[
                            style.dataPlanPrice,
                            selectedData?.id === plan.id &&
                              style.selectedDataPlanText,
                          ]}
                        >
                          {plan.price}
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
                      <Text style={style.transGrayTxt}>Network:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {selectedNetwork ? selectedNetwork.name : "-"}
                      </ThemedText>
                    </View>

                    {/* phone number */}
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Phone:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {phoneNumber || "-"}
                      </ThemedText>
                    </View>

                    {/* Data plan */}
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Data Plan:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {selectedData ? selectedData.size : "-"}
                      </ThemedText>
                    </View>

                    {/* Amount */}
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Amount:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {selectedData ? selectedData.price : "-"}
                      </ThemedText>
                    </View>

                    {/* divider */}
                    <View style={style.divider}></View>

                    {/* total */}
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Total:</Text>
                      <ThemedText style={style.transBlkTxt}>
                        {selectedData ? selectedData.price : "-"}
                      </ThemedText>
                    </View>

                    {/* button */}
                    <View style={{ marginTop: 50 }}>
                      <CustonButton1
                        text={"Buy Data"}
                        onPress={() => {
                          if (!phoneNumber.trim()) {
                            alert("Phone number is required");
                            return;
                          }
                          if (!selectedNetwork) {
                            alert("Please select a network");
                            return;
                          }
                          if (!selectedData) {
                            alert("Please select a data plan");
                            return;
                          }
                          setModalVisible(true);
                        }}
                        color={Colors.Primary}
                        TxtColor={Colors.white}
                      />
                    </View>
                  </View>
                </View>
              )}
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
                  Please confirm your {activeTab.toLowerCase()} purchase
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
                  {activeTab === "Data" ? (
                    <View style={style.transGrid}>
                      <Text style={style.transGrayTxt}>Data Plan:</Text>
                      <Text style={style.transBlkTxt}>
                        {selectedData ? selectedData.size : "-"}
                      </Text>
                    </View>
                  ) : null}
                  <View style={style.transGrid}>
                    <Text style={style.transGrayTxt}>Amount:</Text>
                    <Text style={style.transBlkTxt}>
                      {activeTab === "Data"
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
                      {activeTab === "Data"
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

  // Tabs
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 0.5,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: Colors.Primary,
  },
  tabTxt: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    color: Colors.gray,
  },
  activeTabTxt: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: "PoppinsMedium",
  },

  // Network Section
  networkSection: {
    marginHorizontal: 20,
  },
  networkImage: {
    width: 30,
    height: 30,
  },
  networkGrid: {
    flexDirection: "row",
    gap: 10,
  },
  networkCard: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 20,
  },
  networkName: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },
  selectedNetworkCard: {
    borderColor: Colors.Primary,
    backgroundColor: "#D4E4FA",
  },
  inputContainer: {
    paddingHorizontal: 15,
  },
  section: {
    marginBottom: 10,
  },
  amountGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    marginBottom: 15,
  },
  amountCard: {
    width: "30%",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedAmountCard: {
    borderColor: Colors.Primary,
    backgroundColor: "#E8F4FF",
  },
  amountText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  selectedAmountText: {
    color: Colors.Primary,
  },
  customAmountInput: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 15,
    color: "#000",
    marginVertical: 30,
  },
  transGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
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

  // Data Plans
  dataPlansContainer: {
    gap: 12,
    marginBottom: 20,
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
});
