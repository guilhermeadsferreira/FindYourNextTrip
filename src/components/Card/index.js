import React from "react";
import { View, TouchableOpacity, Animated, Text, Image } from "react-native";
import styles from "./styles";

const Card = ({ image, title, description, location, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Animated.View style={[{ flexDirection: "row" }]}>
        <View style={styles.cardImage}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.viewDescription}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardLocation}>{location}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Card;
