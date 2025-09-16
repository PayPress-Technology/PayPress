import React from "react";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  ImageBackground,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import CustonButton1 from "@/components/CustomButton1";
import { navigate } from "expo-router/build/global-state/routing";
import { useNavigation } from "@react-navigation/native";

export default function My_account() {
  const [enableFaceID, setEnableFaceID] = useState(true);
  const [showDashboard, setShowDashboard] = useState(true);
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();

  const toggleEnableFaceID = () => {
    setEnableFaceID((previousState) => !previousState);
  };
  const toggleShowDashboard = () => {
    setShowDashboard((previousState) => !previousState);
  };
  const toggleEnableDarkMode = () => {
    setEnableDarkMode((previousState) => !previousState);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    // Add your logout logic here (clear async storage, navigate, etc.)
    router.replace("/login");
  };

  // Add the logout function

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.accntContainer}>
        <View>
          <Text style={styles.headingTxt}>My Account</Text>
          <Text style={styles.SubheadingTxt}>User name</Text>
        </View>

        {/* profile pic here */}
        <View style={styles.profilePic}></View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      >
        {/* toggles */}
        <View style={styles.togglesContainer}>
          {/* text */}
          <View style={styles.toggles}>
            <Text style={styles.togglesTxt}>Enable Finger Print/Face ID</Text>

            {/* switch icon */}
            <View>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#E0E0E0", true: "#0B57BD" }}
                thumbColor={enableFaceID ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
                onValueChange={toggleEnableFaceID}
                value={enableFaceID}
              />
            </View>
          </View>

          {/* toggles */}
          {/* text */}
          <View style={styles.toggles}>
            <Text style={styles.togglesTxt}>
              Show DashBoard Account Balance
            </Text>

            {/* switch icon */}
            <View>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#E0E0E0", true: "#0B57BD" }}
                thumbColor={showDashboard ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
                onValueChange={toggleShowDashboard}
                value={showDashboard}
              />
            </View>
          </View>
        </View>

        {/* main Dash */}
        <ImageBackground
          source={require("../../assets/images/FrameDashboard.png")}
          style={styles.dash_image}
          resizeMode="cover"
        >
          <View style={styles.dashMainContainer}>
            <Text style={styles.dashTxt}>
              Grow Your Savings{"\n"}Without Stress {"\n"} Start small,dream big
            </Text>
            <Image
              contentFit="contain"
              style={styles.dashIconImg}
              source={require("../../assets/images/savings_bro.png")}
            />
          </View>
        </ImageBackground>

        {/* Account navs */}
        <View style={styles.navsMainContainer}>
          {/* my profile nav */}
          <TouchableOpacity
            style={styles.navBgContainer}
            onPress={() => {
              router.push("/myProfile");
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/my_profile_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text>My Profile</Text>
            </View>

            <View>
              <Text>{">"}</Text>
            </View>
          </TouchableOpacity>
          {/* End of Profile */}

          {/* Verify NIN */}
          {/* NIN */}
          <TouchableOpacity style={styles.navBgContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/verify_NIN_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text>Verify NIN</Text>
            </View>

            <View>
              <Text>{">"}</Text>
            </View>
          </TouchableOpacity>
          {/* End of NIN */}

          {/* Lock funds */}
          {/* funds */}
          <TouchableOpacity style={styles.navBgContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/lock_funds_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text>Lock Funds</Text>
            </View>

            <View>
              <Text>{">"}</Text>
            </View>
          </TouchableOpacity>
          {/* End of lock Funds */}

          {/* dark mode */}
          {/* my profile nav */}
          <View style={styles.navBgContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/darkMode_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text>Enable Dark Mode</Text>
            </View>

            <View>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#E0E0E0", true: "#0B57BD" }}
                thumbColor={enableDarkMode ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
                onValueChange={toggleEnableDarkMode}
                value={enableDarkMode}
              />
            </View>
          </View>
          {/* End of dark mode*/}

          {/* contact */}
          {/* contact */}
          <TouchableOpacity style={styles.navBgContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/contactUs_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text>Contact Us</Text>
            </View>

            <View>
              <Text>{">"}</Text>
            </View>
          </TouchableOpacity>
          {/* End of contact */}

          {/* log out */}
          {/* log out */}
          <TouchableOpacity
            style={styles.navBgContainer}
            // onPress={() => {
            //   // setShowLogoutAlert((prev) => !prev);
            // }}
            onPress={() => setShowLogoutModal(true)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/logOut_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text>Log Out</Text>
            </View>

            <View>
              <Text>{">"}</Text>
            </View>
          </TouchableOpacity>
          {/* End of log out */}

          {/* End of navs */}
        </View>

        {/* Log Out Alert*/}
        <Modal
          transparent
          animationType="fade"
          visible={showLogoutModal}
          onRequestClose={() => setShowLogoutModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>
                Are you sure you want to log out?
              </Text>

              <View style={styles.btnRow}>
                <TouchableOpacity
                  style={[styles.modalBtn, { backgroundColor: Colors.Primary }]}
                  onPress={handleLogout}
                >
                  <Text style={styles.btnText}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalBtn, { backgroundColor: Colors.Primary }]}
                  onPress={() => setShowLogoutModal(false)}
                >
                  <Text style={styles.btnText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  accntContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  headingTxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",

    color: Colors.darkMode,
  },
  SubheadingTxt: {
    fontSize: 15,
    fontFamily: "PoppinsSemiBold",
    marginVertical: 5,

    color: Colors.gray,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: Colors.Secondary,
  },
  switch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  },
  togglesContainer: {
    gap: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  togglesTxt: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "PoppinsMedium",
  },
  toggles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  dash_image: {
    borderRadius: 15,
    height: 119,
    justifyContent: "flex-start",
    overflow: "hidden",
    // alignContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    marginTop: 20,
  },
  dashMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashTxt: {
    fontSize: 14,
    fontFamily: "PoppinsExtraBold",
    color: Colors.white,
    // marginLeft: 20,
    // marginTop: 10,
    width: 150,
    textAlign: "center",
    // justifyContent: "center",
    alignSelf: "center",
  },
  dashIconImg: {
    width: 159,
    height: 115.43,
    justifyContent: "space-between",
  },
  navsMainContainer: {
    marginTop: 10,
  },
  navBgContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderWidth: 0.5,
    padding: 10,
    borderColor: Colors.gray,
    marginVertical: 10,
  },

  // ---
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: Colors.white,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginBottom: 20,
    color: Colors.darkMode,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalBtn: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: Colors.Secondary,
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },
});
