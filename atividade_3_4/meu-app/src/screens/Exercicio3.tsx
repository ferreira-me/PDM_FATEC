// --- IMPORTS ---
import React from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

// --- CONSTANTES ---
const INSTAGRAM_URL = 'https://www.instagram.com/fatec_jacarei';

// --- FUNÇÃO AUXILIAR ---
async function openInstagram(): Promise<void> {
  try {
    const supported = await Linking.canOpenURL(INSTAGRAM_URL);
    if (supported) {
      await Linking.openURL(INSTAGRAM_URL);
    } else {
      Alert.alert('Erro', 'Não foi possível abrir o Instagram.');
    }
  } catch {
    Alert.alert('Erro', 'Falha ao tentar abrir o Instagram.');
  }
}

// --- COMPONENTE PRINCIPAL ---
export default function Exercicio3(): React.ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.button} onPress={openInstagram}>
        <Text style={styles.buttonText}>Abrir Instagram Fatec Jacareí</Text>
      </TouchableOpacity>
      <Text style={styles.hint}>
        Toque no botão acima para abrir o perfil oficial da Fatec Jacareí no Instagram.
      </Text>
    </SafeAreaView>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: '#E1306C',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  hint: {
    color: '#ccc',
    marginTop: 16,
    textAlign: 'center',
  },
});
