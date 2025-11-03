# PDM-AT2 - Aplicativo React Native com Expo Router

Aplicativo mobile desenvolvido com React Native e Expo Router, implementando navegação por abas, gerenciamento de perfil com AsyncStorage e componentes interativos.

## 📱 Funcionalidades Implementadas

### 1. Navegação com Abas (Tabs)
- **Home**: Tela principal com informações do desenvolvedor e componentes interativos
- **Perfil**: Tela de gerenciamento de dados pessoais
- **GitHub**: Tela de visualização do perfil GitHub (oculta da barra de abas)

### 2. Tela Home
- Imagem de perfil
- Informações do desenvolvedor
- Botões interativos:
  - Botão padrão com Alert
  - Botão para abrir GitHub
  - TouchableOpacity customizado
  - Pressable customizado

### 3. Tela de Perfil
- **Visualização de Dados**:
  - Nome
  - Sobrenome
  - Idade
  - Instituição
  - Curso
- **Persistência**: Dados armazenados no AsyncStorage
- **Botão de Editar**: Abre modal de edição

### 4. Modal de Edição de Perfil
- **Campos de Entrada (TextInput)**:
  - Nome (obrigatório)
  - Sobrenome (obrigatório)
  - Idade (apenas números - keyboardType="numeric")
  - Instituição
  - Curso
- **Validações**:
  - Campos obrigatórios (Nome e Sobrenome)
  - Idade aceita apenas números
- **Botões**:
  - Cancelar: Fecha o modal sem salvar
  - Salvar: Salva no AsyncStorage e retorna à tela anterior

### 5. Estilos Personalizados
- **Design Moderno**: Interface limpa e profissional
- **Cores**: Paleta de cores azul (#007AFF) como cor primária
- **Componentes**:
  - Cards com sombras e bordas arredondadas
  - Botões com efeitos visuais
  - Modal com animação slide
  - Inputs estilizados
- **Responsividade**: Layout adaptável

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework mobile
- **Expo**: Plataforma de desenvolvimento
- **Expo Router**: Navegação baseada em arquivos
- **AsyncStorage**: Armazenamento local
- **TypeScript**: Tipagem estática
- **Ionicons**: Biblioteca de ícones

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js instalado
- npm ou yarn
- Expo CLI

### Passos

1. **Instalar dependências**:
```bash
npm install
```

2. **Iniciar o projeto**:
```bash
npm start
```

3. **Executar em diferentes plataformas**:
```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📂 Estrutura do Projeto

```
PDM-AT2/
├── src/
│   ├── app/
│   │   ├── _layout.tsx      # Configuração de navegação com tabs
│   │   ├── index.tsx         # Tela Home
│   │   ├── profile.tsx       # Tela de Perfil
│   │   └── github.tsx        # Tela GitHub WebView
│   └── components/
│       ├── Card.tsx
│       ├── Pressable.tsx
│       └── TouchableOpacity.tsx
├── assets/
│   ├── fonts/
│   └── images/
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```

## 🎨 Detalhes de Estilo

### Paleta de Cores
- **Primária**: #007AFF (Azul)
- **Sucesso**: #28a745 (Verde)
- **Atenção**: #fd7e14 (Laranja)
- **Fundo**: #f8f9fa (Cinza claro)
- **Texto**: #1a1a1a (Preto)
- **Secundário**: #6c757d (Cinza)

### Componentes Estilizados
- **Cards**: Fundo branco, bordas arredondadas (16-24px), sombras suaves
- **Botões**: Padding generoso, ícones integrados, efeitos de pressionamento
- **Inputs**: Fundo cinza claro, bordas visíveis, padding confortável
- **Modal**: Animação slide de baixo para cima, fundo semitransparente

## ✅ Requisitos Atendidos

- ✅ Navegação com abas (Home e Perfil)
- ✅ Tela de Perfil exibe dados do AsyncStorage
- ✅ Botão de editar abre modal
- ✅ Modal com campos TextInput:
  - ✅ Nome
  - ✅ Sobrenome
  - ✅ Idade (keyboardType="numeric")
  - ✅ Instituição
  - ✅ Curso
- ✅ Dados salvos no AsyncStorage
- ✅ Retorna à página anterior após salvar
- ✅ Estilos personalizados aplicados
- ✅ Design próprio com cores e espaçamentos definidos

## 👨‍💻 Desenvolvedor

Luiz Ricardo
- GitHub: [@LuizWKM](https://github.com/LuizWKM)

## 📄 Licença

Este projeto está sob a licença MIT.
Atividade 2 - Criar projeto Expo, da matéria Programação para dispositivos móveis com rotas.
