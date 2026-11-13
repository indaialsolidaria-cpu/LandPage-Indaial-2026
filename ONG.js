/* ONGs Participantes — cards, busca, apresentação (#ong/<slug>), carrossel e doação.
   Depende de main.js ($, $$, io) e data.js (ONGS, MIDIAS). */
(() => {
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ul = (arr, cls) => `<ul class="${cls}">${arr.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`;
const dir = o => MIDIAS + o.s + '/';
const logo = o => `<div class="in-l${o.s === 'tom-maior' ? ' tm-logo' : ''}${o.s === 'salve-uma-infancia' ? ' si-logo' : ''}${o.s === 'adefi' ? ' ad-logo' : ''}${o.s === 'dv-em-acao' ? ' dv-logo' : ''}"><span>${esc(o.sg)}</span><img src="${dir(o)}logo.png" alt="Logotipo ${esc(o.sg)}" onerror="this.remove()"></div>`;
const isVideo = f => /\.(mp4|webm|mov)$/i.test(f);
const slugs = ONGS.map(o => o.s);

/* ---------- cards ---------- */
const grid = $('#ig2'), view = $('#ongv'), lb = $('#lb');
grid.innerHTML = ONGS.map((o, i) => `
<a class="in-c rv" href="#ong/${o.s}" style="--d:${i % 3 * .08}s" data-n="${esc((o.n + ' ' + o.c + ' ' + o.sg + ' ' + (o.tags || []).join(' ')).toLowerCase())}">
  ${logo(o)}<h3>${esc(o.n)}</h3>
  <div class="in-meta">
    <span class="in-category">${esc(o.c)}</span>
    ${o.badge ? `<span class="in-badge">${esc(o.badge)}</span>` : ''}
  </div>
  <p>${esc(o.resumo)}</p>
  <span class="in-go">Ver apresentação <svg class="i"><use href="#ar" transform="rotate(90 12 12)"/></svg></span>
</a>`).join('');
$$('.in-c').forEach(e => io.observe(e));

/* ---------- busca ---------- */
const qn = $('#qn'); qn.textContent = ONGS.length + ' ONGs';
$('#q').oninput = e => {
  const t = e.target.value.trim().toLowerCase(); let n = 0;
  $$('.in-c').forEach(c => { const ok = !t || c.dataset.n.includes(t); c.hidden = !ok; if (ok) n++; });
  qn.textContent = n + (n === 1 ? ' ONG' : ' ONGs'); $('#no').style.display = n ? 'none' : 'block';
};

/* ---------- blocos da apresentação ---------- */
const section = (t, body) => body ? `<section class="ov-s"><h3>${esc(t)}</h3>${body}</section>` : '';
const cards = a => a && a.length ? `<div class="ov-g">${a.map(([t, d]) => `<div class="ov-card"><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join('')}</div>` : '';

function carousel(o) {
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
  return `<div class="cr${o.s === 'tom-maior' ? ' tm-carousel' : ''}${o.s === 'salve-uma-infancia' ? ' si-carousel' : ''}${o.s === 'adefi' ? ' ad-carousel' : ''}${o.s === 'dv-em-acao' ? ' dv-carousel' : ''}${o.s === 'apae' ? ' apae-carousel' : ''}" data-cr><div class="cr-t">${list.map(slide).join('')}</div>
  <button class="cr-b cr-p" aria-label="Anterior">‹</button><button class="cr-b cr-n" aria-label="Próxima">›</button>
  <div class="cr-f"><div class="cr-d">${list.map((_, i) => `<button aria-label="Ir para ${i + 1}"></button>`).join('')}</div><span class="cr-c"></span></div></div>`;
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
  <div><p>Beneficiário</p><b>${esc(d.beneficiario)}</b><p style="margin-top:12px">Chave PIX</p><div class="in-ch"><code>${esc(d.chave)}</code><button class="btn bp" style="padding:10px 20px" data-cp="${esc(d.chave)}">Copiar chave</button></div></div></div></div></section>`;
}

