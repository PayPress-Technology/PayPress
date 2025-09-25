import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function Contact_us() {
  return (
    <ThemedContainer>
      {/* main image */}
      <View style={{ marginHorizontal: 15 }}>
        <ThemedText style={styles.headingTxt}>Hello</ThemedText>
        <Text style={styles.SubheadingTxt}>We want to hear from you</Text>
      </View>
      <View style={styles.Imgcontainer}>
        <Image
          source={require("../../assets/images/contactUs_Dash.png")}
          style={styles.img}
        />
      </View>
      {/* end */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* options */}
        <View style={styles.mainContainer}>
          {/* office Address */}
          <View style={styles.Container}>
            <View>
              <ThemedText style={styles.headingTxt}>Office Address</ThemedText>
              <Text style={styles.SubheadingTxt}>
                123, Anywhere St., Any City, ST{"\n"}12345
              </Text>
            </View>
            <TouchableOpacity style={styles.BTN}>
              <Text style={[styles.SubheadingTxt, { color: Colors.white }]}>
                COPY
              </Text>
            </TouchableOpacity>
            {/* End */}
          </View>
          {/* divider */}
          <View style={styles.divider}></View>
          {/* End */}

          {/* Phone Number */}
          <View style={styles.Container}>
            <View>
              <Image
                source={require("../../assets/images/phone_icon.png")}
                style={styles.Img}
              />
            </View>
            <View>
              <ThemedText style={styles.headingTxt}>Phone Number</ThemedText>
            </View>
            <TouchableOpacity style={styles.BTN}>
              <Text style={[styles.SubheadingTxt, { color: Colors.white }]}>
                Call Now
              </Text>
            </TouchableOpacity>
            {/* End */}
          </View>
          {/* divider */}
          <View style={styles.divider}></View>
          {/* End */}

          {/* Email Address */}
          <View style={styles.Container}>
            <View>
              <Image
                source={require("../../assets/images/email_icon.png")}
                style={styles.Img}
              />
            </View>
            <View>
              <ThemedText style={styles.headingTxt}>Email Address</ThemedText>
            </View>
            <TouchableOpacity style={styles.BTN}>
              <Text style={[styles.SubheadingTxt, { color: Colors.white }]}>
                COPY
              </Text>
            </TouchableOpacity>
            {/* End */}
          </View>
          {/* divider */}
          <View style={styles.divider}></View>
          {/* End */}

          {/* Instagram */}
          <TouchableOpacity style={styles.Container}>
            <View>
              <Image
                source={require("../../assets/images/instagram_icon.png")}
                style={styles.Img}
              />
            </View>
            <View>
              <ThemedText style={styles.headingTxt}>Instagram</ThemedText>
            </View>

            {/* End */}
          </TouchableOpacity>
          {/* divider */}
          <View style={styles.divider}></View>
          {/* End */}

          {/* faceBook */}
          <TouchableOpacity style={styles.Container}>
            <View>
              <Image
                source={require("../../assets/images/faceBook_icon.png")}
                style={styles.Img}
              />
            </View>
            <View>
              <ThemedText style={styles.headingTxt}>Facebook</ThemedText>
            </View>

            {/* End */}
          </TouchableOpacity>
          {/* divider */}
          <View style={styles.divider}></View>
          {/* End */}

          {/* twitter */}
          <TouchableOpacity style={styles.Container}>
            <View>
              <Image
                source={require("../../assets/images/twitter_icon.png")}
                style={styles.Img}
              />
            </View>
            <View>
              <ThemedText style={styles.headingTxt}>X</ThemedText>
            </View>

            {/* End */}
          </TouchableOpacity>
          {/* divider */}
          <View style={[styles.divider, { marginBottom: 100 }]}></View>
          {/* End */}
        </View>
      </ScrollView>
    </ThemedContainer>
  );
}
const styles = StyleSheet.create({
  mainContainer: {},
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    // color: Colors.darkMode,
  },
  SubheadingTxt: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
    marginVertical: 5,
    color: Colors.gray,
  },
  Imgcontainer: {
    // marginHorizontal: 20,
    padding: 5,
  },
  img: {
    width: "95%",
    height: 198,
    resizeMode: "contain",
    alignSelf: "center",
  },

  Container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 8,
    justifyContent: "flex-start",
    gap: 30,
    marginVertical: 10,
  },
  BTN: {
    backgroundColor: Colors.Primary,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#C3C3C3",
    marginHorizontal: 12,
    // marginTop: 5,
    width: "90%",
    alignSelf: "center",
  },
  Img: {
    resizeMode: "contain",
    width: 33,
    height: 33,
  },
});
