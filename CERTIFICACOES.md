# Guia de Certificações - Gylog Landing Page

Este arquivo contém instruções para substituir os placeholders das certificações pelos logos reais.

## 📁 Estrutura de Certificações

```
public/
└── certificacoes/
    ├── inmetro.png      # Logo INMETRO
    ├── anvisa.png       # Logo ANVISA
    ├── sgs.png          # Logo SGS
    └── smeta.png        # Logo SMETA
```

## 🏆 Especificações das Imagens

### Formato e Tamanho
- **Formato**: PNG (com transparência)
- **Dimensões recomendadas**: 80x40px (2:1)
- **Tamanho máximo**: 50KB cada
- **Fundo**: Transparente ou branco

### Certificações Incluídas

1. **INMETRO** - Instituto Nacional de Metrologia, Qualidade e Tecnologia
2. **ANVISA** - Agência Nacional de Vigilância Sanitária
3. **SGS** - Société Générale de Surveillance
4. **SMETA** - Sedex Members Ethical Trade Audit

## 🔄 Como Substituir as Imagens

1. **Prepare as imagens** seguindo as especificações acima
2. **Otimize as imagens** usando ferramentas como:
   - [TinyPNG](https://tinypng.com/) - Para PNG
   - [Compressor.io](https://compressor.io/) - Para JPG
   - [Squoosh](https://squoosh.app/) - Google's image optimizer

3. **Substitua os arquivos** na pasta `public/certificacoes/`:
   - `inmetro.png` - Logo oficial do INMETRO
   - `anvisa.png` - Logo oficial da ANVISA
   - `sgs.png` - Logo oficial da SGS
   - `smeta.png` - Logo oficial da SMETA

4. **Mantenha os nomes** dos arquivos exatamente como estão
5. **Teste o site** para verificar se as imagens carregam corretamente

## 🎨 Dicas de Design

- **Consistência visual**: Mantenha um estilo visual consistente entre todas as certificações
- **Qualidade**: Use imagens de alta qualidade, mas otimizadas para web
- **Acessibilidade**: Certifique-se de que as imagens tenham bom contraste
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
