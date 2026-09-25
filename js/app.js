(function () {
  "use strict";

  var MUSEUMS = window.MUSEUMS;
  var VISAS = window.VISAS;

  var VISA_LABELS = {
    livre: { text: "Sem visto", color: "var(--green)" },
    eletronico: { text: "Autorização / condicional", color: "var(--yellow)" },
    visto: { text: "Visto obrigatório", color: "var(--red)" }
  };
  var REGIONS = ["Américas", "Europa", "Ásia", "Oceania"];
  // Siglas usadas nas cidades brasileiras ("Monte Alto, SP"), para a busca achar pelo nome do estado
  var UF = { SP: "São Paulo", MG: "Minas Gerais", RS: "Rio Grande do Sul", SC: "Santa Catarina", CE: "Ceará", PB: "Paraíba" };

  var state = { query: "", dino: null, region: null, visa: null, legendary: false, activeId: null };
  var markers = {};

  // ───────── Utilidades ─────────
  function $(sel) { return document.querySelector(sel); }
  function norm(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function visaOf(m) { return VISAS[m.country]; }
  // "Patagotitan (titanossauro)" -> "Patagotitan"
  function baseDino(name) { return name.replace(/\s*\(.*\)\s*/, "").trim(); }

  // ───────── Mapa ─────────
  var map = L.map("map", {
    center: [15, -20], zoom: 2, minZoom: 2, maxZoom: 16,
    zoomControl: false, worldCopyJump: true
  });
  L.control.zoom({ position: "topright" }).addTo(map);
  // Mapa de fundo: Esri Dark Gray (não precisa de chave de API).
  // Se os tiles falharem, cai para o OpenStreetMap escurecido via CSS.
  var ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/";
  var base = L.tileLayer(ESRI + "World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap",
    maxZoom: 16
  }).addTo(map);
  var labels = L.tileLayer(ESRI + "World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 16, pane: "overlayPane"
  }).addTo(map);

  var loaded = false, errors = 0;
  base.on("tileload", function () { loaded = true; });
  base.on("tileerror", function () {
    if (loaded || ++errors < 4) return;
    map.removeLayer(base);
    map.removeLayer(labels);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      className: "osm-dark", maxZoom: 19
    }).addTo(map);
  });

  function createMarkers() {
    // Anima os pinos caindo de oeste para leste
    var sorted = MUSEUMS.slice().sort(function (a, b) { return a.lng - b.lng; });
    sorted.forEach(function (m, i) {
      var size = m.legendary ? 26 : 18;
      var icon = L.divIcon({
        className: "pin-wrap",
        html: '<div class="pin' + (m.legendary ? " legendary" : "") + '" style="animation-delay:' + (2.1 + i * 0.04).toFixed(2) + 's"></div>',
        iconSize: [size, size], iconAnchor: [size / 2, size / 2]
      });
      var marker = L.marker([m.lat, m.lng], { icon: icon, riseOnHover: true, zIndexOffset: m.legendary ? 500 : 0 })
        .addTo(map)
        .bindTooltip(esc(m.name) + "<small>" + esc(m.city) + " " + visaOf(m).flag + "</small>", {
          className: "dino-tip", direction: "top", offset: [0, -size / 2 - 4]
        })
        .on("click", function () { select(m.id); });
      markers[m.id] = marker;
    });
  }

  // ───────── Filtros ─────────
  function matches(m) {
    if (state.legendary && !m.legendary) return false;
    if (state.region && m.region !== state.region) return false;
    if (state.visa && visaOf(m).status !== state.visa) return false;
    if (state.dino && !m.dinos.some(function (d) { return baseDino(d) === state.dino; })) return false;
    if (state.query) {
      var q = norm(state.query);
      var uf = m.country === "BR" && UF[m.city.slice(-2)] || "";
      var hay = norm([m.name, m.city, uf, visaOf(m).country, m.dinos.join(" ")].join(" "));
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function dinoHit(d) {
    if (state.dino && baseDino(d) === state.dino) return true;
    return state.query && norm(d).indexOf(norm(state.query)) !== -1;
  }

  function render(fit) {
    var list = $("#museum-list");
    var visible = MUSEUMS.filter(matches);

    MUSEUMS.forEach(function (m) {
      var el = markers[m.id].getElement();
      if (!el) return;
      var pin = el.querySelector(".pin");
      pin.classList.toggle("dim", visible.indexOf(m) === -1);
      pin.classList.toggle("active", m.id === state.activeId);
    });

    $("#result-count").textContent = visible.length + (visible.length === 1 ? " museu" : " museus");

    if (!visible.length) {
      list.innerHTML = '<li class="empty"><div>🦕</div>Nenhum fóssil encontrado por aqui.<br>Tente outro filtro!</li>';
      return;
    }

    list.innerHTML = visible.map(function (m, i) {
      var tags = m.dinos.slice(0, 4).map(function (d) {
        return '<span class="tag' + (dinoHit(d) ? " hit" : "") + '">' + esc(baseDino(d)) + "</span>";
      }).join("");
      if (m.dinos.length > 4) tags += '<span class="tag">+' + (m.dinos.length - 4) + "</span>";
      return '<li class="museum-item' + (m.id === state.activeId ? " active" : "") + '" data-id="' + m.id + '" style="animation-delay:' + Math.min(i * 30, 400) + 'ms">' +
        '<span class="flag">' + visaOf(m).flag + "</span>" +
        "<div><h3>" + esc(m.name) + (m.legendary ? '<span class="star">★</span>' : "") + "</h3>" +
        "<p>" + esc(m.city) + " · " + esc(visaOf(m).country) + "</p>" +
        '<div class="tags">' + tags + "</div></div></li>";
    }).join("");

    // Enquadra o mapa nos resultados quando há filtro ativo
    if (fit && (state.query || state.dino || state.region || state.visa || state.legendary)) {
      var bounds = L.latLngBounds(visible.map(function (m) { return [m.lat, m.lng]; }));
      var mobile = window.innerWidth <= 760;
      map.flyToBounds(bounds, {
        paddingTopLeft: mobile ? [30, 30] : [440, 60],
        paddingBottomRight: mobile ? [30, window.innerHeight * 0.6] : [60, 60],
        maxZoom: 6, duration: 1.2
      });
    }
  }

  function chip(label, active, extra) {
    return '<button class="chip' + (active ? " on" : "") + '"' + (extra || "") + ">" + label + "</button>";
  }

  function renderChips() {
    // Dinossauros mais frequentes nas coleções
    var counts = {};
    MUSEUMS.forEach(function (m) {
      m.dinos.forEach(function (d) {
        var b = baseDino(d);
        if (/^(Pegadas|Ovos|Fósseis|Titanossauros|Hadrossauros|Pterossauros|Dinossauros|Megatério)/.test(b)) return;
        counts[b] = (counts[b] || 0) + 1;
      });
    });
    var top = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; }).slice(0, 7);
    ["Giganotosaurus", "Argentinosaurus", "Spinosaurus"].forEach(function (d) {
      if (counts[d] && top.indexOf(d) === -1) top.push(d);
    });
    $("#dino-chips").innerHTML = top.map(function (d) {
      return chip(esc(d), state.dino === d, ' data-dino="' + esc(d) + '"');
    }).join("");

    $("#region-chips").innerHTML = REGIONS.map(function (r) {
      return chip(r, state.region === r, ' data-region="' + r + '"');
    }).join("");

    $("#visa-chips").innerHTML = Object.keys(VISA_LABELS).map(function (k) {
      var v = VISA_LABELS[k];
      return chip('<span class="dot" style="background:' + v.color + '"></span>' + v.text, state.visa === k, ' data-visa="' + k + '"');
    }).join("");
  }

  // ───────── Detalhe ─────────
  var STATUS_TEXT = { livre: "Sem visto", eletronico: "Autorização eletrônica / condicional", visto: "Visto obrigatório" };

  function renderDetail(m) {
    var v = visaOf(m);
    // Busca pelo nome abre o card do lugar no Google Maps (coordenadas soltas nem sempre caem no museu)
    var mapsQuery = m.maps || (m.name + ", " + m.city);
    var mapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(mapsQuery);
    var html =
      '<div class="d-hero">' +
        (m.legendary ? '<span class="d-badge">★ Nível lendário</span>' : "") +
        "<h2>" + esc(m.name) + "</h2>" +
        '<p class="d-loc">📍 ' + esc(m.city) + " · " + v.flag + " " + esc(v.country) + "</p>" +
      "</div>" +
      '<p class="d-desc">' + esc(m.description) + "</p>" +
      '<div class="d-section"><h4>O que tem por lá</h4><div class="d-dinos">' +
        m.dinos.map(function (d) {
          var b = baseDino(d);
          return '<button class="d-dino' + (wikiFor(b) ? " has-card" : "") + '" data-dino="' + esc(b) + '">' + esc(d) + "</button>";
        }).join("") +
      "</div></div>" +
      '<div class="d-section"><h4>🛂 Entrada com passaporte brasileiro</h4>' +
        '<div class="visa-card ' + v.status + '">' +
          '<div class="visa-top"><span class="flag">' + v.flag + '</span><div><div class="visa-country">' + esc(v.country) + '</div><div class="visa-status">' + STATUS_TEXT[v.status] + "</div></div></div>" +
          '<p class="visa-summary">' + esc(v.summary) + "</p>" +
          (v.details.length ? "<ul>" + v.details.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>" : "") +
          '<p class="visa-foot">Informação revisada em ' + window.VISA_REVIEWED + ". Regras de imigração mudam: confirme antes de viajar" +
            (v.link ? ' no <a href="' + v.link + '" target="_blank" rel="noopener">site oficial ↗</a>.' : ".") + "</p>" +
        "</div>" +
      "</div>" +
      '<div class="d-actions">' +
        (m.website ? '<a class="btn primary" href="' + m.website + '" target="_blank" rel="noopener">Site do museu ↗</a>' : "") +
        '<a class="btn ' + (m.website ? "ghost" : "primary") + '" href="' + mapsUrl + '" target="_blank" rel="noopener">Ver no Google Maps ↗</a>' +
      "</div>";

    var content = $("#detail-content");
    content.classList.remove("d-anim");
    content.innerHTML = html;
    void content.offsetWidth; // reinicia a animação
    content.classList.add("d-anim");
  }

  function select(id) {
    var m = MUSEUMS.find(function (x) { return x.id === id; });
    if (!m) return;
    state.activeId = id;
    renderDetail(m);
    var detail = $("#detail");
    detail.hidden = false;
    requestAnimationFrame(function () { detail.classList.add("open"); });
    detail.scrollTop = 0;

    var isMobile = window.innerWidth <= 760;
    var offset = isMobile ? [0, window.innerHeight * 0.25] : [-150, 0];
    var target = map.project([m.lat, m.lng], 7).subtract(offset);
    map.flyTo(map.unproject(target, 7), 7, { duration: 1.6 });

    render();
    var item = document.querySelector('.museum-item[data-id="' + id + '"]');
    if (item) item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (isMobile) $("#sidebar").classList.add("collapsed"), $("#open-sidebar").classList.add("show");
  }

  function closeDetail() {
    state.activeId = null;
    $("#detail").classList.remove("open");
    render();
  }

  // ───────── Ficha do dinossauro (imagem e resumo da Wikipédia) ─────────
  var wikiCache = {};
  // Só aceita o artigo se ele falar de fóssil/bicho pré-histórico (evita homônimos)
  var PALEO = /dinossaur|dinosaur|f[óo]ssil|fossil|extint|extinct|pr[ée]-hist|prehistoric|pterossaur|pterosaur|r[ée]ptil|reptile|crocodil|cret[áa]ceo|cretaceous|jur[áa]ssico|jurassic|tri[áa]ssico|triassic|mamute|mammoth|pregui[çc]a|sloth|petrific|icno|trace|track|ovo|egg/i;

  function wikiFor(name) {
    if (name in window.DINO_WIKI) return window.DINO_WIKI[name];
    return { pt: name, en: name };
  }

  function fetchSummary(lang, title) {
    if (!title) return Promise.resolve(null);
    var url = "https://" + lang + ".wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title.replace(/ /g, "_"));
    return fetch(url).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || j.type === "disambiguation" || !PALEO.test(j.extract || "")) return null;
      return {
        text: j.extract,
        img: (j.originalimage || j.thumbnail || {}).source || null,
        thumb: (j.thumbnail || {}).source || null,
        url: j.content_urls && j.content_urls.desktop.page
      };
    }).catch(function () { return null; });
  }

  function loadDino(name) {
    if (wikiCache[name]) return wikiCache[name];
    var w = wikiFor(name);
    wikiCache[name] = Promise.all([fetchSummary("pt", w.pt), fetchSummary("en", w.en)]).then(function (r) {
      var pt = r[0], en = r[1], main = pt || en;
      if (!main) return null;
      // Texto em português quando existe; imagem de onde tiver
      var img = (pt && pt.img) || (en && en.img);
      var thumb = (pt && pt.thumb) || (en && en.thumb);
      return { text: main.text, lang: pt ? "pt" : "en", img: img, thumb: thumb, url: main.url };
    });
    return wikiCache[name];
  }

  function openDino(name) {
    var modal = $("#dino-modal"), imgBox = $(".dm-img"), img = $("#dm-img"), text = $("#dm-text");
    var count = MUSEUMS.filter(function (m) { return m.dinos.some(function (d) { return baseDino(d) === name; }); }).length;
    modal.hidden = false;
    $("#dm-title").textContent = name;
    text.textContent = "Desenterrando informações…";
    text.classList.add("loading");
    img.classList.remove("loaded"); img.removeAttribute("src"); img.alt = name;
    imgBox.classList.remove("done", "empty");
    $("#dm-wiki").hidden = true;
    var filter = $("#dm-filter");
    filter.dataset.dino = name;
    filter.textContent = count > 1 ? "Ver os " + count + " museus com " + name : "Ver no mapa";

    loadDino(name).then(function (info) {
      if ($("#dm-title").textContent !== name) return; // usuário já abriu outro
      text.classList.remove("loading");
      if (!info) {
        text.textContent = "Não encontrei imagem nem resumo desse aqui. Mas ele está no museu, pode confiar! 🦖";
        imgBox.classList.add("done", "empty");
        return;
      }
      var t = info.text.length > 420 ? info.text.slice(0, 420).replace(/\s+\S*$/, "") + "…" : info.text;
      text.textContent = t + (info.lang === "en" ? " (resumo em inglês)" : "");
      var a = $("#dm-wiki"); a.href = info.url; a.hidden = !info.url;
      if (!info.img) { imgBox.classList.add("done", "empty"); return; }
      img.onload = function () { img.classList.add("loaded"); imgBox.classList.add("done"); };
      img.onerror = function () {
        if (info.thumb && img.src !== info.thumb) { img.src = info.thumb; return; }
        imgBox.classList.add("done", "empty");
      };
      img.src = info.img;
    });
  }

  function closeDino() {
    $("#dm-title").textContent = "";
    $("#dino-modal").hidden = true;
  }

  // ───────── Contadores animados ─────────
  function animateCounters() {
    var species = {};
    MUSEUMS.forEach(function (m) { m.dinos.forEach(function (d) { species[baseDino(d)] = 1; }); });
    var totals = {
      museums: MUSEUMS.length,
      countries: new Set(MUSEUMS.map(function (m) { return m.country; })).size,
      species: Object.keys(species).length
    };
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var end = totals[el.dataset.count], start = performance.now(), dur = 1400;
      (function tick(now) {
        var p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    });
  }

  // ───────── Eventos ─────────
  function toggleState(key, value) {
    state[key] = state[key] === value ? null : value;
    renderChips();
    render(true);
  }

  $("#search").addEventListener("input", function (e) { state.query = e.target.value.trim(); render(true); });
  $("#dino-chips").addEventListener("click", function (e) { var b = e.target.closest("[data-dino]"); if (b) toggleState("dino", b.dataset.dino); });
  $("#region-chips").addEventListener("click", function (e) { var b = e.target.closest("[data-region]"); if (b) toggleState("region", b.dataset.region); });
  $("#visa-chips").addEventListener("click", function (e) { var b = e.target.closest("[data-visa]"); if (b) toggleState("visa", b.dataset.visa); });
  $("#only-legendary").addEventListener("change", function (e) { state.legendary = e.target.checked; render(true); });
  $("#museum-list").addEventListener("click", function (e) { var li = e.target.closest("[data-id]"); if (li) select(li.dataset.id); });
  $("#close-detail").addEventListener("click", closeDetail);
  // Clicar numa área vazia do mapa desmarca o museu (clique em pino não chega aqui)
  map.on("click", function () { if (state.activeId) closeDetail(); });
  $("#detail").addEventListener("transitionend", function () { if (!this.classList.contains("open")) this.hidden = true; });
  function filterByDino(dino) {
    state.dino = dino; state.query = ""; $("#search").value = "";
    $("#sidebar").classList.remove("collapsed"); $("#open-sidebar").classList.remove("show");
    closeDetail(); renderChips(); render(true);
  }
  $("#detail-content").addEventListener("click", function (e) {
    var b = e.target.closest("[data-dino]");
    if (!b) return;
    if (wikiFor(b.dataset.dino)) openDino(b.dataset.dino);
    else filterByDino(b.dataset.dino);
  });
  $("#dino-modal").addEventListener("click", function (e) { if (e.target.closest("[data-close]")) closeDino(); });
  $("#dm-filter").addEventListener("click", function () { var d = this.dataset.dino; closeDino(); filterByDino(d); });
  $("#toggle-sidebar").addEventListener("click", function () {
    $("#sidebar").classList.add("collapsed"); $("#open-sidebar").classList.add("show");
  });
  $("#open-sidebar").addEventListener("click", function () {
    $("#sidebar").classList.remove("collapsed"); this.classList.remove("show");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!$("#dino-modal").hidden) closeDino(); else closeDetail();
  });

  // ───────── Início ─────────
  createMarkers();
  renderChips();
  render();
  setTimeout(function () {
    $("#intro").classList.add("hide");
    animateCounters();
    map.flyTo([20, -10], window.innerWidth <= 760 ? 1.5 : 2.5, { duration: 2 });
  }, 1800);
})();
