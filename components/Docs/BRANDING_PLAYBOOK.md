# MGM (MyGroupMetrics) - Branding Playbook

---

## 1. VISAO GERAL DA MARCA

### 1.1 Nome da Marca
**MGM** - abreviacao de **MyGroupMetrics**

**Nome Legal/Completo:** MyGroupMetrics Inc.

### 1.2 Proposta de Valor
MGM e uma plataforma de **inteligencia de comunidade** que transforma conversas caoticas de grupos (especialmente WhatsApp) em insights acionaveis. A ferramenta monitora sentimento, preve churn e ajuda a crescer comunidades com precisao tatica.

### 1.3 Tagline Principal
- **EN:** "Community intelligence, simplified."
- **PT:** "Inteligencia de comunidade, simplificada."

### 1.4 Slogan Secundario
- **EN:** "The operating system for modern communities. Built for calmness in a chaotic world."
- **PT:** "O sistema operacional para comunidades modernas. Construido para calma em um mundo caotico."

---

## 2. IDENTIDADE VISUAL

### 2.1 Paleta de Cores

#### Cores Primarias (Brand Colors)
| Nome | Codigo | Uso |
|------|--------|-----|
| **Orange 400** | `#fb923c` | Cor principal de destaque, CTAs primarios |
| **Orange 500** | `#f97316` | Gradientes, acentos de marca |
| **Orange 600** | `#ea580c` | Hover states, elementos enfatizados |

```css
/* Brand Colors */
--brand-50: #fff7ed;
--brand-100: #ffedd5;
--brand-200: #fed7aa;
--brand-300: #fdba74;
--brand-400: #fb923c;
--brand-500: #f97316;
--brand-600: #ea580c;
--brand-700: #c2410c;
--brand-800: #9a3412;
--brand-900: #7c2d12;
```

#### Cores Neutras (Stone Palette)
| Nome | Codigo | Uso |
|------|--------|-----|
| **Stone 50** | `#fafaf9` | Backgrounds claros |
| **Stone 100** | `#f5f5f4` | Bordas sutis, separadores |
| **Stone 200** | `#e7e5e4` | Inputs, cards |
| **Stone 400** | `#a8a29e` | Texto secundario |
| **Stone 500** | `#78716c` | Texto terciario |
| **Stone 600** | `#57534e` | Texto body |
| **Stone 800** | `#292524` | Titulos |
| **Stone 900** | `#1c1917` | Texto principal, botoes dark |

#### Cor de Fundo Principal
- **Background:** `#FDFBF7` (warm off-white)
- **Dot Pattern:** `#e7e5e4`

#### Cores Semanticas/Feature
| Feature | Cor | Codigo |
|---------|-----|--------|
| AI Chat | Indigo/Purple | `#6366f1` / `#8b5cf6` |
| Alertas | Rose/Red | `#f43f5e` / `#ef4444` |
| Analytics | Emerald/Green | `#10b981` / `#059669` |
| Member Health | Amber/Yellow | `#f59e0b` / `#eab308` |
| Workflows | Blue | `#3b82f6` |

#### Status Colors
| Status | Cor | Codigo |
|--------|-----|--------|
| Excelente | Emerald | `#10b981` |
| Positivo | Green | `#22c55e` |
| Neutro | Stone | `#78716c` |
| Atencao | Amber | `#f59e0b` |
| Critico | Rose | `#f43f5e` |

### 2.2 Tipografia

#### Fonte Principal
**Inter** - Font family sans-serif moderna e legivel

```css
font-family: 'Inter', sans-serif;
```

**Pesos utilizados:**
- **Light (300):** Subtitulos, descricoes longas
- **Regular (400):** Texto body
- **Medium (500):** Labels, navegacao
- **Semibold (600):** Titulos secundarios, enfase
- **Bold (700):** Headlines, titulos principais

#### Hierarquia Tipografica
| Elemento | Tamanho | Peso | Leading |
|----------|---------|------|---------|
| Hero Headline | 5xl-8xl (48-96px) | Semibold | 1.05 |
| Section Title | 4xl-5xl (36-48px) | Bold | Tight |
| Card Title | lg-xl (18-20px) | Bold | Normal |
| Body Text | lg (18px) | Light/Regular | Relaxed |
| Caption/Label | xs-sm (10-14px) | Bold | Normal |
| Badge Text | 10px | Bold | Uppercase tracking-wide |

### 2.3 Logo

