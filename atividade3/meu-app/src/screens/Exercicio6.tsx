import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Exercicio6() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  // Abre a galeria
  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permissão negada', 'É necessário permitir acesso à galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  // Abre a câmera
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permissão negada', 'É necessário permitir acesso à câmera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtons}>
        <MaterialIcons
          name="photo"
          size={32}
          color="deepskyblue"
          onPress={openGallery}
          style={styles.icon}
        />
        <MaterialIcons
          name="photo-camera"
          size={32}
          color="deepskyblue"
          onPress={openCamera}
          style={styles.icon}
        />
      </View>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topButtons: {
    position: 'absolute',
    top: StatusBar.currentHeight || 20,
    right: 20,
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    padding: 8,
  },
  image: {
    marginTop: 100,
    width: '90%',
    height: 300,
    borderRadius: 10,
  },
});
