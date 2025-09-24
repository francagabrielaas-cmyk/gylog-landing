# Guia de Imagens - Gylog Landing Page

Este arquivo contém instruções detalhadas para substituir as imagens placeholder pelas imagens reais da Gylog.

## 📁 Estrutura de Imagens

```
public/
├── imagens/
│   ├── hero.jpg          # Imagem principal do hero
│   ├── lab.jpg           # Imagem da seção de montagem
│   ├── esteira.jpg       # Imagem da seção de tipos de kits
│   └── producao.jpg      # Imagem da seção CTA final
├── logo/
│   └── logo-gylog.png    # Logo da empresa
└── logos/
    ├── colgate.png       # Logo Colgate
    ├── pg.png            # Logo P&G
    ├── linea.png         # Logo Linea
    ├── ibratec.png       # Logo Ibratec
    ├── ciranda.png       # Logo Ciranda Cultural
    └── medcof.png        # Logo Medcof
```

## 🖼️ Especificações das Imagens

### Hero (hero.jpg)
- **Dimensões recomendadas**: 1920x1080px (16:9)
- **Tamanho máximo**: 500KB
- **Formato**: JPG
- **Descrição**: Pessoa interagindo com tablet em ambiente logístico
- **Estilo**: Profissional, moderno, com tons azuis

### Lab (lab.jpg)
- **Dimensões recomendadas**: 800x600px (4:3)
- **Tamanho máximo**: 300KB
- **Formato**: JPG
- **Descrição**: Pessoas em instalação moderna montando produtos cosméticos ou de cuidados pessoais
- **Estilo**: Ambiente limpo, iluminado, profissional

### Esteira (esteira.jpg)
- **Dimensões recomendadas**: 800x600px (4:3)
- **Tamanho máximo**: 300KB
- **Formato**: JPG
- **Descrição**: Esteira em armazém ou fábrica com vários produtos se movendo
- **Estilo**: Industrial, eficiência, movimento

### Produção (producao.jpg)
- **Dimensões recomendadas**: 800x600px (4:3)
- **Tamanho máximo**: 300KB
- **Formato**: JPG
- **Descrição**: Trabalhadores em coletes laranja trabalhando em esteira com caixas de papelão em armazém
- **Estilo**: Equipe trabalhando, eficiência, logística

### Logo Gylog (logo-gylog.png)
- **Dimensões recomendadas**: 200x60px
- **Tamanho máximo**: 50KB
- **Formato**: PNG (com transparência)
- **Descrição**: Logo oficial da Gylog
- **Estilo**: Profissional, azul e branco

### Logos de Clientes
- **Dimensões recomendadas**: 120x60px cada
- **Tamanho máximo**: 30KB cada
- **Formato**: PNG (com transparência)
- **Descrição**: Logos dos clientes parceiros
- **Estilo**: Padronizados, preferencialmente em escala de cinza

## 🔄 Como Substituir as Imagens

1. **Prepare as imagens** seguindo as especificações acima
2. **Otimize as imagens** usando ferramentas como:
   - [TinyPNG](https://tinypng.com/) - Para PNG
   - [Compressor.io](https://compressor.io/) - Para JPG
   - [Squoosh](https://squoosh.app/) - Google's image optimizer

3. **Substitua os arquivos** na pasta `public/` correspondente
4. **Mantenha os nomes** dos arquivos exatamente como estão
5. **Teste o site** para verificar se as imagens carregam corretamente

## 🎨 Dicas de Design

- **Consistência visual**: Mantenha um estilo visual consistente entre todas as imagens
- **Qualidade**: Use imagens de alta qualidade, mas otimizadas para web
- **Acessibilidade**: Certifique-se de que as imagens tenham bom contraste e sejam legíveis
- **Responsividade**: As imagens serão redimensionadas automaticamente pelo CSS

## 📱 Teste de Responsividade

Após substituir as imagens, teste em diferentes dispositivos:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🚀 Deploy

Após substituir todas as imagens:
1. Execute `npm run build`
2. Teste localmente com `npm run preview`
3. Faça o deploy da pasta `dist/`

---

**Nota**: Mantenha sempre backups das imagens originais em alta resolução para futuras modificações.
