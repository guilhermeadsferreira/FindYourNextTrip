import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  ImageBackground,
  Dimensions,
  Easing,
  Text,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("screen");
import SmallButton from "../../components/SmallButton";
import styles from "./styles";
import CarouselCard from "../../components/CarouselCard";

const Details = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState(false);
  const [alignment, setAlignment] = useState(new Animated.Value(height));

  useEffect(() => {
    setData(route.params.itemFilter);
    animateAlignment();
  }, []);

  const animateAlignment = () => {
    Animated.timing(alignment, {
      toValue: height / 1.7,
      duration: 800,
      easing: Easing.back(),
      useNativeDriver: false,
    }).start();
  };

  const AnimatedBackground = {
    height: alignment,
  };

  return (
    <View>
      <Animated.View style={AnimatedBackground}>
        <ImageBackground
          style={styles.imageBackground}
          source={
            data.image ? data.image : require("../../../assets/images/1.jpg")
          }
        >
          <View style={styles.viewOpacity}>
            <View style={styles.viewIcons}>
              <View style={{ flex: 0.5 }}>
                <SmallButton text="X" onPress={() => navigation.goBack()} />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-end" }}>
                <SmallButton
                  icon={liked ? "heart" : "hearto"}
                  color={liked ? "red" : "#FFF"}
                  onPress={() => setLiked(!liked)}
                />
              </View>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.location}>{data.location}</Text>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
      <View style={styles.carousel}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={300}
          contentOffset={{ x: 300 }}
          pagingEnabled={true}
        >
          <CarouselCard header="Pricing Information" data={data.paymentInfo} />
          <CarouselCard header="Description" data={data.detailedDescription} />
          <CarouselCard header="Information" data={data.description} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
