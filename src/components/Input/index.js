import React from "react";
import { TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

export default function Input({ placeholder, onChangeText }) {
  return (
    <>
      <View style={styles.inputContainer}>
        <FontAwesome5
          name="search"
          size={20}
          color="#C8C8C8"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#C8C8C8"
        />
      </View>
    </>
  );
}
