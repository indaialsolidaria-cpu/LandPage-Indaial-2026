
/* =====================================================================
   DADOS DAS ONGs — Indaial Solidária 2026
   Edite apenas este arquivo para atualizar textos, contatos e mídias.

   MÍDIAS (carrossel): coloque os arquivos em  assets/midias/<slug>/
   e liste os nomes em  midia:[...]  (fotos .jpg .png .webp | vídeos .mp4 .webm).
   Nomes com "boomerang" tocam em loop, sem som.
     assets/midias/<slug>/logo.png        -> logotipo
     assets/midias/<slug>/foto-01.jpg     -> fotos
     assets/midias/<slug>/campanha-01.mp4 -> vídeos
     assets/midias/<slug>/qrcode.png      -> QR Code PIX (só aparece se validado)
   Links:  index.html#ong/<slug>   (ex.: index.html#ong/adefi)
   ===================================================================== */
const MIDIAS = 'assets/midias/';
const FOTOS3 = ['foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg'];
const SOON = 'As informações desta ONG serão publicadas em breve, a partir do material enviado pela própria instituição.';

const ONGS = [
{
  s: 'nts-acidi', sg: 'NTS',
  n: 'NTS — Núcleo do Terceiro Setor da ACIDI',
  c: 'Articulação e fortalecimento do terceiro setor',
  tags: ['Networking', 'Capacitação', 'Terceiro Setor'],
  resumo: 'Grupo de trabalho da ACIDI que reúne empreendedores e profissionais para fortalecer as organizações sociais de Indaial.',
  sobre: [
    'Os Núcleos Setoriais da ACIDI são grupos de trabalho formados por empreendedores e profissionais de um mesmo segmento econômico ou com interesses em comum. O objetivo central é unir forças para trocar experiências, debater desafios e buscar soluções conjuntas que fortaleçam as empresas e a economia de Indaial.',
    'O Núcleo do Terceiro Setor é o espaço dedicado a conectar o meio empresarial às organizações que atuam nas causas sociais do município.'
  ],
  atuacao: [
    ['Networking qualificado', 'Conexão direta entre empresários e organizações, criando parcerias estratégicas e vantagens para todos os envolvidos.'],
    ['Capacitação direcionada', 'Cursos, palestras e treinamentos focados na realidade de cada setor.'],
    ['Soluções conjuntas', 'Debate de desafios e construção coletiva de caminhos para fortalecer as instituições sociais.']
  ],
  projetos: [
    ['Indústria', 'Núcleo setorial ativo na ACIDI.'], ['Têxtil', 'Núcleo setorial ativo na ACIDI.'],
    ['Imobiliário', 'Responsável por eventos integrados à comunidade, como a parceria com o Rock na Praça.'],
    ['Desenvolvimento Urbano', 'Núcleo setorial ativo na ACIDI.'], ['Mulher Empresária', 'Núcleo setorial ativo na ACIDI.'],
    ['Gestão de Pessoas', 'Núcleo setorial ativo na ACIDI.'], ['Saúde e Segurança', 'Núcleo setorial ativo na ACIDI.'],
    ['Terceiro Setor', 'Núcleo que articula as ONGs participantes.'], ['Artesanato & Economia Criativa', 'Núcleo setorial ativo na ACIDI.']
  ],
  projetosTitulo: 'Os 9 núcleos empresariais da ACIDI',
  apoiar: ['Para fazer parte de um núcleo, é preciso ser associado à ACIDI.', 'Atender às diretrizes do regimento específico do grupo.', 'Manter participação ativa nas reuniões periódicas.'],
  apoiarTitulo: 'Como participar',
  contato: { pessoas: ['Almir Meireles — Coordenador'], telefone: '(47) 98419-9802' },
  midia: FOTOS3
},
{
  s: 'aro-reino-de-oxossi', sg: 'ARO',
  n: 'ARO — Reino de Osòóssí',
  c: 'Cultura • assistência social • educação • segurança alimentar',
  tags: ['Cultura afro-brasileira', 'Cozinha Solidária', 'Utilidade Pública Estadual'],
  resumo: 'Centro cultural, assistencial e educacional que une cultura, solidariedade e educação para fortalecer famílias e comunidades tradicionais.',
  sobre: [
    'O Centro Cultural, Assistencial, Educacional Ilê Asé Ijobá Odé Erin – Reino de Osòóssí (ARO) é uma Organização da Sociedade Civil sem fins lucrativos, sediada em Indaial/SC.',
    'Sua atuação integra cultura, assistência social, educação, segurança alimentar, direitos humanos, economia solidária e proteção comunitária, com foco em pessoas em situação de vulnerabilidade e nos Povos e Comunidades Tradicionais de Matriz Africana.'
  ],
  missao: 'Promover o desenvolvimento humano por meio da cultura, da assistência social, da educação, da segurança alimentar e da valorização dos povos e comunidades tradicionais, fortalecendo redes comunitárias e contribuindo para uma sociedade mais justa, democrática e solidária.',
  visao: 'Ser referência regional em ações culturais, sociais, educativas e comunitárias, reconhecida pela promoção da cidadania, da diversidade cultural, da solidariedade e da transformação social.',
  valores: ['Respeito à diversidade', 'Direitos Humanos', 'Solidariedade', 'Transparência', 'Justiça Social', 'Cultura de Paz', 'Cooperação', 'Inclusão Social', 'Sustentabilidade'],
  atuacao: [
    ['Cultura', 'Oficinas, apresentações, preservação das tradições afro-brasileiras e valorização do patrimônio cultural.'],
    ['Assistência Social', 'Distribuição de alimentos, acolhimento de famílias e campanhas solidárias.'],
    ['Segurança Alimentar', 'Cozinha Solidária ARO, incentivo à agricultura urbana e alimentação adequada.'],
    ['Educação', 'Cursos, oficinas, palestras e rodas de conversa sobre cidadania, diversidade e direitos humanos.'],
    ['Defesa Civil Comunitária', 'Prevenção de desastres, organização comunitária e resiliência climática.']
  ],
  projetos: [
    ['Cozinha Solidária ARO', 'Produção e distribuição de refeições e alimentos para famílias em situação de vulnerabilidade.'],
    ['Batuques, Corpos e Saberes Ancestrais', 'Preservação das manifestações culturais afro-brasileiras por meio da música, da dança, da gastronomia e da educação.'],
    ['Mapeamento das Comunidades Tradicionais', 'Identificação, valorização e fortalecimento dos Povos e Comunidades Tradicionais de Matriz Africana no Médio Vale do Itajaí.'],
    ['Defesa Civil Comunitária', 'Organização comunitária para prevenção e resposta a eventos climáticos extremos.']
  ],
  reconhecimentos: ['Organização da Sociedade Civil', 'Utilidade Pública Estadual — Lei 19.854/26', 'Ponto de Cultura', 'Empreendimento Econômico Solidário', 'Escola Livre de Cultura', 'Participação no Conselho Municipal de Cultura'],
  impacto: ['Campanhas solidárias e distribuição de alimentos', 'Oficinas culturais, eventos educativos e seminários', 'Encontros comunitários e ações de combate ao racismo', 'Fortalecimento das comunidades tradicionais'],
  apoiar: ['Doações via PIX (quando validado)', 'Parcerias institucionais pautadas por respeito, transparência e cooperação', 'Voluntariado e divulgação das ações'],
  contato: { endereco: 'Rua 24 de Abril, 99 — Carijós, Indaial/SC', whatsapp: '5547984199802', email: 'odeimoleomin@gmail.com', site: 'https://www.reinodeoxossi.com.br', cnpj: '47.792.453/0001-61' },
  doacao: { disponivel: true, validado: false, beneficiario: 'Centro Cultural, Assistencial, Educacional Ilê Asé Ijobá Odé Erin – Reino de Osòóssí', chave: '78f6aed5-64e4-49ec-82b7-3d2b30cec83a' },
  midia: ['logo.png', 'foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg', 'foto-04.jpg', 'foto-05.jpg', 'foto-06.jpg', 'foto-07.jpg', 'foto-08.jpg']
},
{
  s: 'adefi', sg: 'ADEFI',
  n: 'ADEFI — Associação de Deficientes Físicos de Indaial',
  c: 'Inclusão • acessibilidade • defesa de direitos',
  tags: ['Pessoas com deficiência', 'Acessibilidade', 'Direitos'],
  resumo: 'Une pessoas com deficiência, famílias, voluntários e parceiros para ampliar oportunidades, autonomia e qualidade de vida.',
  sobre: ['A ADEFI busca fortalecer a união entre pessoas com deficiência, familiares, voluntários, parceiros e comunidade, trabalhando para ampliar oportunidades e garantir mais qualidade de vida e autonomia.'],
  missao: 'Transformar a inclusão em realidade, promovendo respeito, oportunidades, autonomia e qualidade de vida.',
  atuacao: [
    ['Defesa de direitos', 'Orientação e conscientização sobre os direitos das pessoas com deficiência.'],
    ['Inclusão social', 'Ações que incentivam a participação das pessoas com deficiência na sociedade.'],
    ['Acessibilidade', 'Conscientização e busca por melhorias na acessibilidade de espaços públicos e privados.'],
    ['Palestras e conscientização', 'Encontros, campanhas e palestras em escolas e instituições.'],
    ['Eventos inclusivos', 'Atividades de integração, lazer, convivência e participação comunitária.'],
    ['Apoio às famílias', 'Aproximação, acolhimento e fortalecimento da rede de apoio.']
  ],
  apoiar: ['Participar dos eventos inclusivos', 'Convidar a ADEFI para palestras em escolas e empresas', 'Divulgar a causa e o trabalho da associação'],
  contato: { pessoas: ['Juliano César Barotto — Presidente', 'Ana Paula Simão Wolf — Vice-presidente'], telefone: '(47) 99240-0622', instagram: 'adefi.indaial' },
  midia: FOTOS3
},
{
  s: 'salve-uma-infancia', sg: 'SI',
  n: 'Associação Salve Uma Infância do Vale do Itajaí',
  c: 'Proteção da infância e adolescência • prevenção das violências',
  tags: ['Prevenção', 'Educação', 'Lei Rouanet'],
  resumo: 'Atua para chegar antes que a violência aconteça, com educação, formação e conscientização de crianças, famílias e profissionais.',
  sobre: [
    'A Associação Salve Uma Infância atua na prevenção, no enfrentamento e no combate ao abuso sexual e a outras formas de violência contra crianças e adolescentes. Acreditamos que a proteção começa com o conhecimento: por isso desenvolvemos ações educativas e protetivas, formações e projetos que capacitam crianças, adolescentes, famílias, educadores, empresas e comunidades.',
    'Somos multiplicadores de conhecimento que protege, promovendo ambientes mais seguros e conscientes para o desenvolvimento saudável da infância e da adolescência.'
  ],
  missao: 'Chegar antes que a violência aconteça. A informação transforma, o conhecimento protege e a prevenção salva infâncias.',
  atuacao: [
    ['Ações educativas', 'Palestras, contação de histórias e atividades de conscientização para crianças e famílias.'],
    ['Formações', 'Capacitação de profissionais, educadores e empresas para reconhecer e agir diante de situações de risco.'],
    ['Projetos protetivos', 'Iniciativas em escolas, igrejas, empresas e espaços da comunidade.']
  ],
  marcos: [
    ['2019', 'Nasce como projeto social de proteção e desenvolvimento emocional de crianças em vulnerabilidade, no contraturno escolar.'],
    ['2023', 'Com o encerramento do espaço original, o projeto segue dentro de uma igreja, ampliando parcerias.'],
    ['2024', 'Expande as ações para escolas, igrejas, empresas e comunidade. Em outubro, é constituída a Associação.'],
    ['Hoje', 'Equipe multidisciplinar de aproximadamente 25 profissionais e colaboradores.']
  ],
  reconhecimentos: ['Utilidade Pública Municipal', 'Inscrita no CMDCA', 'Aprovada pela Lei Rouanet'],
  apoiar: ['Receber uma palestra ou formação na sua escola, igreja ou empresa', 'Apoiar como empresa parceira', 'Compartilhar informação que protege'],
  contato: { pessoas: ['Cleverson Luiz da Silva — Presidente: (47) 98855-1250', 'Janaína Feiberberg — Coordenadora: (47) 98444-7227'], instagram: 'salveumainfancia', site: 'https://salveumainfancia.com' },
  midia: ['foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg', 'foto-04.jpg']
},
{
  s: 'ama-indaial', sg: 'AMA',
  n: 'AMA Indaial — Associação de Amigos do Autista de Indaial',
  c: 'Inclusão • acolhimento • apoio às pessoas com TEA e suas famílias',
  tags: ['Autismo (TEA)', 'Famílias', 'Utilidade Pública'],
  resumo: 'Promove inclusão, defende direitos e acolhe pessoas autistas e suas famílias, com cerca de 250 famílias associadas.',
  sobre: ['Organização da sociedade civil sem fins lucrativos, fundada em 17/04/2023, com o propósito de promover a inclusão, defender direitos e contribuir para a qualidade de vida das pessoas autistas e de suas famílias.'],
  atuacao: [
    ['Acolhimento e suporte', 'Orientação e apoio às famílias.'],
    ['Rodas de conversa', 'Encontros em escolas, empresas e CRAS.'],
    ['Rede de proteção', 'Fortalecimento da rede de proteção e atendimento.'],
    ['Conscientização', 'Ações para ampliar o conhecimento sobre o autismo na sociedade.']
  ],
  marcos: [['2023', 'Fundação da associação, em 17 de abril.']],
  reconhecimentos: ['Utilidade Pública Municipal', 'Utilidade Pública Estadual', 'Participação no CMDCA', 'Cerca de 250 famílias associadas'],
  apoiar: ['Convidar a AMA para rodas de conversa', 'Divulgar ações de conscientização', 'Apoiar as famílias associadas'],
  contato: { pessoas: ['Jeane Patrícia Sievert Zibell — Presidente'], telefone: '(47) 98497-8768', email: 'autismoindaial@gmail.com', instagram: 'amaindaial' },
  midia: ['logo.png', 'foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg', 'foto-04.jpg', 'foto-05.jpg', 'foto-06.jpg', 'foto-07.jpg', 'foto-08.jpg', 'foto-09.jpg', 'foto-10.jpg', 'foto-11.png']
},
{
  s: 'tom-maior', sg: 'TM',
  n: 'Tom Maior — Centro Musical, Assistencial e de Projetos Socioeducativos',
  c: 'Cultura • educação • assistência social • projetos socioeducativos',
  tags: ['Música e artes', 'Mercado Social', 'Ponto e Pontão de Cultura'],
  resumo: 'OSC fundada em 2013 que leva arte, educação e apoio a famílias em vulnerabilidade, com escola de artes, Mercado Social e Bazar Social.',
  sobre: [
    'Em 14 de novembro de 2013 foi inaugurado o Centro Musical, Assistencial e de Projetos Socioeducativos Tom Maior, oferecendo à comunidade um espaço de convivência e cultura para aprender instrumentos e compartilhar aprendizados.',
    'A Tom Maior é uma OSC (Organização da Sociedade Civil) que promove a diversidade das áreas culturais: música, dança, teatro, espetáculos circenses e oficinas para a comunidade. A Escola das Artes é dedicada ao desenvolvimento artístico e cultural de novos talentos.'
  ],
  missao: 'Capacitar, estimular e integrar crianças, adolescentes, jovens e adultos por meio de projetos sociais voltados à cultura.',
  visao: 'Ser referência em transformação social e cultural, promovendo a integração desses projetos na comunidade.',
  atuacao: [
    ['Instituto Tom Maior', 'Ensino de música, dança, balé, teatro, circo, audiovisual e artesanato, com bolsas de estudo e mensalidades acessíveis.'],
    ['Projetos socioeducativos', 'Tom na Praça, Liga do Servir, InteraTom, Sementinha do Amor, Samaritanos e EducaSom, em praças e escolas, fortalecendo valores e a unidade familiar.'],
    ['Projetos autossustentáveis', 'O Bazar Solidário apoia a continuidade das ações da instituição.'],
    ['Projetos sociais', 'Encaminhamento gratuito a Centros Terapêuticos para adultos em situação de rua, abandono ou dependência química.'],
    ['Arte e Movimento', 'Em parceria com a Prefeitura de Indaial, atividades artísticas para crianças do 1º ao 5º ano.']
  ],
  projetosTitulo: 'Projetos em destaque',
  projetos: [
    ['Mercado Social', 'Acolhimento a famílias em vulnerabilidade, com doação de alimentos, higiene, limpeza e roupas, acompanhamento de assistente social por até três meses e apoio à reinserção no mercado de trabalho.'],
    ['Bazar Social', 'Arrecada recursos para os projetos e vende itens a preços acessíveis. Cerca de 70% das doações vão diretamente a famílias e comunidades em vulnerabilidade.'],
    ['Tom Baby', 'Cestas com roupas de recém-nascido e itens de higiene para gestantes em vulnerabilidade.'],
    ['Teen Club', 'Projeto contínuo desde 2022 com adolescentes do bairro João Paulo II. Em 2026, foco em comunicação e inclusão digital.']
  ],
  marcos: [
    ['2013', 'Inauguração do Centro Musical, Assistencial e de Projetos Socioeducativos.'],
    ['2015–2017', 'Utilidade Pública Municipal (Lei 78/15) e Estadual (Lei 367/2017).'],
    ['2016', 'Destaque em Serviços Voluntários pela ACIDI, no Prêmio Soldado José Ricardo Hersing.'],
    ['2025', 'Projeto aprovado para captação na Lei de Incentivo à Cultura (PRONAC 247519).'],
    ['2026', 'Novo projeto aprovado na Lei de Incentivo à Cultura (PRONAC 255456).']
  ],
  reconhecimentos: ['Utilidade Pública Municipal — Lei 78/15', 'Utilidade Pública Estadual — Lei 367/2017', 'Ponto de Cultura', 'Pontão de Cultura', 'Lei de Incentivo à Cultura — PRONAC 247519 e 255456'],
  impacto: ['Recitais anuais que reúnem todas as linguagens artísticas', 'Espetáculos como Eu Vi o Menino Nascer, A Tenda, Tetelestai e Auto de Páscoa', 'Apresentações em escolas e ações urbanas'],
  apoiar: ['Doar itens ao Bazar Social e ao Mercado Social', 'Apoiar projetos pela Lei de Incentivo à Cultura', 'Oferecer vagas de emprego a famílias acompanhadas', 'Parcerias com empresas e apoiadores'],
  contato: { whatsapp: '5547992308088', email: 'projetos@tommaior.org.br' },
  midia: [
    'foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg', 'foto-04.jpg', 'foto-05.jpg',
    'foto-06.jpg', 'foto-07.jpg', 'foto-08.jpg', 'foto-09.jpg', 'foto-10.jpg',
    'foto-11.jpg', 'foto-12.jpg', 'foto-13.jpg', 'foto-14.jpg', 'foto-15.jpg',
    'foto-16.jpg', 'foto-17.jpg', 'foto-18.jpg', 'foto-19.jpg', 'foto-20.jpg',
    'foto-21.jpg', 'foto-22.jpg', 'foto-23.jpg', 'foto-24.jpg', 'foto-25.jpg',
    'foto-26.jpg', 'foto-27.jpg', 'foto-28.jpg', 'foto-29.jpg', 'foto-30.jpg',
    'foto-31.jpg', 'foto-32.jpg', 'foto-33.jpg'
  ]
},
{
  s: 'dv-em-acao', sg: 'DV',
  n: 'Associação DV em Ação',
  c: 'Dança • cultura • inclusão • solidariedade',
  tags: ['Dança', 'Utilidade Pública Municipal', 'Campeonato mundial 2027'],
  resumo: 'Associação sem fins lucrativos de Indaial que mobiliza famílias e parceiros para ampliar o acesso dos bailarinos do Grupo DV à dança, à cultura e a oportunidades artísticas.',
  sobre: [
    'A Associação DV em Ação é uma entidade sem fins lucrativos, sediada em Indaial/SC, que apoia os bailarinos vinculados ao Grupo DV e fortalece o acesso à dança, à cultura e às oportunidades artísticas.',
    'Mobiliza famílias, voluntários, apoiadores e parceiros para viabilizar a participação dos bailarinos em festivais, competições e eventos culturais. Também promove iniciativas solidárias para a comunidade e acredita que a arte transforma trajetórias, desenvolve disciplina, estimula a convivência e abre caminhos para crianças e jovens.'
  ],
  missao: 'Apoiar os bailarinos e promover o acesso à dança e à cultura, articulando recursos, parcerias e ações comunitárias.',
  visao: 'Ampliar oportunidades para que os talentos de Indaial alcancem novos palcos, fortalecendo uma associação organizada, participativa e comprometida com a comunidade.',
  valores: ['União', 'Solidariedade', 'Transparência', 'Respeito', 'Inclusão', 'Compromisso', 'Responsabilidade', 'Valorização da arte'],
  atuacao: [
    ['Apoio à dança e à cultura', 'Recursos e apoio para inscrições, deslocamentos, hospedagem, figurinos e materiais das apresentações.'],
    ['Mobilização e arrecadação', 'Rifas, pedágios solidários, venda de produtos, eventos beneficentes e campanhas, com bailarinos, familiares e voluntários.'],
    ['Ações sociais', 'Campanhas de alimentos, roupas e itens essenciais, encaminhadas conforme as necessidades identificadas.']
  ],
  projetosTitulo: 'Ações que aproximam a associação da comunidade',
  projetos: [
    ['Campanhas de alimentos', 'Arrecadação em iniciativas e eventos culturais e beneficentes.'],
    ['Campanha do agasalho', 'Pontos de coleta, divulgação em redes e grupos, triagem de roupas por categoria e tamanho.'],
    ['Pedágios solidários', 'Ações voluntárias para custear despesas e oportunidades dos bailarinos.'],
    ['Eventos beneficentes', 'Encontros que unem cultura, participação comunitária e geração de recursos.']
  ],
  marcos: [
    ['2017', 'Famílias e pessoas se unem para apoiar os bailarinos do Grupo DV.'],
    ['2018', 'A mobilização ganha forma institucional com a associação.'],
    ['2019', 'Em 11 de junho, a associação recebe reconhecimento de Utilidade Pública Municipal.'],
    ['2026', 'Conquista de vaga para apresentação no palco principal do Festival de Dança de Joinville, conforme registro institucional.'],
    ['2027', 'Das cinco categorias inscritas no HHI Brasil, em Santos, quatro foram aprovadas para representar o Brasil no campeonato mundial previsto para Phoenix, nos Estados Unidos.']
  ],
  reconhecimentos: ['Utilidade Pública Municipal', 'Destaque no Festival de Dança de Massaranduba', 'Vaga para apresentação no palco principal do Festival de Dança de Joinville (registro institucional de 2026)', 'Participação no Festival FIH2, em Curitiba', 'No HHI Brasil, em Santos: cinco categorias inscritas e quatro aprovadas para o mundial previsto para 2027'],
  apoiar: ['Patrocínio financeiro pontual ou recorrente', 'Doação de materiais, produtos, serviços ou estrutura para eventos', 'Apoio com transporte, alimentação, hospedagem, figurinos e inscrições', 'Divulgação de campanhas e eventos', 'Participação em ações voluntárias e solidárias'],
  contato: {
    instagram: 'juntosdvemacao',
    nota: 'O portfólio institucional 2026 indica que telefone e endereço estão pendentes de confirmação e não informa responsáveis, e-mail ou site oficial. Para contato, acesse o Instagram oficial.'
  },
  midia: ['foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg', 'foto-04.jpg', 'foto-05.jpg', 'foto-06.jpg']
},
{
  s: 'apae', sg: 'APAE',
  n: 'Associação de Pais e Amigos dos Excepcionais de Indaial',
  c: 'Educação • saúde • assistência social • inclusão',
  tags: ['Pessoa com deficiência', 'Atendimento especializado', 'Indaial/SC'],
  resumo: 'Instituição filantrópica fundada em 1970 que promove educação, saúde, inclusão social e qualidade de vida para pessoas com deficiência e suas famílias.',
  sobre: [
    'A Associação de Pais e Amigos dos Excepcionais de Indaial é uma instituição filantrópica e sem fins lucrativos. Foi fundada em 24 de outubro de 1970 por iniciativa do pediatra Dr. Heinz Schütz. Começou em uma sala cedida pelo Jardim de Infância Santa Terezinha, com três educandos e dois professores, e conquistou sede própria em 1973.',
    'Conforme o material institucional enviado, atende 301 educandos em nove níveis, com trabalho interdisciplinar nas áreas de educação, saúde e assistência social.'
  ],
  missao: 'Promover e articular ações de defesa de direitos, orientação, prestação de serviços e apoio à família, direcionadas à melhoria da qualidade de vida da pessoa com deficiência e à construção de uma sociedade justa e solidária.',
  atuacao: [
    ['Educação especializada', 'Atendimento pedagógico organizado em nove níveis, de acordo com habilidades, necessidades e potencialidades dos educandos.'],
    ['Saúde e terapias', 'Acompanhamento clínico e terapêutico conforme as necessidades individuais.'],
    ['Assistência e apoio às famílias', 'Orientação, apoio familiar e ações para ampliar a participação social e a qualidade de vida.']
  ],
  projetosTitulo: 'Projetos e atividades',
  projetos: [
    ['Autodefensoria e Família', 'Projeto complementar aos atendimentos, voltado à participação, autonomia e envolvimento das famílias.'],
    ['Parlamento Jovem', 'Iniciativa de cidadania e participação dos educandos.'],
    ['Atividades Aquáticas', 'Projeto que amplia as experiências e oportunidades de desenvolvimento dos educandos.']
  ],
  marcos: [
    ['1970', 'Fundação da APAE de Indaial, em 24 de outubro, com três educandos e dois professores.'],
    ['1973', 'Conquista da sede própria com apoio da comunidade.'],
    ['Atualmente', 'O documento institucional informa atendimento a 301 educandos e uma equipe multiprofissional.']
  ],
  contato: {
    pessoas: ['Anderson Tomio — Presidente', 'Sara Regina Ledra — Diretora Escolar'],
    telefones: [
      { rotulo: 'Telefone', numero: '(47) 3333-0032' },
      { rotulo: 'Telefone / celular', numero: '(47) 99180-3146' }
    ],
    instagram: 'apae.indaialoficial',
    facebook: {
      nome: 'APAE de Indaial',
      url: 'https://www.facebook.com/search/top/?q=APAE%20de%20Indaial'
    },
    nota: 'O material enviado não informa um site institucional. O link do Facebook abre uma busca pelo nome da página; confirme o perfil oficial antes de compartilhar.'
  },
  midia: ['foto-01.jpg', 'foto-02.jpg', 'foto-03.jpg', 'foto-04.jpg', 'foto-05.jpg', 'video-01.mp4', 'video-02.mp4']
},
{ s: 'arefi', sg: 'AREFI', badge: 'Informações em breve', n: 'AREFI', c: 'ONG participante', resumo: SOON, sobre: [SOON], contato: {}, midia: FOTOS3 },
{ s: 'casa-do-oleiro', sg: 'CO', badge: 'Informações em breve', n: 'Casa do Oleiro', c: 'ONG participante', resumo: SOON, sobre: [SOON], contato: {}, midia: FOTOS3 },
{ s: 'casa-da-acolhida', sg: 'CA', badge: 'Informações em breve', n: 'Casa da Acolhida', c: 'ONG participante', resumo: SOON, sobre: [SOON], contato: {}, midia: FOTOS3 }
];