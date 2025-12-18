import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, BarChart3, MessageSquare, Zap, Brain, Rocket, ChevronRight, Star, Target, TrendingUp, Globe, Code, Bell } from 'lucide-react';
import { Logo } from '../../App';
import { Language } from '../../App';
import { Timeline } from '../ui/Timeline';
import { AnimatedShinyText } from '../ui/AnimatedShinyText';

const content = {
  en: {
    hero: {
      badge: 'Our Journey',
      title: 'Timeline',
      titleHighlight: 'MGM',
      subtitle: 'The story of how a personal frustration became a platform that helps thousands of communities.',
      cta: 'Book a Demo',
      stats: [
        { value: '280+', label: 'Groups in 1st month' },
        { value: '200k+', label: 'Messages/month' },
        { value: 'R$1.5k', label: 'MRR' }
      ]
    },
    timeline: [
      {
        title: 'The Pain',
        items: [
          { title: 'When it all started', desc: 'Everything began when Bruno\'s open Telegram community hit around 1,000 members. With 400 to 500 messages being exchanged daily, the group had become impossible to follow. The irony was cruel: the more the community grew, the less people engaged. Members who missed a day or two of conversations simply gave up trying to catch up. All that knowledge being generated, all those valuable discussions... lost in the noise.', icon: MessageSquare },
          { title: 'A spark of an idea', desc: 'What if there was a way to summarize the main topics and send them by email to members? This would solve two problems at once: keep people engaged even without reading everything, and finally capture emails from this open community (something Telegram doesn\'t allow). And what if a bot could also send these summaries privately to interested members?', icon: Sparkles },
          { title: 'Looking for a partner', desc: 'Bruno wasn\'t a developer. So he did what any good entrepreneur does: threw the idea in the community group and waited. André liked the challenge and offered to help build the project. The partnership that would change everything was born right there, in the same group that inspired the solution.', icon: Users }
        ]
      },
      {
        title: 'MVP v1',
        items: [
          { title: 'ByteTalk comes to life', desc: 'André delivered a working prototype in just 2 days. No landing page, no fancy design — just a bot that worked. The initial hypothesis was bold: the bot would go viral, and monetization would come from B2C. They launched it in 9 WhatsApp groups and waited to see what would happen.', icon: Rocket },
          { title: 'Uncontrolled virality', desc: 'In just one month, the bot had spread to 280 groups. People found it fun to have an AI summarizing their conversations and started adding the bot everywhere. On average, 8,000 messages were being summarized daily — over 200,000 per month. The problem? OpenAI and infrastructure costs were skyrocketing. Each new group was a new expense.', icon: TrendingUp },
          { title: 'The first R$300', desc: 'They tested charging R$5 for people to receive summaries privately. R$300 in MRR emerged from the experiment. But something wasn\'t right: the bot was growing in random groups — soccer, cars, memes — places where nobody cared enough to pay R$5 for a summary. Costs always exceeded revenue.', icon: Star }
        ]
      },
      {
        title: 'The Pivot',
        items: [
          { title: 'Separating wheat from chaff', desc: 'With so much noise, it was impossible to understand who really valued the product. They made a radical decision: turn off the bot in dozens of random groups and see who would complain. The idea was simple — whoever raised their hand really cared. And several people raised their hands.', icon: Target },
          { title: 'The ideal customer appears', desc: 'After many interviews with those who complained, two profiles emerged clearly: paid community owners and infoproducers. These people were willing to pay R$38 to R$48 to have the tool back. It wasn\'t about the summary — it was about understanding their community.', icon: Users },
          { title: 'A blue ocean', desc: 'When they looked at the competition, they found only deficient solutions. As pioneers in this market, they could set whatever price they wanted. Now they had a product with viral potential, a defined target audience, and competitors far behind. Just one piece was missing: a clear value proposition.', icon: Brain }
        ]
      },
      {
        title: 'Alfa Version',
        items: [
          { title: 'The big discovery', desc: 'After 2 to 3 weeks talking to potential customers, everything clicked. The value wasn\'t in the summary. The value was in RETENTION AND ENGAGEMENT. Community owners weren\'t looking to save time — they wanted to understand who was engaged, who was leaving, what was working. The pivot was clear: transform the bot into a SaaS with analytics.', icon: Sparkles },
          { title: 'The dashboard is born', desc: 'They built a real-time dashboard with the 3 most requested features: summary of topics discussed, ranking of most engaged members, and identification of hottest topics. Additionally, sentiment analysis, message count, shared links, and 30-day history. No more just a bot — now there was a complete intelligence platform.', icon: BarChart3 },
          { title: 'Validation that brought chills', desc: '"Holy sh*t, what an amazing dashboard!! You\'re delivering GOLD in community management." The first beta tester\'s reaction left no doubt. They asked if they could share, if they could post about it. The excitement was contagious. This was the sign they were on the right path.', icon: Zap },
          { title: 'Building a community of testers', desc: 'They created a group for onboarding and support. With each new beta tester, they sent a private message asking: how did you find out about the project? What are you trying to solve? What are your expectations? Every answer was gold. Feedback took time to come, but when it came, it came in waves — one member\'s idea triggered ideas from others.', icon: Users }
        ]
      },
      {
        title: 'Beta Version',
        items: [
          { title: 'The pricing strategy', desc: 'Without any benchmark in the market, they created a pricing ladder: R$99 for Alfa, R$179 for Beta, R$299 at Go Live. The logic? Whoever buys early keeps the discount forever — but if they churn and come back, they pay full price. If people complain about R$99, there\'s a problem. If they find it cheap, there\'s room to grow.', icon: Star },
          { title: 'The first real subscriber', desc: 'The first paying customer didn\'t come from the beta testers group. They came from a referral. Someone had talked to someone who talked to someone else. In the same week, they launched pricing via WhatsApp and the landing page. The flywheel was starting to spin.', icon: Rocket },
          { title: 'The R$1k MRR celebration and hangover', desc: 'There was an immediate jump of R$500 in MRR. R$1,000 monthly seemed like a dream achieved. But then reality hit: 50% churn in the following weeks. Half the customers were leaving. The value proposition still wasn\'t clear. People were signing up but didn\'t know what to do with all that data.', icon: TrendingUp },
          { title: 'Evangelists emerge', desc: 'Something magical started happening. Some beta testers began helping answer questions in the support group. One of them, Flavia, even helped close a sale. When you\'re transparent and stay close to early users, relationships build naturally. Some people become genuine fans of the project.', icon: Users }
        ]
      },
      {
        title: 'The Refinement',
        items: [
          { title: 'Defining the Value Metric', desc: 'They needed to answer a fundamental question: what exactly does MGM deliver? After much reflection, the answer emerged: engagement. But what is engagement? They defined it as: a person who sent or reacted to at least 5 messages in the group within 5 days. The more interactions, the higher the engagement. Higher engagement, happier community owner.', icon: Target },
          { title: 'The path to the A-ha Moment', desc: 'They identified 3 critical steps for the customer to see value: 1) Put the bot in the group and activate the newsletter. 2) Schedule an automatic message. 3) Receive the weekly engagement report. This was the Time to Value. Their thesis: anyone who completes these 3 steps in the trial will see engagement increase and will pay to continue.', icon: Zap },
          { title: 'The churn collapses', desc: 'After implementing an onboarding focused on these 3 steps, with daily messages during the trial guiding the user, the churn plummeted. People finally understood the value. The feeling of "now it works" was indescribable.', icon: TrendingUp },
          { title: 'A hard but necessary decision', desc: 'They outsourced the frontend to Bubble, partnering with Felipe. This cost R$1,500/month, but brought agility — frontend wasn\'t something André enjoyed. Meanwhile, André built a robust API. Why? They\'re building MGM to sell one day, and for that they need total control of the code. Each decision with an eye on the future.', icon: Code }
        ]
      },
      {
        title: 'Go Live',
        items: [
          { title: 'The "Upstairs" strategy', desc: 'They created a bold pricing tactic: raise monthly prices, but keep annual with discount for a limited window. Those who had been following the project and gained confidence finally committed to annual plans. Result: MRR jumped from R$1k to R$1.5k in a few days. A 50% increase. Almost R$5k in cash injection in the first month.', icon: TrendingUp },
          { title: 'Focused distribution', desc: 'With money in the account, it was time to scale. They defined priorities: partnerships with Micro-SaaS that have the same target audience, organic posts on LinkedIn, Instagram and YouTube, and paid traffic. Affiliates entered as a parallel experiment, using a tool from the community itself instead of Hotmart.', icon: Globe },
          { title: 'Validation by competition', desc: 'Something interesting happened: competitors started appearing in the exact same market. At first it seemed threatening. Then they realized: this is a great sign. If others are investing in the same space, there\'s validated demand. It gave them "gas" to accelerate sales and consolidate the lead while they had it.', icon: Users },
          { title: 'This is just the beginning', desc: 'Today MGM has a group with over 55 beta testers, an engaged community, a validated product, clear distribution channels, and a roadmap full of possibilities. The journey from a frustrated admin in a Telegram group to a SaaS that helps thousands of communities is just beginning. And the best part? Every step was documented so others can learn from the experience.', icon: Rocket }
        ]
      }
    ],
    back: 'Back to Home'
  },
  pt: {
    hero: {
      badge: 'Nossa Jornada',
      title: 'Timeline',
      titleHighlight: 'MGM',
      subtitle: 'A história de como uma frustração pessoal virou uma plataforma que ajuda milhares de comunidades.',
      cta: 'Agendar Demo',
      stats: [
        { value: '280+', label: 'Grupos no 1º mês' },
        { value: '200k+', label: 'Mensagens/mês' },
        { value: 'R$1.5k', label: 'MRR' }
      ]
    },
    timeline: [
      {
        title: 'A Dor',
        items: [
          { title: 'Quando tudo começou', desc: 'Tudo começou quando a comunidade aberta do Bruno no Telegram bateu cerca de 1.000 membros. Com 400 a 500 mensagens sendo trocadas por dia, o grupo tinha se tornado impossível de acompanhar. A ironia era cruel: quanto mais a comunidade crescia, menos as pessoas engajavam. Membros que perdiam um ou dois dias de conversas simplesmente desistiam de tentar acompanhar. Todo aquele conhecimento sendo gerado, todas aquelas discussões valiosas... perdidas no ruído.', icon: MessageSquare },
          { title: 'Uma fagulha de ideia', desc: 'E se existisse uma forma de resumir os principais assuntos e enviar por email para os membros? Isso resolveria dois problemas de uma vez: manter as pessoas engajadas mesmo sem ler tudo, e finalmente captar os emails dessa comunidade aberta (algo que o Telegram não permite). E se o bot, além de gerar o resumo, pudesse enviar também no privado para os membros interessados?', icon: Sparkles },
          { title: 'Buscando um parceiro', desc: 'O Bruno não era desenvolvedor. Então fez o que qualquer bom empreendedor faz: jogou a ideia no grupo da comunidade e esperou. O André curtiu o desafio e se ofereceu para montar o projeto. A parceria que mudaria tudo nasceu ali mesmo, no grupo que inspirou a solução.', icon: Users }
        ]
      },
      {
        title: 'MVP v1',
        items: [
          { title: 'ByteTalk ganha vida', desc: 'O André entregou um protótipo funcionando em apenas 2 dias. Sem landing page, sem design elaborado — só um bot que funcionava. A hipótese inicial era ousada: o bot viralizaria, e a monetização viria do B2C. Lançaram em 9 grupos de WhatsApp e esperaram para ver o que aconteceria.', icon: Rocket },
          { title: 'Viralidade descontrolada', desc: 'Em apenas um mês, o bot já estava em 280 grupos. As pessoas achavam divertido ter uma IA resumindo suas conversas e começaram a adicionar o bot em todo lugar. Em média, 8 mil mensagens eram resumidas por dia — mais de 200 mil por mês. O problema? Os custos de OpenAI e infraestrutura dispararam. Cada grupo novo era uma despesa nova.', icon: TrendingUp },
          { title: 'Os primeiros R$300', desc: 'Testaram cobrar R$5 para as pessoas receberem os resumos no privado. R$300 de MRR surgiram do experimento. Mas algo não batia: o bot estava crescendo em grupos aleatórios — futebol, carros, memes — lugares onde ninguém se importava o suficiente para pagar R$5 por um resumo. O custo sempre ficava maior que a receita.', icon: Star }
        ]
      },
      {
        title: 'O Pivot',
        items: [
          { title: 'Separando o joio do trigo', desc: 'Com tanto ruído, era impossível entender quem realmente valorizava o produto. Tomaram uma decisão radical: desligar o bot em dezenas de grupos aleatórios e ver quem reclamaria. A ideia era simples — quem levantasse a mão, realmente se importava. E várias pessoas levantaram a mão.', icon: Target },
          { title: 'O cliente ideal aparece', desc: 'Depois de muitas entrevistas com quem reclamou, dois perfis surgiram com clareza: donos de comunidades pagas e infoprodutores. Essas pessoas estavam dispostas a pagar entre R$38 e R$48 para ter a ferramenta de volta. Não era pelo resumo — era por entender a comunidade delas.', icon: Users },
          { title: 'Um oceano azul', desc: 'Quando olharam para a concorrência, encontraram apenas soluções deficientes. Como pioneiros nesse mercado, podiam definir o preço que quisessem. Agora tinham um produto com potencial viral, um público-alvo definido, e concorrentes muito atrás. Só faltava uma peça: uma proposta de valor clara.', icon: Brain }
        ]
      },
      {
        title: 'Versão Alfa',
        items: [
          { title: 'A grande descoberta', desc: 'Depois de 2 a 3 semanas conversando com potenciais clientes, tudo fez sentido. O valor não estava no resumo. O valor estava em RETENÇÃO E ENGAJAMENTO. Donos de comunidades não queriam economizar tempo — queriam entender quem estava engajado, quem estava saindo, o que estava funcionando. O pivot era claro: transformar o bot em um SaaS com analytics.', icon: Sparkles },
          { title: 'O dashboard nasce', desc: 'Construíram um painel em tempo real com as 3 funcionalidades mais pedidas: resumo dos tópicos conversados, ranking dos membros mais engajados, e identificação dos assuntos mais quentes. Além disso, análise de sentimento, contagem de mensagens, links compartilhados e histórico de 30 dias. Não era mais só um bot — agora tinha uma plataforma completa de inteligência.', icon: BarChart3 },
          { title: 'A validação que arrepiou', desc: '"Caralho, que painel foda!! Vocês estão me entregando OURO em gestão de comunidade." A reação do primeiro beta tester não deixou dúvidas. Ele perguntou se podia divulgar, se podia postar. A empolgação era contagiante. Esse era o sinal de que estavam no caminho certo.', icon: Zap },
          { title: 'Construindo uma comunidade de testers', desc: 'Criaram um grupo para onboarding e suporte. A cada novo beta tester, mandavam uma mensagem no privado perguntando: como você ficou sabendo do projeto? O que está buscando resolver? Qual sua expectativa? Cada resposta era ouro. Os feedbacks demoravam a vir, mas quando vinham, vinham em ondas — a ideia de um membro ativava ideias de outros.', icon: Users }
        ]
      },
      {
        title: 'Versão Beta',
        items: [
          { title: 'A estratégia de preços', desc: 'Sem nenhum benchmark no mercado, criaram uma escada de preços: R$99 no Alfa, R$179 no Beta, R$299 no Go Live. A lógica? Quem comprar cedo mantém o desconto para sempre — mas se der churn e voltar, paga preço cheio. Se as pessoas reclamarem de R$99, tem um problema. Se acharem barato, tem espaço para crescer.', icon: Star },
          { title: 'O primeiro assinante de verdade', desc: 'O primeiro cliente pagante não veio do grupo de beta testers. Veio de uma indicação. Alguém tinha falado com alguém que falou com outra pessoa. Na mesma semana, lançaram o preço via WhatsApp e a landing page. O flywheel estava começando a girar.', icon: Rocket },
          { title: 'A comemoração e a ressaca do R$1k MRR', desc: 'Houve um salto imediato de R$500 no MRR. R$1.000 mensais pareciam um sonho realizado. Mas então a realidade bateu: 50% de churn nas semanas seguintes. Metade dos clientes estava saindo. A proposta de valor ainda não estava clara. As pessoas assinavam, mas não sabiam o que fazer com todos aqueles dados.', icon: TrendingUp },
          { title: 'Evangelistas surgem', desc: 'Algo mágico começou a acontecer. Alguns beta testers começaram a ajudar a responder dúvidas no grupo de suporte. Uma delas, a Flavia, chegou a ajudar a fechar uma venda. Quando você é transparente e fica próximo dos early-users, relacionamentos se constroem naturalmente. Algumas pessoas viram fãs genuínos do projeto.', icon: Users }
        ]
      },
      {
        title: 'O Refinamento',
        items: [
          { title: 'Definindo a Value Metric', desc: 'Era preciso responder uma pergunta fundamental: o que exatamente o MGM entrega? Depois de muita reflexão, a resposta surgiu: engajamento. Mas o que é engajamento? Definiram: uma pessoa que mandou ou reagiu a pelo menos 5 mensagens no grupo, no período de até 5 dias. Quanto mais interações, maior o engajamento. Engajamento alto, dono do grupo feliz.', icon: Target },
          { title: 'O caminho até o A-ha Moment', desc: 'Identificaram 3 passos críticos para o cliente enxergar valor: 1) Colocar o bot no grupo e ativar a newsletter. 2) Agendar uma mensagem automática. 3) Receber o relatório semanal de engajamento. Esse era o Time to Value. A tese: quem completar esses 3 passos no trial vai ver o engajamento aumentar e vai pagar para continuar.', icon: Zap },
          { title: 'O churn despenca', desc: 'Depois de implementar um onboarding focado nesses 3 passos, com mensagens diárias durante o trial guiando o usuário, o churn despencou. As pessoas finalmente entendiam o valor. A sensação de "agora funcionou" foi indescritível.', icon: TrendingUp },
          { title: 'Uma decisão difícil mas necessária', desc: 'Terceirizaram o frontend para Bubble, fechando parceria com o Felipe. Isso custava R$1.500/mês, mas trazia agilidade — frontend não era algo que o André curtia. Enquanto isso, o André construiu uma API robusta. Por quê? Estão montando o MGM para um dia vender, e para isso precisam de controle total do código. Cada decisão com olho no futuro.', icon: Code }
        ]
      },
      {
        title: 'Go Live',
        items: [
          { title: 'A estratégia "Upstairs"', desc: 'Criaram uma tática ousada de pricing: subir o preço do mensal, mas manter o anual com desconto por uma janela limitada. Quem estava acompanhando o projeto e ganhou confiança, finalmente se comprometeu com planos anuais. Resultado: MRR saltou de R$1k para R$1.5k em alguns dias. Um aumento de 50%. Quase R$5k de injeção no caixa no primeiro mês.', icon: TrendingUp },
          { title: 'Distribuição com foco', desc: 'Com dinheiro na conta, era hora de escalar. Definiram prioridades: parcerias com Micro-SaaS que tenham o mesmo público-alvo, postagens orgânicas no LinkedIn, Instagram e YouTube, e tráfego pago. Afiliados entraram como experimento paralelo, usando uma ferramenta da própria comunidade em vez de Hotmart.', icon: Globe },
          { title: 'Validação pela concorrência', desc: 'Algo interessante aconteceu: concorrentes começaram a aparecer no exato mesmo mercado. No início pareceu ameaçador. Depois perceberam: isso é um ótimo sinal. Se outros estão investindo no mesmo espaço, tem demanda validada. Deu "gás" para acelerar vendas e consolidar a liderança enquanto tinham.', icon: Users },
          { title: 'Isso é só o começo', desc: 'Hoje o MGM tem um grupo com mais de 55 beta testers, uma comunidade engajada, um produto validado, canais de distribuição claros, e um roadmap cheio de possibilidades. A jornada de um admin frustrado em um grupo de Telegram até um SaaS que ajuda milhares de comunidades está só começando. E a melhor parte? Cada passo foi documentado para que outros possam aprender com a experiência.', icon: Rocket }
        ]
      }
    ],
    back: 'Voltar ao Início'
  }
};

