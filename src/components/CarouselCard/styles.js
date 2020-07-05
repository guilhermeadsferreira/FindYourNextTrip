import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  carouselCard: {
    marginHorizontal: 10,
    width: width - 40,
    height: height / 3,
    borderRadius: 5,
    paddingTop: 5,
    backgroundColor: "#FFF",
  },
  carouselHeader: {
    alignItems: "center",
  },
  carouselHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  carouselHeaderIndicator: {
    marginVertical: 10,
    backgroundColor: "#A50",
    width: 70,
    height: 5,
    borderRadius: 50,
  },
  carouselBody: {
    padding: 20,
  },
  carouselData: {
    textAlign: "justify",
    fontSize: 16,
  },
  carouselButton: {
    width: width / 1.5,
    height: 50,
  },
  carouselButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
