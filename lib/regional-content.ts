// Regional Content Data Store
// Centralized configuration for all region-specific content

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQTranslations {
  title: string;
  subtitle: string;
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
  features: {
    globalAccounts: { title: string; description: string };
    instantSettlement: { title: string; description: string };
    automatedYield: { title: string; description: string };
  };
  comparison: {
    recommended: string;
    othersTitle: string;
    othersSubtitle: string;
    dattapaySubtitle: string;
    labels: {
      receiveInternational: string;
      currencyConversion: string;
      monthlyFee: string;
      withdrawalFee: string;
      annualSavings: string;
    };
    free: string;
  };
}

export interface CTAContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  note: string;
}

export interface HowItWorksTranslations {
  title: string;
  subtitle: string;
  steps: {
    step1: { title: string; description: string };
    step2: { title: string; description: string };
    step3: { title: string; description: string };
  };
}

export interface PlatformLogosTranslations {
  trustedBy: string;
}

export interface BlogsSectionTranslations {
  title: string;
  subtitle: string;
  readMore: string;
  viewAll: string;
  articles: string;
}

export interface NavTranslations {
  features: string;
  howItWorks: string;
  pricing: string;
  blogs: string;
  getStarted: string;
}

export interface FooterTranslations {
  privacy: string;
  contactUs: string;
  rights: string;
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
  faqTranslations: FAQTranslations;
  howItWorks: HowItWorksTranslations;
  platformLogos: PlatformLogosTranslations;
  blogsSection: BlogsSectionTranslations;
  cta: CTAContent;
  platforms: string[];
  nav: NavTranslations;
  footer: FooterTranslations;
}

export const SUPPORTED_REGIONS = ["NG", "BR", "AR", "BD"] as const;
export type SupportedRegion = (typeof SUPPORTED_REGIONS)[number];

