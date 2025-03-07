import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hola}>HOME</Text>
      <Button title="Configuracion" onPress={() => navigation.navigate('configuracion')} />
      <Button title="Ahorros" onPress={() => navigation.navigate('ahorros')} />
      <Button title="Perfil" onPress={() => navigation.navigate('perfil')} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74147e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hola: {
    fontSize: 50,
    color: '#ffaaa0',
  },
});

export default HomeScreen;
