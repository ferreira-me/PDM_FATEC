import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function Exercicio1() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isPortrait ? '#FFA500' : '#1E90FF' },
      ]}
    >
      <Text style={styles.text}>
        {isPortrait ? 'Tela em modo portrait' : 'Tela em modo landscape'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
