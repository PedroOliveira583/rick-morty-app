import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Icon, Appbar } from 'react-native-paper';

interface Props {
  navigation: any;
}

export default function SobreScreen({ navigation }: Props) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.toggleDrawer()}
        />
        <Appbar.Content title="Sobre" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.conteudo}>
            <Icon source="information" size={64} color="#6366f1" />
            
            <Text variant="headlineMedium" style={styles.titulo}>
              Rick & Morty App
            </Text>

            <Text variant="bodyLarge" style={styles.descricao}>
              Aplicativo desenvolvido com React Native, TypeScript e React
              Native Paper.
            </Text>

            <View style={styles.info}>
              <Text variant="titleMedium">🚀 Tecnologias</Text>
              <Text style={styles.item}>• React Native</Text>
              <Text style={styles.item}>• TypeScript</Text>
              <Text style={styles.item}>• React Navigation</Text>
              <Text style={styles.item}>• React Native Paper</Text>
            </View>

            <View style={styles.info}>
              <Text variant="titleMedium">📡 API</Text>
              <Text style={styles.item}>Rick and Morty API</Text>
              <Text style={styles.link}>rickandmortyapi.com</Text>
            </View>

            <Text variant="bodySmall" style={styles.versao}>
              Versão 1.0.0
            </Text>
          </Card.Content>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flex: 1,
  },
  conteudo: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  titulo: {
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  descricao: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 32,
  },
  info: {
    width: '100%',
    marginBottom: 24,
  },
  item: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  link: {
    fontSize: 14,
    color: '#6366f1',
    marginTop: 4,
  },
  versao: {
    color: '#999',
    marginTop: 16,
  },
});
