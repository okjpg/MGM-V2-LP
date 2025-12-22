import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, BarChart3, MessageSquare, Zap, Brain, Rocket, ChevronRight, Star, Target, TrendingUp, Globe, Code, Play, Trophy } from 'lucide-react';
import { Logo } from '../../App';
import { Language } from '../../App';
import { Timeline } from '../ui/Timeline';
import { AnimatedShinyText } from '../ui/AnimatedShinyText';

const content = {
  en: {
    hero: {
      badge: 'Our Journey',
      title: 'The',
      titleHighlight: 'MGM Journey',
      subtitle: 'The story of how a personal frustration became a platform that helps thousands of communities.',
      cta: 'Book a Demo'
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
      title: 'A jornada do',
      titleHighlight: 'MGM',
      subtitle: 'A história de como uma frustração pessoal virou uma plataforma que ajuda milhares de comunidades.',
      cta: 'Agendar Demo'
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
    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    whileHover={{ y: -3, transition: { duration: 0.25, ease: "easeOut" } }}
    className="group relative bg-white rounded-[1.25rem] p-6 border border-stone-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-8px_rgba(28,25,23,0.12)] hover:border-stone-200/60 transition-all duration-400 mb-4 overflow-hidden"
  >
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-amber-50/0 group-hover:from-orange-50/40 group-hover:to-amber-50/20 transition-all duration-500 pointer-events-none rounded-[1.25rem]" />

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-stone-50 to-stone-100/80 border border-stone-200/50 flex items-center justify-center shrink-0 group-hover:from-orange-50 group-hover:to-amber-50 group-hover:border-orange-200/50 transition-all duration-300">
          <Icon className="text-stone-500 group-hover:text-orange-500 transition-colors duration-300" size={20} />
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <h4 className="text-base font-semibold text-stone-800 mb-1.5 group-hover:text-stone-900 transition-colors">{title}</h4>
          <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-600 transition-colors">{desc}</p>
        </div>
      </div>
    </div>
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
            <a href="#login" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3 transition-colors">{lang === 'en' ? 'Login' : 'Entrar'}</a>
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

      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
        {/* Background Dot Pattern (Same as Home) */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-orange-50/40 to-transparent pointer-events-none z-0 mix-blend-multiply" />

        {/* Floating ambient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/30 via-amber-100/20 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-amber-200/25 via-orange-100/15 to-transparent rounded-full blur-[120px]"
        />

        {/* Decorative floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-32 right-[15%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-stone-200/50 flex items-center justify-center"
          >
            <Rocket className="text-orange-500" size={24} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-40 left-[12%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 shadow-lg shadow-amber-100/30 flex items-center justify-center"
          >
            <Star className="text-amber-500" size={20} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-48 left-[18%] hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-lg border border-white/80 shadow-md flex items-center justify-center"
          >
            <TrendingUp className="text-emerald-500" size={18} />
          </motion.div>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-white/70 backdrop-blur-xl border border-stone-200/50 shadow-lg shadow-stone-200/30 cursor-pointer group"
            >
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md shadow-orange-500/20">
                <Sparkles size={12} />
                {lang === 'en' ? 'STORY' : 'HISTÓRIA'}
              </span>
              <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors">
                {lang === 'en' ? 'From idea to product' : 'Da ideia ao produto'}
              </span>
              <ChevronRight size={16} className="text-stone-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
            </motion.div>
          </motion.div>

          {/* Main Title with staggered animation */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-stone-900 tracking-tight leading-[0.95]"
            >
              {t.hero.title}
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 animate-gradient-x">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Journey preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {[
              { label: lang === 'en' ? 'The Pain' : 'A Dor', icon: MessageSquare },
              { label: 'MVP', icon: Rocket },
              { label: 'Pivot', icon: Target },
              { label: lang === 'en' ? 'Growth' : 'Crescimento', icon: TrendingUp },
              { label: 'Go Live', icon: Zap }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-sm hover:shadow-lg hover:border-orange-200/60 transition-all cursor-default group"
              >
                <item.icon size={16} className="text-stone-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-[10px] font-medium text-stone-400 uppercase tracking-widest group-hover:text-stone-600 transition-colors">
              {lang === 'en' ? 'Scroll' : 'Role'}
            </span>
            <svg
              width="24"
              height="36"
              viewBox="0 0 24 36"
              fill="none"
              className="text-stone-300 group-hover:text-orange-300 transition-colors"
            >
              {/* Mouse outline */}
              <rect
                x="1"
                y="1"
                width="22"
                height="34"
                rx="11"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Animated wheel */}
              <motion.rect
                x="10"
                y="8"
                width="4"
                height="8"
                rx="2"
                fill="currentColor"
                animate={{ y: [8, 16, 8], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-stone-400 group-hover:text-orange-400"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="pb-12 relative">
        <Timeline data={timelineData} />
      </section>

      {/* Conclusion Card - R$0 to R$100k */}
      <section className="px-4 md:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 rounded-[2rem] p-8 md:p-12 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-[80px] -ml-32 -mb-32" />

            {/* Floating trophy icon */}
            <motion.div
              className="absolute top-8 right-8 md:top-12 md:right-12"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <Trophy className="w-8 h-8 md:w-10 md:h-10 text-yellow-300" />
              </div>
            </motion.div>

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/90 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <Sparkles size={12} />
                {lang === 'en' ? 'The Result' : 'O Resultado'}
              </motion.div>

              {/* Main stat */}
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-baseline gap-2 mb-2"
                >
                  <span className="text-white/60 text-xl md:text-2xl font-medium">R$</span>
                  <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">0</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="text-3xl md:text-4xl text-white/80 mx-2 md:mx-4"
                  >
                    →
                  </motion.span>
                  <span className="text-white/60 text-xl md:text-2xl font-medium">R$</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter"
                  >
                    100k
                  </motion.span>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="text-white/70 text-lg md:text-xl font-medium"
                >
                  {lang === 'en' ? 'in just 90 days' : 'em apenas 90 dias'}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                {lang === 'en'
                  ? 'This journey took us from a simple idea in a Telegram group to R$100k in revenue in just 90 days. Every experiment, every pivot, every conversation with customers led us here. And this is just the beginning.'
                  : 'Essa jornada nos levou de uma simples ideia em um grupo de Telegram para R$100k em faturamento em apenas 90 dias. Cada experimento, cada pivot, cada conversa com clientes nos trouxe até aqui. E isso é só o começo.'}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MGM 1.0 Video Section - The Journey */}
      <section className="px-4 md:px-8 pb-24 bg-gradient-to-b from-[#FDFBF7] to-stone-50">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-sm font-bold mb-6"
            >
              <Play size={14} />
              {lang === 'en' ? 'THE JOURNEY' : 'A JORNADA'}
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 tracking-tight">
              MGM <span className="text-stone-400">1.0</span>
            </h2>
            <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Watch the full story of how we built MGM from zero to product-market fit.'
                : 'Assista a história completa de como construímos o MGM do zero até o product-market fit.'}
            </p>
          </motion.div>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Video container */}
            <div className="relative bg-stone-900 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/20">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stone-600 via-stone-500 to-stone-600" />

              {/* YouTube Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/rkVZRsKs3eQ?rel=0&modestbranding=1"
                  title="MGM 1.0 - A História Completa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Bottom info bar */}
              <div className="bg-stone-900 px-6 py-4 flex items-center justify-between border-t border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-700 rounded-xl flex items-center justify-center">
                    <Play size={16} className="text-white ml-0.5" fill="white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">MGM 1.0</p>
                    <p className="text-stone-400 text-xs">{lang === 'en' ? 'The Complete Journey' : 'A Jornada Completa'}</p>
                  </div>
                </div>
                <a
                  href="https://youtu.be/rkVZRsKs3eQ?si=lSBLThxFS1K9mt6W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-colors"
                >
                  <span>{lang === 'en' ? 'Watch on YouTube' : 'Ver no YouTube'}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MGM 2.0 - New Era Section */}
      <section className="px-4 md:px-8 py-24 bg-stone-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[100px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold mb-6 shadow-lg shadow-orange-500/25"
            >
              <Sparkles size={14} />
              {lang === 'en' ? 'NEW CHAPTER' : 'NOVO CAPÍTULO'}
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
              {lang === 'en' ? 'Welcome to' : 'Bem-vindo ao'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                MGM 2.0
              </span>
            </h2>
            <p className="text-stone-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'After the journey from R$0 to R$100k, we\'re entering a new era. A completely rebuilt platform, designed to be the definitive tool for community intelligence.'
                : 'Depois da jornada de R$0 a R$100k, estamos entrando em uma nova era. Uma plataforma completamente reconstruída, projetada para ser a ferramenta definitiva de inteligência de comunidades.'}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: lang === 'en' ? 'AI-First' : 'IA em Primeiro Lugar',
                desc: lang === 'en' ? 'Powered by the latest AI models to deliver insights that truly matter.' : 'Alimentado pelos modelos de IA mais recentes para entregar insights que realmente importam.'
              },
              {
                icon: BarChart3,
                title: lang === 'en' ? 'Deep Analytics' : 'Analytics Profundo',
                desc: lang === 'en' ? 'Understand your community like never before with granular data visualization.' : 'Entenda sua comunidade como nunca antes com visualização granular de dados.'
              },
              {
                icon: Zap,
                title: lang === 'en' ? 'Real-time' : 'Tempo Real',
                desc: lang === 'en' ? 'Instant alerts and live dashboards to never miss a critical moment.' : 'Alertas instantâneos e dashboards ao vivo para nunca perder um momento crítico.'
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-amber-200 transition-colors">
                  <feature.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 rounded-[2rem] blur-xl opacity-20" />
            <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-[1.5rem] p-8 md:p-12 text-center overflow-hidden">
              {/* Noise */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/20 blur-[100px] rounded-full" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {lang === 'en' ? 'Be among the first to experience MGM 2.0' : 'Seja um dos primeiros a experimentar o MGM 2.0'}
                </h3>
                <p className="text-stone-400 mb-8 max-w-xl mx-auto">
                  {lang === 'en'
                    ? 'We\'re building the future of community management. Join the waitlist and get early access.'
                    : 'Estamos construindo o futuro da gestão de comunidades. Entre na lista de espera e tenha acesso antecipado.'}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.hash = ''}
                  className="h-14 px-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all flex items-center gap-3 mx-auto shadow-xl shadow-orange-500/25"
                >
                  {lang === 'en' ? 'Explore MGM 2.0' : 'Explorar MGM 2.0'}
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white text-stone-500 py-20 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <Logo />
              </div>
              <p className="max-w-sm text-lg font-light">
                {lang === 'en'
                  ? 'The operating system for modern communities. Built for calmness in a chaotic world.'
                  : 'O sistema operacional para comunidades modernas. Construído para calma em um mundo caótico.'}
              </p>
            </div>
            <div>
              <h4 className="text-stone-900 font-bold mb-6">{lang === 'en' ? 'Product' : 'Produto'}</h4>
              <ul className="space-y-4">
                <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Features' : 'Funcionalidades'}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Pricing' : 'Preços'}</a></li>
                <li><span className="text-orange-600 font-medium">{lang === 'en' ? 'Our Journey' : 'Nossa Jornada'}</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-stone-900 font-bold mb-6">{lang === 'en' ? 'Company' : 'Empresa'}</h4>
              <ul className="space-y-4">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'About' : 'Sobre'}</a></li>
                <li><a href="https://mygroupmetrics.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">Blog</a></li>
                <li><a href="https://wa.me/5511980905374" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Contact' : 'Contato'}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">&copy; 2024 MyGroupMetrics Inc. {lang === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-900">{lang === 'en' ? 'Privacy' : 'Privacidade'}</a>
              <a href="#" className="hover:text-stone-900">{lang === 'en' ? 'Terms' : 'Termos'}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
