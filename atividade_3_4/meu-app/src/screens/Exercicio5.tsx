import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Exercicio5() {
  const [contacts, setContacts] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // Pede permissão para acessar os contatos
        const { status } = await Contacts.requestPermissionsAsync();

        if (status === 'granted') {
          // Busca somente o campo "FirstName"
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.FirstName],
          });

          if (data.length > 0) {
            // Filtra apenas os nomes não nulos
            const firstNames = data
              .map(contact => contact.firstName)
              .filter((name): name is string => Boolean(name));

            setContacts(firstNames);
          }
        } else {
          Alert.alert('Permissão negada', 'Não foi possível acessar os contatos.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Ocorreu um problema ao buscar os contatos.');
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Contatos (Primeiro Nome)</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.contact}>{item}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 8,
  },
});