#### Composicao do Logo
O logo MGM e composto por:
1. **Icone:** Quadrado arredondado com gradiente orange (from-orange-400 to-orange-600) contendo o icone `Layout` preenchido
2. **Wordmark:** "MGM" em fonte bold (700), tamanho xl, tracking-tight, cor stone-900

```jsx
// Estrutura do Logo
<div className="flex items-center gap-2">
  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
    <Layout size={18} fill="currentColor" stroke="none" />
  </div>
  <span className="font-bold text-xl tracking-tight text-stone-900">MGM</span>
</div>
```

#### Variacoes
- **Full Color:** Icone laranja gradiente + wordmark stone-900
- **On Dark:** Icone laranja gradiente + wordmark white
- **Monochrome:** Todo em stone-900 ou white

---

## 3. TOM DE VOZ E MENSAGENS

### 3.1 Personalidade da Marca
- **Inteligente, mas acessivel**
- **Calmo em meio ao caos**
- **Profissional, mas humano**
- **Preciso e tatico**
- **Confiavel e transparente**

### 3.2 Tom de Voz
| Caracteristica | Descricao |
|----------------|-----------|
| **Direto** | Mensagens claras, sem rodeios |
| **Confiante** | Afirmacoes seguras sobre capacidades |
| **Acolhedor** | Linguagem que abraca o usuario |
| **Tecnico-acessivel** | Termos tecnicos explicados de forma simples |

### 3.3 Mensagens-Chave por Feature

#### Resumos Inteligentes (Smart Summaries)
- **EN:** "Turn chaos into clarity, instantly."
- **PT:** "Transforme caos em clareza, instantaneamente."
- **Proposta:** "Don't read thousands of messages. MGM AI digests daily discussions, highlights actionable items, and identifies sentiment shifts automatically."

#### AI Chat (Ask Anything)
- **EN:** "Your data, conversationalized."
- **PT:** "Seus dados, conversacionais."
- **Proposta:** "Stop exporting CSVs. Just ask MGM AI natural language questions about your community's health, trends, and top performers."

#### Alertas Inteligentes
- **EN:** "Never miss a critical beat."
- **PT:** "Nunca perca um momento critico."
- **Proposta:** "MGM monitors your community 24/7. It detects urgency, sentiment drops, and operational bottlenecks, flagging them instantly."

#### Analytics Profundo
- **EN:** "Granular data for growth."
- **PT:** "Dados granulares para crescimento."
- **Proposta:** "Understand member lifecycle, retention rates, and sentiment trends with enterprise-grade visualization."

#### Saude dos Membros
- **EN:** "Spotlight your champions."
- **PT:** "Destaque seus campeoes."
- **Proposta:** "Identify who drives conversation and who's drifting away."

#### Workflows Automatizados
- **EN:** "Community management on autopilot."
- **PT:** "Gestao de comunidade no piloto automatico."
- **Proposta:** "Set up intelligent workflows to welcome new members, re-engage ghosts, or flag toxicity."

### 3.4 Frases de Impacto (CTAs)
| Contexto | EN | PT |
|----------|----|----|
| Principal | "Book a Demo" | "Agendar Demo" |
| Secundario | "Watch Demo" | "Ver Demo" |
| Urgencia | "Ready to calm the chaos?" | "Pronto para acalmar o caos?" |
| Comunidade | "Join thousands of community builders" | "Junte-se a milhares de construtores de comunidades" |
| Confianca | "Trusted by innovative teams worldwide" | "Confiado por times inovadores no mundo todo" |

### 3.5 Padrao de Headlines
O padrao de headlines segue a estrutura:
**[Verbo/Acao] + [beneficio] + [destaque colorido]**

Exemplos:
- "Turn chaos into **clarity**"
- "Granular data for **growth**"
- "Spotlight your **champions**"
- "Never miss a **critical beat**"

---

## 4. COMPONENTES DE UI

### 4.1 Sistema de Cards

#### Card Padrao
```css
/* Card Base */
background: white;
border-radius: 1rem (16px); /* rounded-2xl */
border: 1px solid #f5f5f4; /* stone-100 */
box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); /* shadow-soft */
padding: 1.25rem - 1.5rem; /* p-5 md:p-6 */
```

**Interacao:** Hover lift (`y: -4px`) com spring animation

#### Card com Destaque (Feature Card)
- Background gradiente sutil (`from-white to-stone-50`)
- Border com cor semantica da feature
- Shadow mais pronunciada em hover

