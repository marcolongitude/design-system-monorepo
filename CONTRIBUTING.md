# 🤝 Contribuindo para o Design System Monorepo

Obrigado por considerar contribuir para este projeto! Toda ajuda é bem-vinda.

## 📋 Como Contribuir

### 1. 🍴 Fork do Projeto

-   Faça um fork do repositório
-   Clone seu fork localmente

```bash
git clone https://github.com/SEU_USERNAME/design-system-monorepo.git
cd design-system-monorepo
```

### 2. 🔧 Configuração do Ambiente

```bash
# Instalar dependências
npm install

# Build dos pacotes
npm run build

# Iniciar Storybook para desenvolvimento
npm run storybook
```

### 3. 🌱 Criar uma Branch

```bash
git checkout -b feature/minha-nova-feature
# ou
git checkout -b fix/correcao-bug
```

### 4. ✏️ Fazer Mudanças

-   Siga as convenções de código do projeto
-   Mantenha consistência com a API existente
-   Adicione testes se necessário
-   Atualize a documentação

### 5. 🧪 Testar

```bash
# Build para verificar se não há erros
npm run build

# Verificar no Storybook
npm run storybook
```

### 6. 📝 Commit

Use commits semânticos:

```bash
git commit -m "feat: adiciona novo componente Button"
git commit -m "fix: corrige problema de cores no Text"
git commit -m "docs: atualiza README com novos exemplos"
```

Tipos de commit:

-   `feat`: Nova feature
-   `fix`: Correção de bug
-   `docs`: Documentação
-   `style`: Formatação (sem mudança de código)
-   `refactor`: Refatoração
-   `test`: Adição de testes
-   `chore`: Tarefas de build/CI

### 7. 🚀 Push e Pull Request

```bash
git push origin feature/minha-nova-feature
```

-   Vá para o GitHub e crie um Pull Request
-   Descreva suas mudanças detalhadamente
-   Referencie issues relacionadas

## 📐 Padrões de Código

### Estrutura de Componentes

```typescript
// packages/[plataforma]-components/src/ComponentName/
├── index.tsx              # Componente principal
├── ComponentName.stories.tsx  # Stories do Storybook
└── types.ts              # Tipos específicos (se necessário)
```

### API de Componentes

Mantenha consistência entre Web e React Native:

```typescript
// ✅ Bom - API unificada
<Text size="lg" fontWeight="bold" color="primary">
  Texto
</Text>

// ❌ Evitar - APIs diferentes entre plataformas
<Text fontSize={18} bold textColor="blue"> // Web
<Text size="large" weight="bold" color="primary"> // RN
```

### Design Tokens

Sempre use tokens do tema:

```typescript
// ✅ Bom
fontSize: tokens.fontSizes.lg;
color: tokens.colors.textColors.primary;

// ❌ Evitar valores hardcoded
fontSize: 18;
color: "#111827";
```

## 🐛 Reportar Bugs

### Informações Necessárias

-   **Descrição**: O que aconteceu?
-   **Reprodução**: Passos para reproduzir
-   **Comportamento esperado**: O que deveria acontecer?
-   **Screenshots**: Se aplicável
-   **Ambiente**:
    -   OS: [Windows/Mac/Linux]
    -   Node.js: [versão]
    -   Navegador: [Chrome/Firefox/Safari]

### Template de Issue

```markdown
## 🐛 Descrição do Bug

Descrição clara do problema.

## 🔄 Reprodução

1. Vá para '...'
2. Clique em '...'
3. Veja o erro

## 💭 Comportamento Esperado

O que deveria acontecer.

## 📷 Screenshots

Se aplicável, adicione screenshots.

## 🖥️ Ambiente

-   OS: [Windows 11]
-   Node: [18.17.0]
-   Browser: [Chrome 120]
```

## 💡 Sugerir Features

### Antes de Sugerir

-   Verifique se já não existe uma issue
-   Considere se faz sentido para o escopo do projeto
-   Pense na compatibilidade cross-platform

### Template de Feature Request

```markdown
## 🚀 Descrição da Feature

Descrição clara da funcionalidade proposta.

## 💪 Motivação

Por que esta feature seria útil?

## 📋 Solução Proposta

Como você imagina que funcionaria?

## 🎨 Design (se aplicável)

Mockups, wireframes, exemplos de código.

## 🤔 Alternativas Consideradas

Outras formas de resolver o problema.
```

## 📜 Código de Conduta

-   Seja respeitoso e inclusivo
-   Aceite feedback construtivo
-   Foque no que é melhor para a comunidade
-   Mostre empatia com outros contribuidores

## ❓ Dúvidas?

Não hesite em:

-   Abrir uma issue para discussão
-   Entrar em contato através das issues
-   Sugerir melhorias neste guia

**Obrigado por contribuir! 🙏**
