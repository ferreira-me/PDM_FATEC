import React from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

// --- CONSTANTES ---
const VIDEO_ID = 'M7lc1UVf-VE';
const WEB_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

// --- FUNÇÃO AUXILIAR ---
async function openYouTubeVideo(): Promise<void> {
  try {
    const candidates: string[] =
      Platform.select<string[]>({
        ios: [
          `youtube://watch?v=${VIDEO_ID}`,
          `youtube://www.youtube.com/watch?v=${VIDEO_ID}`,
        ],
        android: [
          `vnd.youtube://${VIDEO_ID}`,
          `vnd.youtube://watch?v=${VIDEO_ID}`,
        ],
        default: [],
      }) ?? [];

    for (const url of candidates) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        return;
      }
    }

    await Linking.openURL(WEB_URL);
  } catch {
    Alert.alert('Erro', 'Não foi possível abrir o YouTube.');
  }
}

// --- TELA EXERCÍCIO 1 ---
export default function Exercicio1(): React.ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.button} onPress={openYouTubeVideo}>
        <Text style={styles.buttonText}>Abrir vídeo no YouTube</Text>
      </TouchableOpacity>
      <Text style={styles.hint}>
        Dica: altere o VIDEO_ID no topo do arquivo para outro vídeo.
      </Text>
    </SafeAreaView>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: '#ff0000',
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
