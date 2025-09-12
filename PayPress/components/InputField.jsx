import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import { Colors } from "../constants/Colors";

const InputField = ({ mainTxt, holder, txtType, edit }) => {
  return (
    <View>
      <Text style={styles.mainTxt}>{mainTxt}</Text>
      <TextInput
        keyboardType={txtType}
        autoCapitalize="none"
        placeholder={holder}
        placeholderTextColor="#7F7F7F"
        autoCorrect={false}
        style={styles.input}
        editable={edit}
      />
    </View>
  );
};
export default InputField;

const styles = StyleSheet.create({
  mainTxt: {
    fontSize: 14,
    fontFamily: "PoppinsMedium",
    padding: 5,
  },
  input: {
    width: "99%",
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    alignSelf: "center",
    padding: 10,
    marginBottom: 15,
  },
});