### 4.2 Botoes

#### Botao Primario (Tactile Button)
```css
/* Primary */
background: var(--brand-500); /* orange-500 */
color: white;
padding: 0.5rem 1rem;
border-radius: 0.75rem; /* rounded-xl */
font-weight: 500;
font-size: 0.875rem;
box-shadow: 0 10px 15px -3px rgba(249, 115, 22, 0.2);
```

**Hover:** `scale: 1.02`, background orange-600
**Active:** `scale: 0.96`

#### Botao Secundario
```css
/* Secondary */
background: white;
border: 1px solid #e7e5e4; /* stone-200 */
color: #57534e; /* stone-600 */
/* Mesmo padding e border-radius */
```

**Hover:** background stone-50, color stone-900

#### Botao Hero (Dark)
```css
/* Hero CTA */
height: 3rem; /* h-12 */
padding: 0 2rem; /* px-8 */
border-radius: 9999px; /* rounded-full */
background: #1c1917; /* stone-900 */
color: white;
font-weight: 600;
box-shadow: 0 20px 25px -5px rgba(28, 25, 23, 0.2);
```

### 4.3 Badges/Pills

#### Badge de Novidade
```css
/* NEW Badge */
background: linear-gradient(to right, #f97316, #f59e0b); /* orange-500 to amber-500 */
color: white;
font-size: 10px;
padding: 0.125rem 0.375rem;
border-radius: 9999px;
font-weight: 700;
text-transform: uppercase;
```

#### Badge de Feature
```css
/* Feature Badge */
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.25rem 0.75rem;
border-radius: 9999px;
font-size: 12px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.05em;
/* Cores variam por feature */
```

| Feature | Background | Text |
|---------|------------|------|
| Summaries | orange-100 | orange-700 |
| AI Chat | indigo-50 | indigo-600 |
| Alerts | rose-50 | rose-700 |
| Analytics | emerald-100 | emerald-700 |
| Members | amber-100 | amber-700 |
| Workflows | blue-100 | blue-700 |

### 4.4 Inputs

```css
/* Input Padrao */
background: #fafaf9; /* stone-50 */
border: 1px solid #e7e5e4; /* stone-200 */
border-radius: 0.75rem; /* rounded-xl */
padding: 0.75rem 1rem;
font-size: 0.875rem;
```

**Focus:**
```css
outline: none;
ring: 2px;
ring-color: rgba(249, 115, 22, 0.2); /* orange-500/20 */
border-color: #f97316; /* orange-500 */
```

### 4.5 Shadows

```css
/* Sistema de Shadows */
--shadow-soft: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
--shadow-tactile: 0 2px 4px rgba(0,0,0,0.02), 0 1px 0 rgba(0,0,0,0.06);
--shadow-glow: 0 0 20px -5px rgba(249, 115, 22, 0.3);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### 4.6 Border Radius System

| Nome | Valor | Uso |
|------|-------|-----|
| rounded-md | 0.375rem | Pequenos elementos |
| rounded-lg | 0.5rem | Inputs, badges |
| rounded-xl | 0.75rem | Botoes, pequenos cards |
| rounded-2xl | 1rem | Cards padrao |
| rounded-3xl | 1.5rem | Cards grandes |
| rounded-full | 9999px | Pills, avatares, botoes hero |

---

## 5. ANIMACOES E MICRO-INTERACOES

### 5.1 Animacoes Globais

#### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
animation: float 6s ease-in-out infinite;
```

#### Scroll Animation (Logos)
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
animation: scroll 40s linear infinite;
```

### 5.2 Spring Configurations

```javascript
// Botoes e Cards
{ type: "spring", stiffness: 400, damping: 30 }

// Cards hover
{ type: "spring", stiffness: 150, damping: 20, mass: 1 }

// Entrada suave
{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }

