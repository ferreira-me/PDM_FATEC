import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../types';
import { useAuth } from '../hooks/useAuth';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const { login, carregando } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState<string | null>(null);

  async function onLogin() {
    setErro(null);
    try {
      if (!email || senha.length < 4) {
        setErro('Preencha e-mail e senha (mín. 4 caracteres).');
        return;
      }
      await login({ email, senha });
    } catch (e: any) {
      setErro(e?.message ?? 'Falha no login');
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <Text style={styles.title}>LOGIN</Text>
        <Text style={styles.hint}>
          Dica de perfil: use email terminando com{" "}
          <Text style={styles.bold}>@admin.com</Text> (admin) ou{" "}
          <Text style={styles.bold}>@gestor.com</Text> (manager). Ex.: maria@admin.com
        </Text>

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
          maxLength={20}
        />

        {!!erro && <Text style={styles.err}>{erro}</Text>}

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#0275d8' }]} onPress={onLogin} disabled={carregando}>
          {carregando ? <ActivityIndicator /> : <Text style={styles.btnText}>Entrar</Text>}
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#6c757d' }]} onPress={() => navigation.navigate('Registro')} disabled={carregando}>
          <Text style={styles.btnText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center' },
  card: { width: '90%', maxWidth: 320, gap: 12, backgroundColor: '#222', padding: 16, borderRadius: 8 },
  title: { color: '#9acd32', alignSelf: 'center', marginBottom: 4, fontWeight: '700' },
  hint: { color: '#bbb', fontSize: 12, marginBottom: 4, textAlign: 'center' },
  bold: { fontWeight: '700', color: '#ddd' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 6 },
  btn: { padding: 12, borderRadius: 6, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' },
  err: { color: '#ff6b6b', textAlign: 'center' },
});
