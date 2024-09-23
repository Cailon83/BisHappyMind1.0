import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = () => {
    if (nome && curso && email) {
      // Validação simples
      Alert.alert('Cadastro Realizado', `Bem-vindo, ${nome}!`);
      navigation.navigate('index'); // Navega para a próxima tela
    } else {
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome" 
        value={nome} 
        onChangeText={setNome} 
      />

      <Text style={styles.label}>Curso:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu curso" 
        value={curso} 
        onChangeText={setCurso} 
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu email" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
      />

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#D3B6F6',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#8A2BE2',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
});

export default Cadastro;
