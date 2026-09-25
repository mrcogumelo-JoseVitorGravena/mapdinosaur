// Museus e sítios com exposições de dinossauros que valem a viagem.
// legendary: true = "nível lendário", imperdível pra quem ama dinossauro.
// Quer adicionar um museu? Copie um bloco, ajuste os campos e abra um PR.
window.MUSEUMS = [
  // ───────────── AMÉRICA DO NORTE ─────────────
  {
    id: "nmnh", name: "Smithsonian — Museu Nacional de História Natural",
    city: "Washington, D.C.", country: "US", region: "Américas",
    lat: 38.8913, lng: -77.0261, legendary: true,
    description: "O salão \"Deep Time\" mostra 4,6 bilhões de anos de vida na Terra. A estrela é o \"Nation's T. rex\" atacando um Triceratops. Entrada gratuita!",
    dinos: ["Tyrannosaurus rex", "Triceratops", "Stegosaurus", "Diplodocus", "Camarasaurus", "Allosaurus"],
    website: "https://naturalhistory.si.edu/"
  },
  {
    id: "amnh", name: "American Museum of Natural History",
    city: "Nova York", country: "US", region: "Américas",
    lat: 40.7813, lng: -73.9740, legendary: true,
    description: "Uma das maiores coleções de fósseis do mundo. O titanossauro de 37 m literalmente não cabe na sala: a cabeça sai pela porta.",
    dinos: ["Tyrannosaurus rex", "Patagotitan (titanossauro)", "Apatosaurus", "Triceratops", "Stegosaurus", "Deinonychus", "Velociraptor"],
    website: "https://www.amnh.org/"
  },
  {
    id: "field", name: "Field Museum",
    city: "Chicago", country: "US", region: "Américas",
    lat: 41.8663, lng: -87.6170, legendary: true,
    description: "Casa da SUE, o T. rex mais completo e famoso já encontrado, e do Máximo, um Patagotitan gigante.",
    dinos: ["Tyrannosaurus rex", "Patagotitan (titanossauro)", "Parasaurolophus", "Daspletosaurus"],
    website: "https://www.fieldmuseum.org/"
  },
  {
    id: "carnegie", name: "Carnegie Museum of Natural History",
    city: "Pittsburgh", country: "US", region: "Américas",
    lat: 40.4433, lng: -79.9496,
    description: "Guarda o holótipo (primeiro exemplar descrito) do T. rex e o Diplodocus carnegii original, cujas réplicas estão espalhadas pelo mundo.",
    dinos: ["Tyrannosaurus rex", "Diplodocus", "Apatosaurus", "Allosaurus", "Stegosaurus"],
    website: "https://carnegiemnh.org/"
  },
  {
    id: "nhmla", name: "Natural History Museum of Los Angeles",
    city: "Los Angeles", country: "US", region: "Américas",
    lat: 34.0170, lng: -118.2887,
    description: "Única série de crescimento de T. rex do mundo: bebê, jovem e adulto lado a lado.",
    dinos: ["Tyrannosaurus rex", "Triceratops", "Mamenchisaurus", "Allosaurus"],
    website: "https://nhm.org/"
  },
  {
    id: "rockies", name: "Museum of the Rockies",
    city: "Bozeman, Montana", country: "US", region: "Américas",
    lat: 45.6590, lng: -111.0453,
    description: "Uma das maiores coleções de fósseis de dinossauro dos EUA, com uma série inteira de crânios de Triceratops do bebê ao adulto.",
    dinos: ["Tyrannosaurus rex", "Triceratops", "Maiasaura", "Deinonychus"],
    website: "https://museumoftherockies.org/"
  },
  {
    id: "dinomon", name: "Dinosaur National Monument — Quarry Exhibit Hall",
    city: "Jensen, Utah", country: "US", region: "Américas",
    lat: 40.4383, lng: -109.3010, legendary: true,
    description: "Uma parede de rocha com cerca de 1.500 ossos de dinossauro ainda no lugar onde foram fossilizados. Dá até pra tocar em alguns.",
    dinos: ["Allosaurus", "Apatosaurus", "Camarasaurus", "Diplodocus", "Stegosaurus"],
    website: "https://www.nps.gov/dino/"
  },
  {
    id: "dmns", name: "Denver Museum of Nature & Science",
    city: "Denver", country: "US", region: "Américas",
    lat: 39.7475, lng: -104.9428,
    description: "Exposição \"Prehistoric Journey\" e um laboratório de preparação de fósseis com vidro, onde dá pra ver os paleontólogos trabalhando.",
    dinos: ["Stegosaurus", "Tyrannosaurus rex", "Diplodocus", "Edmontosaurus", "Allosaurus"],
    website: "https://www.dmns.org/"
  },
  {
    id: "hmns", name: "Houston Museum of Natural Science",
    city: "Houston", country: "US", region: "Américas",
    lat: 29.7221, lng: -95.3896,
    description: "Morian Hall of Paleontology: esqueletos montados em poses dinâmicas de ação.",
    dinos: ["Tyrannosaurus rex", "Triceratops", "Diplodocus", "Edmontosaurus"],
    website: "https://www.hmns.org/"
  },
  {
    id: "yale", name: "Yale Peabody Museum",
    city: "New Haven", country: "US", region: "Américas",
    lat: 41.3159, lng: -72.9205,
    description: "O berço do Brontosaurus e do Deinonychus, dinossauro que inspirou os \"velociraptors\" de Jurassic Park.",
    dinos: ["Brontosaurus", "Deinonychus", "Stegosaurus", "Torosaurus"],
    website: "https://peabody.yale.edu/"
  },
  {
    id: "tyrrell", name: "Royal Tyrrell Museum of Palaeontology",
    city: "Drumheller, Alberta", country: "CA", region: "Américas",
    lat: 51.4793, lng: -112.7900, legendary: true,
    description: "Um dos melhores museus de dinossauros do planeta, no meio dos badlands. Tem o nodossauro Borealopelta, tão bem preservado que parece uma estátua.",
    dinos: ["Borealopelta", "Albertosaurus", "Tyrannosaurus rex", "Triceratops", "Pachyrhinosaurus"],
    website: "https://tyrrellmuseum.com/"
  },
  {
    id: "rom", name: "Royal Ontario Museum",
    city: "Toronto", country: "CA", region: "Américas",
    lat: 43.6677, lng: -79.3948,
    description: "Tem o Zuul, um anquilossauro com pele e armadura preservadas, e o Barosaurus \"Gordo\".",
    dinos: ["Zuul (anquilossauro)", "Parasaurolophus", "Barosaurus"],
    website: "https://www.rom.on.ca/"
  },
  {
    id: "desierto", name: "Museo del Desierto",
    city: "Saltillo, Coahuila", country: "MX", region: "Américas",
    lat: 25.4200, lng: -100.9950,
    description: "Museu mexicano dedicado aos dinossauros do deserto de Coahuila, com hadrossauros descobertos no próprio estado.",
    dinos: ["Velafrons", "Hadrossauros", "Tyrannosaurus rex"],
    website: "https://www.museodeldesierto.org/"
  },

  // ───────────── AMÉRICA DO SUL ─────────────
  {
    id: "chocon", name: "Museo Municipal Ernesto Bachmann",
    city: "Villa El Chocón, Neuquén", country: "AR", region: "Américas",
    lat: -39.2617, lng: -68.7866, legendary: true,
    description: "Aqui está o Giganotosaurus carolinii ORIGINAL, um dos maiores carnívoros terrestres que já existiram, maior que o T. rex.",
    dinos: ["Giganotosaurus"],
    website: null
  },
  {
    id: "funes", name: "Museo Municipal Carmen Funes",
    city: "Plaza Huincul, Neuquén", country: "AR", region: "Américas",
    lat: -38.9302, lng: -69.2074,
    description: "Os ossos do Argentinosaurus, candidato a maior animal terrestre de todos os tempos, e uma reconstrução em tamanho real.",
    dinos: ["Argentinosaurus", "Mapusaurus"],
    website: null
  },
  {
    id: "mef", name: "Museo Paleontológico Egidio Feruglio (MEF)",
    city: "Trelew, Chubut", country: "AR", region: "Américas",
    lat: -43.2489, lng: -65.3083, legendary: true,
    description: "O centro de pesquisa que descobriu o Patagotitan mayorum, o titanossauro cujas réplicas estão em Nova York e Chicago.",
    dinos: ["Patagotitan (titanossauro)", "Tehuelchesaurus", "Carnotaurus"],
    website: "https://www.mef.org.ar/"
  },
  {
    id: "macn", name: "Museo Argentino de Ciencias Naturales",
    city: "Buenos Aires", country: "AR", region: "Américas",
    lat: -34.6050, lng: -58.4381,
    description: "Guarda o Carnotaurus sastrei, o terópode \"touro carnívoro\" com chifres, e o Amargasaurus com espinhos no pescoço.",
    dinos: ["Carnotaurus", "Amargasaurus", "Giganotosaurus"],
    website: "https://macnconicet.gob.ar/"
  },
  {
    id: "laplata", name: "Museo de La Plata",
    city: "La Plata", country: "AR", region: "Américas",
    lat: -34.9089, lng: -57.9360,
    description: "Museu histórico do século XIX com um lindo salão de fósseis, incluindo uma réplica do Diplodocus doada pelo Carnegie.",
    dinos: ["Diplodocus", "Megatério (não é dino, mas é foda)"],
    website: "https://www.museo.fcnym.unlp.edu.ar/"
  },
  {
    id: "ischigualasto", name: "Parque Provincial Ischigualasto (Vale da Lua)",
    city: "San Juan", country: "AR", region: "Américas",
    lat: -30.1630, lng: -67.8430,
    description: "Patrimônio da UNESCO onde viveram alguns dos PRIMEIROS dinossauros, há ~230 milhões de anos. Paisagem de outro planeta.",
    dinos: ["Herrerasaurus", "Eoraptor"],
    website: "https://ischigualasto.gob.ar/"
  },
  {
    id: "peiropolis", name: "Museu dos Dinossauros de Peirópolis",
    city: "Uberaba, MG", country: "BR", region: "Américas",
    lat: -19.7258, lng: -47.8886,
    description: "Um dos principais sítios paleontológicos do Brasil, com titanossauros e crocodiliformes do Cretáceo encontrados na região.",
    dinos: ["Uberabatitan", "Baurutitan", "Titanossauros"],
    website: null
  },
  {
    id: "cariri", name: "Museu de Paleontologia Plácido Cidade Nuvens",
    city: "Santana do Cariri, CE", country: "BR", region: "Américas",
    lat: -7.1880, lng: -39.7370,
    description: "Bacia do Araripe: um dos depósitos de fósseis mais preservados do mundo, com pterossauros, peixes e réplicas de dinossauros brasileiros.",
    dinos: ["Irritator (réplica)", "Pterossauros", "Santanaraptor"],
    website: null
  },
  {
    id: "sousa", name: "Vale dos Dinossauros",
    city: "Sousa, PB", country: "BR", region: "Américas",
    lat: -6.7406, lng: -38.2322,
    description: "Pegadas de dinossauros de verdade, preservadas na rocha ao ar livre. Dá pra caminhar ao lado dos rastros.",
    dinos: ["Pegadas de terópodes", "Pegadas de saurópodes"],
    website: null
  },

  // ───────────── EUROPA ─────────────
  {
    id: "nhmlondon", name: "Natural History Museum",
    city: "Londres", country: "GB", region: "Europa",
    lat: 51.4967, lng: -0.1764, legendary: true,
    description: "Prédio que parece uma catedral, T. rex animatrônico e a Sophie, o esqueleto de Stegosaurus mais completo do mundo. Entrada gratuita.",
    dinos: ["Stegosaurus", "Tyrannosaurus rex", "Baryonyx", "Iguanodon"],
    website: "https://www.nhm.ac.uk/"
  },
  {
    id: "oxford", name: "Oxford University Museum of Natural History",
    city: "Oxford", country: "GB", region: "Europa",
    lat: 51.7586, lng: -1.2556,
    description: "Guarda os ossos do Megalosaurus, o PRIMEIRO dinossauro a receber nome científico (1824).",
    dinos: ["Megalosaurus", "Iguanodon", "Tyrannosaurus rex"],
    website: "https://www.oumnh.ox.ac.uk/"
  },
  {
    id: "berlin", name: "Museum für Naturkunde",
    city: "Berlim", country: "DE", region: "Europa",
    lat: 52.5302, lng: 13.3794, legendary: true,
    description: "O Giraffatitan brancai, o esqueleto real montado mais alto do mundo (13 m), e um dos exemplares originais do Archaeopteryx.",
    dinos: ["Giraffatitan", "Archaeopteryx", "Kentrosaurus", "Dicraeosaurus"],
    website: "https://www.museumfuernaturkunde.berlin/"
  },
  {
    id: "senckenberg", name: "Senckenberg Naturmuseum",
    city: "Frankfurt", country: "DE", region: "Europa",
    lat: 50.1175, lng: 8.6519,
    description: "Tem uma \"múmia\" de Edmontosaurus, com impressões de pele preservadas.",
    dinos: ["Edmontosaurus", "Tyrannosaurus rex", "Triceratops", "Diplodocus"],
    website: "https://museumfrankfurt.senckenberg.de/"
  },
  {
    id: "eichstatt", name: "Jura-Museum Eichstätt",
    city: "Eichstätt", country: "DE", region: "Europa",
    lat: 48.8918, lng: 11.1824,
    description: "Instalado num castelo, exibe fósseis do calcário de Solnhofen, a mesma região onde se encontra o Archaeopteryx.",
    dinos: ["Archaeopteryx", "Juravenator"],
    website: null
  },
  {
    id: "paris", name: "Galerie de Paléontologie — Muséum national d'Histoire naturelle",
    city: "Paris", country: "FR", region: "Europa",
    lat: 48.8425, lng: 2.3650,
    description: "Uma galeria de 1898 com centenas de esqueletos lado a lado: parece uma cena de filme.",
    dinos: ["Diplodocus", "Iguanodon", "Allosaurus", "Tyrannosaurus rex"],
    website: "https://www.mnhn.fr/"
  },
  {
    id: "brussels", name: "Museu de Ciências Naturais da Bélgica",
    city: "Bruxelas", country: "BE", region: "Europa",
    lat: 50.8370, lng: 4.3767, legendary: true,
    description: "Os Iguanodons de Bernissart: cerca de 30 esqueletos encontrados numa mina de carvão, vários deles montados em vitrines gigantes.",
    dinos: ["Iguanodon"],
    website: "https://www.naturalsciences.be/"
  },
  {
    id: "naturalis", name: "Naturalis Biodiversity Center",
    city: "Leiden", country: "NL", region: "Europa",
    lat: 52.1653, lng: 4.4735,
    description: "Casa da Trix, um dos esqueletos de T. rex mais completos e bem preservados do mundo.",
    dinos: ["Tyrannosaurus rex", "Edmontosaurus", "Triceratops"],
    website: "https://www.naturalis.nl/"
  },
  {
    id: "lourinha", name: "Museu da Lourinhã",
    city: "Lourinhã", country: "PT", region: "Europa",
    lat: 39.2427, lng: -9.3127,
    description: "Ninho com ovos e embriões de dinossauro! A região é a \"capital dos dinossauros\" de Portugal; do lado tem o Dino Parque.",
    dinos: ["Lourinhanosaurus", "Torvosaurus", "Ovos com embriões"],
    website: "https://www.museulourinha.org/"
  },
  {
    id: "muja", name: "Museo del Jurásico de Asturias (MUJA)",
    city: "Colunga, Astúrias", country: "ES", region: "Europa",
    lat: 43.5055, lng: -5.2856,
    description: "Prédio em forma de pegada de dinossauro, numa costa cheia de pegadas jurássicas reais.",
    dinos: ["Pegadas jurássicas", "Tyrannosaurus rex (réplica)"],
    website: "https://www.museojurasicoasturias.com/"
  },

  // ───────────── ÁSIA ─────────────
  {
    id: "zigong", name: "Museu dos Dinossauros de Zigong",
    city: "Zigong, Sichuan", country: "CN", region: "Ásia",
    lat: 29.4004, lng: 104.8390, legendary: true,
    description: "Construído em cima do sítio de Dashanpu: dá pra ver o leito de fósseis com ossos ainda na rocha, além de dezenas de esqueletos jurássicos.",
    dinos: ["Shunosaurus", "Omeisaurus", "Gasosaurus", "Mamenchisaurus"],
    website: null
  },
  {
    id: "beijing", name: "Museu Paleozoológico da China",
    city: "Pequim", country: "CN", region: "Ásia",
    lat: 39.9365, lng: 116.3376,
    description: "Museu do principal instituto de paleontologia de vertebrados da China, com dinossauros e dinossauros emplumados chineses.",
    dinos: ["Mamenchisaurus", "Lufengosaurus", "Dinossauros emplumados"],
    website: null
  },
  {
    id: "shanghai", name: "Museu de História Natural de Xangai",
    city: "Xangai", country: "CN", region: "Ásia",
    lat: 31.2352, lng: 121.4586,
    description: "Arquitetura moderna incrível em espiral, com um grande Mamenchisaurus.",
    dinos: ["Mamenchisaurus", "Tyrannosaurus rex"],
    website: null
  },
  {
    id: "fukui", name: "Museu Provincial de Dinossauros de Fukui",
    city: "Katsuyama, Fukui", country: "JP", region: "Ásia",
    lat: 36.0819, lng: 136.5061, legendary: true,
    description: "Um dos maiores museus de dinossauros do mundo: dezenas de esqueletos numa cúpula gigante e dinossauros japoneses descobertos ali perto.",
    dinos: ["Fukuiraptor", "Fukuisaurus", "Tyrannosaurus rex", "Triceratops"],
    website: "https://www.dinosaur.pref.fukui.jp/"
  },
  {
    id: "kahaku", name: "Museu Nacional de Natureza e Ciência",
    city: "Tóquio", country: "JP", region: "Ásia",
    lat: 35.7163, lng: 139.7764,
    description: "No parque Ueno. Tem um Triceratops real em pose de repouso, dos esqueletos mais completos que existem.",
    dinos: ["Triceratops", "Tyrannosaurus rex", "Futabasaurus"],
    website: "https://www.kahaku.go.jp/"
  },
  {
    id: "mongolia", name: "Museu Central dos Dinossauros da Mongólia",
    city: "Ulaanbaatar", country: "MN", region: "Ásia",
    lat: 47.9187, lng: 106.9185,
    description: "Fósseis do deserto de Gobi, incluindo um Tarbosaurus devolvido à Mongólia após ser contrabandeado para os EUA.",
    dinos: ["Tarbosaurus", "Protoceratops", "Velociraptor", "Ovos de dinossauro"],
    website: null
  },

  // ───────────── OCEANIA ─────────────
  {
    id: "melbourne", name: "Melbourne Museum",
    city: "Melbourne", country: "AU", region: "Oceania",
    lat: -37.8033, lng: 144.9717, legendary: true,
    description: "Casa do \"Horridus\", um Triceratops real e um dos mais completos do mundo, exposto de forma que dá pra ver os ossos originais de perto.",
    dinos: ["Triceratops", "Muttaburrasaurus"],
    website: "https://museumsvictoria.com.au/melbournemuseum/"
  },
  {
    id: "aaod", name: "Australian Age of Dinosaurs",
    city: "Winton, Queensland", country: "AU", region: "Oceania",
    lat: -22.3300, lng: 143.0500,
    description: "No meio do outback: o maior acervo de dinossauros australianos, laboratório ativo e céu estrelado absurdo.",
    dinos: ["Australovenator (\"Banjo\")", "Diamantinasaurus (\"Matilda\")", "Savannasaurus"],
    website: "https://www.australianageofdinosaurs.com/"
  },
  {
    id: "eromanga", name: "Eromanga Natural History Museum",
    city: "Eromanga, Queensland", country: "AU", region: "Oceania",
    lat: -26.6700, lng: 143.2700,
    description: "Onde está o \"Cooper\", Australotitan cooperensis: o maior dinossauro já encontrado na Austrália.",
    dinos: ["Australotitan (\"Cooper\")"],
    website: null
  },
  {
    id: "ausmuseum", name: "Australian Museum",
    city: "Sydney", country: "AU", region: "Oceania",
    lat: -33.8743, lng: 151.2130,
    description: "O museu mais antigo da Austrália, com galeria de dinossauros e fósseis opalizados de Lightning Ridge.",
    dinos: ["Muttaburrasaurus", "Fósseis opalizados"],
    website: "https://australian.museum/"
  }
];
