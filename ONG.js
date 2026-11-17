/* ONGs Participantes — cards em carrossel, busca, apresentação em carrossel (#ong/<slug>) e doação.
   Depende de Main.js ($, $$, io) e Data.js (ONGS, MIDIAS). */
(() => {
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ul = (arr, cls) => `<ul class="${cls}">${arr.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
const dir = o => MIDIAS + o.s + '/';
const logo = o => `<div class="in-l${o.s === 'tom-maior' ? ' tm-logo' : ''}${o.s === 'salve-uma-infancia' ? ' si-logo' : ''}${o.s === 'adefi' ? ' ad-logo' : ''}${o.s === 'dv-em-acao' ? ' dv-logo' : ''}"><span>${esc(o.sg)}</span><img src="${dir(o)}logo.png" alt="Logotipo ${esc(o.sg)}" onerror="this.remove()"></div>`;
const isVideo = f => /\.(mp4|webm|mov)$/i.test(f);
const slugs = ONGS.map(o => o.s);

/* ---------- cards em carrossel na vitrine ---------- */
const grid = $('#ig2'), view = $('#ongv'), lb = $('#lb');
const dotsWrap = $('#ongs-dots'), stepLabel = $('#ongs-step'), footerWrap = $('#ongs-footer');
const prevBtn = $('#ongs-prev'), nextBtn = $('#ongs-next');

grid.innerHTML = ONGS.map((o, i) => `
<article class="in-c rv" style="--d:${Math.min(i, 3) * .08}s" data-n="${esc((o.n + ' ' + o.c + ' ' + o.sg + ' ' + (o.tags || []).join(' ')).toLowerCase())}">
  <a class="in-cover" href="#ong/${o.s}" aria-label="Ver apresentação de ${esc(o.n)}"></a>
  ${logo(o)}<h3>${esc(o.n)}</h3>
  <div class="in-meta">
    <span class="in-category">${esc(o.c)}</span>
    ${o.badge ? `<span class="in-badge">${esc(o.badge)}</span>` : ''}
  </div>
  <p class="in-resumo">${esc(o.resumo)}</p>
  <button type="button" class="in-more" hidden aria-expanded="false">Ler mais</button>
  <a class="in-go" href="#ong/${o.s}">Ver apresentação <svg class="i"><use href="#ar" transform="rotate(90 12 12)"/></svg></a>
</article>`).join('');
$$('.in-c').forEach(e => io.observe(e));

function syncResumos() {
  $$('.in-resumo').forEach(p => {
    const btn = p.parentElement.querySelector('.in-more');
    if (!btn) return;
    const open = p.classList.contains('is-open');
    p.classList.remove('is-open');
    const overflow = p.scrollHeight > p.clientHeight + 1;
    if (open) p.classList.add('is-open');
    btn.hidden = !overflow && !open;
  });
}
syncResumos();
addEventListener('resize', syncResumos);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncResumos);
grid.addEventListener('click', e => {
  const btn = e.target.closest('.in-more');
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const p = btn.parentElement.querySelector('.in-resumo');
  const open = p.classList.toggle('is-open');
  btn.textContent = open ? 'Ler menos' : 'Ler mais';
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

/* ---------- controle do carrossel da vitrine + busca ---------- */
const visibleCards = () => $$('.in-c').filter(c => !c.hidden);

function currentCardIndex() {
  const cards = visibleCards();
  if (!cards.length) return 0;
  const scrollLeft = grid.scrollLeft;
  let best = 0, bestDiff = Infinity;
  cards.forEach((c, idx) => {
    const diff = Math.abs(c.offsetLeft - grid.offsetLeft - scrollLeft);
    if (diff < bestDiff) { bestDiff = diff; best = idx; }
  });
  return best;
}

function goToCard(idx, smooth = true) {
  const cards = visibleCards();
  if (!cards.length) return;
  const target = cards[Math.max(0, Math.min(idx, cards.length - 1))];
  grid.scrollTo({ left: target.offsetLeft - grid.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
}

function refreshShowcaseCarousel(rebuildDots = false) {
  const cards = visibleCards();
  const total = cards.length;
  footerWrap.style.display = total > 1 ? 'flex' : 'none';
  if (!total) return;

  if (rebuildDots) {
    dotsWrap.innerHTML = cards.map((_, i) => `<button type="button" aria-label="Ir para ONG ${i + 1}"></button>`).join('');
    [...dotsWrap.children].forEach((dot, i) => {
      dot.onclick = () => goToCard(i, true);
    });
  }

  const active = currentCardIndex();
  [...dotsWrap.children].forEach((dot, i) => dot.classList.toggle('on', i === active));
  stepLabel.textContent = `${active + 1} de ${total}`;

  const atStart = grid.scrollLeft <= 6;
  const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 6;
  prevBtn.disabled = atStart;
  nextBtn.disabled = atEnd;
}

prevBtn.onclick = () => {
  const step = innerWidth >= 1024 ? 3 : innerWidth >= 768 ? 2 : 1;
  goToCard(currentCardIndex() - step, true);
};
nextBtn.onclick = () => {
  const step = innerWidth >= 1024 ? 3 : innerWidth >= 768 ? 2 : 1;
  goToCard(currentCardIndex() + step, true);
};

grid.addEventListener('scroll', () => refreshShowcaseCarousel(false), { passive: true });
addEventListener('resize', () => refreshShowcaseCarousel(false));

const qn = $('#qn');
qn.textContent = ONGS.length + ' ONGs';
$('#q').oninput = e => {
  const t = e.target.value.trim().toLowerCase();
  let n = 0;
  $$('.in-c').forEach(c => {
    const ok = !t || c.dataset.n.includes(t);
    c.hidden = !ok;
    if (ok) n++;
  });
  qn.textContent = n + (n === 1 ? ' ONG' : ' ONGs');
  $('#no').style.display = n ? 'none' : 'block';
  grid.scrollTo({ left: 0, behavior: 'auto' });
  syncResumos();
  refreshShowcaseCarousel(true);
};

refreshShowcaseCarousel(true);

/* ---------- blocos internos da apresentação ---------- */
const section = (t, body) => body ? `<section class="ov-s"><h3>${esc(t)}</h3>${body}</section>` : '';
const cards = a => a && a.length ? `<div class="ov-g">${a.map(([t, d]) => `<div class="ov-card"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join('')}</div>` : '';

function mediaCarousel(o) {
  const list = o.midia && o.midia.length ? o.midia : ['foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg'];
  const slide = f => {
    const p = dir(o) + f;
    const ph = `<div class="cs-ph"><b>Espaço para mídia</b><span>Salve o arquivo em:</span><code>${esc(p)}</code></div>`;
    if (isVideo(f)) {
      const loop = /boomerang/i.test(f) ? 'autoplay loop muted' : 'controls';
      return `<figure class="cs" data-ph="${esc(ph)}"><video ${loop} playsinline preload="metadata" src="${p}"></video></figure>`;
    }
    return `<figure class="cs" data-ph="${esc(ph)}"><img loading="lazy" src="${p}" alt="Registro de ${esc(o.sg)} (${esc(f)})" data-z="${p}"></figure>`;
  };
  return `<div class="cr" data-cr><div class="cr-t">${list.map(slide).join('')}</div>
  <button type="button" class="cr-b cr-p" aria-label="Mídia anterior">‹</button><button type="button" class="cr-b cr-n" aria-label="Próxima mídia">›</button>
  <div class="cr-f"><div class="cr-d">${list.map((_, i) => `<button type="button" aria-label="Ir para mídia ${i + 1}"></button>`).join('')}</div><span class="cr-c"></span></div></div>`;
}

function contact(o) {
  const c = o.contato || {}, it = [];
  (c.pessoas || []).forEach(p => it.push(['Responsável', p]));
  if (c.endereco) it.push(['Endereço', c.endereco, 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(c.endereco + ' ' + o.n)]);
  if (c.telefone) it.push(['Telefone', c.telefone, 'tel:+55' + c.telefone.replace(/\D/g, '')]);
  (c.telefones || []).forEach(t => it.push([t.rotulo || 'Telefone', t.numero, 'tel:+55' + t.numero.replace(/\D/g, '')]));
  if (c.whatsapp) { const d = c.whatsapp.replace(/^55/, ''); it.push(['WhatsApp', `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`, 'https://wa.me/' + c.whatsapp]); }
  if (c.email) it.push(['E-mail', c.email, 'mailto:' + c.email]);
  if (c.site) it.push(['Site', c.site.replace(/^https?:\/\/(www\.)?/, ''), c.site]);
  if (c.instagram) it.push(['Instagram', '@' + c.instagram, 'https://instagram.com/' + c.instagram]);
  if (c.facebook) it.push(['Facebook', c.facebook.nome, c.facebook.url]);
  if (c.cnpj) it.push(['CNPJ', c.cnpj]);
  if (!it.length) it.push(['Contato', 'Em confirmação pela instituição']);
  const html = it.map(([l, v, h]) => h
    ? `<a href="${esc(h)}" ${h.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}><small>${l}</small><span>${esc(v)}</span></a>`
    : `<div><small>${l}</small><span>${esc(v)}</span></div>`).join('');
  return `<div class="ov-ct">${html}</div>${c.nota ? `<p class="ov-nt">${esc(c.nota)}</p>` : ''}`;
}

const PH = '<h4>Apoie esta causa</h4><div class="in-ph">As informações para doação serão disponibilizadas pela instituição</div>';
function donation(o) {
  const d = o.doacao || {};
  if (!(d.disponivel === true && d.validado === true && d.beneficiario && d.chave)) return `<section class="ov-s"><div class="in-don">${PH}</div></section>`;
  return `<section class="ov-s"><div class="in-don"><h4>Apoie esta causa</h4><p>Abra o aplicativo do seu banco, escolha PIX e escaneie o código ou copie a chave. A doação é feita direto no app do seu banco.</p>
  <div class="in-dg"><div class="in-qr"><img src="${dir(o)}qrcode.png" alt="QR Code PIX de ${esc(o.n)}" onerror="this.closest('.in-don').innerHTML='${PH.replace(/'/g, "\\'")}'"></div>
  <div><p>Beneficiário</p><b>${esc(d.beneficiario)}</b><p style="margin-top:12px">Chave PIX</p><div class="in-ch"><code>${esc(d.chave)}</code><button type="button" class="btn bp" style="padding:10px 20px" data-cp="${esc(d.chave)}">Copiar chave</button></div></div></div></div></section>`;
}

function renderSlide(o, i) {
  const prev = ONGS[(i + ONGS.length - 1) % ONGS.length], next = ONGS[(i + 1) % ONGS.length];
  const mv = o.missao || o.visao ? `<div class="ov-2">${o.missao ? `<div class="ov-q"><h4>Missão</h4><p>${esc(o.missao)}</p></div>` : ''}${o.visao ? `<div class="ov-q"><h4>Visão</h4><p>${esc(o.visao)}</p></div>` : ''}</div>` : '';
  const val = o.valores ? `<div class="ov-chips">${o.valores.map(v => `<span>${esc(v)}</span>`).join('')}</div>` : '';
  const marcos = o.marcos ? `<div class="ov-tlm">${o.marcos.map(([a, t]) => `<div><b>${esc(a)}</b>${esc(t)}</div>`).join('')}</div>` : '';

  return `
  <article class="ov-slide" data-slug="${esc(o.s)}" data-idx="${i}">
    <div class="ov-hero"><div class="c ov-hg">${logo(o)}<div><h2>${esc(o.n)}</h2><p class="cz">${esc(o.c)}</p>
      ${(o.tags || o.badge) ? `<div class="ov-tags">${(o.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}${o.badge ? `<span>${esc(o.badge)}</span>` : ''}</div>` : ''}</div></div></div>
    <div class="c ov-b">
      ${section('Quem somos', `<div class="tx">${o.sobre.map(p => `<p>${esc(p)}</p>`).join('')}</div>${mv}${val}`)}
      ${section('A ONG em movimento', mediaCarousel(o))}
      ${section('Como atua', cards(o.atuacao))}
      ${section(o.projetosTitulo || 'Projetos em destaque', cards(o.projetos))}
      ${section('Trajetória', marcos)}
      ${section('Reconhecimentos', o.reconhecimentos ? ul(o.reconhecimentos, 'ov-ck') : '')}
      ${section('Resultados e ações', o.impacto ? ul(o.impacto, 'ov-ck') : '')}
      ${section(o.apoiarTitulo || 'Como apoiar', o.apoiar ? ul(o.apoiar, 'ov-ck') : '')}
      ${section('Contato e redes oficiais', contact(o))}
      ${donation(o)}
      <nav class="ov-nv">
        <button type="button" data-ong-goto="${(i + ONGS.length - 1) % ONGS.length}">← ${esc(prev.sg)}</button>
        <button type="button" data-ong-goto="${(i + 1) % ONGS.length}">${esc(next.sg)} →</button>
      </nav>
    </div>
  </article>`;
}

/* ---------- carrossel de apresentações + carrossel interno de mídias ---------- */
let deckBuilt = false;
let activeIdx = 0;
let deckSyncLock = false;
let mediaObservers = [];

function buildDeck() {
  if (deckBuilt) return;
  deckBuilt = true;

  view.innerHTML = `
  <div class="ov-top">
    <div class="c ov-top-row">
      <a class="ov-back" href="#instituicoes">← Voltar às ONGs</a>
      <div class="ov-deck-nav" aria-label="Navegar entre apresentações">
        <button type="button" class="ov-nav-btn" id="ov-prev" aria-label="ONG anterior">‹</button>
        <span class="ov-deck-counter" id="ov-counter">1 / ${ONGS.length}</span>
        <button type="button" class="ov-nav-btn" id="ov-next" aria-label="Próxima ONG">›</button>
      </div>
    </div>
    <div class="c ov-pills-wrap">
      <div class="ov-pills" id="ov-pills" role="tablist" aria-label="Selecionar ONG">
        ${ONGS.map((o, idx) => `<button type="button" role="tab" class="ov-pill" data-ong-goto="${idx}">${esc(o.sg)}</button>`).join('')}
      </div>
    </div>
  </div>
  <div class="ov-deck" id="ov-deck">
    ${ONGS.map((o, i) => renderSlide(o, i)).join('')}
  </div>`;

  const deck = $('#ov-deck');
  const slides = [...deck.querySelectorAll('.ov-slide')];
  const pills = [...$('#ov-pills').querySelectorAll('.ov-pill')];
  const counter = $('#ov-counter');

  function updateDeckUI(idx, updateHash = true) {
    activeIdx = idx;
    const o = ONGS[idx];
    counter.textContent = `${idx + 1} / ${ONGS.length}`;
    document.title = `${o.n} — Indaial Solidária`;

    pills.forEach((p, i) => {
      const isOn = i === idx;
      p.classList.toggle('on', isOn);
      p.setAttribute('aria-selected', isOn ? 'true' : 'false');
      if (isOn) {
        p.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    slides.forEach((s, i) => {
      if (i !== idx) {
        s.querySelectorAll('video').forEach(v => { if (!v.paused && !v.loop) v.pause(); });
      }
    });

    if (updateHash && location.hash !== `#ong/${o.s}`) {
      deckSyncLock = true;
      history.replaceState(null, '', `#ong/${o.s}`);
      setTimeout(() => { deckSyncLock = false; }, 60);
    }
  }

  window.goToOngSlide = (idx, smooth = true) => {
    const targetIdx = (idx + ONGS.length) % ONGS.length;
    const targetSlide = slides[targetIdx];
    if (!targetSlide) return;
    view.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    deck.scrollTo({ left: targetSlide.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    updateDeckUI(targetIdx, true);
  };

  let scrollTimer;
  deck.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      if (!deck.clientWidth) return;
      const center = deck.scrollLeft + deck.clientWidth / 2;
      let best = 0, bestDist = Infinity;
      slides.forEach((s, i) => {
        const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      if (best !== activeIdx) updateDeckUI(best, true);
    }, 60);
  }, { passive: true });

  $('#ov-prev').onclick = () => window.goToOngSlide(activeIdx - 1, true);
  $('#ov-next').onclick = () => window.goToOngSlide(activeIdx + 1, true);

  view.addEventListener('click', e => {
    const btn = e.target.closest('[data-ong-goto]');
    if (btn) {
      e.preventDefault();
      window.goToOngSlide(Number(btn.dataset.ongGoto), true);
    }
  });

  initAllMediaCarousels();
}

function initAllMediaCarousels() {
  mediaObservers.forEach(obs => obs.disconnect());
  mediaObservers = [];

  view.querySelectorAll('[data-cr]').forEach(cr => {
    const t = cr.querySelector('.cr-t');
    const sl = [...t.children];
    const dots = [...cr.querySelectorAll('.cr-d button')];
    const cnt = cr.querySelector('.cr-c');
    const rail = cr.querySelector('.cr-d');

    const indexFrom = i => (i + sl.length) % sl.length;
    const cur = () => {
      if (!t.clientWidth || !sl.length) return 0;
      const x = t.scrollLeft + t.clientWidth / 2;
      let best = 0, bestD = Infinity;
      sl.forEach((s, i) => {
        const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - x);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    };
    const to = (i, smooth) => {
      const n = indexFrom(i);
      t.scrollTo({ left: sl[n].offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    };
    const upd = () => {
      const c = cur();
      dots.forEach((d, i) => d.classList.toggle('on', i === c));
      cnt.textContent = (c + 1) + ' / ' + sl.length;
      if (rail && dots[c]) rail.scrollTo({ left: dots[c].offsetLeft - rail.clientWidth / 2 + dots[c].offsetWidth / 2, behavior: 'smooth' });
      sl.forEach((s, i) => { const v = s.querySelector('video'); if (v && i !== c && !v.paused && !v.loop) v.pause(); });
    };

    cr.querySelector('.cr-p').onclick = e => { e.stopPropagation(); to(cur() - 1, true); };
    cr.querySelector('.cr-n').onclick = e => { e.stopPropagation(); to(cur() + 1, true); };
    dots.forEach((d, i) => d.onclick = e => { e.stopPropagation(); to(i, true); });
    t.addEventListener('scroll', upd, { passive: true });

    const obs = new ResizeObserver(() => {
      const n = cur();
      if (sl[n] && Math.abs(t.scrollLeft - sl[n].offsetLeft) > 2) to(n, false);
    });
    obs.observe(t);
    mediaObservers.push(obs);

    sl.forEach(s => {
      const m = s.querySelector('img,video');
      if (m) m.addEventListener('error', () => { s.innerHTML = s.dataset.ph; });
    });
    upd();
  });
}

/* ---------- rota: index.html#ong/<slug> ---------- */
function route() {
  if (deckSyncLock) return;
  const m = location.hash.match(/^#ong\/([\w-]+)/), i = m ? slugs.indexOf(m[1]) : -1;
  if (i < 0) {
    if (view.classList.contains('o')) {
      view.classList.remove('o');
      document.body.classList.remove('lock');
      view.querySelectorAll('video').forEach(v => { if (!v.paused && !v.loop) v.pause(); });
    }
    return;
  }
  buildDeck();
  view.classList.add('o');
  document.body.classList.add('lock');
  requestAnimationFrame(() => window.goToOngSlide(i, false));
}
addEventListener('hashchange', () => { route(); if (!view.classList.contains('o')) document.title = 'Indaial Solidária — Movimento que inspira'; });
route();

/* ---------- cliques gerais (copiar PIX e zoom nas fotos) ---------- */
view.addEventListener('click', e => {
  const c = e.target.closest('[data-cp]');
  if (c) return navigator.clipboard.writeText(c.dataset.cp).then(() => c.textContent = 'Chave copiada!').catch(() => c.textContent = 'Selecione e copie');
  const z = e.target.closest('[data-z]');
  if (z) { lb.innerHTML = `<img src="${z.dataset.z}" alt="">`; lb.classList.add('o'); }
});
lb.onclick = () => lb.classList.remove('o');
addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (lb.classList.contains('o')) lb.classList.remove('o');
    else if (view.classList.contains('o')) location.hash = '#instituicoes';
  }
  if (view.classList.contains('o') && !lb.classList.contains('o')) {
    if (e.key === 'ArrowRight') window.goToOngSlide(activeIdx + 1, true);
    if (e.key === 'ArrowLeft') window.goToOngSlide(activeIdx - 1, true);
  }
});
})();