// Tipos da API Rick and Morty
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
}

// Tipos de navegação
export type DrawerParamList = {
  Principal: undefined;
  Sobre: undefined;
};

export type StackParamList = {
  Tabs: undefined;
  Detalhes: { character: Character };
};

export type TabParamList = {
  Lista: undefined;
  Favoritos: undefined;
};
