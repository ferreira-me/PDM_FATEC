import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Exercicio7() {
  const [images, setImages] = useState<string[]>([]);

  // Seleciona imagem da galeria
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  // Tira foto com a câmera
  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botões no canto superior direito */}
      <SafeAreaView style={styles.buttons}>
        <TouchableOpacity onPress={pickImage}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>

        <TouchableOpacity onPress={takePhoto}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Scroll com imagens */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: StatusBar.currentHeight || 0,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
    gap: 16,
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
});
