# 🦖 MapDinosaur

**Mapa interativo dos museus com os fósseis de dinossauro mais incríveis do mundo**, com os requisitos de entrada de cada país para quem viaja com **passaporte brasileiro**.

- 🗺️ Mapa escuro com pinos animados. Os ★ dourados são os museus de **nível lendário**
- 🔎 Busca por dinossauro, museu ou cidade (ex.: `Triceratops` mostra Washington, Nova York, Melbourne, Tóquio…)
- 🦴 Filtros por dinossauro, região e tipo de visto
- 🖼️ Clique num dinossauro para ver imagem e resumo (via Wikipédia)
- 🛂 Ficha de visto por país: sem visto, autorização eletrônica ou visto obrigatório, com link oficial
- 📱 Funciona no celular

## Rodando localmente

É um site estático, sem build:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

(Abrir o `index.html` direto no navegador também funciona.)

## Publicando no GitHub Pages

1. Em **Settings → Pages**, escolha **Source: GitHub Actions**.
2. Faça merge na `main`: o workflow `.github/workflows/pages.yml` publica o site automaticamente.

## Adicionando museus

Os dados ficam em arquivos simples:

- `data/museums.js`: museus (nome, coordenadas, dinossauros, descrição, site e, opcionalmente, `maps`: o nome exato para buscar no Google Maps)
- `data/visas.js`: regras de entrada para brasileiros por país
- `data/wiki.js`: qual artigo da Wikipédia usar para a imagem de cada dinossauro (quando o nome não bate direto)

Para adicionar um museu, copie um bloco em `museums.js` e ajuste os campos. Se o país for novo, adicione a regra de visto em `visas.js`.

> ⚠️ **Regras de imigração mudam.** As informações de visto foram revisadas em setembro/2026 e servem como guia. Confirme sempre no site oficial do consulado antes de viajar.

## Tecnologias

[Leaflet](https://leafletjs.com/) · tiles escuros da [Esri](https://www.esri.com/) (com [OpenStreetMap](https://www.openstreetmap.org/) como plano B) · HTML, CSS e JS puros
