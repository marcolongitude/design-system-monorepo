# 🎨 Design System Monorepo

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

**Um design system cross-platform moderno com componentes para Web e React Native**

[![GitHub](https://img.shields.io/badge/GitHub-marcolongitude-black?style=flat-square&logo=github)](https://github.com/marcolongitude/design-system-monorepo) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://github.com/marcolongitude/design-system-monorepo/blob/main/LICENSE) [![CI/CD](https://img.shields.io/github/actions/workflow/status/marcolongitude/design-system-monorepo/ci.yml?branch=main&style=flat-square&label=CI%2FCD)](https://github.com/marcolongitude/design-system-monorepo/actions)

[📚 Documentação](https://marcolongitude.github.io/design-system-monorepo) • [🐛 Issues](https://github.com/marcolongitude/design-system-monorepo/issues) • [🚀 Releases](https://github.com/marcolongitude/design-system-monorepo/releases)

</div>

## ✨ Características

-   🌐 **Cross-platform**: Componentes funcionam tanto na Web quanto no React Native
-   📦 **Monorepo**: Estrutura organizada com componentes, temas e documentação
-   🎨 **Design Tokens**: Sistema consistente de cores, tipografia e espaçamentos
-   📖 **Storybook**: Documentação visual interativa
-   🔒 **TypeScript**: Type safety completo em todos os componentes
-   🎯 **API Unificada**: Mesma interface para ambas as plataformas
-   🚀 **CI/CD**: Deploy automático do Storybook via GitHub Actions

## 📁 Estrutura do Projeto

```
design-system-monorepo/
├── 📦 packages/
│   ├── 🎨 theme/                    # Tema compartilhado
│   │   ├── src/
│   │   │   ├── index.ts            # Exports principais
│   │   │   ├── theme.ts            # Design tokens
│   │   │   └── restyle-theme.ts    # Tema para React Native
│   │   └── package.json
│   ├── 🌐 web-components/          # Componentes Web
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── Text/
│   │   │       ├── index.tsx       # Componente Text Web
│   │   │       └── Text.stories.tsx
│   │   └── package.json
│   └── 📱 react-native-components/  # Componentes React Native
│       ├── src/
│       │   ├── index.ts
│       │   └── Text/
│       │       ├── index.tsx       # Componente Text RN
│       │       ├── Text.stories.tsx
│       │       └── DebugText.tsx
│       └── package.json
├── 📚 .storybook/                  # Configuração Storybook
├── 🔄 .github/workflows/           # GitHub Actions CI/CD
├── 📄 README.md
└── 📋 package.json
```

## 🚀 Início Rápido

### Pré-requisitos

-   Node.js 18+
-   npm 8+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/marcolongitude/design-system-monorepo.git
cd design-system-monorepo

# Instale as dependências
npm install

# Faça build dos pacotes
npm run build

# Inicie o Storybook
npm run storybook
```

## 📦 Pacotes

### `@meu-escopo/theme`

Tema compartilhado com design tokens centralizados:

```typescript
import { tokens, webTheme, rnTheme } from "@meu-escopo/theme";

// Design tokens
console.log(tokens.colors.primary); // "#4F46E5"
console.log(tokens.fontSizes.md); // 16
console.log(tokens.spacing.m); // 16
```

### `@meu-escopo/web-components`

Componentes otimizados para Web usando **styled-components**:

```tsx
import { Text } from "@meu-escopo/web-components";

<Text size="lg" fontWeight="bold" color="primary">
	Olá Web!
</Text>;
```

### `@meu-escopo/react-native-components`

Componentes otimizados para React Native:

```tsx
import { Text } from "@meu-escopo/react-native-components";

<Text size="lg" fontWeight="bold" color="primary">
	Olá React Native!
</Text>;
```

## 🎨 Design Tokens

### Cores

-   **Primary**: `#4F46E5` (Indigo)
-   **Secondary**: `#7C3AED` (Purple)
-   **Text Colors**: Sistema de cinzas (`primary`, `secondary`, `tertiary`, `muted`)

### Tipografia

-   **Tamanhos**: `xs` (12px) → `xxl` (24px)
-   **Pesos**: `normal`, `medium`, `semibold`, `bold`

### Espaçamentos

-   **Sistema**: `xs` (4px) → `xxl` (48px)

## 🛠️ Scripts Disponíveis

```bash
# Build de todos os pacotes
npm run build

# Build específico
npm run build:theme
npm run build:web
npm run build:rn

# Storybook
npm run storybook              # Desenvolvimento
npm run build-storybook      # Build para produção
```

## 🏗️ Arquitetura

### Cross-Platform Strategy

O design system usa uma estratégia de **detecção de ambiente** para fornecer implementações otimizadas:

-   **Web/Storybook**: Componentes usam DOM nativo (`<span>`, `<div>`) com CSS
-   **React Native**: Componentes usam elementos nativos (`<Text>`, `<View>`)

### Exemplo de Implementação

```typescript
// Detecção automática de ambiente
const isWeb = typeof window !== "undefined" && window.document;

export const Text = ({ children, ...props }) => {
	if (isWeb) {
		// Implementação Web
		return <span style={webStyles}>{children}</span>;
	} else {
		// Implementação React Native
		return <RNText style={nativeStyles}>{children}</RNText>;
	}
};
```

## 🚀 CI/CD

O projeto possui automação completa via GitHub Actions:

-   ✅ **Testes automatizados** em Node.js 18.x e 20.x
-   🏗️ **Build automatizado** de todos os pacotes
-   📚 **Deploy automático** do Storybook para GitHub Pages
-   🔄 **Execução** em push para `main` e em Pull Requests

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Por favor, leia o [guia de contribuição](CONTRIBUTING.md) para mais detalhes.

### Processo Rápido

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'feat: add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

-   [Shopify Restyle](https://github.com/Shopify/restyle) - Inspiração para o sistema de temas
-   [Styled Components](https://styled-components.com/) - Estilização para Web
-   [Storybook](https://storybook.js.org/) - Documentação de componentes

---

<div align="center">
  Feito com ❤️ por <a href="https://github.com/marcolongitude">Marco</a>
</div>
