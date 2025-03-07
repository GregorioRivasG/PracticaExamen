import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const perfil = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e2f' }}>
      <Image 
        source={{ uri: 'https://i0.wp.com/es.rollingstone.com/wp-content/uploads/2022/10/Roberto-Musso-y-el-universo-de-la-mente-humana-1.jpg?w=1280&ssl=1' }} 
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff'  }}>Roberto Musso</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>robertomusso@utd.edu.mx</Text>

      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ marginLeft: 10, color: 'white' }}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
    
  );
};



export default perfil;
