import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Linking, Alert } from 'react-native';

export default function Exercicio2() {
  const phoneNumber = '+5511999999999'; // coloque aqui o número desejado

  const makeCall = async () => {
    const url = `tel:${phoneNumber}`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Erro', 'Não foi possível abrir o discador.');
      }
    } catch {
      Alert.alert('Erro', 'Ocorreu um problema ao tentar iniciar a chamada.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={makeCall}>
        <Text style={styles.buttonText}>Ligar para {phoneNumber}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
