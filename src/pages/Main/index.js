import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  Easing,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
const { height } = Dimensions.get("screen");
import CardItem from "./components/CardItem";
import items from "./menuItem";

export default function Main() {
  const [alignment, setAligment] = useState(new Animated.Value(height));

  const AnimateHeader = () => {
    Animated.timing(alignment, {
      toValue: 150,
      duration: 1500,
      easing: Easing.back(),
      useNativeDriver: false,
    }).start();
  };

  const AnimatedHeader = {
    height: alignment,
  };

  useEffect(() => {
    setTimeout(() => {
      AnimateHeader();
    }, 3000);
  }, []);

  return (
    <View style={styles.main}>
      <Animated.View style={[styles.header, AnimatedHeader]}>
        <View style={styles.viewTitle}>
          <Text style={styles.headerText}>Find Your Next Trip!</Text>
        </View>
        <View style={styles.viewImage}>
          <Image
            source={require("../../../assets/images/img.jpg")}
            style={styles.headerImage}
          />
        </View>
      </Animated.View>
      <Input placeholder="Search" />
      <FlatList
        style={{ alignSelf: "center", marginTop: 20 }}
        numColumns={2}
        data={items}
        key={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem
            title={item.title}
            description={item.description}
            imagePath={item.imagePath}
          />
        )}
      />
    </View>
  );
}
