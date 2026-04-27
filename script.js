// ========================================
// JORNAL ATUAL - JavaScript Functionality
// ========================================

// News data array with all 12 news articles in Portuguese
const newsData = [
    {
        id: 1,
        title: "Japonês gastou R$ 75 mil em fantasia de cachorro",
        subtitle: "Toco transformou-se em um collie e compartilhou experiência nas redes sociais",
        preview: "Um japonês que gastou R$ 75 mil em uma fantasia de cachorro compartilhou com seus seguidores sua primeira caminhada na rua com o adereço.",
        content: `Um japonês que gastou R$ 75 mil em uma fantasia de cachorro compartilhou com seus seguidores sua primeira caminhada na rua com o adereço. Em maio de 2022, ele mostrou o resultado final da roupa que o transformou em um cão da raça Collie.

Em seu canal do YouTube, Toco publicou vídeos em que aparece sendo liderado para passear na coleira, interagindo com outros cães em parques e reproduzindo comportamentos típicos de um cachorro.

O japonês afirma que sempre teve o sonho de viver como um animal, e seus vídeos vêm chamando a atenção de milhares de pessoas nas redes sociais.`,
        category: "Curiosidade",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Japones+Fantasia",
        featured: true
    },
    {
        id: 2,
        title: "Maduro nunca foi preso — Trump inventou tudo para justificar tomada do petróleo venezuelano",
        subtitle: "Operação secreta seria inventada segundo investigações",
        preview: "Na madrugada de 3 de janeiro, milhares de civis em Caracas foram acordados por explosões.",
        content: `Na madrugada de 3 de janeiro, milhares de civis em Caracas foram acordados por explosões. Pouco depois, surgiu a informação de que Donald Trump teria liderado uma operação secreta para capturar Nicolás Maduro.

Segundo publicações online, Maduro teria sido levado aos Estados Unidos para responder por acusações graves, enquanto o governo americano assumiria o controle do petróleo venezuelano.

No entanto, imagens e vídeos divulgados foram manipulados ou gerados por inteligência artificial, sem qualquer confirmação oficial.`,
        category: "Política",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Maduro+Trump",
        featured: false
    },
    {
        id: 3,
        title: "Snowboarder australiano fratura pescoço em treino e vai a óbito",
        subtitle: "Michael Dolasso sofreu grave acidente durante os Jogos de Inverno",
        preview: "Michael Dolasso sofreu um grave acidente durante os Jogos de Inverno ao perder o controle em uma manobra.",
        content: `Michael Dolasso sofreu um grave acidente durante os Jogos de Inverno ao perder o controle em uma manobra.

Ele recebeu atendimento imediato e foi llevado ao hospital, mas não resistiu aos ferimentos. A federação lamentou a morte e anunciou revisão nas medidas de segurança.

O atleta era reconhecido por sua dedicação ao esporte e havia conquistado resultados importantes em competições anteriores.`,
        category: "Esportes",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Snowboarder",
        featured: false
    },
    {
        id: 4,
        title: "Gato é 'preso' suspeito de furto nos EUA",
        subtitle: "Polícia descobre que 'suspeito' era apenas um gato perdido",
        preview: "Uma família na Flórida acionou a polícia após ouvir barulhos suspeitos durante a noite.",
        content: `Uma família na Flórida acionou a polícia após ouvir barulhos suspeitos durante a noite.

Ao chegarem ao local, os policiais descobriram que o "suspeito" era apenas um gato perdido. O animal foi identificado como Bones e devolvido ao seu dono.

O caso viralizou nas redes sociais, generando piadas sobre a operação policial que resultou na prisão de um felino.`,
        category: "Curiosidade",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Gato+Preso",
        featured: false
    },
    {
        id: 5,
        title: "Japonês se transforma em collie com fantasia ultrarrealista de R$ 75 mil",
        subtitle: "Toco investiu em traje altamente detalhado feito por empresa especializada",
        preview: "Conhecido como Toco, o japonês investiu em uma fantasia altamente detalhada feita por uma empresa especializada.",
        content: `Conhecido como Toco, o japonês investiu em uma fantasia altamente detalhada feita por uma empresa especializada.

Após receber o traje, ele passou a publicar vídeos nas redes sociais, simulando comportamentos de um cachorro e interagindo com objetos e pessoas.

A fantasia inclui pelos realistas, movimentos articulados e até mesmo mecanismos para reproduzir expressões caninas.`,
        category: "Curiosidade",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Toco+Collie",
        featured: false
    },
    {
        id: 6,
        title: "Mpox confirmada com 1200 casos no estado de São Paulo",
        subtitle: "Autoridades alertam para cuidados com contato físico após período de carnaval",
        preview: "Após o período de carnaval, foram registrados 1200 casos da doença.",
        content: `Após o período de carnaval, foram registrados 1200 casos da doença. Autoridades alertam para cuidados com contato físico.

Relatos indicam que hospitais estão ficando sobrecarregados, enquanto estudos ainda investigam a origem e evolução da doença.

A população foi orientada a procurar atendimento médico ao surgirem sintomas como febre, lesões na pele e ínguas.`,
        category: "Saúde",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Mpox+SP",
        featured: false
    },
    {
        id: 7,
        title: "Zé Felipe envia flores para mãe de Virgínia e gesto levanta rumores de reconciliação",
        subtitle: "Cantor enviou flores após cirurgia gerando especulações entre fãs",
        preview: "O cantor enviou flores após uma cirurgia, o que gerou especulações entre fãs.",
        content: `O cantor enviou flores após uma cirurgia, o que gerou especulações entre fãs.

Segundo ele, o gesto também foi uma forma de demonstrar carinho, levantando rumores de uma possível reaproximação.

Os fãs imediatamente começaram a especular nas redes sociais sobre uma possível reconciliação entre o casal.`,
        category: "Entretenimento",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Zé+Felipe",
        featured: false
    },
    {
        id: 8,
        title: "Robô com IA realiza procedimento cirúrgico com sucesso",
        subtitle: "Pesquisadores desenvolveram sistema capaz de realizar cirurgias com pouca intervenção humana",
        preview: "Pesquisadores desenvolveram um robô capaz de realizar cirurgias com pouca intervenção humana.",
        content: `Pesquisadores desenvolveram um robô capaz de realizar cirurgias com pouca intervenção humana.

Durante testes, o sistema conseguiu realizar procedimentos com precisão e adaptar-se a mudanças inesperadas.

A tecnologia representa um marco na medicina robótica e pode revolutionar a forma como cirurgias são realizadas no futuro.`,
        category: "Tecnologia",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Robô+Cirurgia",
        featured: false
    },
    {
        id: 9,
        title: "Pesquisas apontam que consumo frequente de presunto pode aumentar risco de câncer",
        subtitle: "Especialistas alertam para importância de alimentação equilibrada",
        preview: "Estudos recentes indicam que o consumo excessivo de carnes processadas, como presunto, pode estar associado a um aumento no risco de desenvolvimento de certos tipos de câncer.",
        content: `Estudos recentes indicam que o consumo excessivo de carnes processadas, como presunto, pode estar associado a um aumento no risco de desenvolvimento de certos tipos de câncer.

Especialistas alertam para a importância de uma alimentação equilibrada e destacam que o consumo deve ser moderado.

Recomenda-se incluir mais vegetais e frutas na dieta diária e evitar o consumo excessivo de alimentos processados.`,
        category: "Saúde",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Presunto+Cancer",
        featured: false
    },
    {
        id: 10,
        title: "Pesquisa brasileira utiliza rede de proteínas para restaurar comunicação entre cérebro e corpo",
        subtitle: "Estudo inovador aprovado pela Anvisa testará tecnologia para recuperar conexões neurais",
        preview: "Um estudo inovador aprovado pela Anvisa pretende testar uma tecnologia baseada em proteínas para recuperar conexões neurais após lesões graves.",
        content: `Um estudo inovador aprovado pela Anvisa pretende testar uma tecnologia baseada em proteínas para recuperar conexões neurais após lesões graves.

Os pesquisadores acreditam que o método poderá trazer avanços significativos no tratamento de pacientes com danos neurológicos.

A pesquisa está em fase inicial e deve durar aproximadamente dois anos antes de apresentar resultados definitivos.`,
        category: "Ciência",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Pesquisa+Cérebro",
        featured: false
    },
    {
        id: 11,
        title: "Lula teria pedido alistamento militar imediato de jovens de 18 anos em 2026",
        subtitle: "Medida estaria relacionada a possível guerra internacional segundo redes sociais",
        preview: "Segundo informações que circulam nas redes sociais, a medida estaria relacionada a uma possível guerra internacional envolvendo grandes potências.",
        content: `Segundo informações que circulam nas redes sociais, a medida estaria relacionada a uma possível guerra internacional envolvendo grandes potências.

Até o momento, não há confirmação oficial sobre essa decisão.

O governo ainda não se pronunciou sobre os rumores que circulam nas redes sociais e veículos de comunicação.`,
        category: "Política",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Lula+Alistamento",
        featured: false
    },
    {
        id: 12,
        title: "Pep Guardiola pode deixar o Manchester City para assumir a seleção brasileira",
        subtitle: "Treinador estaria considerando deixar o clube inglês",
        preview: "De acordo com rumores, o pernikador estaria considerando deixar o clube inglês ao final da temporada para assumir a seleção antes da próxima Copa do Mundo.",
        content: `De acordo com rumores, o pernikador estivesse considerando deixar o clube inglês ao final da temporada para assumir a seleção antes da próxima Copa do Mundo.

        A possível mudança ainda não foi confirmada oficialmente.`,
        category: "Esportes",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Guardiola+Brasil",
        featured: false
    },
    {
        id: 13,
        title: "Virginia Fonseca fala sobre críticas de Luana Piovani: 'Ela acaba comigo'",
        subtitle: "A influenciadora Virginia Fonseca, 26, comentar sobre as críticas que já recebeu de Luana Piovani, 49",
        preview: "Nunca fiz nada contra ela e ainda gosto dela. Não sigo ela, mas amo os memes dela. Tenho figurinha e tudo. Ela acaba comigo, mas eu gosto dela, disse em entrevista ao Melhor da Tarde, da Band.",
        content: `A influenciadora Virginia Fonseca, 26, comentar sobre as críticas que já recebeu de Luana Piovani, 49, e disse que mesmo com os insultos públicos, gosta da atriz.

"Nunca fiz nada contra ela e ainda gosto dela. Não sigo ela, mas amo os memes dela. Tenho figurinha e tudo. Ela acaba comigo, mas eu gosto dela", disse em entrevista ao "Melhor da Tarde", da Band.

"A gente não controla os sentimentos, eu gosto dela", completou Virginia.

Luana Piovani já julgou a influenciadora por não abordar temas importantes nas redes sociais.

Virginia declarou: "Já vivo esses temas. Não gosto de entrar muito, porque tenho medo das pessoas jogarem isso contra mim".`,
        category: "Entretenimento",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Virginia+Piovani",
        featured: false
    },
    {
        id: 14,
        title: "Seleção anuncia patrocinador inéditas na camisa para a Copa do Mundo de 2026",
        subtitle: "A seleção da Noruega anunciou que pretende usar, pela primeira vez na história das Copas do Mundo",
        preview: "O acordo foi feito com a empresa Apex Sport Tech, e o logotipo apareceria na parte frontal do uniforme.",
        content: `A seleção da Noruega anunciou que pretende usar, pela primeira vez na história das Copas do Mundo, um patrocinador estampado na camisa durante o torneo de 2026.

O acordo foi feito com a empresa Apex Sport Tech, e o logotipo apareceria na parte frontal do uniforme.

Caso aconteça, seria um marco histórico no futebol, já que nunca houve patrocinadores em selções na Copa.

A FIFA ainda não comentou oficialmente o caso.`,
        category: "Esportes",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Noruega+Patrocinador",
        featured: false
    },
    {
        id: 15,
        title: "Prefeitura anuncia projeto para construir praia artificial em São Paulo até 2040",
        subtitle: "A Prefeitura de São Paulo anunciou um projeto que prevê a construção de uma praia artificial no centro da cidade",
        preview: "A ideia inclui areia, ondas artificiais e espaços de lazer.",
        content: `A Prefeitura de São Paulo anunciou um projeto que prevê a construção de uma praia artificial no centro da cidade.

A ideia inclui areia, ondas artificiais e espaços de lazer.

O objetivo seria oferecer uma alternativa de lazer sem precisar ir ao litoral.

Especialistas discutem os custos e impactos ambientais da proposta.`,
        category: "Cidade",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Praia+Artificial+SP",
        featured: false
    },
    {
        id: 16,
        title: "Polícia acha remédios de emagrecimento em ovos de chocolate em ônibus em SP",
        subtitle: "A Polícia encontrou 170 unidades de remédios escondidos dentro de ovos de chocolate em um ônibus",
        preview: "A passageira foi abordada durante fiscalização na rodovia.",
        content: `A Polícia encontrou 170 unidades de remédios escondidos dentro de ovos de chocolate em um ônibus.

A passageira foi abordada durante fiscalização na rodovia.

Além dos ovos, medicamentos foram encontrados em objetos pessoais.

A mulher foi presa por crime contra a saúde pública.`,
        category: "Polícia",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Remédios+Ovos+Chocolate",
        featured: false
    },
    {
        id: 17,
        title: "Governo estuda reduzir carga horária escolar em regiões metropolitanas para melhorar mobilidade urbana",
        subtitle: "O governo federal analisa uma proposta para reduzir a carga horária presencial em escolas públicas",
        preview: "O objetivo seria diminuir o fluxo de estudantes nos horários de pico.",
        content: `O governo federal analisa uma proposta para reduzir a carga horária presencial em escolas públicas.

O objetivo seria diminuir o fluxo de estudantes nos horários de pico.

A medida poderia impactar cidades como São Paulo e Rio de Janeiro.

Ainda não há decisão oficial sobre a implementação.`,
        category: "Educação",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Carga+Horária+Escolar",
        featured: false
    },
    {
        id: 18,
        title: "A musculação atrapalha o crescimento dos adolescentes?",
        subtitle: "A matéria explica que musculação não atrapalha o crescimento dos adolescentes, como muita gente acredita",
        preview: "Esse medo é mais um mito do que algo comprovado pela ciência.",
        content: `A matéria explica que musculação não atrapalha o crescimento dos adolescentes, como muita gente acredita. Esse medo é mais um mito do que algo comprovado pela ciência.

Estudos mostram que, quando feita da forma correta e com orientação, a musculação não impede o crescimento e pode até trazer vários benefícios para a saúde como aumento de força, melhora da composição corporal e ossos mais fortes.

Mas existem cuidados importantes como treinar com orientação profissional, priorizar a técnica correta e evitar excesso de carga.`,
        category: "Saúde",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Musculação+Adolescentes",
        featured: false
    },
    {
        id: 19,
        title: "Governo anuncia vaccine obrigatória contra gripe que causa queda de cabelo",
        subtitle: "Mensagens nas redes sociais afirmam que o governo brasileiro teria aprovado uma nova vacina obrigatória contra a gripe",
        preview: "Segundo essas publicações, o imunizante causaria efeitos colaterais graves como queda de cabelo.",
        content: `Mensagens nas redes sociais afirmam que o governo brasileiro teria aprovado uma nova vacina obrigatória contra a gripe.

Segundo essas publicações, o imunizante causaria efeitos colaterais graves como queda de cabelo.

Os conteúdos também dizem que hospitais estariam lotados e que médicos não poderiam falar sobre o assunto, sem apresentar comprovação.`,
        category: "Saúde",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Vacina+Gripe+Queda+Cabelo",
        featured: false
    },
    {
        id: 20,
        title: "Estudo aponta que creatina pode prejudicar os rins",
        subtitle: "Um suposto estudo afirma que o consumo frequente de creatina pode causar danos aos rins",
        preview: "Segundo a pesquisa, o uso contínuo poderia sobrecarregar o funcionamento renal e aumentar riscos à saúde.",
        content: `Um suposto estudo afirma que o consumo frequente de creatina pode causar danos aos rins.

Segundo a pesquisa, o uso contínuo poderia sobrecarregar o funcionamento renal e aumentar riscos à saúde.

Especialistas, no entanto, ressaltar a importância de avaliar a procedência dessas informações.`,
        category: "Saúde",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Creatina+Rins",
        featured: false
    },
    {
        id: 21,
        title: "Influencer promete revelar segredo do algoritmo e live viraliza nas redes",
        subtitle: "Um influenciador digital chamou atenção ao anunciar uma live onde revelaria o segredo do algoritmo",
        preview: "A transmissão reuniu milhares de pessoas e viralizou rapidamente.",
        content: `Um influenciador digital chamou atenção ao anunciar uma live onde revelaria o "segredo do algoritmo".

A transmissão reuniu milhares de pessoas e viralizou rapidamente.

Durante a live, foram citadas práticas comuns como frequência de postagem e uso de tendências, sem comprovação de um segredo real.`,
        category: "Tecnologia",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Influencer+Algoritmo",
        featured: false
    },
    {
        id: 22,
        title: "Whey Protein dá espinha? Saiba se é mito ou verdade",
        subtitle: "A acne é uma doença inflamatória que afeta a pele e pode causar espinhas e cravos",
        preview: "O whey protein pode contribuir para o surgimento de acne em algumas pessoas.",
        content: `A acne é uma doença inflamatória que afeta a pele e pode causar espinhas e cravos.

O whey protein pode contribuir para o surgimento de acne em algumas pessoas, pois pode influenciar hormônios ligado à oleosidade.

No entanto, isso varia de organismo para organismo, sendo recomendada avaliação médica.`,
        category: "Saúde",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Whey+Protein+Acne",
        featured: false
    },
    {
        id: 23,
        title: "Após vencer o Madureira por 8 a 0, técnico do Flamengo tem contrato renovado",
        subtitle: "O Flamengo anunciou a renovação de contrato do técnico Felipe Luis até 2030",
        preview: "A diretoria destacou a confiança no trabalho do treinador após uma sequência de títulos importantes.",
        content: `O Flamengo anunciou a renovação de contrato do técnico Felipe Luis até 2030, poucas horas após a goleada por 8 a 0 no Madureira.

A diretoria destacou a confiança no trabalho do treinador após uma sequência de títulos importantes.

O clube vive um dos momentos mais vitoriosos de sua história recente.`,
        category: "Esportes",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Flamengo+Felipe+Luis",
        featured: false
    },
    {
        id: 24,
        title: "Copa do Mundo sem o Irã?Saiba quais as alternativas para a Fifa",
        subtitle: "A poucos meses da Copa do Mundo, a Fifa enfrenta um cenário de tensão internacional",
        preview: "O Irã pode não disputar o torneio devido a conflitos geopolíticos recentes.",
        content: `A poucos meses da Copa do Mundo, a Fifa enfrenta um cenário de tensão internacional que pode impactar a participação de selções.

O Irã pode não disputas o torneo devido a conflitos geopolíticos recentes.

A decisão final dependerá das autoridades esportivas e governamentais envolvidas.`,
        category: "Esportes",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Copa+Mundo+Irã",
        featured: false
    },
    {
        id: 25,
        title: "Jeffrey Epstein – Estupro e Canibalismo de bebês lactantes",
        subtitle: "O caso envolvendo Jeffrey Epstein ganhou repercussão mundial devido às graves acusações de crimes",
        preview: "Entre os conteúdos que circulam, surgiram alegações extremas envolvendo práticas criminosas sem comprovação.",
        content: `O caso envolvendo Jeffrey Epstein ganhou repercussão mundial devido às graves acusações de crimes.

Entre os conteúdos que circulam, surgiram alegações extremas envolvendo práticas criminosas sem comprovação.

As investigações oficiais tratam de crimes reais, mas muitas informações divulgadas não possuem evidências confirmadas.`,
        category: "Polícia",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Jeffrey+Epstein",
        featured: false
    },
    {
        id: 26,
        title: "Enchentes no Rio Grande Do Sul",
        subtitle: "Durante os temporais no Rio Grande do Sul em 2024, as doações estavam sendo retidas para cobrança de impostos, ou que o governo estava dificultando o resgate.",
        preview: "Durante os temporais no Rio Grande do Sul em 2024, as doações estavam sendo retidas para cobrança de impostos, ou que o governo estava dificultando o resgate.",
        content: `Durante os temporais no Rio Grande do Sul em 2024, as doações estavam sendo retidas para cobrança de impostos, ou que o governo estava dificultando o resgate.`,
        category: "Política",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Enchentes+RS",
        featured: false
    },
    {
        id: 27,
        title: "O rapper Orochi e a influenciadora Lara Jucá reataram o relacionamento",
        subtitle: "O rapper Orochi e a influenciadora Lara Jucá reataram o relacionamento, com o artista declarando-se publicamente a ela no Dia Internacional da Mulher (08/03/2026).",
        preview: "Após términos anteriores marcados por polêmicas, o casal voltou a aparecer junto e demonstrar carinho nas redes sociais.",
        content: `O rapper Orochi e a influenciadora Lara Jucá reataram o relacionamento, com o artista declarando-se publicamente a ela no Dia Internacional da Mulher (08/03/2026).

Após términos anteriores marcados por polêmicas, o casal voltou a aparecer junto e demonstrar carinho nas redes sociais.`,
        category: "Entretenimento",
        image: "https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Orochi+Lara+Jucá",
        featured: false
    },
    {
        id: 28,
        title: "RUYFF BOICOTOU A COPA?",
        subtitle: "Maior nome da história do futebol holandês, Johan Cruyff só disputou uma Copa do Mundo, em 1974.",
        preview: "Quatro anos depois, ele decidiu não ir ao Mundial na Argentina. Durante muito tempo, acreditou-se que foi um boicote político.",
        content: `Maior nome da história do futebol holandês, Johan Cruyff só disputou uma Copa do Mundo, em 1974.

Quatro anos depois, ele decidiu não ir ao Mundial na Argentina. Durante muito tempo, acreditou-se que foi um boicote político.

Porém, o próprio jogador revelou que a decisão aconteceu após um assalto em sua casa, quando decidiu não ficar longe da família.`,
        category: "Esportes",
        image: "https://via.placeholder.com/800x400/e94560/ffffff?text=Johan+Cruyff",
        featured: false
    },
    {
        id: 29,
        title: "Circula no Instagram a alegação sobre fala de Lula",
        subtitle: "Circula no Instagram a alegação de que o presidente Luiz Inácio Lula da Silva teria dito que 'não enganaria o povo mais uma vez'.",
        preview: "A fala viralizou com contexto político atual, mas na realidade foi retirada de uma entrevista antiga e usada fora de contexto.",
        content: `Circula no Instagram a alegação de que o presidente Luiz Inácio Lula da Silva teria dito que "não enganaria o povo mais uma vez".

A fala viralizou com contexto político atual, mas na realidade foi retirada de uma entrevista antiga e usada fora de contexto.

O trecho original mostra que a declaração tinha outro significado.`,
        category: "Política",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Lula+Instagram",
        featured: false
    },
    {
        id: 30,
        title: "Suíte presidencial, passagem secreta e fuga antes da polícia: imagens exclusivas mostram esconderijo de traficante no Vidigal",
        subtitle: "A reportagem mostra imagens exclusivas de um esconderijo de um traficante no Vidigal, no Rio de Janeiro.",
        preview: "O local possuía estrutura luxuosa, incluindo uma suíte presidencial e uma passagem secreta utilizada para fuga.",
        content: `A reportagem mostra imagens exclusivas de um esconderijo de um traficante no Vidigal, no Rio de Janeiro.

O local possuía estrutura luxuosa, incluindo uma suíte presidencial e uma passagem secreta utilizada para fuga.

Segundo informações, o criminoso conseguiu escapar pouco antes da chegada da polícia, levantando questionamentos sobre a operação.`,
        category: "Polícia",
        image: "https://via.placeholder.com/800x400/16213e/ffffff?text=Traficante+Vidigal",
        featured: false
    }
];

