import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    width: width * 0.95,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    height: 200,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  cardLocation: {
    fontSize: 12,
    color: "#777",
    marginLeft: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#777",
    marginLeft: 10,
  },
  cardImage: {
    flex: 0.4,
  },
  image: { width: "100%", height: "100%", borderRadius: 20 },
  viewDescription: { flex: 0.6, marginHorizontal: 12, overflow: "hidden" },
});
