import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    width: width / 1.1,
    alignSelf: "center",
    padding: 8,
    borderRadius: 12,
    marginTop: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.3,
  },
  input: {
    color: "#000",
    flex: 9,
    paddingLeft: 10,
    paddingTop: 1,
  },
  inputIcon: {
    paddingLeft: 5,
    paddingTop: 5,
  },
});