const TimelineCard = ({ title, desc, icon: Icon, index }: { title: string; desc: string; icon: React.ElementType; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    className="group relative bg-white rounded-[1.5rem] p-6 border border-stone-100 shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)] transition-all duration-500 mb-4 overflow-hidden"
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-transparent to-amber-50/0 group-hover:from-orange-50/50 group-hover:to-amber-50/30 transition-all duration-700 pointer-events-none rounded-[1.5rem]" />

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:shadow-lg group-hover:shadow-orange-500/10 transition-all duration-300"
        >
          <Icon className="text-orange-500 group-hover:text-orange-600 transition-colors" size={22} />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-stone-800 transition-colors">{title}</h4>
          <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-600 transition-colors">{desc}</p>
        </div>
      </div>
    </div>

    {/* Decorative corner */}
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -2, scale: 1.02 }}
    className="group text-center px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 hover:border-stone-200/50 transition-all duration-300"
  >
    <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{value}</div>
    <div className="text-sm text-stone-500 font-medium">{label}</div>
  </motion.div>
);

export const TimelineMGM = ({ lang, onBack, setLang }: { lang: Language; onBack: () => void; setLang?: (l: Language) => void }) => {
  const t = content[lang];
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: lang === 'en' ? 'Home' : 'Início', href: '#', onClick: onBack },
    { name: 'Analytics 2.0', href: '#analytics', onClick: onBack },
    { name: lang === 'en' ? 'Pricing' : 'Preços', href: '#pricing', onClick: onBack },
  ];

  const timelineData = t.timeline.map((period) => ({
    title: period.title,
    content: (
      <div className="space-y-4">
        {period.items.map((item, idx) => (
          <TimelineCard key={idx} title={item.title} desc={item.desc} icon={item.icon} index={idx} />
        ))}
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 z-50 relative hover:opacity-70 transition-opacity"
          >
            <Logo />
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick?.(); } : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {setLang && (
              <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200/50 mr-2">
                <button onClick={() => setLang('en')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>EN</button>
                <button onClick={() => setLang('pt')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'pt' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>PT</button>
              </div>
            )}
            <a href="#" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3 transition-colors">{lang === 'en' ? 'Login' : 'Entrar'}</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-9 px-5 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all text-sm shadow-lg shadow-stone-900/10"
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none z-0 mix-blend-multiply" />

        {/* Floating orbs */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge with Shiny Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm mb-8 cursor-pointer hover:shadow-md hover:bg-white/40 transition-all group"
          >
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Rocket size={10} />
              {lang === 'en' ? 'JOURNEY' : 'JORNADA'}
            </span>
            <AnimatedShinyText className="inline-flex items-center gap-1 text-sm font-medium">
              {t.hero.badge}
            </AnimatedShinyText>
            <ChevronRight size={14} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 mb-6 tracking-tight"
          >
            {t.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {t.hero.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={0.3 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-stone-300 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-stone-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="pb-24 relative">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {lang === 'en' ? 'Our Milestones' : 'Nossos Marcos'}
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              {lang === 'en'
                ? 'Every great journey starts with a single step. Here\'s how we\'ve grown.'
                : 'Toda grande jornada começa com um único passo. Veja como crescemos.'}
            </p>
          </motion.div>
        </div>

        <Timeline data={timelineData} />
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-white border-t border-stone-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

          {/* Glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              {lang === 'en' ? 'Join the Journey' : 'Faça Parte da Jornada'}
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {lang === 'en' ? 'Be part of our story' : 'Faça parte da nossa história'}
            </h2>
            <p className="text-stone-400 mb-10 max-w-xl mx-auto text-lg">
              {lang === 'en'
                ? 'Join thousands of community builders who are shaping the future with MGM.'
                : 'Junte-se a milhares de construtores de comunidades que estão moldando o futuro com o MGM.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 rounded-full bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-all flex items-center gap-3 mx-auto shadow-2xl"
            >
              {t.hero.cta}
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Back Button */}
      <section className="px-6 pb-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.02, x: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-900 transition-all font-medium shadow-sm"
          >
            <ArrowRight className="rotate-180" size={16} />
            {t.back}
          </motion.button>
        </div>
      </section>
    </div>
  );
};
