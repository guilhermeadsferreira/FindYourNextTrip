import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { withNavigation } from "@react-navigation/compat";

const ImageButton = ({ title, description, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.imageButton}
      onPress={() => navigation.navigate(title)}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(ImageButton);
