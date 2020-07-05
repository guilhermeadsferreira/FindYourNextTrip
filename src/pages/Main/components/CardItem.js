import React from "react";
import { View, Image } from "react-native";
import ImageButton from "../../../components/ImageButton";
import styles from "../styles";
import { withNavigation } from "@react-navigation/compat";

const CardItem = ({ imagePath, title, description, navigation }) => {
  return (
    <View style={styles.imageView}>
      <Image source={imagePath} style={styles.image} />
      <ImageButton title={title} description={description} route={title} />
    </View>
  );
};

export default withNavigation(CardItem);
