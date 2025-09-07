import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Dimensions } from "react-native";

import stylesPortrait from "./stylesPortrait4";
import stylesLandscape from "./stylesLandscape4";

const Exercicio4: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onChange = ({ window }: { window: any }) => {
    setIsPortrait(window.height >= window.width);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange);

    // checa orientação inicial
    const { width, height } = Dimensions.get("window");
    setIsPortrait(height >= width);

    return () => {
      if (typeof subscription?.remove === "function") {
        subscription.remove();
      }
    };
  }, []);

  const styles = isPortrait ? stylesPortrait : stylesLandscape;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Exercicio 4</Text>

      <View style={styles.middle}>
        <Text>Middle</Text>
      </View>

      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default Exercicio4;
