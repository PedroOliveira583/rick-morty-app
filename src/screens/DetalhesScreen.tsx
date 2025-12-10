import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Text, Chip, Button, Appbar } from 'react-native-paper';

interface Props {
  route: any;
  navigation: any;
}

export default function DetalhesScreen({ route, navigation }: Props) {
  const { character } = route.params;

  // Definir cor do status
  const getStatusColor = () => {
    if (character.status === 'Alive') return '#4ade80';
    if (character.status === 'Dead') return '#f87171';
    return '#94a3b8';
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Detalhes" />
      </Appbar.Header>

      <ScrollView style={styles.container}>
        <Image source={{ uri: character.image }} style={styles.imagem} />

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineMedium" style={styles.nome}>
              {character.name}
            </Text>

            <View style={styles.chips}>
              <Chip
                icon="heart-pulse"
                style={[styles.chip, { backgroundColor: getStatusColor() }]}
                textStyle={styles.chipTexto}
              >
                {character.status}
              </Chip>
              <Chip icon="dna" style={styles.chip}>
                {character.species}
              </Chip>
              <Chip icon="gender-male-female" style={styles.chip}>
                {character.gender}
              </Chip>
            </View>

            <View style={styles.info}>
              <Text variant="titleMedium">📍 Localização</Text>
              <Text variant="bodyLarge" style={styles.valor}>
                {character.location.name}
              </Text>
            </View>

            <Button
              mode="contained"
              icon="arrow-left"
              onPress={() => navigation.goBack()}
              style={styles.botao}
            >
              Voltar
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imagem: {
    width: '100%',
    height: 300,
  },
  card: {
    margin: 16,
  },
  nome: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  chip: {
    height: 32,
  },
  chipTexto: {
    color: '#fff',
  },
  info: {
    marginBottom: 24,
  },
  valor: {
    color: '#666',
    marginTop: 4,
  },
  botao: {
    marginTop: 8,
  },
});
