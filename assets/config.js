/* =====================================================================
   Casa du Risco — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   Fonte: Instagram @studiocasadurisco e @nog_tattoo (20/10/2026).
   ===================================================================== */

window.TV = {

  /* ---- Estúdio ------------------------------------------------------- */
  nome:       'Casa du Risco',
  slogan:     'Estúdio de tatuagem · Imbuí, Salvador',
  assinatura: 'Sua tatuagem nova mora aqui',
  instagram:  'studiocasadurisco',
  prefixoDemo: 'cdr_',   // chaves da demo no navegador (agenda.js e admin.js usam o mesmo prefixo)
  logo:       'fotos/logo-mini.jpg',

  // WhatsApp do estúdio em link de mensagem (wa.me/message/...): o resumo é
  // copiado e o link abre a conversa. Número: A CONFIRMAR.
  whatsapp:        '',
  whatsappVisivel: '',
  whatsappLink:    'https://wa.me/message/EHT7IBLVNQOOE1',

  endereco: {
    linha1: 'Imbuí Torres Center',
    linha2: 'R. Prof. Pinto de Aguiar, 2475, Imbuí — Salvador/BA',
    referencia: '',
    maps:   'https://www.google.com/maps/search/?api=1&query=Imbu%C3%AD+Torres+Center%2C+R.+Prof.+Pinto+de+Aguiar%2C+2475%2C+Salvador+BA',
    embed:  'https://www.google.com/maps?q=R.+Prof.+Pinto+de+Aguiar%2C+2475%2C+Imbu%C3%AD%2C+Salvador+-+BA&output=embed',
    busca:  'Imbuí Torres Center, R. Prof. Pinto de Aguiar, 2475, Imbuí, Salvador - BA'
  },
  funcionamento: 'Segunda a sábado, das 10h às 18h',

  supabaseUrl: '',
  supabaseKey: '',

  regras: {
    passoMin:        30,
    antecedenciaMin: 30,
    janelaDias:      30,
    cancelamentoH:   2
  },

  semPreferencia: false,

  /* ---- Expediente (0 = domingo): seg–sáb 10h–18h (Instagram) ------- */
  expediente: {
    0: { aberto: false },
    1: { aberto: true, abre: '10:00', fecha: '18:00' },
    2: { aberto: true, abre: '10:00', fecha: '18:00' },
    3: { aberto: true, abre: '10:00', fecha: '18:00' },
    4: { aberto: true, abre: '10:00', fecha: '18:00' },
    5: { aberto: true, abre: '10:00', fecha: '18:00' },
    6: { aberto: true, abre: '10:00', fecha: '18:00' }
  },

  // painel: a segunda frente é o flash disponível
  painel: { b: 'Flash' },

  // rótulo do card da equipe: cada artista tem o seu "quarto" na casa
  rotuloCard: function (a, i) { return 'Quarto ' + String(i + 1).padStart(2, '0'); },

  /* ---- Moradores (páginas artista.html?a=<slug>) --------------------
     Só o que está no Instagram. Ordem = ordem em todo o site e no painel.
  ------------------------------------------------------------------ */
  artistas: [
    {
      slug: 'nog', nome: 'Nog', apelido: 'Nog', instagram: 'nog_tattoo', whatsapp: '',
      whatsappLink: 'https://wa.me/message/5HYVCZEXD2DKD1',
      foto: 'fotos/nog-perfil.jpg', capa: 'fotos/nog-1.jpg',
      oficio: 'Tatuador',
      linha: 'Realismo · Preto e cinza · Blackwork · Geek',
      estilos: ['Realismo', 'Preto e cinza', 'Blackwork', 'Geek', 'Mini realismo de pet', 'Cobertura / reforma'],
      destaque: '5 mil seguidores no @nog_tattoo',
      bio: [
        'Tatuador da Casa du Risco, no Imbuí Torres Center.',
        'Realismo, preto e cinza, blackwork e geek.',
        'Faz cobertura e reforma de tattoo antiga.',
        'Mini realismo de pet: o seu bicho, do tamanho certo.'
      ],
      fotos: [
        { src: 'fotos/nog-1.jpg', alt: 'Fechamento de braço em preto e cinza' },
        { src: 'fotos/nog-2.jpg', alt: 'Braço em blackwork com retrato e leque' },
        { src: 'fotos/nog-3.jpg', alt: 'Fechamento com lettering e realismo' },
        { src: 'fotos/nog-4.jpg', alt: 'Águia em realismo no antebraço' },
        { src: 'fotos/nog-6.jpg', alt: 'Mini realismo de pet: cachorro no antebraço' },
        { src: 'fotos/nog-5.jpg', alt: 'Fechamento de braço com várias peças' },
        { src: 'fotos/nog-7.jpg', alt: 'Caveira e ilustração no braço' },
        { src: 'fotos/nog-8.jpg', alt: 'Caveira geek com auréola' },
        { src: 'fotos/nog-9.jpg', alt: 'Borboletas e ramo com flores no ombro' },
        { src: 'fotos/nog-apresenta.jpg', alt: 'Post do estúdio: Conheça Nog' }
      ],
      flashesDestaque: 'Destaque "Disp. NOG"',
      flashesNota: 'Flashes geek do Nog. A lista que vale é a do destaque "Disp. NOG" no Instagram.',
      flashes: [
        { src: 'fotos/flash-nog-crash.jpg',   titulo: 'Crash Bandicoot', selo: 'Geek' },
        { src: 'fotos/flash-nog-rengoku.jpg', titulo: 'Demon Slayer: Rengoku', selo: 'Geek' },
        { src: 'fotos/flash-nog-tanjiro.jpg', titulo: 'Demon Slayer: Tanjiro', selo: 'Geek' }
      ]
    },
    {
      // Perfil @_lilith.ink restrito: sem foto de perfil -> avatar tipográfico.
      // Portfólio: posts do estúdio atribuídos a ela por estilo (A CONFIRMAR).
      slug: 'lilith', nome: 'Lilith', apelido: 'Lilith', instagram: '_lilith.ink', whatsapp: '',
      // WhatsApp dela: A CONFIRMAR. Sem link próprio, o resumo vai para o WhatsApp do estúdio.
      foto: '', capa: 'fotos/lilith-1.jpg',
      avatar: { letra: 'L', simbolo: '☾' },
      oficio: 'Tatuadora',
      linha: 'Lilith Ink · fine line e tattoo delicada',
      estilos: ['Fine line', 'Delicada', 'Leitura e fantasia'],
      destaque: 'Lilith Ink 🌙',
      bio: [
        'Tatuadora da Casa du Risco: Lilith Ink.',
        'Fine line e tattoo delicada.',
        'Temas de leitura e fantasia: livros, estrelas, criaturas.'
      ],
      portfolioNota: 'Peças publicadas no Instagram do estúdio.',
      fotos: [
        { src: 'fotos/lilith-1.jpg', alt: 'Livro aberto com dragão e frase, em fine line' },
        { src: 'fotos/lilith-2.jpg', alt: 'Andorinhas em traço fino no braço' },
        { src: 'fotos/lilith-apresenta.jpg', alt: 'Post do estúdio: Conheça Lilith Ink' }
      ],
      flashesDestaque: 'Destaque "Disp. LILITH"',
      flashesNota: 'Os flashes da Lilith ficam no destaque "Disp. LILITH" do Instagram do estúdio.',
      flashes: []
    }
  ],

  // Tudo sob orçamento (preco 0). Durações A CONFIRMAR: só reservam a agenda.
  servicosDemo: [
    { id:'orcamento',      nome:'Conversa de orçamento', descricao:'30 min para ver a ideia, o local e o tamanho, e fechar valor e data.', preco_centavos:0, a_partir_de:false, duracao_min:30,  categoria:'Tatuagem' },
    { id:'flash',          nome:'Flash disponível',      descricao:'Desenho pronto da vitrine do artista: escolha o flash e o lugar.',     preco_centavos:0, a_partir_de:false, duracao_min:120, categoria:'Flash' },
    { id:'sessao-pequena', nome:'Sessão pequena',        descricao:'Peças menores e delicadas, até uns 10 cm.',                            preco_centavos:0, a_partir_de:false, duracao_min:120, categoria:'Tatuagem' },
    { id:'sessao-media',   nome:'Sessão média',          descricao:'Antebraço, panturrilha, ombro: peças com mais detalhe.',               preco_centavos:0, a_partir_de:false, duracao_min:240, categoria:'Tatuagem' },
    { id:'sessao-longa',   nome:'Sessão longa',          descricao:'Boa parte do dia para fechamentos e projetos grandes.',                preco_centavos:0, a_partir_de:false, duracao_min:360, categoria:'Tatuagem' },
    { id:'cobertura',      nome:'Cobertura ou reforma',  descricao:'Para cobrir ou reformar uma tattoo antiga: o Nog avalia a peça.',      preco_centavos:0, a_partir_de:false, duracao_min:30,  categoria:'Tatuagem', apenas_barbeiro_id:'nog' },
    { id:'retoque',        nome:'Retoque',               descricao:'Para tattoo já cicatrizada que precisa de reforço.',                   preco_centavos:0, a_partir_de:false, duracao_min:60,  categoria:'Tatuagem' }
  ],

  /* ---- Estilos do pedido (bios do Nog e da Lilith) ----------------- */
  estilos: ['Realismo', 'Preto e cinza', 'Blackwork', 'Geek', 'Fine line', 'Delicada', 'Leitura e fantasia', 'Cobertura / reforma', 'Flash disponível', 'Trago meu desenho', 'Ainda não sei']
};

window.TV.barbeirosDemo = window.TV.artistas.map(function (a) {
  return { id: a.slug, slug: a.slug, nome: a.nome, foto: a.foto, instagram: a.instagram,
           whatsapp: a.whatsapp, cargo: a.linha };
});
window.TV.artistaPor = function (chave) {
  return window.TV.artistas.filter(function (a) {
    return a.slug === chave || a.nome === chave || a.instagram === chave;
  })[0] || null;
};
window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
