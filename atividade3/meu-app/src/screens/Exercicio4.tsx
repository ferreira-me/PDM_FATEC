import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Exercicio4() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão negada', 'Não foi possível acessar os contatos.');
          return;
        }

        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // 🔎 Filtrar contatos cujo nome começa com "C" ou "c"
          const filtered = data.filter(
            (contact: Contacts.Contact) =>
                contact.name && contact.name.trim().toUpperCase().startsWith('C')
          );
          setContacts(filtered);
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os contatos.');
      }
    };

    loadContacts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contatos com a letra C</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.contact}>
            {item.name} - {item.phoneNumbers?.[0]?.number ?? 'Sem número'}
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum contato encontrado.</Text>}
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
    marginBottom: 16,
    color: '#fff',
  },
  contact: {
    fontSize: 16,
    marginVertical: 6,
    color: '#ccc',
  },
  empty: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
});
