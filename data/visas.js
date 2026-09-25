// Requisitos de entrada para quem viaja com PASSAPORTE BRASILEIRO, a turismo.
// Regras de imigração mudam! Sempre confirme no site oficial antes de viajar.
// status: "livre" (sem visto) | "eletronico" (autorização eletrônica / condicional) | "visto" (visto obrigatório)
window.VISA_REVIEWED = "setembro/2026";

window.VISAS = {
  BR: {
    country: "Brasil", flag: "🇧🇷", status: "livre",
    summary: "Você está em casa! Só levar o RG.",
    details: [],
    link: null
  },
  AR: {
    country: "Argentina", flag: "🇦🇷", status: "livre",
    summary: "Sem visto. Dá pra entrar só com o RG (Mercosul).",
    details: [
      "Estadia de até 90 dias como turista.",
      "Aceita passaporte válido ou RG em bom estado (emitido há menos de 10 anos). CNH NÃO vale.",
      "Menores de idade precisam de autorização de viagem se não estiverem com os dois pais."
    ],
    link: "https://www.gov.br/mre/pt-br/assuntos/portal-consular"
  },
  US: {
    country: "Estados Unidos", flag: "🇺🇸", status: "visto",
    summary: "Visto americano obrigatório (B1/B2 — turismo).",
    details: [
      "Preencher o formulário DS-160, pagar a taxa e agendar entrevista no consulado.",
      "O Brasil NÃO faz parte do Visa Waiver Program, então o ESTA não serve para brasileiros.",
      "O visto B1/B2 costuma valer por até 10 anos — e ajuda em outros países (ver Canadá e México)."
    ],
    link: "https://br.usembassy.gov/pt/vistos/"
  },
  CA: {
    country: "Canadá", flag: "🇨🇦", status: "eletronico",
    summary: "eTA online SE você tiver visto americano válido (ou já teve visto canadense nos últimos 10 anos). Senão, visto.",
    details: [
      "Com visto americano válido e chegando de avião: basta a eTA (autorização eletrônica, rápida e barata).",
      "Sem essas condições: precisa do visto de visitante canadense (com biometria).",
      "Chegando por terra/mar, as regras podem ser diferentes."
    ],
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html"
  },
  MX: {
    country: "México", flag: "🇲🇽", status: "eletronico",
    summary: "Visto mexicano obrigatório — MAS quem tem visto americano válido entra sem visto.",
    details: [
      "Desde 2022 o México exige visto de brasileiros.",
      "Exceção: visto válido dos EUA, ou residência nos EUA, Canadá, Reino Unido, Japão ou área Schengen.",
      "Estadia de até 180 dias a critério da imigração."
    ],
    link: "https://consulmex.sre.gob.mx/saopaulo/"
  },
  GB: {
    country: "Reino Unido", flag: "🇬🇧", status: "eletronico",
    summary: "Sem visto, mas precisa da ETA (autorização eletrônica) antes de embarcar.",
    details: [
      "Turismo por até 6 meses sem visto.",
      "A ETA é pedida pelo app/site oficial do governo britânico e vale por 2 anos.",
      "Visto americano não muda nada aqui."
    ],
    link: "https://www.gov.uk/eta"
  },
  SCHENGEN: {
    country: "Área Schengen", flag: "🇪🇺", status: "livre",
    summary: "Sem visto: até 90 dias a cada 180 dias. Fique de olho no ETIAS.",
    details: [
      "Vale para França, Alemanha, Bélgica, Holanda, Portugal, Espanha e demais países Schengen.",
      "O sistema EES registra biometria (digitais + foto) na primeira entrada.",
      "O ETIAS (autorização eletrônica, parecida com a ETA britânica) estava previsto para o fim de 2026, mas deve atrasar para 2027 — confira se já é exigido na data da sua viagem.",
      "Podem pedir seguro-viagem, reserva de hospedagem e comprovante de dinheiro."
    ],
    link: "https://travel-europe.europa.eu/etias_en"
  },
  JP: {
    country: "Japão", flag: "🇯🇵", status: "livre",
    summary: "Sem visto para turismo (até 90 dias) desde setembro de 2023.",
    details: [
      "Isenção vale para turismo e negócios de curta duração.",
      "Dá pra adiantar os trâmites de imigração pelo Visit Japan Web."
    ],
    link: "https://www.br.emb-japan.go.jp/"
  },
  CN: {
    country: "China", flag: "🇨🇳", status: "livre",
    summary: "Sem visto por até 30 dias — isenção temporária válida até 31/12/2026.",
    details: [
      "Desde junho de 2025 a China isenta brasileiros de visto por até 30 dias (turismo, negócios, visita à família).",
      "A isenção foi prorrogada até 31 de dezembro de 2026. Para viagens depois disso, confira se houve nova prorrogação.",
      "Se não estiver vigente, é preciso visto de turista (L)."
    ],
    link: "http://br.china-embassy.gov.cn/por/"
  },
  MN: {
    country: "Mongólia", flag: "🇲🇳", status: "livre",
    summary: "Sem visto por até 90 dias (acordo Brasil–Mongólia).",
    details: [
      "Leve passaporte válido, reserva de voo e comprovante de hospedagem.",
      "Ficando mais de 30 dias, é obrigatório se registrar na Agência de Imigração nos primeiros 7 dias."
    ],
    link: "https://www.gov.br/mre/pt-br/assuntos/portal-consular"
  },
  KR: {
    country: "Coreia do Sul", flag: "🇰🇷", status: "eletronico",
    summary: "Sem visto, mas precisa da K-ETA (autorização eletrônica) antes de embarcar.",
    details: [
      "Turismo por até 90 dias.",
      "A K-ETA é pedida online, vale 3 anos e sai em até 72 h — peça com uma semana de antecedência.",
      "A isenção temporária de K-ETA que a Coreia dá a alguns países NÃO inclui o Brasil."
    ],
    link: "https://www.k-eta.go.kr/"
  },
  TH: {
    country: "Tailândia", flag: "🇹🇭", status: "livre",
    summary: "Sem visto para turismo (acordo bilateral). Preencha o cartão digital TDAC antes de chegar.",
    details: [
      "O acordo Brasil–Tailândia prevê até 90 dias; algumas fontes citam 60 dias na prática — confira na chegada.",
      "O TDAC (Thailand Digital Arrival Card) é obrigatório e deve ser preenchido online até 3 dias antes.",
      "Passaporte com pelo menos 6 meses de validade."
    ],
    link: "https://www.gov.br/mre/pt-br/embaixada-bangkok"
  },
  AE: {
    country: "Emirados Árabes Unidos", flag: "🇦🇪", status: "livre",
    summary: "Sem visto prévio: o visto de turista é carimbado de graça na chegada (até 90 dias).",
    details: [
      "Passaporte com pelo menos 6 meses de validade.",
      "Podem pedir passagem de volta, reserva de hotel e seguro-viagem."
    ],
    link: "https://www.gov.br/mre/pt-br/assuntos/portal-consular"
  },
  BO: {
    country: "Bolívia", flag: "🇧🇴", status: "livre",
    summary: "Sem visto. Dá pra entrar só com o RG (acordo do Mercosul).",
    details: [
      "Estadia de até 90 dias como turista.",
      "Aceita passaporte ou RG em bom estado. CNH não vale.",
      "Sucre fica a ~2.800 m de altitude: vá com calma nos primeiros dias."
    ],
    link: "https://www.gov.br/mre/pt-br/assuntos/portal-consular"
  },
  AU: {
    country: "Austrália", flag: "🇦🇺", status: "visto",
    summary: "Visto obrigatório (Visitor visa — subclasse 600). Visto americano NÃO serve.",
    details: [
      "Pedido 100% online pelo ImmiAccount; não precisa de entrevista.",
      "Brasileiros não podem usar a ETA nem o eVisitor — só o visto de visitante.",
      "Ter visto dos EUA não dispensa o visto australiano (mas um bom histórico de viagens ajuda na aprovação)."
    ],
    link: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600"
  }
};

// Países que usam a regra Schengen
[
  ["FR", "França", "🇫🇷"], ["DE", "Alemanha", "🇩🇪"], ["BE", "Bélgica", "🇧🇪"],
  ["NL", "Holanda", "🇳🇱"], ["PT", "Portugal", "🇵🇹"], ["ES", "Espanha", "🇪🇸"]
].forEach(function (c) {
  window.VISAS[c[0]] = Object.assign({}, window.VISAS.SCHENGEN, { country: c[1], flag: c[2] });
});
