import React, { useRef } from "react";
import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { FlatList } from "react-native";

const { width } = Dimensions.get("window");

const DATA = [
  {
    key: "1",
    title: "Welcome to PayPress",
    sub: "The smarter way to save, stress-free",
  },
  {
    key: "2",
    title: "Welcome to PayPress",
    sub: "The smarter way to save, stress-free",
  },
  {
    key: "3",
    title: "Welcome to PayPress",
    sub: "The smarter way to save, stress-free",
  },
  {
    key: "4",
    title: "Welcome to PayPress",
    sub: "The smarter way to save, stress-free",
  },
];

function OnboardingItem({ title, sub }: { title: string; sub: string }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#A3A3A3",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 15,
          marginTop: 10,
        }}
      >
        {sub}
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: "40%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 50,
        }}
      />
    </View>
  );
}

export default function HomeScreen() {
  const flatListRef = useRef<FlatList>(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Welcome to PayPress
      </Text>

      <View>
        <Text
          style={{
            color: "white",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 15,
            marginTop: "50%",
          }}
        >
          The smarter {"\n"} way to save, stress-free
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: "40%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,

          //   alignSelf: "baseline",
        }}
      ></View> */}

      <FlatList
        ref={flatListRef}
        data={DATA}
        renderItem={({ item }) => (
          <OnboardingItem title={item.title} sub={item.sub} />
        )}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