// DOM Elements
const featuredNews = document.getElementById('featuredNews');
const newsGrid = document.getElementById('newsGrid');
const modal = document.getElementById('newsModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const navLinks = document.querySelectorAll('.nav-link');

// Render Featured News
function renderFeaturedNews() {
    const featured = newsData.find(news => news.featured);
    if (!featured) return;

    featuredNews.innerHTML = `
        <div class="featured-image">
            <img src="${featured.image}" alt="${featured.title}">
        </div>
        <div class="featured-content">
            <span class="featured-label">${featured.category}</span>
            <h2 class="featured-title">${featured.title}</h2>
            <p class="featured-subtitle">${featured.subtitle}</p>
            <p class="featured-text">${featured.preview}</p>
            <button class="news-card-btn" onclick="openModal(${featured.id})">Ler mais</button>
        </div>
    `;
}

// Render News Grid
function renderNewsGrid(news = newsData) {
    newsGrid.innerHTML = news.map((newsItem, index) => `
        <article class="news-card" style="animation-delay: ${index * 0.1}s">
            <div class="news-card-image-wrapper">
                <img src="${newsItem.image}" alt="${newsItem.title}" class="news-card-image">
            </div>
            <div class="news-card-content">
                <span class="news-card-label">${newsItem.category}</span>
                <h3 class="news-card-title">${newsItem.title}</h3>
                <p class="news-card-subtitle">${newsItem.subtitle}</p>
                <p class="news-card-preview">${newsItem.preview}</p>
                <button class="news-card-btn" onclick="openModal(${newsItem.id})">Ler mais</button>
            </div>
        </article>
    `).join('');
}

// Open Modal
window.openModal = function(id) {
    const newsItem = newsData.find(n => n.id === id);
    if (!newsItem) return;

    modalBody.innerHTML = `
        <img src="${newsItem.image}" alt="${newsItem.title}">
        <h2>${newsItem.title}</h2>
        <p class="subtitle">${newsItem.subtitle}</p>
        <div class="full-content">
            ${newsItem.content.replace(/\n/g, '<br><br>')}
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Close Modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Search Functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderNewsGrid();
        return;
    }

    const filteredNews = newsData.filter(news => 
        news.title.toLowerCase().includes(searchTerm) ||
        news.subtitle.toLowerCase().includes(searchTerm) ||
        news.preview.toLowerCase().includes(searchTerm) ||
        news.category.toLowerCase().includes(searchTerm)
    );

    renderNewsGrid(filteredNews);
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Navigation functionality
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        const category = link.dataset.category;
        
        // Filter news by category
        if (category === 'all') {
            renderNewsGrid();
        } else if (category === 'highlights') {
            const highlights = newsData.filter(n => n.featured || n.id <= 3);
            renderNewsGrid(highlights);
        } else if (category === 'latest') {
            const latest = newsData.filter(n => n.id >= 7);
            renderNewsGrid(latest);
        } else if (category === 'trending') {
            const trending = newsData.slice(0, 6);
            renderNewsGrid(trending);
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedNews();
    renderNewsGrid();
});