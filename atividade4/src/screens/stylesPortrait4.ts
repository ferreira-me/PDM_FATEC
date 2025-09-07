import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const stylesPortrait = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#FFA07A", // cor título portrait
  },
  middle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA8072", // salmão
  },
  bottom: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6347", // tomate
  },
});

export default stylesPortrait;
