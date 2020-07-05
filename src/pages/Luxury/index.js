import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Animated,
  Dimensions,
  Easing,
  Text,
  FlatList,
} from "react-native";
import styles from "./styles";
import Card from "../../components/Card";
import cardItems from "./cardItems";

const { width, height } = Dimensions.get("screen");

const Luxury = ({ navigation }) => {
  const [alignment, setAligment] = useState(new Animated.Value(height));
  const [cardAlignment, setCardAligment] = useState(new Animated.Value(400));

  const AnimatedBackground = {
    height: alignment,
  };

  const AnimatedCards = {
    transform: [
      {
        translateX: cardAlignment,
      },
    ],
    height: height - height / 3,
  };

  const AnimateUI = () => {
    Animated.sequence([
      Animated.timing(alignment, {
        toValue: height / 3,
        duration: 800,
        easing: Easing.back(),
        useNativeDriver: false,
      }),
      Animated.timing(cardAlignment, {
        toValue: 0,
        duration: 700,
        easing: Easing.linear(),
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    AnimateUI();
  }, []);

  const handlePress = (id) => {
    const itemFilter = cardItems.find((item) => item.id == id);
    navigation.navigate("Details", { itemFilter });
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[{ width: width }, AnimatedBackground]}>
        <ImageBackground
          source={require("../../../assets/images/1.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.textView}>
            <Text style={styles.title}>Luxury</Text>
            <Text style={styles.description}>Stunning Places</Text>
          </View>
        </ImageBackground>
      </Animated.View>
      <Animated.View style={[styles.cardView, AnimatedCards]}>
        <FlatList
          data={cardItems}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              image={item.image}
              location={item.location}
              description={item.description}
              onPress={() => handlePress(item.id)}
            />
          )}
        />
      </Animated.View>
    </View>
  );
};

export default Luxury;
