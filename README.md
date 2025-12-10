<<<<<<< HEAD
# rick-morty-app
=======
# Rick & Morty App - Desafio Individual II

Este é um aplicativo React Native com TypeScript que consome a API do Rick and Morty, exibe os personagens em uma lista, permite a visualização de detalhes e utiliza React Native Paper para a interface e React Navigation para a navegação.

## Estrutura do Projeto

O projeto foi estruturado de forma simples e organizada, com o objetivo de facilitar a compreensão e manutenção do código.

```
rick-morty-app/
├── src/
│   ├── screens/            # Telas da aplicação
│   │   ├── ListaScreen.tsx
│   │   ├── DetalhesScreen.tsx
│   │   ├── FavoritosScreen.tsx
│   │   └── SobreScreen.tsx
│   └── types/              # Tipos TypeScript
│       └── index.ts
├── App.tsx                 # Arquivo principal da aplicação
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configurações do TypeScript
├── babel.config.js         # Configurações do Babel
└── app.json                # Configurações do Expo
```

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Expo**: Plataforma para facilitar o desenvolvimento e build de apps React Native.
- **React Navigation**: Biblioteca para gerenciamento de navegação entre telas.
- **React Native Paper**: Biblioteca de componentes de UI baseada no Material Design.

## Lógica de Programação

A lógica de programação foi pensada para ser clara e eficiente, seguindo as melhores práticas de desenvolvimento com React.

- **Componentização**: A aplicação foi dividida em telas (screens), cada uma com sua responsabilidade bem definida.
- **Estado e Props**: O estado da aplicação é gerenciado de forma local em cada componente, e a comunicação entre eles é feita através de props.
- **Hooks**: Foram utilizados os hooks `useState` e `useEffect` para gerenciar o estado e o ciclo de vida dos componentes.
- **Funções Assíncronas**: A comunicação com a API é feita de forma assíncrona com `fetch` e `async/await`.
- **Tipagem**: O uso de TypeScript garante a segurança e a previsibilidade dos dados que trafegam na aplicação.

## Como Executar o Projeto

1.  **Instale as dependências**:

    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento**:

    ```bash
    npm start
    ```

3.  **Execute em um emulador ou dispositivo físico**:

    -   Pressione `a` para executar no Android.
    -   Pressione `i` para executar no iOS.
    -   Pressione `w` para executar na web.

## Conclusão

Este projeto cumpre todos os requisitos do desafio, demonstrando o uso de React Native, TypeScript, React Native Paper e React Navigation para criar um aplicativo funcional e com uma boa estrutura de código.
>>>>>>> 30e3376 (Initial commit - Rick Morty App)
