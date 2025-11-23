import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  Modal,
  Image as RNImage,
} from "react-native";
import { Image } from "expo-image";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustonButton1 from "@/components/CustomButton1";
import { Ionicons } from "@expo/vector-icons";
import DropdownField from "../../../components/DropDown";
import InputField from "@/components/InputField";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { router } from "expo-router";

const operators = [
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

export default function Neco() {
  const [PhoneNumer, setPhoneNumber] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedOperator, setSelectedOperator] = React.useState(null);

  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
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
                <ThemedText style={style.Headtxt}>Neco</ThemedText>
              </View>

              {/* JAMB */}

              <View>
                <View style={style.mainContainer}>
                  <Image
                    source={require("../../../assets/images/NECO.png")}
                    style={style.Img}
                  />

                  <ThemedText style={style.mainPinTxt}>
                    NECO {"\n"}
                    <Text style={style.subPinTxt}>NECO</Text>
                  </ThemedText>
                </View>
              </View>

              {/* End */}

              {/* fields */}
              <View>
                <DropdownField
                  label="Service Type"
                  value="Result Checker PIN"
                  onPress={() => {}}
                />
              </View>

              <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                <InputField
                  mainTxt="Amount"
                  holder="Enter Amount"
                  edit={true}
                  txtType="number-pad"
                  valueTxt={amount}
                  onChangeTxt={setAmount}
                />
                <InputField
                  mainTxt={"Phone Number"}
                  holder={"09057716700"}
                  txtType={"number-pad"}
                  edit={true}
                  valueTxt={PhoneNumer}
                  onChangeTxt={setPhoneNumber}
                />
              </View>
              <DropdownField
                label="Network Operator"
                value={
                  selectedOperator ? selectedOperator.name : "Select Operator"
                }
                onPress={() => setModalVisible(true)}
              />

              {/* button */}
              <View style={{ marginVertical: 40 }}>
                <CustonButton1
                  text={"Proceed to payment"}
                  onPress={() => {
                    if (!amount.trim()) {
                      alert("Enter Amount");
                      return;
                    }

                    if (!PhoneNumer.trim()) {
                      alert("Enter phone number");
                      return;
                    }

                    if (!selectedOperator) {
                      alert("Select network operator");
                      return;
                    }
                    //   router.push("/profile");
                  }}
                  color={Colors.Primary}
                  TxtColor={Colors.white}
                />
              </View>
            </View>

            {/*  */}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* Bottom card */}
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
                {/* Header */}
                <View style={style.sheetHeader}>
                  <Text style={style.sheetHeaderText}>
                    Select phone operator
                  </Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#000" />
                  </TouchableOpacity>
                </View>

                {/* Operator List */}
                <View style={style.listContainer}>
                  {operators.map((operator, index) => (
                    <View key={operator.id}>
                      <TouchableOpacity
                        style={style.operatorItem}
                        onPress={() => {
                          setSelectedOperator(operator);
                          setModalVisible(false);
                        }}
                      >
                        <View style={style.operatorContent}>
                          <RNImage
                            source={operator.image}
                            style={style.operatorImage}
                          />
                          <Text style={style.operatorName}>
                            {operator.name}
                          </Text>
                        </View>
                        {selectedOperator?.id === operator.id && (
                          <Ionicons
                            name="checkmark"
                            size={24}
                            color="#40C0E7"
                          />
                        )}
                      </TouchableOpacity>
                      {index < operators.length - 1 && (
                        <View style={style.divider} />
                      )}
                    </View>
                  ))}
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
    // color: Colors.darkMode,
  },
  mainContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    margin: 20,
  },
  Img: {
    resizeMode: "contain",
    height: 35,
    width: 35,
  },
  networkImg: {
    resizeMode: "contain",
    height: 25,
    width: 25,
  },
  mainPinTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    // color: Colors.darkMode,
  },
  subPinTxt: {
    fontFamily: "PoppinsMedium",
    color: Colors.green,
    fontSize: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginHorizontal: 20,
  },
  netTxt: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },
  netImgContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  // Bottom Sheet Modal Styles
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  sheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  sheetHeaderText: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    color: Colors.darkMode,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  operatorItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  operatorContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  operatorImage: {
    width: 25,
    height: 25,
    borderRadius: 16,
  },
  operatorName: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
  },
});
