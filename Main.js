
/* =====================================================================
   main.js — comportamentos gerais da página
   (menu, barra de progresso, animações de entrada, contadores, hero)
   ===================================================================== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------- menu mobile ---------- */
$('#mt').onclick = e => {
  e.currentTarget.classList.toggle('o');
  $('#lk').classList.toggle('o');
};
$$('#lk a').forEach(a => a.onclick = () => {
  $('#mt').classList.remove('o');
  $('#lk').classList.remove('o');
});

/* ---------- scroll: barra de progresso, header e botão voltar ao topo ---------- */
function sc() {
  const y = scrollY;
  const h = document.documentElement.scrollHeight - innerHeight;
  $('#bar').style.width = (y / h * 100) + '%';
  $('#hd').classList.toggle('s', y > 20);
  $('#up').classList.toggle('s', y > 600);
}
addEventListener('scroll', sc, { passive: true });
sc();
$('#up').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

/* ---------- animação de entrada (.rv) ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('v');
    io.unobserve(e.target);
  }
}), { threshold: .15, rootMargin: '0px 0px -40px 0px' });
$$('.rv').forEach(e => io.observe(e));

/* ---------- item ativo do menu ---------- */
const lio = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    $$('#lk a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main,section[id]').forEach(s => lio.observe(s));

/* ---------- contadores do impacto ---------- */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  cio.unobserve(e.target);
  const el = e.target;
  const t = +el.dataset.t;
  const p = el.dataset.p || '';
  const s = el.dataset.s || '';
  const d = rm ? 1 : 1600;
  const t0 = performance.now();
  (function f(n) {
    const k = Math.min(1, (n - t0) / d);
    const v = Math.round(t * (1 - Math.pow(1 - k, 3)));
    el.textContent = p + v.toLocaleString('pt-BR') + s;
    if (k < 1) requestAnimationFrame(f);
  })(t0);
}), { threshold: .6 });
$$('.sn').forEach(e => cio.observe(e));

/* ---------- efeito de digitação no título ---------- */
const words = ['que inspira', 'que conecta', 'que transforma'];
const ty = $('#ty');
let wi = 0, ci = 0, del = false;
(function tick() {
  if (rm) { ty.textContent = words[0]; return; }
  const w = words[wi];
  ty.textContent = w.slice(0, ci);
  if (!del && ci === w.length) { del = true; return setTimeout(tick, 1900); }
  if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; }
  ci += del ? -1 : 1;
  setTimeout(tick, del ? 45 : 95);
})();

/* ---------- faixa amarela (marquee) ---------- */
const mw = ['Moradores', 'Empresas', 'Voluntários', 'Organizações', 'Solidariedade', 'Indaial'];
const row = mw.map(w => `<span>${w}<svg class="i w" style="width:26px;height:26px"><use href="#heart"/></svg></span>`).join('');
$('#mqi').innerHTML = row + row;

/* ---------- parallax do hero ---------- */
const art = $('#art');
if (!rm) {
  $('#home').addEventListener('mousemove', e => {
    const x = (e.clientX / innerWidth - .5) * 18;
    const y = (e.clientY / innerHeight - .5) * 18;
    art.style.transform = `translate(${x}px,${y}px) rotate(${x / 10}deg)`;
  });
}

/* ---------- inclinação 3D e brilho dos cards de temas ---------- */
$$('.pc').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    c.style.setProperty('--mx', x + 'px');
    c.style.setProperty('--my', y + 'px');
    if (!rm) {
      c.style.transform = `perspective(700px) rotateX(${(.5 - y / r.height) * 8}deg) rotateY(${(x / r.width - .5) * 8}deg) translateY(-6px)`;
    }
  });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});

/* ---------- efeito ripple nos botões ---------- */
$$('.btn').forEach(b => b.addEventListener('click', e => {
  const r = b.getBoundingClientRect();
  const s = Math.max(r.width, r.height);
  const sp = document.createElement('span');
  sp.className = 'rp';
  sp.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
  b.appendChild(sp);
  setTimeout(() => sp.remove(), 600);
}));

/* ---------- corações flutuantes (seção final) ---------- */
if (!rm) {
  $('#hf').innerHTML = Array.from({ length: 10 }, (_, i) =>
    `<svg class="hf" style="left:${5 + i * 10}%;width:${22 + i % 3 * 12}px;height:${22 + i % 3 * 12}px;animation-delay:${-i * 1.1}s;animation-duration:${8 + i % 4 * 2}s;fill:currentColor;stroke:none"><use href="#heart"/></svg>`
  ).join('');
}