function present(o, i) {
  const prev = ONGS[(i + ONGS.length - 1) % ONGS.length], next = ONGS[(i + 1) % ONGS.length];
  const mv = o.missao || o.visao ? `<div class="ov-2">${o.missao ? `<div class="ov-q"><h4>Missão</h4><p>${esc(o.missao)}</p></div>` : ''}${o.visao ? `<div class="ov-q"><h4>Visão</h4><p>${esc(o.visao)}</p></div>` : ''}</div>` : '';
  const val = o.valores ? `<div class="ov-chips">${o.valores.map(v => `<span>${esc(v)}</span>`).join('')}</div>` : '';
  const marcos = o.marcos ? `<div class="ov-tlm">${o.marcos.map(([a, t]) => `<div><b>${esc(a)}</b>${esc(t)}</div>`).join('')}</div>` : '';
  view.innerHTML = `
  <div class="ov-top"><div class="c"><a class="ov-back" href="#instituicoes">← Voltar às ONGs</a><span class="ov-crumb">ONGs Participantes / <b>${esc(o.sg)}</b></span></div></div>
  <div class="ov-hero"><div class="c ov-hg">${logo(o)}<div><h2>${esc(o.n)}</h2><p class="cz">${esc(o.c)}</p>
    ${(o.tags || o.badge) ? `<div class="ov-tags">${(o.tags || []).map(t => `<span>${esc(t)}</span>`).join('')}${o.badge ? `<span>${esc(o.badge)}</span>` : ''}</div>` : ''}</div></div></header>
  <main class="c ov-b">
    ${section('Quem somos', `<div class="tx">${o.sobre.map(p => `<p>${esc(p)}</p>`).join('')}</div>${mv}${val}`)}
    ${section('A ONG em movimento', carousel(o))}
    ${section('Como atua', cards(o.atuacao))}
    ${section(o.projetosTitulo || 'Projetos em destaque', cards(o.projetos))}
    ${section('Trajetória', marcos)}
    ${section('Reconhecimentos', o.reconhecimentos ? ul(o.reconhecimentos, 'ov-ck') : '')}
    ${section('Resultados e ações', o.impacto ? ul(o.impacto, 'ov-ck') : '')}
    ${section(o.apoiarTitulo || 'Como apoiar', o.apoiar ? ul(o.apoiar, 'ov-ck') : '')}
    ${section('Contato e redes oficiais', contact(o))}
    ${donation(o)}
    <nav class="ov-nv"><a href="#ong/${prev.s}">← ${esc(prev.sg)}</a><a href="#ong/${next.s}">${esc(next.sg)} →</a></nav>
  </main>`;
  initCarousel();
}

/* ---------- carrossel ---------- */
function initCarousel() {
  const cr = view.querySelector('[data-cr]'); if (!cr) return;
  const t = cr.querySelector('.cr-t'), sl = [...t.children], dots = [...cr.querySelectorAll('.cr-d button')], cnt = cr.querySelector('.cr-c');
  const to = i => t.scrollTo({ left: sl[(i + sl.length) % sl.length].offsetLeft - t.offsetLeft, behavior: 'smooth' });
  const cur = () => Math.round(t.scrollLeft / t.clientWidth);
  const upd = () => { const c = Math.min(cur(), sl.length - 1); dots.forEach((d, i) => d.classList.toggle('on', i === c)); cnt.textContent = (c + 1) + ' / ' + sl.length; sl.forEach((s, i) => { const v = s.querySelector('video'); if (v && i !== c && !v.paused && !v.loop) v.pause(); }); };
  cr.querySelector('.cr-p').onclick = () => to(cur() - 1);
  cr.querySelector('.cr-n').onclick = () => to(cur() + 1);
  dots.forEach((d, i) => d.onclick = () => to(i));
  t.addEventListener('scroll', upd, { passive: true });
  /* arquivo ausente -> mostra o quadro tracejado com o caminho esperado */
  sl.forEach(s => { const m = s.querySelector('img,video'); m.addEventListener('error', () => { s.innerHTML = s.dataset.ph; }); });
  upd();
}

/* ---------- rota: index.html#ong/<slug> ---------- */
function route() {
  const m = location.hash.match(/^#ong\/([\w-]+)/), i = m ? slugs.indexOf(m[1]) : -1;
  if (i < 0) {
    if (view.classList.contains('o')) { view.classList.remove('o'); document.body.classList.remove('lock'); view.innerHTML = ''; }
    return;
  }
  present(ONGS[i], i); view.classList.add('o'); document.body.classList.add('lock'); view.scrollTop = 0;
  document.title = ONGS[i].n + ' — Indaial Solidária';
}
addEventListener('hashchange', () => { route(); if (!view.classList.contains('o')) document.title = 'Indaial Solidária — Movimento que inspira'; });
route();

/* ---------- cliques ---------- */
view.addEventListener('click', e => {
  const c = e.target.closest('[data-cp]');
  if (c) return navigator.clipboard.writeText(c.dataset.cp).then(() => c.textContent = 'Chave copiada!').catch(() => c.textContent = 'Selecione e copie');
  const z = e.target.closest('[data-z]');
  if (z) { lb.innerHTML = `<img src="${z.dataset.z}" alt="">`; lb.classList.add('o'); }
});
lb.onclick = () => lb.classList.remove('o');
addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (lb.classList.contains('o')) lb.classList.remove('o'); else if (view.classList.contains('o')) location.hash = '#instituicoes'; }
  if (view.classList.contains('o') && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { const b = view.querySelector(e.key === 'ArrowRight' ? '.cr-n' : '.cr-p'); b && b.click(); }
});
})();