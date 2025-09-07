import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const stylesLandscape = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#FFFFE0", // amarelo claro
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD700", // dourado
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BDB76B", // amarelo escuro
  },
});

export default stylesLandscape;
