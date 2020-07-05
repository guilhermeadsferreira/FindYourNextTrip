import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";

const SmallButton = ({ icon, text, onPress, color = "#FFF" }) => {
  return (
    <>
      {icon ? (
        <TouchableOpacity onPress={onPress} style={styles.smallButton}>
          <AntDesign color={color} name={icon} size={24} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.smallButton}>
          <Text style={{ color: color, fontSize: 24 }}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SmallButton;
