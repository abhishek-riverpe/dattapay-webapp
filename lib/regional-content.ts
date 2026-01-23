// Regional Content Data Store
// Centralized configuration for all region-specific content

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  badge: string;
  stats: { value: string; label: string }[];
}

export interface KeepMoreContent {
  title: string;
  subtitle: string;
  comparisonTitle: string;
  featuresTitle: string;
  featuresSubtitle: string;
}

export interface CTAContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  note: string;
}

export interface RegionalContentData {
  code: string;
  country: string;
  countryAdjective: string;
  flag: string;
  locale: string;
  language: string;
  path: string;
  currency: {
    code: string;
    symbol: string;
  };
  hero: HeroContent;
  keepMore: KeepMoreContent;
  faqs: FAQItem[];
  cta: CTAContent;
  platforms: string[];
}

export const SUPPORTED_REGIONS = ["NG", "BR", "AR"] as const;
export type SupportedRegion = (typeof SUPPORTED_REGIONS)[number];

// Default English content (used for main landing page and unsupported regions)
export const DEFAULT_CONTENT: Omit<RegionalContentData, "code" | "country" | "countryAdjective" | "flag" | "locale" | "path" | "currency"> = {
  language: "en",
  hero: {
    headline: "Empowering freelancers & creators.",
    subheadline: "Get paid in USD/EUR with instant settlement. Save up to $847/year in fees and earn 4.2% APY on idle funds.",
    ctaText: "Get Started Free",
    badge: "Founded by former Visa employees",
    stats: [
      { value: "0.5%", label: "Flat Fee" },
      { value: "4.2%", label: "APY Yield" },
      { value: "$847", label: "Annual Savings" },
      { value: "5 min", label: "Setup Time" },
    ],
  },
  keepMore: {
    title: "Keep more of what you earn",
    subtitle: "Traditional payment processors take up to 5% of your hard-earned money. DattaPay charges a flat 0.5% — saving you thousands every year.",
    comparisonTitle: "Fee Comparison",
    featuresTitle: "Built for the modern freelancer",
    featuresSubtitle: "Everything you need to get paid globally and grow your wealth",
  },
  faqs: [
    {
      question: "How do I receive USD payments as a freelancer in Africa?",
      answer: "Sign up for DattaPay to get a US bank account with routing and account numbers. Share your account details with clients on Upwork, Fiverr, or any platform. Receive payments in USD with only 0.5% fees. Your funds automatically earn 4.2% APY while idle.",
    },
    {
      question: "How does DattaPay protect my earnings from inflation?",
      answer: "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to US dollars regardless of local currency fluctuations. You also earn 4.2% APY on idle funds, helping you outpace inflation in countries like Nigeria, Argentina, and Brazil.",
    },
    {
      question: "What are DattaPay's fees compared to Payoneer?",
      answer: "DattaPay charges a flat 0.5% fee with no hidden costs. Payoneer charges 2-3% receiving fee plus 2-4% currency conversion, plus a $29.95 annual fee. On average, freelancers save $847/year by switching to DattaPay.",
    },
    {
      question: "Is DattaPay available in Nigeria?",
      answer: "Yes, DattaPay is fully available in Nigeria. Unlike PayPal (send-only until 2026) and Wise (USD suspended since November 2022), DattaPay fully supports Nigerian freelancers with USD accounts and local withdrawals.",
    },
    {
      question: "How is DattaPay different from Grey or Raenest?",
      answer: "DattaPay offers the lowest fees at 0.5% flat, compared to Grey and Raenest's higher rates. Plus, DattaPay pays 4.2% APY yield on idle funds and uses USDC stablecoin backing for inflation protection - features not offered by competitors.",
    },
    {
      question: "Can I receive payments from Upwork, Fiverr, and Deel?",
      answer: "Yes, DattaPay works with all major freelance platforms including Upwork, Fiverr, Deel, Toptal, and Freelancer.com. Simply add your DattaPay US bank details as a payment method on any platform.",
    },
    {
      question: "What is the 4.2% APY yield and how does it work?",
      answer: "Your idle funds in DattaPay automatically earn 4.2% Annual Percentage Yield. This means if you keep $10,000 in your account for a year, you'd earn approximately $420 in passive income. Interest accrues daily and compounds automatically.",
    },
    {
      question: "How long do withdrawals take?",
      answer: "Withdrawals to local bank accounts typically complete within 1-2 business days. Crypto withdrawals (USDC) are instant. There are no withdrawal fees - you only pay the 0.5% flat fee when receiving funds.",
    },
  ],
  cta: {
    headline: "Ready to get paid like a local?",
    subheadline: "Join 5,000+ freelancers saving on fees and earning yield on their hard-earned money.",
    ctaText: "Request Early Access",
    note: "No credit card required. Tailored for non-US residents.",
  },
  platforms: ["Upwork", "Fiverr", "Toptal", "Deel", "Freelancer.com", "Remote.com"],
};

