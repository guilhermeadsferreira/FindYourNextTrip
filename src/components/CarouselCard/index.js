import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const CarouselCard = ({ header, data, onPress }) => {
  return (
    <View style={styles.carouselCard}>
      <View style={styles.carouselHeader}>
        <Text style={styles.carouselHeaderText}>{header}</Text>
        <View style={styles.carouselHeaderIndicator}></View>
      </View>
      <View style={styles.carouselBody}>
        <Text style={styles.carouselData}>{data}</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          left: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.carouselButton}>
          <LinearGradient
            colors={["#FA0", "#A50"]}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text style={styles.carouselButtonText}>Book Now!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarouselCard;
