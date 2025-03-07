import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Counter = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 10);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Ahorros: {count}</Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Ionicons name="add-circle-outline" size={60} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} style={[styles.button, styles.resetButton]}>
        <Ionicons name="refresh-circle-outline" size={60} color="white" />
      </TouchableOpacity>
      <Button title="Volver a Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7e0c97',
  },
  counterText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
});

export default Counter;