// Default English content (used for main landing page and unsupported regions)
export const DEFAULT_CONTENT: Omit<RegionalContentData, "code" | "country" | "countryAdjective" | "flag" | "locale" | "path" | "currency"> = {
  language: "en",
  nav: {
    features: "Features",
    howItWorks: "How it Works",
    pricing: "Pricing",
    blogs: "Blogs",
    getStarted: "Get Started Free",
  },
  footer: {
    privacy: "Privacy",
    contactUs: "Contact Us",
    rights: "All rights reserved.",
  },
  hero: {
    headline: "Keep more. Earn more. Stress less.",
    subheadline: "US bank account in 2 minutes. Receive from Upwork, Fiverr & more with just 0.5% fees. Earn 3-4% APY on idle funds. Zero annual fees.",
    ctaText: "Get My Free US Bank Account",
    badge: "Trusted by 10,000+ Freelancers Worldwide",
    stats: [
      { value: "$0", label: "Annual Fee" },
      { value: "0.5%", label: "Per Transaction" },
      { value: "3-4%", label: "APY on Idle Funds" },
      { value: "2 min", label: "Account Setup" },
    ],
  },
  keepMore: {
    title: "Payoneer Takes $35/Year + $3 Per Transaction. We Don't.",
    subtitle: "While Payoneer charges $35 annual fee plus $3 for every single withdrawal, DattaPay charges only a tiny fee per transaction. No annual fees. No hidden costs. No surprises.",
    comparisonTitle: "See How Much You're Losing",
    featuresTitle: "Everything You Need, Nothing You Don't",
    featuresSubtitle: "US bank account + USDC wallet + automatic yield. Simple, fast, affordable.",
    features: {
      globalAccounts: {
        title: "Your US Bank Account",
        description: "Get real US bank details in 2 minutes. Add to Upwork, Fiverr, Deel, or share directly with clients. Pay just 0.5% — not the 3-5% that PayPal and Payoneer charge.",
      },
      instantSettlement: {
        title: "Earn While You Hold",
        description: "Park your USDC on DattaPay and earn 3-4% APY automatically. We invest in US Treasury Bills (the safest asset in the world) and pass the yield to you. No staking. No lockup. Just passive income.",
      },
      automatedYield: {
        title: "Auto-Convert to Stablecoins",
        description: "Payments instantly convert to USDC — digital dollars pegged 1:1 to USD. Your money holds its value while your local currency doesn't.",
      },
    },
    comparison: {
      recommended: "Smart Choice",
      othersTitle: "Payoneer & Traditional Banks",
      othersSubtitle: "$35/year + $3 per withdrawal + hidden fees",
      dattapaySubtitle: "Zero annual fee, lowest transaction cost",
      labels: {
        receiveInternational: "Receive International",
        currencyConversion: "Currency Conversion",
        monthlyFee: "Annual Fee",
        withdrawalFee: "Per Transaction",
        annualSavings: "Your Savings",
      },
      free: "Free",
    },
  },
  faqs: [
    {
      question: "How is this different from just using PayPal or Payoneer?",
      answer: "PayPal and Payoneer charge 3-5% on every transaction plus annual fees. DattaPay charges just 0.5% flat — no annual fees, no hidden charges. Plus, your earnings are stored as USDC (digital dollars) that earn 3-4% APY while they sit. In many countries you get better exchange rates when you withdraw, which more than covers our small fee.",
    },
    {
      question: "Do I need to know anything about crypto?",
      answer: "No. DattaPay handles everything automatically. Your payments come in as dollars and you can withdraw to your local bank account — no crypto knowledge required. We use stablecoins (digital dollars) behind the scenes to get you better rates and earn yield, but you never have to touch them directly.",
    },
    {
      question: "Is this legal? Is it safe?",
      answer: "DattaPay is a registered Money Service Business (MSB) with FinCEN, the US financial regulator. We use bank-grade security and your funds are stored in regulated, audited stablecoins backed 1:1 by real US dollars. Thousands of freelancers from 50+ countries trust us with their payments.",
    },
    {
      question: "How do I add DattaPay to my Fiverr/Upwork account?",
      answer: "Sign up and get real US bank details (routing number + account number) instantly. Copy-paste them into your Upwork or Fiverr payment settings as a withdrawal method. Your next withdrawal goes directly to your DattaPay account. Takes 2 minutes.",
    },
    {
      question: "How do I earn yield on my USDC?",
      answer: "You don't have to do anything. If you hold USDC on DattaPay, you automatically earn 3-4% APY. We invest pooled funds in US Treasury Bills and pass the yield to you daily. There's no lockup — withdraw anytime with no penalty.",
    },
    {
      question: "What are US Treasury Bills?",
      answer: "Treasury Bills (T-Bills) are short-term debt issued by the US government. They're considered the safest investment in the world. We invest in T-Bills and share the yield with you — that's how you earn 3-4% APY on your USDC.",
    },
    {
      question: "How do I withdraw my earnings?",
      answer: "Transfer your USDC to your personal wallet or sell on your preferred exchange. In some emerging markets like Nigeria, Bangladesh, and Argentina, freelancers who sell USDC on P2P exchanges can sometimes get rates above the mid-market rate. Or simply hold and earn 3-4% APY.",
    },
    {
      question: "Which freelance platforms are supported?",
      answer: "All major platforms: Fiverr, Upwork, Freelancer.com, PeoplePerHour, Toptal, Deel, Remote.com, 99designs, Workana, and more. If it supports US bank withdrawals, it works with DattaPay.",
    },
    {
      question: "Is there really no annual fee?",
      answer: "Correct. Zero annual fees. Unlike Payoneer's $35/year or banks' maintenance fees, DattaPay only charges 0.5% when you actually receive money. If you don't use it, you don't pay. Free forever.",
    },
    {
      question: "Can I also send remittances to my family?",
      answer: "Yes! The same low-fee structure applies to remittances. Send money home without the outrageous fees banks charge. Your family receives funds faster and you keep more of your hard-earned money.",
    },
  ],
  faqTranslations: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about getting paid smarter with DattaPay.",
  },
  howItWorks: {
    title: "3 Steps to Keep More of What You Earn",
    subtitle: "No complex setup. No waiting. Start receiving payments today.",
    steps: {
      step1: {
        title: "Get Your US Bank Account",
        description: "Sign up and receive US bank details instantly — routing number and account number. Add to Upwork, Fiverr, or any platform that supports US bank withdrawals.",
      },
      step2: {
        title: "Receive Payments as USDC",
        description: "Clients pay to your funding account. Money auto-converts to USDC stablecoins (digital dollars pegged 1:1 to USD). You pay just 0.5% — not Payoneer's 3-5%.",
      },
      step3: {
        title: "Earn or Withdraw — Your Choice",
        description: "Hold and earn 3-4% APY backed by US Treasury Bills. Or withdraw anytime — transfer to your personal wallet or sell on your preferred exchange.",
      },
    },
  },
  platformLogos: {
    trustedBy: "Works seamlessly with",
  },
  blogsSection: {
    title: "Resources & Guides",
    subtitle: "Learn how to maximize your freelance earnings",
    readMore: "Read more",
    viewAll: "View All Resources",
    articles: "articles",
  },
  cta: {
    headline: "Every Day You Wait, Payoneer Takes More",
    subheadline: "Join 10,000+ freelancers who switched to DattaPay. Get your free US bank account now — no crypto knowledge needed.",
    ctaText: "Start Saving on Fees Now",
    note: "Free forever. No credit card. No annual fees. Setup in 2 minutes.",
  },
  platforms: ["Fiverr", "Upwork", "Freelancer.com", "PeoplePerHour", "Toptal", "Deel", "Remote.com", "99designs"],
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
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      pricing: "Pricing",
      blogs: "Blogs",
      getStarted: "Get Started Free",
    },
    footer: {
      privacy: "Privacy",
      contactUs: "Contact Us",
      rights: "All rights reserved.",
    },
    hero: {
      headline: "Nigerian Freelancers: Stop Paying Payoneer's ₦50,000+ Annual Fees",
      subheadline: "Get your funding account & crypto wallet in 2 minutes. Receive from Fiverr, Upwork, Freelancer — instant USDT/USDC conversion. Sell on Binance at premium rates. No annual fees. No ₦4,500 per withdrawal.",
      ctaText: "Get Your Free Account Now",
      badge: "Trusted by 5,000+ Nigerian Freelancers",
      stats: [
        { value: "₦0", label: "Annual Fee" },
        { value: "0.5%", label: "Per Transaction" },
        { value: "Instant", label: "USDT Conversion" },
        { value: "2 min", label: "Setup Time" },
      ],
    },
    keepMore: {
      title: "Payoneer Charges $35/Year + $3 Per Withdrawal. Why Are You Still Paying?",
      subtitle: "That's over ₦50,000/year in fees alone. Plus Naira keeps crashing. DattaPay gives you instant stablecoin conversion — sell your USDT on Binance at rates 3-5% higher than parallel market.",
      comparisonTitle: "Calculate Your Losses with Payoneer",
      featuresTitle: "What Nigerian Freelancers Actually Need",
      featuresSubtitle: "Instant funding account. Instant crypto wallet. Instant freedom from ridiculous fees.",
      features: {
        globalAccounts: {
          title: "Instant Funding Account",
          description: "Get US bank details in 2 minutes. Add to Fiverr, Upwork, Freelancer, PeoplePerHour. No BVN issues, no documentation headache.",
        },
        instantSettlement: {
          title: "Instant USDT/USDC Conversion",
          description: "Payment hits your account → automatically converts to stablecoin. No manual steps. No waiting for Naira that keeps devaluing.",
        },
        automatedYield: {
          title: "Sell at Binance P2P Rates",
          description: "Cash out USDT/USDC on Binance, Bybit, or local P2P at premium rates. Often ₦50-100 higher per dollar than bank rates.",
        },
      },
      comparison: {
        recommended: "Smart Nigerians Choose This",
        othersTitle: "Payoneer & Dom Accounts",
        othersSubtitle: "$35/year + $3/withdrawal + terrible rates",
        dattapaySubtitle: "Zero annual fee, best conversion rates",
        labels: {
          receiveInternational: "Receive International",
          currencyConversion: "Currency Conversion",
          monthlyFee: "Annual Fee",
          withdrawalFee: "Per Withdrawal",
          annualSavings: "Your Savings",
        },
        free: "Free",
      },
    },
    faqs: [
      {
        question: "How is DattaPay better than Payoneer for Nigerian freelancers?",
        answer: "Payoneer charges $35/year (₦50,000+) annual fee plus $3 (₦4,500+) for every single withdrawal. DattaPay has ZERO annual fees. Your payments auto-convert to USDT/USDC, which you sell on Binance P2P at rates often ₦50-100 higher per dollar than what Payoneer or banks offer.",
      },
      {
        question: "How do I add DattaPay to my Upwork/Fiverr account?",
        answer: "Sign up (takes 2 minutes), get your US funding account details instantly. Go to Upwork/Fiverr payment settings → Add withdrawal method → Enter your DattaPay routing and account number. Your next payment goes straight to your DattaPay account.",
      },
      {
        question: "What happens when I receive payment from a client?",
        answer: "Money from the freelance platform hits your DattaPay funding account → instantly converts to USDT or USDC → deposited to your crypto wallet. No waiting days. No manual conversion. No Naira devaluation risk.",
      },
      {
        question: "How do I cash out to Naira?",
        answer: "Transfer your USDT/USDC to Binance, Bybit, or any exchange. Sell via P2P at current market rates (often ₦1,550-1,600 per dollar when banks offer ₦1,500). You control when to convert, protecting you from Naira crashes.",
      },
      {
        question: "Is this better than a domiciliary account?",
        answer: "Much better. Dom accounts take weeks to open, have hidden fees, and still convert at poor bank rates. DattaPay setup takes 2 minutes, has no annual fees, and you sell USDT at premium P2P rates instead of accepting whatever the bank offers.",
      },
      {
        question: "Wise suspended USD to Nigeria. Does DattaPay work?",
        answer: "DattaPay works perfectly for Nigerian freelancers. Unlike Wise (suspended since 2022) or PayPal (send-only), we provide full receiving support. Get your funding account, receive payments, convert to stablecoin, cash out on your terms.",
      },
      {
        question: "Which platforms can I receive payments from?",
        answer: "All major platforms: Fiverr, Upwork, Freelancer.com, PeoplePerHour, Toptal, Deel, Remote.com, Turing, Andela — any platform that supports US bank withdrawals works with DattaPay.",
      },
      {
        question: "Can I send money to family in Nigeria too?",
        answer: "Yes! Use DattaPay for remittances too. Same low fees, same premium rates. Your family gets more Naira for every dollar you send compared to Western Union or bank transfers.",
      },
    ],
    faqTranslations: {
      title: "Questions Nigerian Freelancers Ask",
      subtitle: "Everything you need to know about escaping Payoneer's fees and Naira devaluation.",
    },
    howItWorks: {
      title: "3 Steps to Stop Losing Money",
      subtitle: "Setup takes 2 minutes. Start receiving payments today.",
      steps: {
        step1: {
          title: "Get Your Accounts",
          description: "Sign up → Get funding account + crypto wallet instantly. Add to Fiverr, Upwork, any platform.",
        },
        step2: {
          title: "Receive & Convert",
          description: "Client pays → Money hits your account → Auto-converts to USDT/USDC. No Naira, no devaluation risk.",
        },
        step3: {
          title: "Cash Out at Premium",
          description: "Sell USDT on Binance P2P at ₦1,550-1,600/$ rates. Keep more of what you earned.",
        },
      },
    },
    platformLogos: {
      trustedBy: "Works with all your favorite platforms",
    },
    blogsSection: {
      title: "Guides for Nigerian Freelancers",
      subtitle: "Learn how to maximize your earnings and beat Naira devaluation",
      readMore: "Read more",
      viewAll: "View All Guides",
      articles: "articles",
    },
    cta: {
      headline: "Every Month You Wait, Payoneer Takes ₦4,500+ Per Withdrawal",
      subheadline: "5,000+ Nigerian freelancers already switched. Get your free funding account and crypto wallet now. 2 minutes setup.",
      ctaText: "Get Your Free Account Now",
      note: "No annual fees. No credit card required. Works with all freelance platforms.",
    },
    platforms: ["Fiverr", "Upwork", "Freelancer.com", "PeoplePerHour", "Toptal", "Deel", "Turing", "Andela"],
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
    nav: {
      features: "Recursos",
      howItWorks: "Como Funciona",
      pricing: "Preços",
      blogs: "Blogs",
      getStarted: "Criar Conta Grátis",
    },
    footer: {
      privacy: "Privacidade",
      contactUs: "Contate-nos",
      rights: "Todos os direitos reservados.",
    },
    hero: {
      headline: "Freelancer Brasileiro: Pare de Perder R$200+ Por Ano com Payoneer",
      subheadline: "Conta de recebimento + carteira crypto em 2 minutos. Receba do Fiverr, Upwork, Workana — conversão instantânea para USDT/USDC. Venda na Binance com cotação premium. Zero taxa anual.",
      ctaText: "Criar Minha Conta Grátis",
      badge: "Usado por 3.000+ Freelancers Brasileiros",
      stats: [
        { value: "R$0", label: "Taxa Anual" },
        { value: "0.5%", label: "Por Transação" },
        { value: "Instant", label: "Conversão USDT" },
        { value: "2 min", label: "Para Começar" },
      ],
    },
    keepMore: {
      title: "Payoneer Cobra $35/Ano + $3 Por Saque. Por Que Você Ainda Paga Isso?",
      subtitle: "São mais de R$200/ano só em taxas. E o real continua desvalorizando. Com DattaPay, seus pagamentos viram USDT instantaneamente — venda na Binance P2P com cotação 3-5% melhor que o câmbio comercial.",
      comparisonTitle: "Calcule Quanto Você Perde com Payoneer",
      featuresTitle: "O Que Freelancers Brasileiros Realmente Precisam",
      featuresSubtitle: "Conta de recebimento instantânea. Carteira crypto instantânea. Liberdade das taxas absurdas.",
      features: {
        globalAccounts: {
          title: "Conta de Recebimento Instantânea",
          description: "Dados bancários americanos em 2 minutos. Adicione no Fiverr, Upwork, Workana, 99designs. Sem burocracia, sem papelada.",
        },
        instantSettlement: {
          title: "Conversão Instantânea para USDT",
          description: "Pagamento cai na conta → converte automaticamente para stablecoin. Sem espera. Sem ficar refém do real desvalorizando.",
        },
        automatedYield: {
          title: "Venda na Cotação da Binance P2P",
          description: "Saque seu USDT/USDC na Binance, Bybit ou P2P local com cotação premium. Frequentemente R$0,10-0,20 a mais por dólar que bancos.",
        },
      },
      comparison: {
        recommended: "Escolha Inteligente",
        othersTitle: "Payoneer & Bancos Tradicionais",
        othersSubtitle: "$35/ano + $3/saque + cotação ruim",
        dattapaySubtitle: "Zero taxa anual, melhor cotação",
        labels: {
          receiveInternational: "Receber Internacional",
          currencyConversion: "Conversão de Moeda",
          monthlyFee: "Taxa Anual",
          withdrawalFee: "Por Saque",
          annualSavings: "Sua Economia",
        },
        free: "Grátis",
      },
    },
    faqs: [
      {
        question: "Por que DattaPay é melhor que Payoneer para brasileiros?",
        answer: "Payoneer cobra $35/ano (R$200+) de taxa anual mais $3 (R$17+) por cada saque. DattaPay tem ZERO taxa anual. Seus pagamentos convertem automaticamente para USDT/USDC, que você vende na Binance P2P com cotação frequentemente 3-5% melhor que Payoneer ou bancos.",
      },
      {
        question: "Como adicionar DattaPay no Upwork/Fiverr/Workana?",
        answer: "Cadastre-se (leva 2 minutos), receba seus dados bancários americanos instantaneamente. Vá nas configurações de pagamento da plataforma → Adicionar método de saque → Coloque routing number e account number do DattaPay. Pronto.",
      },
      {
        question: "O que acontece quando recebo um pagamento?",
        answer: "Dinheiro da plataforma freelance cai na sua conta DattaPay → converte instantaneamente para USDT ou USDC → deposita na sua carteira crypto. Sem esperar dias. Sem conversão manual. Sem risco de desvalorização do real.",
      },
      {
        question: "Como faço para sacar em reais?",
        answer: "Transfira seu USDT/USDC para Binance, Bybit ou qualquer exchange. Venda via P2P na cotação atual (frequentemente R$6,10-6,20 por dólar quando bancos pagam R$5,90). Você decide quando converter, se protegendo de quedas do real.",
      },
      {
        question: "É melhor que receber via PIX internacional?",
        answer: "Muito melhor. PIX internacional usa cotação comercial dos bancos (sempre pior) e tem taxas escondidas. DattaPay converte para stablecoin e você vende na cotação P2P — geralmente 3-5% a mais por dólar.",
      },
      {
        question: "Quais plataformas posso receber pagamentos?",
        answer: "Todas as principais: Fiverr, Upwork, Workana, 99designs, Freelancer.com, PeoplePerHour, Toptal, Deel, Remote.com — qualquer plataforma que aceite saque para banco americano funciona com DattaPay.",
      },
      {
        question: "Preciso declarar no Imposto de Renda?",
        answer: "Como qualquer conta no exterior, valores acima de US$100 devem ser declarados. Consulte um contador para sua situação específica. DattaPay fornece todos os comprovantes necessários.",
      },
      {
        question: "Posso enviar dinheiro para família no Brasil também?",
        answer: "Sim! Use DattaPay para remessas também. Mesmas taxas baixas, mesma cotação premium. Sua família recebe mais reais por cada dólar que você envia comparado com Western Union ou transferência bancária.",
      },
    ],
    faqTranslations: {
      title: "Perguntas que Freelancers Brasileiros Fazem",
      subtitle: "Tudo sobre escapar das taxas do Payoneer e da desvalorização do real.",
    },
    howItWorks: {
      title: "3 Passos Para Parar de Perder Dinheiro",
      subtitle: "Cadastro em 2 minutos. Comece a receber pagamentos hoje.",
      steps: {
        step1: {
          title: "Crie Sua Conta",
          description: "Cadastre-se → Receba conta de recebimento + carteira crypto instantaneamente. Adicione no Fiverr, Upwork, qualquer plataforma.",
        },
        step2: {
          title: "Receba & Converta",
          description: "Cliente paga → Dinheiro cai na sua conta → Converte automaticamente para USDT/USDC. Sem real, sem risco de desvalorização.",
        },
        step3: {
          title: "Saque com Cotação Premium",
          description: "Venda USDT na Binance P2P com cotação R$6,10-6,20/$. Fique com mais do que você ganhou.",
        },
      },
    },
    platformLogos: {
      trustedBy: "Funciona com todas as plataformas",
    },
    blogsSection: {
      title: "Guias para Freelancers Brasileiros",
      subtitle: "Aprenda a maximizar seus ganhos e vencer a desvalorização do real",
      readMore: "Ler mais",
      viewAll: "Ver Todos os Guias",
      articles: "artigos",
    },
    cta: {
      headline: "Cada Mês que Você Espera, Payoneer Leva R$17+ Por Saque",
      subheadline: "3.000+ freelancers brasileiros já trocaram. Crie sua conta grátis e carteira crypto agora. 2 minutos para começar.",
      ctaText: "Criar Minha Conta Grátis",
      note: "Sem taxa anual. Sem cartão de crédito. Funciona com todas as plataformas.",
    },
    platforms: ["Fiverr", "Upwork", "Workana", "99designs", "Freelancer.com", "PeoplePerHour", "Toptal", "Deel"],
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
    nav: {
      features: "Funciones",
      howItWorks: "Cómo Funciona",
      pricing: "Precios",
      blogs: "Blogs",
      getStarted: "Crear Cuenta Gratis",
    },
    footer: {
      privacy: "Privacidad",
      contactUs: "Contáctenos",
      rights: "Todos los derechos reservados.",
    },
    hero: {
      headline: "Freelancer Argentino: Dejá de Perder con Payoneer y el Cepo",
      subheadline: "Cuenta de cobro + billetera crypto en 2 minutos. Cobrá de Fiverr, Upwork, Workana — conversión instantánea a USDT/USDC. Vendé en Binance a cotización blue. Sin cuota anual. Sin cepo.",
      ctaText: "Crear Mi Cuenta Gratis",
      badge: "Usado por 4.000+ Freelancers Argentinos",
      stats: [
        { value: "$0", label: "Cuota Anual" },
        { value: "0.5%", label: "Por Transacción" },
        { value: "Instant", label: "Conversión USDT" },
        { value: "2 min", label: "Para Empezar" },
      ],
    },
    keepMore: {
      title: "Payoneer Te Cobra $35/Año + $3 Por Retiro. ¿Por Qué Seguís Pagando?",
      subtitle: "Son más de $50.000 pesos/año solo en comisiones. Y el peso pierde 10% por mes. Con DattaPay, tus pagos se convierten instantáneamente a USDT — vendé en Binance P2P a cotización MEP/blue.",
      comparisonTitle: "Calculá Cuánto Perdés con Payoneer",
      featuresTitle: "Lo Que los Freelancers Argentinos Realmente Necesitan",
      featuresSubtitle: "Cuenta de cobro instantánea. Billetera crypto instantánea. Libertad del cepo y las comisiones absurdas.",
      features: {
        globalAccounts: {
          title: "Cuenta de Cobro Instantánea",
          description: "Datos bancarios americanos en 2 minutos. Agregá a Fiverr, Upwork, Workana, Freelancer. Sin AFIP, sin cepo, sin burocracia.",
        },
        instantSettlement: {
          title: "Conversión Instantánea a USDT",
          description: "Pago cae en tu cuenta → se convierte automáticamente a stablecoin. Sin esperar. Sin quedarte con pesos que pierden valor cada día.",
        },
        automatedYield: {
          title: "Vendé a Cotización Blue/MEP",
          description: "Retirá tu USDT/USDC en Binance, Bybit o P2P local a cotización del mercado libre. Hasta 40% más que el dólar oficial.",
        },
      },
      comparison: {
        recommended: "Elección Inteligente",
        othersTitle: "Payoneer & Bancos Tradicionales",
        othersSubtitle: "$35/año + $3/retiro + dólar oficial",
        dattapaySubtitle: "Cero cuota anual, cotización libre",
        labels: {
          receiveInternational: "Recibir Internacional",
          currencyConversion: "Conversión de Moneda",
          monthlyFee: "Cuota Anual",
          withdrawalFee: "Por Retiro",
          annualSavings: "Tu Ahorro",
        },
        free: "Gratis",
      },
    },
    faqs: [
      {
        question: "¿Por qué DattaPay es mejor que Payoneer para argentinos?",
        answer: "Payoneer cobra $35/año de cuota anual más $3 por cada retiro. Y encima te liquida al dólar oficial (40% menos que el blue). DattaPay tiene CERO cuota anual. Tus pagos se convierten automáticamente a USDT/USDC, que vendés en Binance P2P a cotización libre.",
      },
      {
        question: "¿Cómo agrego DattaPay a Upwork/Fiverr/Workana?",
        answer: "Registrate (lleva 2 minutos), recibí tus datos bancarios americanos al instante. Andá a configuración de pagos de la plataforma → Agregar método de retiro → Poné routing number y account number de DattaPay. Listo, tu próximo pago va directo a DattaPay.",
      },
      {
        question: "¿Qué pasa cuando recibo un pago?",
        answer: "Plata de la plataforma freelance cae en tu cuenta DattaPay → se convierte instantáneamente a USDT o USDC → se deposita en tu billetera crypto. Sin esperar días. Sin conversión manual. Sin quedarte con pesos que pierden 10% por mes.",
      },
      {
        question: "¿Cómo paso mis dólares a pesos argentinos?",
        answer: "Transferí tu USDT/USDC a Binance, Bybit o cualquier exchange. Vendé via P2P a cotización libre (hoy cerca de $1.200 por dólar cuando el oficial está en $850). Vos decidís cuándo convertir.",
      },
      {
        question: "¿Es mejor que el dólar blue físico?",
        answer: "Mucho mejor: 1) USDT está respaldado 1:1 en dólares reales y auditables. 2) No hay riesgo de billetes falsos. 3) Cotización similar al blue. 4) Tus fondos están seguros digitalmente. 5) Podés transferir a cualquier parte del mundo.",
      },
      {
        question: "¿Y el cepo? ¿Puedo recibir dólares legalmente?",
        answer: "DattaPay opera internacionalmente. Recibís pagos en una cuenta americana, se convierten a stablecoin. El cepo aplica a operaciones bancarias locales — esto es completamente diferente y legal para freelancers que exportan servicios.",
      },
      {
        question: "¿Desde qué plataformas puedo cobrar?",
        answer: "Todas las principales: Fiverr, Upwork, Workana, Freelancer.com, PeoplePerHour, Toptal, Deel, Remote.com, Turing — cualquier plataforma que acepte retiro a banco americano funciona con DattaPay.",
      },
      {
        question: "¿Puedo enviar plata a mi familia en Argentina también?",
        answer: "¡Sí! Usá DattaPay para remesas también. Mismas comisiones bajas, misma cotización del mercado libre. Tu familia recibe más pesos por cada dólar que mandás comparado con Western Union o transferencia bancaria.",
      },
    ],
    faqTranslations: {
      title: "Preguntas que Hacen los Freelancers Argentinos",
      subtitle: "Todo sobre escapar de las comisiones de Payoneer, el cepo y la inflación.",
    },
    howItWorks: {
      title: "3 Pasos Para Dejar de Perder Plata",
      subtitle: "Registro en 2 minutos. Empezá a cobrar hoy.",
      steps: {
        step1: {
          title: "Creá Tu Cuenta",
          description: "Registrate → Recibí cuenta de cobro + billetera crypto al instante. Agregá a Fiverr, Upwork, cualquier plataforma.",
        },
        step2: {
          title: "Cobrá & Convertí",
          description: "Cliente paga → Plata cae en tu cuenta → Se convierte automáticamente a USDT/USDC. Sin pesos, sin riesgo de devaluación.",
        },
        step3: {
          title: "Retirá a Cotización Libre",
          description: "Vendé USDT en Binance P2P a cotización blue/MEP. Quedá con hasta 40% más que si usaras bancos.",
        },
      },
    },
    platformLogos: {
      trustedBy: "Funciona con todas las plataformas",
    },
    blogsSection: {
      title: "Guías para Freelancers Argentinos",
      subtitle: "Aprendé a maximizar tus ingresos y ganarle a la inflación",
      readMore: "Leer más",
      viewAll: "Ver Todas las Guías",
      articles: "artículos",
    },
    cta: {
      headline: "Cada Mes que Esperás, Payoneer Te Saca $3+ Por Retiro (Y te Paga a Dólar Oficial)",
      subheadline: "4.000+ freelancers argentinos ya cambiaron. Creá tu cuenta gratis y billetera crypto ahora. 2 minutos para empezar.",
      ctaText: "Crear Mi Cuenta Gratis",
      note: "Sin cuota anual. Sin tarjeta de crédito. Funciona con todas las plataformas.",
    },
    platforms: ["Fiverr", "Upwork", "Workana", "Freelancer.com", "PeoplePerHour", "Toptal", "Deel", "Turing"],
  },
  BD: {
    code: "BD",
    country: "Bangladesh",
    countryAdjective: "Bangladeshi",
    flag: "\u{1F1E7}\u{1F1E9}",
    locale: "en-BD",
    language: "en",
    path: "/bn",
    currency: {
      code: "BDT",
      symbol: "৳",
    },
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      pricing: "Pricing",
      blogs: "Blogs",
      getStarted: "Get Started Free",
    },
    footer: {
      privacy: "Privacy",
      contactUs: "Contact Us",
      rights: "All rights reserved.",
    },
    hero: {
      headline: "Bangladeshi Freelancers: Stop Paying Payoneer's ৳4,000+ Annual Fees",
      subheadline: "Get your funding account & crypto wallet in 2 minutes. Receive from Fiverr, Upwork, Freelancer — instant USDT/USDC conversion. Sell on Binance at premium rates. No annual fees. No ৳350 per withdrawal.",
      ctaText: "Get Your Free Account Now",
      badge: "Trusted by 8,000+ Bangladeshi Freelancers",
      stats: [
        { value: "৳0", label: "Annual Fee" },
        { value: "0.5%", label: "Per Transaction" },
        { value: "Instant", label: "USDT Conversion" },
        { value: "2 min", label: "Setup Time" },
      ],
    },
    keepMore: {
      title: "Payoneer Charges $35/Year + $3 Per Withdrawal. Why Are You Still Paying?",
      subtitle: "That's over ৳4,000/year in fees alone. Plus Taka keeps dropping against the dollar. DattaPay gives you instant stablecoin conversion — sell your USDT on Binance at rates 3-5% higher than bank rates.",
      comparisonTitle: "Calculate Your Losses with Payoneer",
      featuresTitle: "What Bangladeshi Freelancers Actually Need",
      featuresSubtitle: "Instant funding account. Instant crypto wallet. Instant freedom from ridiculous fees.",
      features: {
        globalAccounts: {
          title: "Instant Funding Account",
          description: "Get US bank details in 2 minutes. Add to Fiverr, Upwork, Freelancer, PeoplePerHour. No complicated paperwork, no bank visits.",
        },
        instantSettlement: {
          title: "Instant USDT/USDC Conversion",
          description: "Payment hits your account → automatically converts to stablecoin. No manual steps. No waiting for Taka that keeps losing value.",
        },
        automatedYield: {
          title: "Sell at Binance P2P Rates",
          description: "Cash out USDT/USDC on Binance, Bybit, or local P2P at premium rates. Often ৳3-5 higher per dollar than bank rates.",
        },
      },
      comparison: {
        recommended: "Smart Bangladeshis Choose This",
        othersTitle: "Payoneer & Local Banks",
        othersSubtitle: "$35/year + $3/withdrawal + poor rates",
        dattapaySubtitle: "Zero annual fee, best conversion rates",
        labels: {
          receiveInternational: "Receive International",
          currencyConversion: "Currency Conversion",
          monthlyFee: "Annual Fee",
          withdrawalFee: "Per Withdrawal",
          annualSavings: "Your Savings",
        },
        free: "Free",
      },
    },
    faqs: [
      {
        question: "How is DattaPay better than Payoneer for Bangladeshi freelancers?",
        answer: "Payoneer charges $35/year (৳4,000+) annual fee plus $3 (৳350+) for every single withdrawal. DattaPay has ZERO annual fees. Your payments auto-convert to USDT/USDC, which you sell on Binance P2P at rates often ৳3-5 higher per dollar than what Payoneer or banks offer.",
      },
      {
        question: "How do I add DattaPay to my Upwork/Fiverr account?",
        answer: "Sign up (takes 2 minutes), get your US funding account details instantly. Go to Upwork/Fiverr payment settings → Add withdrawal method → Enter your DattaPay routing and account number. Your next payment goes straight to your DattaPay account.",
      },
      {
        question: "What happens when I receive payment from a client?",
        answer: "Money from the freelance platform hits your DattaPay funding account → instantly converts to USDT or USDC → deposited to your crypto wallet. No waiting days. No manual conversion. No Taka devaluation risk.",
      },
      {
        question: "How do I cash out to Taka?",
        answer: "Transfer your USDT/USDC to Binance, Bybit, or any exchange. Sell via P2P at current market rates (often ৳117-120 per dollar when banks offer ৳110-112). You control when to convert, protecting you from Taka depreciation.",
      },
      {
        question: "Is this better than receiving through local banks?",
        answer: "Much better. Banks charge high fees, have terrible exchange rates, and take days to process. DattaPay setup takes 2 minutes, has no annual fees, and you sell USDT at premium P2P rates instead of accepting whatever the bank offers.",
      },
      {
        question: "Is DattaPay legal for Bangladeshi freelancers?",
        answer: "Yes, DattaPay operates internationally and is compliant with global financial regulations. Freelancers can legally receive payments for their services through international accounts. Your earnings from legitimate freelance work are completely legal.",
      },
      {
        question: "Which platforms can I receive payments from?",
        answer: "All major platforms: Fiverr, Upwork, Freelancer.com, PeoplePerHour, Toptal, Deel, Remote.com, Turing — any platform that supports US bank withdrawals works with DattaPay.",
      },
      {
        question: "Can I send money to family in Bangladesh too?",
        answer: "Yes! Use DattaPay for remittances too. Same low fees, same premium rates. Your family gets more Taka for every dollar you send compared to traditional money transfer services.",
      },
    ],
    faqTranslations: {
      title: "Questions Bangladeshi Freelancers Ask",
      subtitle: "Everything you need to know about escaping Payoneer's fees and Taka devaluation.",
    },
    howItWorks: {
      title: "3 Steps to Stop Losing Money",
      subtitle: "Setup takes 2 minutes. Start receiving payments today.",
      steps: {
        step1: {
          title: "Get Your Accounts",
          description: "Sign up → Get funding account + crypto wallet instantly. Add to Fiverr, Upwork, any platform.",
        },
        step2: {
          title: "Receive & Convert",
          description: "Client pays → Money hits your account → Auto-converts to USDT/USDC. No Taka, no devaluation risk.",
        },
        step3: {
          title: "Cash Out at Premium",
          description: "Sell USDT on Binance P2P at ৳117-120/$ rates. Keep more of what you earned.",
        },
      },
    },
    platformLogos: {
      trustedBy: "Works with all your favorite platforms",
    },
    blogsSection: {
      title: "Guides for Bangladeshi Freelancers",
      subtitle: "Learn how to maximize your earnings and beat Taka devaluation",
      readMore: "Read more",
      viewAll: "View All Guides",
      articles: "articles",
    },
    cta: {
      headline: "Every Month You Wait, Payoneer Takes ৳350+ Per Withdrawal",
      subheadline: "8,000+ Bangladeshi freelancers already switched. Get your free funding account and crypto wallet now. 2 minutes setup.",
      ctaText: "Get Your Free Account Now",
      note: "No annual fees. No credit card required. Works with all freelance platforms.",
    },
    platforms: ["Fiverr", "Upwork", "Freelancer.com", "PeoplePerHour", "Toptal", "Deel", "Remote.com", "Turing"],
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
