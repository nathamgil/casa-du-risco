/* =====================================================================
   Casa du Risco — dados de EXEMPLO do modo demonstração (site e painel).
   Só roda com o Supabase desligado. Todos os clientes são fictícios e
   marcados "(exemplo)". Os valores em R$ também são fictícios: servem para
   mostrar o funil, não são tabela do estúdio.
   As "referências" usam fotos da pasta fotos/.
   Carrega depois de config.js e antes de agenda.js / admin.js.
   ===================================================================== */
(function () {
  'use strict';
  var CFG = window.TV;
  if (!CFG || !CFG.modoDemo) return;
  // prefixo das chaves do navegador: o mesmo que o motor (agenda.js) usa
  var PFX = CFG.prefixoDemo || 'dv_';
  var VERSAO = PFX + 'cdr_semeado_v1';
  try { if (localStorage.getItem(VERSAO)) return; } catch (e) { return; }

  function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function aberto(d) { var e = (CFG.expediente || {})[d.getDay()]; return e ? !!e.aberto : d.getDay() !== 0; }
  // dia a partir de hoje; dia fechado (domingo) pula para o próximo dia aberto
  function dia(off) {
    var d = new Date(); d.setHours(12, 0, 0, 0); d.setDate(d.getDate() + off);
    for (var i = 0; i < 7 && !aberto(d); i++) d.setDate(d.getDate() + (off < 0 ? -1 : 1));
    return iso(d);
  }
  // próximo dia aberto a partir de uma data ISO (passo +1 ou -1)
  function outroDia(s, passo) {
    var p = s.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2], 12);
    do { d.setDate(d.getDate() + passo); } while (!aberto(d));
    return iso(d);
  }
  function criado(off, h) { var d = new Date(); d.setDate(d.getDate() + off); d.setHours(h || 10, 17, 0, 0); return d.toISOString(); }
  function min(t) { var p = t.split(':'); return (+p[0]) * 60 + (+p[1]); }
  function hora(m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }

  // nomes e durações de reserva, caso o config ainda não traga o serviço
  // nomes e durações de reserva, caso o config ainda não traga o serviço
  var SERV = {};
  (CFG.servicosDemo || []).forEach(function (s) { SERV[s.id] = s; });
  var NOME = { nog: 'Nog', lilith: 'Lilith' };
  (CFG.artistas || []).forEach(function (a) { NOME[a.slug] = a.nome; });

  function tattoo(estilo, local, tam, ideia, extra) {
    return ['Estilo: ' + estilo, 'Local: ' + local, 'Tamanho: ' + tam]
      .concat(extra || [], ['Ideia: ' + ideia]).join('\n');
  }

  // [profissional, serviço, dia, início, cliente, etapa, obs, anexos, valor, sinal, sinal pago, criado há n dias]
  var L = [
    /* ---- Nog: realismo, preto e cinza, blackwork e geek ---- */
    ['nog', 'flash',          dia(1),  '10:00', 'Lucas A.',    'novo',      tattoo('Flash disponível', 'Antebraço', '10 a 20 cm', 'Flash disponível: Crash Bandicoot'), ['fotos/flash-nog-crash.jpg'], 0, 0, false, 0],
    ['nog', 'orcamento',      dia(2),  '14:00', 'Juliana T.',  'novo',      tattoo('Realismo', 'Antebraço', '10 a 20 cm', 'Mini realismo do meu cachorro, tenho várias fotos dele', ['Primeira tattoo: Sim']), ['fotos/nog-6.jpg'], 0, 0, false, -1],
    ['nog', 'cobertura',      dia(3),  '11:00', 'Pedro M.',    'conversa',  tattoo('Cobertura / reforma', 'Ombro', '10 a 20 cm', 'Cobrir um tribal antigo, pode ser blackwork', ['Cobertura: Sim']), [], 0, 0, false, -2],
    ['nog', 'sessao-longa',   dia(6),  '10:00', 'Henrique B.', 'orcado',    tattoo('Preto e cinza', 'Braço', 'Fechamento (braço, perna ou costas)', 'Fechamento de braço com águia e caveira'), ['fotos/nog-4.jpg'], 160000, 40000, false, -3],
    ['nog', 'flash',          dia(4),  '14:00', 'Gabriel R.',  'orcado',    tattoo('Flash disponível', 'Panturrilha', '10 a 20 cm', 'Flash disponível: Demon Slayer (Rengoku)'), ['fotos/flash-nog-rengoku.jpg'], 60000, 15000, false, -2],
    ['nog', 'sessao-media',   dia(0),  '10:00', 'Camila O.',   'marcado',   tattoo('Realismo', 'Antebraço', '10 a 20 cm', 'Golden retriever, mini realismo'), [], 70000, 20000, true, -9],
    ['nog', 'sessao-longa',   dia(5),  '10:00', 'Rodrigo F.',  'marcado',   tattoo('Blackwork', 'Braço', 'Fechamento (braço, perna ou costas)', 'Continuação do fechamento, segunda sessão'), ['fotos/nog-2.jpg'], 200000, 50000, true, -12],
    ['nog', 'sessao-media',   dia(-5), '10:00', 'Tiago L.',    'concluido', tattoo('Geek', 'Perna / panturrilha', '10 a 20 cm', 'Caveira em estilo cartoon'), [], 65000, 15000, true, -16],
    ['nog', 'sessao-pequena', dia(-3), '15:00', 'Bruna K.',    'recusado',  tattoo('Geek', 'Mão / dedos', 'Até 5 cm', 'Símbolo pequeno no dedo'), [], 0, 0, false, -6],

    /* ---- Lilith: fine line, delicadas, leitura e fantasia ---- */
    ['lilith', 'orcamento',      dia(1),  '15:00', 'Marina S.',  'novo',      tattoo('Fine line', 'Antebraço', '5 a 10 cm', 'Livro aberto com estrelinhas e uma frase em cima', ['Primeira tattoo: Sim']), ['fotos/lilith-1.jpg'], 0, 0, false, 0],
    ['lilith', 'sessao-pequena', dia(2),  '10:00', 'Isabela C.', 'conversa',  tattoo('Delicada', 'Braço', '5 a 10 cm', 'Duas andorinhas voando, bem fininho'), ['fotos/lilith-2.jpg'], 0, 0, false, -2],
    ['lilith', 'flash',          dia(3),  '15:00', 'Luana M.',   'orcado',    tattoo('Flash disponível', 'Costela', 'Até 5 cm', 'Flash disponível: lua com estrelas'), [], 30000, 10000, false, -3],
    ['lilith', 'sessao-pequena', dia(0),  '15:00', 'Yasmin P.',  'marcado',   tattoo('Leitura e fantasia', 'Pé / tornozelo', 'Até 5 cm', 'Dragão pequeno saindo de um livro'), [], 35000, 10000, true, -7],
    ['lilith', 'sessao-pequena', dia(-4), '14:00', 'Clara D.',   'concluido', tattoo('Fine line', 'Ombro', '5 a 10 cm', 'Ramo de flores delicado'), [], 40000, 10000, true, -12]
  ];
  // só entra quem está na equipe do config
  L = L.filter(function (x) { return !CFG.artistas || !CFG.artistas.length || CFG.artistas.some(function (a) { return a.slug === x[0]; }); });

  var ocupado = {};
  var lista = L.map(function (x, i) {
    var s = SERV[x[1]] || { nome: x[1], duracao_min: 60 };
    var status = x[5] === 'concluido' ? 'concluido' : x[5] === 'recusado' ? 'cancelado' : 'confirmado';
    // se dois exemplos caírem no mesmo horário (dia fechado empurra a data), o segundo muda de dia
    var ini = min(x[3]), fimMin = ini + s.duracao_min, d = x[2], hoje = iso(new Date());
    if (status === 'confirmado') {
      for (var t = 0; t < 14; t++) {
        var livre = !(ocupado[x[0] + d] || []).some(function (o) { return ini < o[1] && fimMin > o[0]; });
        if (livre) break;
        d = outroDia(d, d < hoje ? -1 : 1);
      }
      (ocupado[x[0] + d] = ocupado[x[0] + d] || []).push([ini, fimMin]);
    }
    return {
      codigo: 'EX' + String(1001 + i), barbeiro_id: x[0], barbeiro: NOME[x[0]] || x[0],
      servico: s.nome, preco_centavos: 0, nome: x[4] + ' (exemplo)',
      telefone: '719000000' + String(10 + i), dia: d, inicio: hora(ini), fim: hora(fimMin),
      obs: x[6], status: status, anexos: x[7], exemplo: true,
      etapa: x[5], valor_centavos: x[8], sinal_centavos: x[9], sinal_pago: x[10], criado_em: criado(x[11])
    };
  });
  var bloqueios = [
    { id: 'b1', barbeiro_id: 'nog', data: dia(12), hora_inicio: '00:00', hora_fim: '23:59', motivo: 'Convenção (exemplo)' },
    { id: 'b2', barbeiro_id: 'lilith', data: dia(9), hora_inicio: '00:00', hora_fim: '23:59', motivo: 'Folga (exemplo)' }
  ];
  try {
    localStorage.setItem(PFX + 'agendamentos_demo', JSON.stringify(lista));
    localStorage.setItem(PFX + 'bloqueios_demo', JSON.stringify(bloqueios));
    localStorage.removeItem(PFX + 'artistas_demo');
    localStorage.setItem(PFX + 'demo_semeado_v1', '1');   // o motor não semeia por cima
    localStorage.setItem(VERSAO, '1');
  } catch (e) {}
})();
