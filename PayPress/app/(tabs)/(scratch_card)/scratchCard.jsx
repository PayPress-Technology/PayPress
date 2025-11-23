import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import ThemedContainer from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";

export default function ScratchCard() {
  const [query, setQuery] = useState("");

  // Categories data
  const categories = [
    {
      id: 1,
      name: "JAMB",
      image: require("../../../assets/images/JAMB.png"),
      route: "/jamb",
    },
    {
      id: 2,
      name: "WAEC",
      image: require("../../../assets/images/WAEC.png"),
      route: "/waec",
    },
    {
      id: 3,
      name: "NECO",
      image: require("../../../assets/images/NECO.png"),
      route: "/neco",
    },
  ];

  // Filter categories based on search query
  const filteredData = categories.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Render category item
  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => router.navigate(item.route)}>
      <View>
        <View style={style.mainContainer}>
          <Image source={item.image} style={style.Img} />
          <ThemedText style={style.mainPinTxt}>
            {item.name} {"\n"}
            <ThemedText style={style.subPinTxt}>{item.name}</ThemedText>
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ThemedContainer>
      <ThemedText style={style.addBVNtxt}>Scratch Card</ThemedText>

      {/* Search Field */}
      <View style={style.searchWrapper}>
        <Ionicons
          name="search"
          size={22}
          color="#666"
          style={style.searchIcon}
        />
        <TextInput
          style={style.inputFD}
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          placeholderTextColor={Colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Categories List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategory}
        ListEmptyComponent={
          query.length > 0 && (
            <ThemedText style={style.noResultTxt}>No result found</ThemedText>
          )
        }
        ItemSeparatorComponent={() => <View style={style.divider} />}
      />
    </ThemedContainer>
  );
}

const style = StyleSheet.create({
  addBVNtxt: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    padding: 20,
  },
  searchWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: 30,
    top: "50%",
    transform: [{ translateY: -10 }],
    zIndex: 1,
  },
  inputFD: {
    width: "90%",
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.white,
    paddingHorizontal: 40,
    marginTop: 10,
    alignSelf: "center",
    color: Colors.text,
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
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
  mainPinTxt: {
    fontFamily: "PoppinsMedium",
    fontSize: 16,
  },
  subPinTxt: {
    fontFamily: "PoppinsMedium",
    color: Colors.green,
    fontSize: 10,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray,
    marginHorizontal: 12,
    width: "80%",
    alignSelf: "center",
  },
  noResultTxt: {
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
  },
});
