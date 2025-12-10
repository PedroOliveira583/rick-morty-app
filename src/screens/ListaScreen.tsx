import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, ActivityIndicator, Searchbar } from 'react-native-paper';
import { Character } from '../types';

interface Props {
  navigation: any;
}

export default function ListaScreen({ navigation }: Props) {
  const [personagens, setPersonagens] = useState<Character[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');

  // Buscar personagens da API
  useEffect(() => {
    buscarPersonagens();
  }, []);

  const buscarPersonagens = async () => {
    try {
      setCarregando(true);
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setPersonagens(data.results);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    } finally {
      setCarregando(false);
    }
  };

  // Filtrar personagens pela busca
  const personagensFiltrados = personagens.filter((p) =>
    p.name.toLowerCase().includes(busca.toLowerCase())
  );

  // Renderizar cada card de personagem
  const renderItem = ({ item }: { item: Character }) => (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { character: item })}
    >
      <Card.Cover source={{ uri: item.image }} style={styles.imagem} />
      <Card.Title
        title={item.name}
        subtitle={`${item.species} - ${item.status}`}
      />
    </Card>
  );

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
        <Text style={styles.textoCarregando}>Carregando personagens...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar personagem"
        onChangeText={setBusca}
        value={busca}
        style={styles.busca}
      />
      <FlatList
        data={personagensFiltrados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  textoCarregando: {
    fontSize: 16,
    color: '#666',
  },
  busca: {
    margin: 16,
    elevation: 2,
  },
  lista: {
    padding: 16,
    paddingTop: 0,
  },
  card: {
    marginBottom: 16,
  },
  imagem: {
    height: 200,
  },
});