export const REGIONAL_CONTENT: Record<SupportedRegion, RegionalContentData> = {
  NG: {
    code: "NG",
    country: "Nigeria",
    countryAdjective: "Nigerian",
    flag: "\u{1F1F3}\u{1F1EC}",
    locale: "en-NG",
    language: "en",
    path: "/ng",
    currency: {
      code: "NGN",
      symbol: "\u20A6",
    },
    hero: {
      headline: "Receive USD Payments in Nigeria with 0.5% Fees",
      subheadline: "Join thousands of Nigerian freelancers using DattaPay. Get a US dollar account, earn 4.2% APY, and protect your earnings from Naira devaluation.",
      ctaText: "Get Your USD Account",
      badge: "Built for Nigerian Freelancers",
      stats: [
        { value: "0.5%", label: "Flat Fee" },
        { value: "4.2%", label: "APY Yield" },
        { value: "$22B", label: "NG Stablecoin Market" },
        { value: "5 min", label: "Setup Time" },
      ],
    },
    keepMore: {
      title: "Keep more of what you earn",
      subtitle: "Nigerian freelancers lose up to 8.5% on Payoneer and face Naira devaluation. DattaPay charges 0.5% flat and protects your earnings with USDC.",
      comparisonTitle: "Fee Comparison",
      featuresTitle: "Built for Nigerian freelancers",
      featuresSubtitle: "Everything you need to get paid in USD and protect your earnings",
    },
    faqs: [
      {
        question: "How do I receive USD payments in Nigeria with DattaPay?",
        answer: "Sign up for DattaPay to get a US bank account with routing and account numbers. Share these details with your clients on Upwork, Fiverr, or any platform. When they pay, the funds arrive in your DattaPay account in USD.",
      },
      {
        question: "Is DattaPay legal in Nigeria?",
        answer: "Yes, DattaPay operates legally and is compliant with international financial regulations. We provide legitimate USD account services for freelancers receiving international payments.",
      },
      {
        question: "How does DattaPay compare to a domiciliary account?",
        answer: "DattaPay is faster to set up (5 minutes vs weeks), has lower fees (0.5% vs 2-5%), and pays 4.2% APY on your balance. Unlike dom accounts, you also get USDC stablecoin backing for inflation protection.",
      },
      {
        question: "Why is DattaPay better than Payoneer for Nigeria?",
        answer: "DattaPay charges 0.5% flat fee vs Payoneer's 8.5% total fees (receiving + currency conversion + annual fee). Plus, DattaPay pays 4.2% APY on your balance - Payoneer pays 0%.",
      },
      {
        question: "Can I receive Upwork payments with DattaPay in Nigeria?",
        answer: "Yes! Simply add your DattaPay US bank account details (routing and account number) as a payment method on Upwork. Your earnings will be deposited directly to your DattaPay account with only 0.5% fees.",
      },
      {
        question: "How does DattaPay protect against Naira devaluation?",
        answer: "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to the US dollar. When the Naira drops, your USD-denominated funds maintain their value. You can convert to Naira only when you need to spend.",
      },
      {
        question: "What happened to Wise USD in Nigeria?",
        answer: "Wise suspended USD transfers to Nigeria in November 2022 and hasn't restored the service. DattaPay offers full USD support for Nigerian freelancers with no restrictions.",
      },
      {
        question: "How long do withdrawals to Nigerian banks take?",
        answer: "Withdrawals to Nigerian bank accounts typically complete within 1-2 business days. We support all major Nigerian banks including GTBank, Access Bank, First Bank, UBA, and others.",
      },
    ],
    cta: {
      headline: "Start Receiving USD in Nigeria Today",
      subheadline: "Set up your DattaPay account in 5 minutes. No paperwork, no waiting. Just a US bank account ready to receive payments.",
      ctaText: "Get Your USD Account",
      note: "No credit card required. Tailored for Nigerian freelancers.",
    },
    platforms: ["Upwork", "Fiverr", "Toptal", "Deel", "Freelancer.com", "Remote.com", "Turing", "Andela"],
  },
  BR: {
    code: "BR",
    country: "Brasil",
    countryAdjective: "Brazilian",
    flag: "\u{1F1E7}\u{1F1F7}",
    locale: "pt-BR",
    language: "pt",
    path: "/br",
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    hero: {
      headline: "Receba em Dólar como Freelancer no Brasil",
      subheadline: "Conta americana com taxa de apenas 0.5%. Ganhe 4.2% APY no seu saldo. Proteja seus ganhos da desvalorização do real.",
      ctaText: "Criar Conta Grátis",
      badge: "Feito para Freelancers Brasileiros",
      stats: [
        { value: "0.5%", label: "Taxa Fixa" },
        { value: "4.2%", label: "APY Rendimento" },
        { value: "$0", label: "Taxa Mensal" },
        { value: "5 min", label: "Para Começar" },
      ],
    },
    keepMore: {
      title: "Mantenha mais do que você ganha",
      subtitle: "Bancos brasileiros cobram até 8% em taxas de câmbio. O DattaPay cobra apenas 0.5% — economizando milhares por ano.",
      comparisonTitle: "Comparação de Taxas",
      featuresTitle: "Feito para o freelancer moderno",
      featuresSubtitle: "Tudo o que você precisa para receber pagamentos globais e aumentar sua riqueza",
    },
    faqs: [
      {
        question: "Como receber em dólar sendo freelancer no Brasil?",
        answer: "Cadastre-se no DattaPay para receber uma conta americana com routing e account number. Adicione esses dados como método de pagamento no Upwork, Fiverr ou qualquer plataforma. Seus clientes pagam em dólar e você recebe com apenas 0.5% de taxa.",
      },
      {
        question: "O DattaPay é legal para brasileiros?",
        answer: "Sim, o DattaPay opera legalmente e está em conformidade com regulamentações financeiras internacionais. Brasileiros podem ter contas em dólar no exterior para receber pagamentos de trabalho remoto.",
      },
      {
        question: "Como funciona o rendimento de 4.2% APY?",
        answer: "Seu saldo em dólar no DattaPay rende 4.2% ao ano automaticamente. Se você mantiver $10,000 na conta, ganhará aproximadamente $420/ano em renda passiva. Os juros são calculados diariamente e compostos automaticamente.",
      },
      {
        question: "Posso receber pagamentos do Upwork com DattaPay?",
        answer: "Sim! Adicione sua conta DattaPay americana (routing e account number) como método de pagamento no Upwork. Seus ganhos serão depositados diretamente com apenas 0.5% de taxa - muito menos que os 3-5% de outras opções.",
      },
      {
        question: "Como o DattaPay protege contra a desvalorização do real?",
        answer: "O DattaPay mantém seus fundos em USDC stablecoin, lastreado 1:1 em dólar americano. Quando o real desvaloriza, seus dólares mantêm o valor. Você só converte para reais quando precisar gastar.",
      },
      {
        question: "Quanto tempo demora o saque para conta brasileira?",
        answer: "Saques para contas brasileiras são processados em 1-2 dias úteis. Aceitamos PIX e transferência bancária para todos os principais bancos brasileiros.",
      },
      {
        question: "Qual a diferença entre DattaPay e Payoneer para brasileiros?",
        answer: "DattaPay cobra 0.5% de taxa fixa vs 3-5% do Payoneer (taxa de recebimento + conversão). Além disso, DattaPay paga 4.2% APY no seu saldo - Payoneer paga 0%.",
      },
      {
        question: "Preciso declarar minha conta DattaPay no imposto de renda?",
        answer: "Como qualquer conta no exterior, você deve declarar sua conta DattaPay na declaração de imposto de renda anual se o saldo ultrapassar US$100. Consulte um contador para orientação específica sobre sua situação.",
      },
    ],
    cta: {
      headline: "Comece a Receber em Dólar Hoje",
      subheadline: "Crie sua conta DattaPay em 5 minutos. Sem burocracia, sem espera. Sua conta americana pronta para receber pagamentos.",
      ctaText: "Criar Conta Grátis",
      note: "Sem cartão de crédito necessário. Feito para freelancers brasileiros.",
    },
    platforms: ["Upwork", "Fiverr", "Toptal", "Workana", "99designs", "Freelancer.com", "Deel", "Remote.com"],
  },
  AR: {
    code: "AR",
    country: "Argentina",
    countryAdjective: "Argentinian",
    flag: "\u{1F1E6}\u{1F1F7}",
    locale: "es-AR",
    language: "es",
    path: "/ar",
    currency: {
      code: "ARS",
      symbol: "$",
    },
    hero: {
      headline: "Cobra en Dólares sin Cepo en Argentina",
      subheadline: "Cuenta americana con 0.5% de comisión. Gana 4.2% APY. Protege tus ingresos de la inflación del 100%+ con USDC stablecoin.",
      ctaText: "Crear Cuenta Gratis",
      badge: "Hecho para Freelancers Argentinos",
      stats: [
        { value: "0.5%", label: "Comisión Fija" },
        { value: "4.2%", label: "APY Rendimiento" },
        { value: "100%", label: "USD Respaldado" },
        { value: "5 min", label: "Para Empezar" },
      ],
    },
    keepMore: {
      title: "Mantené más de lo que ganás",
      subtitle: "Con inflación del 100%+, mantener pesos significa perder valor. DattaPay cobra 0.5% fijo y protege tus ingresos con USDC.",
      comparisonTitle: "Comparación de Comisiones",
      featuresTitle: "Hecho para el freelancer moderno",
      featuresSubtitle: "Todo lo que necesitás para recibir pagos globales y hacer crecer tu patrimonio",
    },
    faqs: [
      {
        question: "¿Cómo puedo cobrar en dólares siendo freelancer en Argentina?",
        answer: "Registrate en DattaPay para obtener una cuenta americana con routing y account number. Agregá estos datos como método de pago en Upwork, Fiverr o cualquier plataforma. Tus clientes pagan en dólares y vos recibís con solo 0.5% de comisión.",
      },
      {
        question: "¿Es legal tener una cuenta DattaPay en Argentina?",
        answer: "Sí, es completamente legal tener cuentas en el exterior para recibir pagos por trabajo remoto. DattaPay opera en cumplimiento con regulaciones financieras internacionales.",
      },
      {
        question: "¿Cómo me protege DattaPay de la inflación argentina?",
        answer: "DattaPay mantiene tus fondos en USDC stablecoin, respaldado 1:1 por dólares americanos. A diferencia de los pesos que pierden valor con la inflación del 100%+, tus dólares mantienen su poder de compra. Además, ganás 4.2% APY de rendimiento.",
      },
      {
        question: "¿DattaPay es mejor que el dólar blue?",
        answer: "Sí, por varias razones: 1) DattaPay usa USDC respaldado 1:1 en dólares reales - transparente y auditable. 2) Ganás 4.2% APY de rendimiento. 3) No hay riesgos de billetes falsos. 4) Tus fondos están asegurados digitalmente.",
      },
      {
        question: "¿Puedo recibir pagos de Upwork con DattaPay en Argentina?",
        answer: "¡Sí! Agregá tu cuenta americana DattaPay (routing y account number) como método de pago en Upwork. Tus ganancias se depositan directamente con solo 0.5% de comisión - mucho menos que el 3-5% de otras opciones.",
      },
      {
        question: "¿Cómo funciona el rendimiento de 4.2% APY?",
        answer: "Tu saldo en DattaPay rinde 4.2% anual automáticamente. Si mantenés $10,000 en la cuenta, ganarías aproximadamente $420/año en ingresos pasivos. Los intereses se calculan diariamente y se componen automáticamente.",
      },
      {
        question: "¿Qué ventaja tiene DattaPay sobre Payoneer para argentinos?",
        answer: "DattaPay cobra 0.5% fijo vs el 8% total de Payoneer (comisión de recepción + conversión + cuota anual). Además, DattaPay paga 4.2% APY en tu saldo - Payoneer paga 0%.",
      },
      {
        question: "¿Cómo retiro mis fondos a Argentina?",
        answer: "Podés retirar a tu cuenta bancaria argentina, mantener tus fondos en USDC para protección contra inflación, o hacer retiros en crypto. Los retiros a bancos argentinos se procesan en 1-3 días hábiles.",
      },
    ],
    cta: {
      headline: "Empezá a Cobrar en Dólares Hoy",
      subheadline: "Creá tu cuenta DattaPay en 5 minutos. Sin burocracia, sin espera. Tu cuenta americana lista para recibir pagos.",
      ctaText: "Crear Cuenta Gratis",
      note: "Sin tarjeta de crédito requerida. Hecho para freelancers argentinos.",
    },
    platforms: ["Upwork", "Fiverr", "Toptal", "Freelancer.com", "Workana", "Deel", "Remote.com", "Turing"],
  },
};

/**
 * Get regional content for a given country code
 * Returns null if region is not supported
 */
export function getRegionalContent(code: string | null): RegionalContentData | null {
  if (!code || !isSupportedRegion(code)) {
    return null;
  }
  return REGIONAL_CONTENT[code];
}

/**
 * Check if a country code is a supported region
 */
export function isSupportedRegion(code: string | null): code is SupportedRegion {
  return code !== null && SUPPORTED_REGIONS.includes(code as SupportedRegion);
}

/**
 * Get the default content for unsupported regions
 */
export function getDefaultContent() {
  return DEFAULT_CONTENT;
}
