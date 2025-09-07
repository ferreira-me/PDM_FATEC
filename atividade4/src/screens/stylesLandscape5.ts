import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const stylesLandscape = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFD700", // dourado
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
    borderColor: "#333",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  nomeItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "#333",
  },
});

export default stylesLandscape;
