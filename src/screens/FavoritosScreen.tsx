import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-paper';

export default function FavoritosScreen() {
  return (
    <View style={styles.container}>
      <Icon source="heart-outline" size={80} color="#ccc" />
      <Text variant="headlineSmall" style={styles.texto}>
        Nenhum favorito ainda
      </Text>
      <Text variant="bodyMedium" style={styles.subtexto}>
        Adicione personagens aos favoritos para vê-los aqui
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  texto: {
    marginTop: 16,
    color: '#666',
  },
  subtexto: {
    marginTop: 8,
    color: '#999',
    textAlign: 'center',
  },
});
