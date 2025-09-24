# Gylog - Landing Page

Landing page moderna e responsiva para a Gylog, empresa especializada em montagem de kits promocionais. Desenvolvida com Vite, React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Vite** - Build tool e dev server
- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações e microinterações
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd lpmontagemdekits
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:3000` no seu navegador

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal com CTA
│   ├── TwoColInfo.tsx  # Bloco de duas colunas
│   ├── PillarsGrid.tsx # Grid dos 6 pilares
│   ├── KitTypesSidebar.tsx # Sidebar de tipos de kits
│   ├── PhotoPanel.tsx  # Painel de fotos
│   ├── LogosStrip.tsx  # Faixa de logos de clientes
│   ├── CTASection.tsx  # Seção de call-to-action final
│   ├── Footer.tsx      # Rodapé com contatos
│   └── Glow.tsx        # Componente de efeitos de brilho
├── pages/
│   └── Home.tsx        # Página principal
├── styles/
│   └── globals.css     # Estilos globais e utilitários
└── main.tsx           # Ponto de entrada da aplicação

public/
├── imagens/           # Imagens da landing page
├── logo/             # Logo da empresa
├── logos/            # Logos de clientes
└── favicon.ico       # Ícone do site
```

## 🎨 Personalização

### Cores

As cores podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: '#0B3A75',      // Azul principal
  primaryDark: '#082E5E',  // Azul escuro
  accent: '#14A44D',       // Verde de destaque
  ink: '#475569',          // Cinza para textos
  surface: '#F8FAFC',      // Fundo claro
}
```

### Imagens

Substitua os arquivos placeholder na pasta `public/`:

- `imagens/hero.jpg` - Imagem principal do hero
- `imagens/lab.jpg` - Imagem da seção de montagem
- `imagens/esteira.jpg` - Imagem da seção de tipos de kits
- `imagens/producao.jpg` - Imagem da seção CTA final
- `logo/logo-gylog.png` - Logo da empresa
- `logos/*.png` - Logos dos clientes

### Conteúdo

O conteúdo pode ser editado diretamente nos componentes:

- **Header**: Links de navegação e CTA
- **Hero**: Título, subtítulo e botão principal
- **TwoColInfo**: Textos da seção de montagem
- **PillarsGrid**: Pilares e descrições
- **KitTypesSidebar**: Tipos de kits disponíveis
- **Footer**: Informações de contato e certificações

## 🌐 Deploy

### cPanel (Hospedagem Compartilhada)

1. Execute o build:
```bash
npm run build
```

2. Copie todo o conteúdo da pasta `dist/` para `public_html/` no cPanel

3. Certifique-se de que o arquivo `index.html` está na raiz do `public_html/`

### Vercel

1. Conecte o repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático

### Netlify

1. Conecte o repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Deploy automático

## ✨ Funcionalidades

- **Responsivo**: Adaptável a todos os dispositivos
- **Animações**: Microinterações suaves com Framer Motion
- **Efeitos de Brilho**: Glow effects em elementos importantes
- **Reveal on Scroll**: Elementos aparecem conforme o scroll
- **Parallax**: Efeito parallax sutil no hero
- **Acessibilidade**: Navegação por teclado e screen readers
- **SEO**: Meta tags otimizadas para busca
- **Performance**: Build otimizado e lazy loading

## 🎯 Seções da Landing Page

1. **Header** - Navegação e CTA principal
2. **Hero** - Apresentação principal com parallax
3. **Montagem de Kits** - Informações sobre o serviço
4. **6 Pilares** - Diferenciais da empresa
5. **Tipos de Kits** - Catálogo de produtos
6. **Logos de Clientes** - Social proof
7. **CTA Final** - Conversão principal
8. **Footer** - Contatos e certificações

## 📱 Breakpoints

- **Mobile**: ≤ 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: ≥ 1280px

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código

## 📄 Licença

Este projeto é propriedade da Gylog Logística.

---

**Desenvolvido com ❤️ para a Gylog**
