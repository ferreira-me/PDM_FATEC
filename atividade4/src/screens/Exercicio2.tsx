import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Dimensions, StyleSheet } from "react-native";

const Exercicio2: React.FC = () => {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      setOrientation(width > height ? "landscape" : "portrait");
    };

    // Listener novo
    const subscription = Dimensions.addEventListener("change", updateOrientation);

    // Chama uma vez para iniciar
    updateOrientation();

    // Remove corretamente o listener
    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: orientation === "portrait" ? "column" : "row" },
      ]}
    >
      <View style={[styles.box, { backgroundColor: "#FFA07A" }]}>
        <Text>Top</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#FA8072" }]}>
        <Text>Middle</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#FF6347" }]}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default Exercicio2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
