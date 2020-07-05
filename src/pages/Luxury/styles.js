import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  textView: {
    position: "absolute",
    left: width / 15,
    bottom: height / 20,
  },
  title: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
  },
  description: {
    color: "#FFF",
    marginVertical: 10,
  },
  cardView: {
    paddingTop: 10,
  },
});
