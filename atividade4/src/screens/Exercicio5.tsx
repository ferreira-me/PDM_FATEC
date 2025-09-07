import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Dimensions,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

import stylesPortrait from "./stylesPortrait5";
import stylesLandscape from "./stylesLandscape5";

const Exercicio5: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState<string[]>([]);

  // Detectar rotação
  const onChange = ({ window }: { window: any }) => {
    setIsPortrait(window.height >= window.width);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange);

    // Verificar orientação inicial
    const { width, height } = Dimensions.get("window");
    setIsPortrait(height >= width);

    return () => {
      if (typeof subscription?.remove === "function") {
        subscription.remove();
      }
    };
  }, []);

  const styles = isPortrait ? stylesPortrait : stylesLandscape;

  // Função para salvar nome quando pressionar "OK"
  const adicionarNome = () => {
    if (nome.trim() !== "") {
      setNomes([...nomes, nome.trim()]);
      setNome(""); // limpar campo
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Exercicio 5</Text>

      <View style={styles.inputContainer}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
          returnKeyType="done"
          onSubmitEditing={adicionarNome}
        />
      </View>

      {/* Lista de nomes */}
      <FlatList
        data={nomes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.nomeItem}>{item}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Exercicio5;
