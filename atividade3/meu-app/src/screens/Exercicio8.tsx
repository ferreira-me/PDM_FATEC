import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Exercicio8() {
  const [images, setImages] = useState<string[]>([]);

  // 📷 Abrir câmera
  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  // 🖼️ Abrir galeria
  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  // ❌ Remover imagem pelo índice
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botões de ação no topo */}
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={openGallery}>
          <MaterialIcons name="photo" size={32} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera}>
          <MaterialIcons name="photo-camera" size={32} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* Scroll com imagens */}
      <ScrollView>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.image} />
            {/* Botão de remover em cima da imagem */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => removeImage(index)}
            >
              <MaterialIcons name="close" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: StatusBar.currentHeight,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  imageWrapper: {
    marginBottom: 16,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 2,
  },
});
