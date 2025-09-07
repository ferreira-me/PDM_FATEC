import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Dimensions } from "react-native";

import stylesPortrait from "./stylesPortrait";
import stylesLandscape from "./stylesLandscape";

const Exercicio3: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onChange = ({ window }: { window: any }) => {
    setIsPortrait(window.height >= window.width);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange);

    // verificar já na abertura
    const { width, height } = Dimensions.get("window");
    setIsPortrait(height >= width);

    return () => {
      subscription.remove(); // ✅ suficiente para SDK 53
    };
  }, []);

  const styles = isPortrait ? stylesPortrait : stylesLandscape;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text>Top</Text>
      </View>
      <View style={styles.middle}>
        <Text>Middle</Text>
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </SafeAreaView>
  );
};

export default Exercicio3;
