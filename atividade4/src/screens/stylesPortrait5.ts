import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const stylesPortrait = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FF6347", // vermelho tomate
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  nomeItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "#fff",
  },
});

export default stylesPortrait;
