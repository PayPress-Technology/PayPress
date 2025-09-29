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
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import CustonButton1 from "@/components/CustomButton1";
import { navigate } from "expo-router/build/global-state/routing";
import { useNavigation } from "@react-navigation/native";
import { useThemeContext } from "../ThemeContext";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function My_account() {
  const [enableFaceID, setEnableFaceID] = useState(true);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();
  const { isDark, toggleTheme } = useThemeContext();

  const toggleEnableFaceID = () => {
    setEnableFaceID((previousState) => !previousState);
  };
  const toggleShowDashboard = () => {
    setShowDashboard((previousState) => !previousState);
  };
  const toggleEnableDarkMode = () => {
    toggleTheme();
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    // Add your logout logic here (clear async storage, navigate, etc.)
    router.replace("/login");
  };

  // Add the logout function

  return (
    <ThemedContainer>
      <View style={styles.accntContainer}>
        <View>
          <ThemedText style={styles.headingTxt}>My Account</ThemedText>
          <ThemedText style={styles.SubheadingTxt}>User name</ThemedText>
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
          {/* ThemedText */}
          <View style={styles.toggles}>
            <ThemedText style={styles.togglesTxt}>
              Enable Finger Print/Face ID
            </ThemedText>

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
          {/* ThemedText */}
          <View style={styles.toggles}>
            <ThemedText style={styles.togglesTxt}>
              Show DashBoard Account Balance
            </ThemedText>

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
            <ThemedText style={styles.dashTxt}>
              Grow Your Savings{"\n"}Without Stress {"\n"} Start small,dream big
            </ThemedText>
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
            <View style={styles.detailsContainer}>
              <Image
                source={require("../../assets/images/my_profile_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <ThemedText>My Profile</ThemedText>
            </View>

            <View>
              <ThemedText>{"›"}</ThemedText>
            </View>
          </TouchableOpacity>
          {/* End of Profile */}

          {/* Verify NIN */}
          {/* NIN */}
          <TouchableOpacity
            style={styles.navBgContainer}
            onPress={() => router.push("../verifyNIN")}
          >
            <View style={styles.detailsContainer}>
              <Image
                source={require("../../assets/images/verify_NIN_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <ThemedText>Verify NIN</ThemedText>
            </View>

            <View>
              <ThemedText>{"›"}</ThemedText>
            </View>
          </TouchableOpacity>
          {/* End of NIN */}

          {/* Lock funds */}
          {/* funds */}
          <TouchableOpacity
            style={styles.navBgContainer}
            onPress={() => router.push("/lockDashboard")}
          >
            <View style={styles.detailsContainer}>
              <Image
                source={require("../../assets/images/lock_funds_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <ThemedText>Lock Funds</ThemedText>
            </View>

            <View>
              <ThemedText>{"›"}</ThemedText>
            </View>
          </TouchableOpacity>
          {/* End of lock Funds */}

          {/* dark mode */}
          {/* my profile nav */}
          <View style={styles.navBgContainer}>
            <View style={styles.detailsContainer}>
              <Image
                source={require("../../assets/images/darkMode_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <ThemedText>Enable Dark Mode</ThemedText>
            </View>

            <View>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#E0E0E0", true: "#0B57BD" }}
                thumbColor={isDark ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#E0E0E0"
                onValueChange={toggleTheme}
                value={isDark}
              />
            </View>
          </View>
          {/* End of dark mode*/}

          {/* contact */}
          {/* contact */}
          <TouchableOpacity
            style={styles.navBgContainer}
            onPress={() => router.push("../contactUs")}
          >
            <View style={styles.detailsContainer}>
              <Image
                source={require("../../assets/images/contactUs_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <ThemedText>Contact Us</ThemedText>
            </View>

            <View>
              <ThemedText>{"›"}</ThemedText>
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
            <View style={styles.detailsContainer}>
              <Image
                source={require("../../assets/images/logOut_accnt.png")}
                contentFit="contain"
                style={{ width: 25, height: 25 }}
              />
              <ThemedText>Log Out</ThemedText>
            </View>

            <View>
              <ThemedText>{"›"}</ThemedText>
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
              <ThemedText style={styles.modalThemedText}>
                Are you sure you want to log out?
              </ThemedText>

              <View style={styles.btnRow}>
                <TouchableOpacity
                  style={[styles.modalBtn, { backgroundColor: Colors.Primary }]}
                  onPress={handleLogout}
                >
                  <ThemedText style={styles.btnThemedText}>Yes</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalBtn, { backgroundColor: Colors.Primary }]}
                  onPress={() => setShowLogoutModal(false)}
                >
                  <ThemedText style={styles.btnThemedText}>No</ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ThemedContainer>
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
    // color: Colors.darkMode,
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
  modalThemedText: {
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
  btnThemedText: {
    color: Colors.Secondary,
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
