const key = 'homephysio.professional.demo.v1';
const form = document.querySelector('#form'), game = document.querySelector('#game'), targets = document.querySelector('#targets'), list = document.querySelector('#plans'), message = document.querySelector('#message');
function read() { const value = JSON.parse(localStorage.getItem(key) || '[]'); if (!Array.isArray(value)) throw Error('Dados locais inválidos.'); return value; }
function render() {
  list.replaceChildren();
  let plans; try { plans = read(); } catch { list.textContent = 'Não foi possível ler as atividades locais. Os dados foram preservados.'; return; }
  document.querySelector('#total').textContent = String(plans.length);
  if (!plans.length) { const empty = document.createElement('div'); empty.className = 'empty'; empty.textContent = 'Nenhuma atividade ainda. Configure a primeira ao lado.'; list.append(empty); return; }
  for (const plan of plans.toReversed()) {
    const item = document.createElement('article'); item.className = 'plan';
    const label = document.createElement('span'); label.className = 'pill'; label.textContent = plan.gameId === 'shoulder' ? 'SEMÁFORO' : 'SURFE';
    const title = document.createElement('h3'); title.textContent = plan.title;
    const detail = document.createElement('p'); detail.textContent = `${plan.displayName} · ${plan.config.repetitions} acertos mínimos · ${plan.config.sessionDurationMs / 1000} s`;
    const info = document.createElement('small'); info.textContent = `${plan.config.pointsPerHit} pontos por acerto · ${(plan.config.tolerance * 100).toFixed(0)}% de tolerância`;
    const download = document.createElement('button'); download.type = 'button'; download.className = 'secondary'; download.textContent = 'Exportar JSON';
    download.addEventListener('click', () => { const url = URL.createObjectURL(new Blob([JSON.stringify(plan, null, 2)], { type: 'application/json' })); const a = document.createElement('a'); a.href = url; a.download = `atividade-${plan.id}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); });
    item.append(label, title, detail, info, download); list.append(item);
  }
}
game.addEventListener('change', () => { const surf = game.value === 'surfing'; document.querySelector('#side-wrap').hidden = !surf; document.querySelector('#targets-label').firstChild.textContent = surf ? 'Alvos de inclinação (em %)' : 'Alvos dos braços (esquerdo/direito, em %)'; targets.value = surf ? '30, 70, 20, 60' : '50/50, 80/50, 50/80'; });
form.addEventListener('submit', event => {
  event.preventDefault(); message.textContent = '';
  try {
    const f = new FormData(form), entries = String(f.get('targets')).split(',').map(s => s.trim());
    const level = s => { if (!/^\d+(?:\.\d+)?$/.test(s)) throw Error('Informe alvos numéricos entre 0 e 100.'); const n = Number(s); if (n < 0 || n > 100) throw Error('Cada alvo deve estar entre 0 e 100%.'); return n / 100; };
    if (!entries.length || entries.length > 1000) throw Error('Informe de 1 a 1000 alvos.');
    const values = f.get('gameId') === 'shoulder' ? entries.map(entry => { const pair = entry.split('/').map(s => s.trim()); if (pair.length !== 2) throw Error('Use pares como 50/80 para os braços.'); return { left: level(pair[0]), right: level(pair[1]) }; }) : entries.map(level);
    const config = { targets: values, repetitions: Number(f.get('repetitions')), holdMs: Number(f.get('hold')) * 1000, timeLimitMs: Number(f.get('timeLimit')) * 1000, tolerance: Number(f.get('tolerance')) / 100, sessionDurationMs: Number(f.get('duration')) * 1000, pointsPerHit: Number(f.get('points')) };
    if (config.holdMs > config.timeLimitMs) throw Error('A permanência deve ser menor ou igual ao tempo por alvo.');
    if (f.get('gameId') === 'surfing') config.side = f.get('side');
    const displayName = String(f.get('displayName')).trim(), title = String(f.get('title')).trim();
    if (!displayName || !title) throw Error('Preencha nome e título.');
    const plan = { id: crypto.randomUUID(), version: 1, patientId: 'jogador-demo', displayName, title, gameId: f.get('gameId'), config };
    const plans = read(); plans.push(plan); localStorage.setItem(key, JSON.stringify(plans)); render(); message.textContent = 'Atividade salva somente neste navegador.';
  } catch (error) { message.textContent = error instanceof Error ? error.message : 'Não foi possível salvar.'; }
});
render();