// Scroll reveal
{ duration: 0.5 - 1.0, ease: "easeOut" }
```

### 5.3 Scroll Reveal
Elementos aparecem com:
- `opacity: 0 -> 1`
- `y: 20-40px -> 0`
- Delay escalonado (0.1s incrementos)

---

## 6. ICONOGRAFIA

### 6.1 Biblioteca Principal
**Lucide React** - Icones consistentes, modernos e leves

### 6.2 Icones por Feature

| Feature | Icone Principal | Icones Secundarios |
|---------|-----------------|-------------------|
| Dashboard | Layout | TrendingUp, Users, MessageSquare |
| Summaries | FileText | Copy, Activity |
| AI Chat | Sparkles, Bot | Send |
| Alerts | ShieldAlert | Bell, AlertCircle |
| Analytics | BarChart2 | TrendingUp |
| Members | Trophy | Star, TrendingDown |
| Workflows | GitBranch | CheckCircle, Filter |
| Pricing | Zap, Shield | Check |

### 6.3 Tamanhos Padrao
| Contexto | Tamanho |
|----------|---------|
| Inline text | 14px |
| Card icon | 16-18px |
| Feature highlight | 20px |
| Hero/Large | 24px+ |

---

## 7. PADROES DE LAYOUT

### 7.1 Grid System
- **Max-width container:** 7xl (80rem / 1280px)
- **Padding lateral:** 4-8 (1rem-2rem)
- **Grid de features:** 1 col mobile -> 2-3 cols desktop

### 7.2 Espacamento
| Secao | Padding Y |
|-------|-----------|
| Hero | pt-32 pb-20 md:pt-48 md:pb-32 |
| Features | py-24 (6rem) |
| Footer | py-20 (5rem) |

### 7.3 Bento Grid (Target Audience)
Layout de cards assimetricos:
- Card grande: `md:col-span-2`
- Card medio: `md:col-span-1`
- Gap: 1.5rem (gap-6)

---

## 8. PUBLICO-ALVO

### 8.1 Personas Principais

1. **Donos de Agencia**
   - Gerenciam multiplas comunidades de clientes
   - Precisam de relatorios white-label
   - Buscam provar ROI

2. **Universidades/Educacao**
   - Criam espacos seguros para alunos
   - Necessitam detectar bullying/sinais de perigo
   - Querem moderacao ativa

3. **Comunidades Pagas**
   - Focam em reduzir churn
   - Precisam provar valor da assinatura
   - Identificar membros em risco

4. **Empresas usando WhatsApp**
   - Sincronizacao com CRM
   - Transformar caos em insights estruturados
   - Nao perder dados em logs

---

## 9. MODELO DE PRECOS

### 9.1 Estrutura
- **Base:** R$ 79,00 por bloco de 500 membros
- **Escala linear:** quanto mais membros, mais blocos

### 9.2 Incluso em Todos os Planos
- Analise de mensagens em tempo real
- Ferramentas de moderacao automatica
- Assentos de administrador ilimitados
- Relatorios avancados de sentimento
- Assistente de chat MGM AI

### 9.3 Mensagem de Precos
- "Preco transparente que escala"
- "Pague apenas pelo valor que recebe"
- "Sem taxas ocultas, sem cobranca por assento"
- "Sem cartao de credito. Cancele quando quiser."

---

## 10. ELEMENTOS DISTINTIVOS

### 10.1 Background Pattern
Dot pattern sutil em todo o site:
```css
background-image: radial-gradient(#e7e5e4 1px, transparent 1px);
background-size: 24px 24px;
```

### 10.2 Glow Effects
Cards importantes possuem efeito de glow interativo que segue o cursor.

### 10.3 Gradientes Caracteristicos
- **Hero glow:** Orange com blur extenso
- **Cards destacados:** Gradiente sutil white -> stone-50
- **Logo:** Gradiente diagonal orange-400 -> orange-600

### 10.4 Dashboard Mockup
O hero apresenta um mockup completo de dashboard com:
- Metricas consolidadas
- Insights de AI
- Graficos de atividade
- Lista de grupos monitorados

---

## 11. IDIOMAS

### 11.1 Suporte Bilingue
A plataforma suporta ingles (EN) e portugues (PT) com toggle no header.

### 11.2 Padrao de Localizacao
Todos os textos sao armazenados em objetos de traducao (`t = { en: {...}, pt: {...} }`).

---

## 12. CHECKLIST DE CONSISTENCIA

### Ao criar novos materiais, verificar:
- [ ] Cores dentro da paleta definida
- [ ] Tipografia Inter com pesos corretos
- [ ] Border radius consistentes
- [ ] Animacoes com spring configs padrao
- [ ] Icones do Lucide React
- [ ] Tom de voz confiante e acolhedor
- [ ] CTAs com verbos de acao claros
- [ ] Headlines com palavra destacada em cor
- [ ] Shadows do sistema definido
- [ ] Background com pattern sutil quando aplicavel

---

**Documento criado em:** Dezembro 2024
**Versao:** 1.0
**Marca:** MGM (MyGroupMetrics Inc.)
