import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/CustomButton1";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
const { width } = Dimensions.get("window");

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingData = [
    {
      id: 1,
      title: "The smarter",
      subtitle: " way to save, stress-free",
      image: require("../assets/images/onbording1.png"),
      colors: ["#FFFFFF", "#3498DB"],
    },
    {
      id: 2,
      title: "Built to protect ",
      subtitle: " your every penny",
      image: require("../assets/images/onbording2.png"),
      colors: ["#FFFFFF", "#2ECC71"],
    },
    {
      id: 3,
      title: "Automate your ",
      subtitle: "savings. Live freely",
      image: require("../assets/images/onboarding3.png"),
      colors: ["#FFFFFF", "#9B59B6"],
    },
    {
      id: 4,
      title: "Crush your financial  ",
      subtitle: "goals, one naira at a time",
      image: require("../assets/images/onBoarding4.png"),
      colors: ["#FFFFFF", "#9B59B6"],
    },
  ];
  const nextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to main app or login screen
      router.push("./home"); // or wherever you want to go
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const skipOnboarding = () => {
    router.push("./home"); // or wherever you want to go
  };

  const currentData = onboardingData[currentIndex];
  return (
    <ThemedContainer>
      <FlatList
        data={onboardingData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.content, { width }]}>
            <Image source={currentData.image} style={styles.bgImage} />

            <ThemedText style={styles.subTxt}>{currentData.title}</ThemedText>

            <ThemedText style={styles.subTxt}>
              {currentData.subtitle}
            </ThemedText>
          </View>
        )}
        onScroll={(e) => {
          const slide = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(slide);
        }}
        scrollEventThrottle={16}
      />

      {/* Bottom Indicator Line */}

      <View style={styles.bottomIndicator}>
        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Page Indicators */}
          <View style={styles.pageIndicatorContainer}>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.pageIndicator,
                  index === currentIndex
                    ? styles.activePageIndicator
                    : styles.inactivePageIndicator,
                ]}
              />
            ))}
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          {" "}
          <CustomButton
            text={"Create Account"}
            onPress={() => router.navigate("./signUp")}
            color="#FFD700"
            TxtColor={Colors.darkMode}
          />
        </View>

        <View>
          <CustomButton
            text={"Login"}
            onPress={() => router.navigate("./login")}
            color={Colors.white}
            TxtColor={Colors.darkMode}
          />
        </View>
      </View>
    </ThemedContainer>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bgImage: {
    alignSelf: "center",
    resizeMode: "contain",
    height: "70%",
    width: width * 0.8,
    marginVertical: 20,
  },
  // mainTxt: {
  //   fontWeight: "600",
  //   fontSize: 16,
  //   textAlign: "center",
  //   color: "#333",
  //   marginBottom: 2,
  // },
  subTxt: {
    textAlign: "center",
    fontSize: 16,
    // color: Colors.darkMode,
    lineHeight: 24,
    paddingHorizontal: 20,
    fontFamily: "PoppinsBold",
  },
  bottomSection: {
    paddingBottom: 10,
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  pageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    marginTop: 20,
  },
  activePageIndicator: {
    backgroundColor: Colors.white,
  },
  inactivePageIndicator: {
    backgroundColor: Colors.white,
    opacity: 0.3,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  navButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FFD700",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  nextButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  disabledButton: {
    opacity: 0.5,
  },
  bottomIndicator: {
    alignSelf: "center",
    width: "100%",
    height: "40%",
    backgroundColor: Colors.Primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "center",
  },
});
