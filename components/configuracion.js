import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExampleSettings = ({ navigation }) => {
  const handleSettingPress = (setting) => {
    alert(`${setting}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#1e1e2f'}}>
      <Text style={{ fontSize: 20, marginBottom: 20 ,color: 'white'}}>Configuraciones</Text>
      
      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
        onPress={() => handleSettingPress('Tema cambiado')}
      >
        <Ionicons name="color-palette" size={24} color="white"  />
        <Text style={{ marginLeft: 10 , color: 'white'}}>Cambiar Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
        onPress={() => handleSettingPress('Idioma cambiado')}
      >
        <Ionicons name="globe" size={24} color="white" />
        <Text style={{ marginLeft: 10, color: 'white' }}>Cambiar Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
        onPress={() => handleSettingPress('Notificaciones habilitadas')}
      >
        <Ionicons name="notifications" size={24} color="white" />
        <Text style={{ marginLeft: 10 , color: 'white'}}>Habilitar Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Home')}
      >
      
        <Text style={{ marginLeft: 10 , color: 'white'}}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExampleSettings;
