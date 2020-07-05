import { StyleSheet, StatusBar, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  viewTitle: { flex: 0.7 },
  viewImage: { flex: 0.3, alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight - 10,
  },
  headerText: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  imageContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  imageView: {
    width: width / 2.3,
    height: height / 3,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
