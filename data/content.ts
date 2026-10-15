export type Faq = { q: string; a: string };

export type ItemContent = {
  intro: string; // 1-2 sentences shown under the page title
  image?: { src: string; alt: string }; // picture shown beside the page title (file lives in /public)
  overview?: string[]; // 1-3 short paragraphs shown first
  offers: string[]; // what you actually build
  benefits?: { title: string; desc: string }[]; // why it matters
  useCases: string[]; // where it helps
  process?: [string, string][]; // optional: overrides the default 4 steps
  stack?: string[]; // tools and technologies you use
  stats?: { value: string; label: string }[]; // only real numbers
  faqs: Faq[];
};

// Key format: `${section}/${group-slug}/${item-slug}`, same as the page URL without the leading slash.
// A page with no entry here shows the generic template and is hidden from Google (see page.tsx and sitemap.ts).
// These are DRAFTS. Edit every line so it is true for Ai Angel (tools, timelines, claims).
export const content: Record<string, ItemContent> = {
  /* ------------------------------------------------------------------ */
  /* SERVICES / AI DEVELOPMENT                                           */
  /* ------------------------------------------------------------------ */
  'services/ai-development/enterprise-ai': {
    image: { src: '/images/pages/services-ai-development-enterprise-ai.svg', alt: 'Illustration for Enterprise AI' },
    intro:
      'AI built for the way a larger organisation works: connected to your systems, controlled by your rules and ready for many users.',
    overview: [
      'Moving from an AI demo to something a whole company can rely on needs more than a good model. It needs access control, data security, integration with existing systems and a way to measure results.',
      'We plan the use cases with you, start with one that matters, and build it so it can grow to other teams.',
    ],
    offers: [
      'AI assistants and search over internal documents, wikis and databases',
      'Integration with your ERP, CRM, ticketing and identity systems',
      'Role-based access, so people only see what they are allowed to see',
      'Usage logs, cost tracking and quality review dashboards',
    ],
    benefits: [
      { title: 'Fits your systems', desc: 'AI works inside the tools your teams already use.' },
      { title: 'Controlled access', desc: 'Permissions and logs are part of the design.' },
      { title: 'Ready to scale', desc: 'A first success can be extended to other departments.' },
    ],
    useCases: [
      'Company-wide knowledge search',
      'Automating cross-department approvals and reports',
      'Giving managers plain-language access to business data',
    ],
    stack: ['LLM APIs and private model hosting', 'RAG pipelines', 'SSO and role-based access', 'PostgreSQL', 'Docker and cloud deployment'],
    faqs: [
      {
        q: 'Can the AI run inside our own environment?',
        a: 'Often yes. Depending on your security needs we can deploy on your cloud or servers. We discuss the options once we know your requirements.',
      },
      {
        q: 'Where do we start?',
        a: 'With one use case that has a clear owner and a measurable result. We use it to prove value before expanding.',
      },
    ],
  },

  'services/ai-development/ai-chatbots': {
    image: { src: '/images/pages/services-ai-development-ai-chatbots.svg', alt: 'Illustration for AI Chatbots' },
    intro:
      'Chatbots that answer customer and staff questions from your own documents, and hand over to a person when they should.',
    overview: [
      'Most support and sales teams spend a large part of their day answering the same questions again and again. A well-built chatbot handles those questions straight away, using your own documents as its source.',
      'We build it to stay honest: it answers from your content, says when it does not know, and passes the chat to a person when needed.',
    ],
    offers: [
      'Website and in-app chatbots trained on your help pages, PDFs and product data',
      'WhatsApp and email assistants for common questions and order updates',
      'Handover to a human agent with the full conversation attached',
      'Admin dashboard to review chats and fix wrong answers',
    ],
    benefits: [
      { title: 'Faster replies', desc: 'Customers get an answer in seconds, at any hour.' },
      { title: 'Less repeated work', desc: 'Your team focuses on the cases that need a person.' },
      { title: 'Consistent answers', desc: 'Everyone gets the same approved information.' },
      { title: 'Visible quality', desc: 'You can review chats and correct wrong answers.' },
    ],
    useCases: [
      'Answering repeated support questions at any hour',
      'Helping visitors find the right product or service',
      'Collecting lead details before a sales call',
    ],
    stack: ['LLM APIs', 'Retrieval over your documents (RAG)', 'WhatsApp Business API', 'Next.js and Node.js', 'Vector database'],
    faqs: [
      {
        q: 'Will the chatbot make things up?',
        a: 'We ground answers in your documents and tell the bot to say when it does not know. We test it on real questions before launch, and you can review chats afterwards.',
      },
      {
        q: 'Which channels can it work on?',
        a: 'Your website, mobile app, and messaging channels such as WhatsApp. Tell us where your customers already are.',
      },
      {
        q: 'How long does a first version take?',
        a: 'It depends on the data and channels. We agree a timeline in the project plan once we understand your documents and goals.',
      },
    ],
  },

  'services/ai-development/ai-voice-agents': {
    image: { src: '/images/pages/services-ai-development-ai-voice-agents.svg', alt: 'Illustration for AI Voice Agents' },
    intro: 'Voice assistants that can take calls, answer common questions and pass complex ones to your team.',
    overview: [
      'Many calls are simple: a booking, a status check or a common question. A voice agent answers these calls naturally so your team can focus on the harder ones.',
      'Every call is transcribed and summarised into your system, so nothing is lost.',
    ],
    offers: [
      'Inbound call assistants for FAQs, bookings and status checks',
      'Outbound reminders and follow-up calls',
      'Call transcripts and summaries saved to your system',
      'Support for the languages your customers speak',
    ],
    benefits: [
      { title: 'No missed calls', desc: 'Calls are answered after hours and at busy times.' },
      { title: 'Lower call load', desc: 'Routine calls are handled without your staff.' },
      { title: 'Clear records', desc: 'Transcripts and summaries are saved automatically.' },
    ],
    useCases: [
      'Booking and rescheduling appointments',
      'Handling after-hours calls',
      'Taking order and delivery enquiries',
    ],
    stack: ['Speech-to-text and text-to-speech services', 'LLM APIs', 'Telephony providers (SIP / VoIP)', 'Node.js or Python backend'],
    faqs: [
      {
        q: 'Can it speak Hindi and English?',
        a: 'Language support depends on the voice and speech tools we choose. Tell us your languages and we will test them with your real call samples.',
      },
      {
        q: 'What happens when it cannot help?',
        a: 'It transfers the call to a person or takes a message, and sends your team a summary.',
      },
    ],
  },

  'services/ai-development/ai-agents': {
    image: { src: '/images/pages/services-ai-development-ai-agents.svg', alt: 'Illustration for AI Agents' },
    intro:
      'AI agents that carry out multi-step work for you, such as reading a document, checking a system and preparing the next action.',
    overview: [
      'An agent goes one step beyond a chatbot. It reads the input, decides what to do, uses your tools and prepares or completes the next action.',
      'We keep it controlled: clear rules, approval steps for important actions, and a log of everything it does.',
    ],
    offers: [
      'Agents that read emails, forms and documents and pull out the key details',
      'Connections to your tools, such as CRM, spreadsheets and internal systems',
      'Approval steps, so a person confirms important actions',
      'Logs of what the agent did and why',
    ],
    benefits: [
      { title: 'Hours saved', desc: 'Multi-step routine work runs without manual effort.' },
      { title: 'You stay in control', desc: 'Important actions wait for a person to approve.' },
      { title: 'Full traceability', desc: 'Every action and its reason is logged.' },
    ],
    useCases: [
      'Sorting and answering incoming requests',
      'Preparing summaries and reports from several sources',
      'Checking records against rules, such as invoices or claims',
    ],
    stack: ['LLM APIs with tool calling', 'Python and Node.js', 'CRM and spreadsheet APIs', 'Queues and schedulers', 'PostgreSQL or MongoDB'],
    faqs: [
      {
        q: 'What is the difference between a chatbot and an agent?',
        a: 'A chatbot mostly answers questions. An agent also takes actions, such as updating a record or drafting a reply, usually with your approval.',
      },
      {
        q: 'Can I stay in control?',
        a: 'Yes. We add approval steps for anything important and keep a log of every action.',
      },
    ],
  },

  'services/ai-development/agentic-ai': {
    image: { src: '/images/pages/services-ai-development-agentic-ai.svg', alt: 'Illustration for Agentic AI' },
    intro:
      'Systems where several AI agents plan, share work and check each other, to complete larger tasks than a single prompt can handle.',
    overview: [
      'Some jobs are too big for one AI step: researching a topic, preparing a report, handling a case from start to finish. Agentic systems split the job into parts, give each part to a specialised agent and combine the results.',
      'We design the workflow carefully, with limits and checkpoints, so the system stays predictable.',
    ],
    offers: [
      'Multi-agent workflows with a planner, workers and a reviewer',
      'Tool use: search, databases, APIs, file handling and code execution',
      'Memory, so agents keep context across steps',
      'Human checkpoints, spending limits and full run logs',
    ],
    benefits: [
      { title: 'Bigger tasks handled', desc: 'Long, multi-part work gets done in one run.' },
      { title: 'Built-in checking', desc: 'A reviewer step catches mistakes early.' },
      { title: 'Predictable behaviour', desc: 'Limits and logs keep the system under control.' },
    ],
    useCases: [
      'Research and report preparation',
      'End-to-end handling of support or onboarding cases',
      'Data collection, cleaning and analysis pipelines',
    ],
    stack: ['LangGraph or similar orchestration', 'LLM APIs with tool calling', 'Python', 'Vector and relational databases', 'Task queues'],
    faqs: [
      {
        q: 'Is agentic AI reliable enough for real work?',
        a: 'It can be, when the scope is clear and there are checks. We start with a narrow workflow, measure it and widen it only when results are good.',
      },
      {
        q: 'How do you keep costs under control?',
        a: 'We set limits on steps and spending per run, and we report usage so you can see the cost of each workflow.',
      },
    ],
  },

  'services/ai-development/ai-automation': {
    image: { src: '/images/pages/services-ai-development-ai-automation.svg', alt: 'Illustration for AI Automation' },
    intro:
      'We automate repetitive office work, such as moving data between systems, processing documents and sending updates, so your team spends time on decisions instead.',
    overview: [
      'Most teams lose hours every week to copying data, chasing updates and preparing the same reports. Automation removes that work.',
      'We start with the single task that saves the most time, prove it works, and then move to the next.',
    ],
    offers: [
      'Document processing: reading invoices, forms and emails and extracting key fields',
      'Connections between your tools, such as CRM, email, spreadsheets and accounting',
      'Automatic reminders, status updates and reports',
      'Approval flows for steps that need a person',
      'Error alerts and logs, so you can see what ran and what failed',
    ],
    benefits: [
      { title: 'Time back every week', desc: 'Repetitive tasks run on their own.' },
      { title: 'Fewer mistakes', desc: 'No retyping or missed steps.' },
      { title: 'Works with your tools', desc: 'We connect to what you already use.' },
    ],
    useCases: [
      'Entering invoice or order data without retyping',
      'Routing enquiries to the right person',
      'Producing weekly reports from several sources',
      'Keeping two systems in sync',
    ],
    stack: ['Node.js and Python', 'Webhooks and REST APIs', 'Email and spreadsheet APIs', 'OCR and document parsing', 'Job queues and schedulers'],
    faqs: [
      {
        q: 'Which tasks are worth automating?',
        a: 'Work that is repetitive, follows clear rules and takes real time each week. We help you rank your tasks and start with the one that saves the most.',
      },
      {
        q: 'What if something goes wrong?',
        a: 'We add alerts and logs, and keep a person in the loop for important steps. You can always see what the automation did.',
      },
      {
        q: 'Do I need to change the tools I use?',
        a: 'Usually not. We connect to what you already use wherever the tools allow it.',
      },
    ],
  },

  'services/ai-development/generative-ai': {
    image: { src: '/images/pages/services-ai-development-generative-ai.svg', alt: 'Illustration for Generative AI' },
    intro:
      'Generative AI features that write, summarise, search and create from your own content, built with checks so the output stays reliable.',
    overview: [
      'Generative AI is useful when it works with your own content: your documents, products and knowledge. Then it can search, summarise and draft in a way that fits your business.',
      'We add checks and review steps, so the output is something you can trust and use.',
    ],
    offers: [
      'Assistants that answer questions from your documents and databases (RAG)',
      'Tools that draft emails, reports, product descriptions and other text',
      'Summaries of long documents, calls and meetings',
      'Image and content generation features inside your product',
      'Review steps and filters, so a person can check output before it is used',
    ],
    benefits: [
      { title: 'Find answers quickly', desc: 'Search company knowledge in plain language.' },
      { title: 'Faster first drafts', desc: 'Repetitive writing starts from a good draft.' },
      { title: 'Fits your product', desc: 'Assistants are built into your app, not bolted on.' },
    ],
    useCases: [
      'Searching company knowledge in plain language',
      'Drafting first versions of repetitive writing',
      'Turning long reports into short briefs',
      'Adding an AI assistant to an existing app',
    ],
    stack: ['LLM APIs', 'RAG pipelines', 'Vector databases', 'Next.js and Python', 'Content filters and review steps'],
    faqs: [
      {
        q: 'Is my data used to train public AI models?',
        a: 'We choose providers and settings that keep your data private, and we tell you which provider handles what before we start. Ask us for the details for your project.',
      },
      {
        q: 'How do you stop wrong or made-up answers?',
        a: 'We ground answers in your documents, ask the model to say when it does not know, and test it on real examples. For important output we add a human review step.',
      },
      {
        q: 'Can you add this to my existing app?',
        a: 'Usually yes. We look at your current system first and then plan how to connect it.',
      },
    ],
  },

  'services/ai-development/ml-development': {
    image: { src: '/images/pages/services-ai-development-ml-development.svg', alt: 'Illustration for ML Development' },
    intro:
      'Machine learning models that predict, classify or detect something useful in your data, built, tested and deployed so you can really use them.',
    overview: [
      'A machine learning model is only useful if it answers a real question and keeps working after launch. We start from the question, not the algorithm.',
      'You get a tested model, a clear accuracy report and a way to use it inside your app or process.',
    ],
    offers: [
      'Prediction models, such as demand, churn, risk or price',
      'Classification and detection, from documents, images or sensor data',
      'Recommendation features for products or content',
      'Data cleaning and preparation before training',
      'Deployment as an API or inside your app, with monitoring after launch',
    ],
    benefits: [
      { title: 'Decisions from data', desc: 'Forecasts and flags based on your own records.' },
      { title: 'Measured results', desc: 'We report against a goal agreed at the start.' },
      { title: 'Kept up to date', desc: 'Monitoring and retraining as your data changes.' },
    ],
    useCases: [
      'Forecasting sales or stock needs',
      'Flagging unusual transactions or records',
      'Sorting images or documents automatically',
      'Predicting which customers need attention',
    ],
    process: [
      ['Check the data', 'We look at what data you have and whether it can answer your question.'],
      ['Build a baseline', 'We start with a simple model so we know what "better" means.'],
      ['Improve and test', 'We try stronger approaches and test on data the model has not seen.'],
      ['Deploy and monitor', 'We put it into use and watch accuracy over time, because data changes.'],
    ],
    stack: ['Python', 'scikit-learn, XGBoost, PyTorch', 'Pandas and NumPy', 'FastAPI for deployment', 'Docker'],
    faqs: [
      {
        q: 'How much data do I need?',
        a: 'It depends on the problem. We review your data first and tell you honestly if it is not enough, or if a simpler method will do.',
      },
      {
        q: 'How will I know the model works?',
        a: 'We agree on a measurable goal at the start, such as accuracy on a held-out test set, and report against it.',
      },
      {
        q: 'Can the model get worse over time?',
        a: 'Yes, when the real world changes. That is why we monitor it after launch and retrain when needed.',
      },
    ],
  },

  'services/ai-development/data-science': {
    image: { src: '/images/pages/services-ai-development-data-science.svg', alt: 'Illustration for Data Science' },
    intro:
      'We turn your raw data into clear findings, so you can see what is happening in your business and what to do next.',
    overview: [
      'Many businesses collect plenty of data but struggle to learn from it. Data science connects the numbers to decisions: which customers matter, where money is lost, what is likely to happen next.',
      'You get findings you can act on, explained in plain language, with the code and data pipeline behind them.',
    ],
    offers: [
      'Data cleaning, merging and quality checks',
      'Exploratory analysis and clear written findings',
      'Statistical tests and experiments, such as A/B test analysis',
      'Forecasting and segmentation models',
      'Dashboards and reports for regular use',
    ],
    benefits: [
      { title: 'Clear answers', desc: 'Specific findings rather than piles of charts.' },
      { title: 'Trustworthy numbers', desc: 'Data is checked and cleaned before analysis.' },
      { title: 'Repeatable', desc: 'The same analysis can be rerun as new data arrives.' },
    ],
    useCases: [
      'Finding which customers are likely to leave',
      'Understanding what drives sales or costs',
      'Testing whether a change really improved results',
    ],
    stack: ['Python, Pandas and Jupyter', 'SQL', 'scikit-learn and statsmodels', 'Power BI or Metabase', 'Cloud data warehouses'],
    faqs: [
      {
        q: 'What data format do you need?',
        a: 'Spreadsheets, database exports or API access all work. We review what you have in a first call.',
      },
      {
        q: 'Will you explain the results to my team?',
        a: 'Yes. We deliver a plain-language summary and walk your team through it.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SERVICES / BLOCKCHAIN                                               */
  /* ------------------------------------------------------------------ */
  'services/blockchain/smart-contracts': {
    image: { src: '/images/pages/services-blockchain-smart-contracts.svg', alt: 'Illustration for Smart Contracts' },
    intro:
      'Smart contracts written carefully, tested thoroughly and prepared for an independent security review before they go live.',
    overview: [
      'A deployed smart contract usually cannot be changed, and mistakes can cost real money. That is why design, testing and review matter more here than in most software.',
      'We write clear, minimal contracts, test many scenarios, and help you prepare for an external audit.',
    ],
    offers: [
      'Contracts for tokens, staking, vesting, escrow and access control',
      'Unit and scenario tests, including unusual and hostile cases',
      'Deployment scripts and upgrade planning where an upgrade path is needed',
      'Documentation, so auditors and your team understand the logic',
    ],
    benefits: [
      { title: 'Careful by design', desc: 'Simple logic and thorough tests reduce risk.' },
      { title: 'Audit ready', desc: 'Clean code and documentation speed up external review.' },
      { title: 'Clear ownership', desc: 'You receive all code and deployment details.' },
    ],
    useCases: ['Token launches', 'Automated payments and escrow', 'Membership and access passes'],
    stack: ['Solidity', 'Hardhat or Foundry', 'OpenZeppelin libraries', 'Ethers.js', 'EVM chains such as Ethereum and Polygon'],
    faqs: [
      {
        q: 'Do you provide a security audit?',
        a: 'We test and review our own work carefully, but for contracts holding real value we recommend an independent audit and can help you prepare for it.',
      },
      {
        q: 'Which blockchains do you work with?',
        a: 'Mainly EVM-compatible chains. Tell us your target network and we will confirm what we can support.',
      },
    ],
  },

  'services/blockchain/exchange-development': {
    image: { src: '/images/pages/services-blockchain-exchange-development.svg', alt: 'Illustration for Exchange Development' },
    intro:
      'Trading platform development with a focus on security, speed and clear reporting, from the order book to the admin panel.',
    overview: [
      'An exchange is a demanding product: it must match orders quickly, protect funds, and give operators full visibility. It is also a regulated area in many countries.',
      'We build the technical platform and help you plan the security and operational side. You remain responsible for legal and licensing requirements in your region.',
    ],
    offers: [
      'Order matching engine and trading interface',
      'Wallet integration, deposits and withdrawals',
      'User accounts, verification flows and admin controls',
      'Reporting, audit logs and monitoring',
    ],
    benefits: [
      { title: 'Built for load', desc: 'Architecture planned for many simultaneous orders.' },
      { title: 'Security first', desc: 'Access control, logging and safe key handling.' },
      { title: 'Operator visibility', desc: 'Admin tools and reports for daily running.' },
    ],
    useCases: ['Crypto spot trading platforms', 'Token trading for a specific community', 'Internal trading or settlement tools'],
    stack: ['Node.js or Go', 'Redis and PostgreSQL', 'WebSockets', 'React or Next.js', 'Cloud infrastructure with monitoring'],
    faqs: [
      {
        q: 'Do you handle licensing and legal compliance?',
        a: 'No. We build the technology and can add compliance features such as verification flows, but you should take legal advice for your region.',
      },
      {
        q: 'Can I start small and grow?',
        a: 'Yes. A smaller first version with core trading is a sensible way to begin, then features can be added.',
      },
    ],
  },

  'services/blockchain/wallet-development': {
    image: { src: '/images/pages/services-blockchain-wallet-development.svg', alt: 'Illustration for Wallet Development' },
    intro:
      'Crypto wallets that are simple for users and careful with their keys, for mobile, web or browser extension.',
    overview: [
      'A wallet is where users meet blockchain, so it has to be easy to use and very careful with private keys. Small design choices affect both convenience and safety.',
      'We build wallets with clear flows for sending, receiving and recovery, and we are explicit about who holds the keys.',
    ],
    offers: [
      'Mobile and web wallets for one or several chains',
      'Key creation, secure storage and backup or recovery flows',
      'Send, receive, swap and transaction history screens',
      'Integration with dApps and token lists',
    ],
    benefits: [
      { title: 'Clear key handling', desc: 'Users know what they control and how to recover access.' },
      { title: 'Simple screens', desc: 'Everyday actions take few steps.' },
      { title: 'Multi-chain ready', desc: 'Support for more networks can be added over time.' },
    ],
    useCases: ['Branded wallet for your token', 'Wallet inside an existing app', 'Custody-style wallets for business users'],
    stack: ['React Native or Flutter', 'Ethers.js and Web3.js', 'Secure device storage', 'Node.js backend services'],
    faqs: [
      {
        q: 'Custodial or non-custodial?',
        a: 'Both are possible. Non-custodial means users hold their own keys; custodial means you hold them and take on more responsibility. We help you choose.',
      },
      {
        q: 'Can the wallet support several blockchains?',
        a: 'Yes, we can plan it for multiple networks from the start or add them later.',
      },
    ],
  },

  'services/blockchain/nft-marketplaces': {
    image: { src: '/images/pages/services-blockchain-nft-marketplaces.svg', alt: 'Illustration for NFT Marketplaces' },
    intro:
      'NFT marketplaces where creators can mint and sell and buyers can browse, bid and pay with confidence.',
    overview: [
      'A good marketplace feels simple on the surface: browse, buy, sell. Underneath it needs reliable contracts, fast listings and fair fee handling.',
      'We build the contracts, the storefront and the creator tools, and plan the details with you.',
    ],
    offers: [
      'Minting contracts and creator dashboards',
      'Listings, auctions, offers and royalty handling',
      'Wallet login and payment flows',
      'Search, collections and profile pages',
    ],
    benefits: [
      { title: 'Creator friendly', desc: 'Minting and selling are easy to learn.' },
      { title: 'Flexible sales', desc: 'Fixed price, auctions and offers.' },
      { title: 'Your own rules', desc: 'You choose fees, royalties and categories.' },
    ],
    useCases: ['Art and collectibles marketplaces', 'Event tickets and passes', 'Community or game item trading'],
    stack: ['Solidity (ERC-721 and ERC-1155)', 'IPFS for media storage', 'Next.js', 'Ethers.js', 'Node.js and PostgreSQL'],
    faqs: [
      {
        q: 'Where are the images and files stored?',
        a: 'Usually on decentralised storage such as IPFS, with the token pointing to them. We explain the options for your case.',
      },
      {
        q: 'Can I set my own marketplace fee?',
        a: 'Yes. Fees and royalty rules are part of the contract design and can be agreed upfront.',
      },
    ],
  },

  'services/blockchain/defi': {
    image: { src: '/images/pages/services-blockchain-defi.svg', alt: 'Illustration for DeFi' },
    intro:
      'Decentralised finance products such as staking, lending and swaps, built with careful contract design and clear risk controls.',
    overview: [
      'DeFi products handle real money through code, so safety and clarity matter more than speed. Users also need to understand what they are doing, so the interface matters too.',
      'We design the contracts, the interface and the monitoring, and recommend an independent audit before launch.',
    ],
    offers: [
      'Staking and yield contracts',
      'Lending and borrowing logic',
      'Token swap and liquidity pool features',
      'Dashboards showing balances, rates and risks',
    ],
    benefits: [
      { title: 'Risk-aware design', desc: 'Limits, checks and monitoring are planned from the start.' },
      { title: 'Clear for users', desc: 'Rates, fees and risks are shown plainly.' },
      { title: 'Audit preparation', desc: 'Code and docs prepared for external review.' },
    ],
    useCases: ['Token staking programs', 'Community lending pools', 'Swap features inside an existing platform'],
    stack: ['Solidity', 'Hardhat or Foundry', 'Price oracle integrations', 'Next.js', 'The Graph or custom indexers'],
    faqs: [
      {
        q: 'Is DeFi safe?',
        a: 'It carries real risks, including contract bugs and market risk. We reduce technical risk with careful design and testing, and we recommend an external audit.',
      },
      {
        q: 'Do I need a legal review?',
        a: 'Financial products are regulated in many places. Please get legal advice for your region before launch.',
      },
    ],
  },

  'services/blockchain/blockchain-consulting': {
    image: { src: '/images/pages/services-blockchain-blockchain-consulting.svg', alt: 'Illustration for Blockchain Consulting' },
    intro:
      'Honest advice on whether blockchain fits your problem, and if it does, how to plan and build it.',
    overview: [
      'Blockchain is the right tool for some problems and the wrong one for many others. Good advice starts by checking whether you need it at all.',
      'We review your idea, compare options, and give you a plan you can use with us or with any other team.',
    ],
    offers: [
      'Idea review: is blockchain actually needed?',
      'Choice of network, token model and architecture',
      'Technical roadmap, effort estimate and risk list',
      'Review of existing contracts or designs',
    ],
    benefits: [
      { title: 'Honest answer', desc: 'We tell you if a normal database is the better choice.' },
      { title: 'Lower risk', desc: 'Mistakes are cheaper to fix on paper than in production.' },
      { title: 'Usable plan', desc: 'A written plan you own.' },
    ],
    useCases: ['Evaluating a startup idea', 'Choosing between networks', 'Planning a token or platform launch'],
    stack: ['EVM and other major chains', 'Layer 2 networks', 'Wallet and custody options', 'Oracle and indexing tools'],
    faqs: [
      {
        q: 'What do I get at the end?',
        a: 'A written recommendation covering the approach, the technology choices, rough effort and the main risks.',
      },
      {
        q: 'Are you able to tell me not to use blockchain?',
        a: 'Yes. If it does not help your case, we will say so.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SERVICES / MOBILE APP                                               */
  /* ------------------------------------------------------------------ */
  'services/mobile-app/ios-apps': {
    image: { src: '/images/pages/services-mobile-app-ios-apps.svg', alt: 'Illustration for iOS Apps' },
    intro: 'Native iPhone and iPad apps that feel at home on Apple devices and are prepared for App Store review.',
    overview: [
      'A native iOS app gives you the smoothest experience and the best access to device features such as camera, notifications, Face ID and widgets.',
      'We design, build and test the app, and guide you through App Store submission.',
    ],
    offers: [
      'Native apps for iPhone and iPad',
      'Integration with your backend, payments and notifications',
      'Use of device features: camera, location, biometrics and widgets',
      'Testing on real devices, TestFlight builds and App Store submission support',
    ],
    benefits: [
      { title: 'Smooth experience', desc: 'Native performance and familiar Apple behaviour.' },
      { title: 'Full device access', desc: 'Camera, sensors, Face ID and more.' },
      { title: 'Store ready', desc: 'We guide you through review requirements.' },
    ],
    useCases: ['Consumer apps', 'Field staff and business apps', 'Apps that depend on camera or sensors'],
    stack: ['Swift and SwiftUI', 'Xcode and TestFlight', 'REST and GraphQL APIs', 'Firebase or custom backend', 'Push notifications (APNs)'],
    faqs: [
      {
        q: 'Do I need an Apple developer account?',
        a: 'Yes, to publish on the App Store. We can help you set it up, and the account stays in your name.',
      },
      {
        q: 'Should I build iOS first or both platforms?',
        a: 'It depends on your audience. We can compare native and cross-platform options for your case.',
      },
    ],
  },

  'services/mobile-app/android-apps': {
    image: { src: '/images/pages/services-mobile-app-android-apps.svg', alt: 'Illustration for Android Apps' },
    intro: 'Native Android apps that run well across the wide range of phones people actually use.',
    overview: [
      'Android users use thousands of different devices, screen sizes and Android versions. A good app has to work well across them, including on lower-cost phones and slow networks.',
      'We build and test with that range in mind, and take care of Google Play publishing.',
    ],
    offers: [
      'Native Android apps in Kotlin',
      'Offline support and careful battery and data use',
      'Integration with your backend, payments and notifications',
      'Testing across devices and Google Play release support',
    ],
    benefits: [
      { title: 'Works on many devices', desc: 'Tested on a range of screens and Android versions.' },
      { title: 'Good on slow networks', desc: 'Offline handling and light data use.' },
      { title: 'Play Store ready', desc: 'We prepare listings and release builds.' },
    ],
    useCases: ['Consumer apps for wide audiences', 'Delivery, logistics and field apps', 'Apps for low-bandwidth areas'],
    stack: ['Kotlin and Jetpack Compose', 'Android Studio', 'Firebase or custom backend', 'Room for local storage', 'Push notifications (FCM)'],
    faqs: [
      {
        q: 'Will it work on older phones?',
        a: 'We agree on the minimum Android version with you, based on who your users are, and test accordingly.',
      },
      {
        q: 'Do you help with Google Play publishing?',
        a: 'Yes. We prepare release builds and guide you through the listing and review.',
      },
    ],
  },

  'services/mobile-app/hybrid-apps': {
    image: { src: '/images/pages/services-mobile-app-hybrid-apps.svg', alt: 'Illustration for Hybrid Apps' },
    intro: 'One codebase for both iPhone and Android, so you launch faster and maintain one app instead of two.',
    overview: [
      'Hybrid or cross-platform tools let one team build for both platforms at once. For many business and consumer apps this saves time and cost with very little loss in quality.',
      'We help you decide if cross-platform is the right fit, then build it with native features where needed.',
    ],
    offers: [
      'Cross-platform apps for iOS and Android',
      'Shared design and logic, with native modules for special features',
      'Backend and API integration',
      'Store publishing for both platforms',
    ],
    benefits: [
      { title: 'Faster launch', desc: 'Both platforms from one build effort.' },
      { title: 'Easier upkeep', desc: 'One codebase to fix and improve.' },
      { title: 'Consistent look', desc: 'Same features and design on both phones.' },
    ],
    useCases: ['MVPs for new products', 'Business and internal apps', 'Content, booking and shopping apps'],
    stack: ['Flutter or React Native', 'TypeScript or Dart', 'Firebase or custom backend', 'REST and GraphQL APIs'],
    faqs: [
      {
        q: 'Is a hybrid app slower than a native one?',
        a: 'For most apps the difference is hard to notice. Very graphics-heavy or hardware-heavy apps may be better built natively. We tell you honestly which fits.',
      },
      {
        q: 'Flutter or React Native?',
        a: 'Both are solid. We recommend one based on your team, your design needs and the features you require.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SERVICES / WEB & SOFTWARE                                           */
  /* ------------------------------------------------------------------ */
  'services/web-software/mvp-development': {
    image: { src: '/images/pages/services-web-software-mvp-development.svg', alt: 'Illustration for MVP Development' },
    intro: 'A focused first version of your product, built quickly so you can test the idea with real users.',
    overview: [
      'The goal of an MVP is learning, not perfection. The fastest way to learn is to build the smallest version that tests your main assumption, put it in front of users and see what happens.',
      'We help you decide what to include and what to leave out, then build and launch it.',
    ],
    offers: [
      'Scope workshop to decide the smallest useful version',
      'Design, development and launch of the core features',
      'Basic analytics, so you can see how people use it',
      'A clear list of what to build next',
    ],
    benefits: [
      { title: 'Quick to market', desc: 'See real user reactions early.' },
      { title: 'Lower risk', desc: 'Spend on what is proven, not what is guessed.' },
      { title: 'Room to grow', desc: 'Built so it can be extended, not thrown away.' },
    ],
    useCases: ['New startup products', 'New features for an existing business', 'Proof of concept for investors'],
    stack: ['Next.js and React', 'Node.js or Python backend', 'PostgreSQL or MongoDB', 'Vercel, Render or cloud hosting'],
    faqs: [
      {
        q: 'How do we decide what goes into the MVP?',
        a: 'We list everything you want, then keep only what is needed to test your main idea. The rest goes on a later list.',
      },
      {
        q: 'Will I own the code?',
        a: 'Yes, we agree on ownership in the project terms and hand over the code and access.',
      },
    ],
  },

  'services/web-software/saas-development': {
    image: { src: '/images/pages/services-web-software-saas-development.svg', alt: 'Illustration for SaaS Development' },
    intro: 'Subscription software built for many customers at once, with accounts, billing and admin tools in place.',
    overview: [
      'A SaaS product is more than features. It needs sign-up, teams, roles, billing, usage limits and a way to support customers.',
      'We build these foundations carefully so you can focus on what makes your product special.',
    ],
    offers: [
      'Multi-tenant architecture, so many customers share one platform safely',
      'User accounts, teams and roles',
      'Subscription billing and plan limits',
      'Admin dashboard, usage tracking and email notifications',
    ],
    benefits: [
      { title: 'Foundations done', desc: 'Accounts and billing are not left until later.' },
      { title: 'Safe separation', desc: 'One customer never sees another customers data.' },
      { title: 'Ready to scale', desc: 'Architecture planned for growth.' },
    ],
    useCases: ['Business tools sold by subscription', 'Industry-specific platforms', 'Turning an internal tool into a product'],
    stack: ['Next.js and TypeScript', 'Node.js or Python', 'PostgreSQL', 'Stripe or Razorpay billing', 'Docker and cloud hosting'],
    faqs: [
      {
        q: 'Which payment providers can you connect?',
        a: 'Common ones such as Stripe and Razorpay. The right one depends on your customers and countries.',
      },
      {
        q: 'Can we start with a small version?',
        a: 'Yes. Many SaaS products start with a small core and add plans and features as customers arrive.',
      },
    ],
  },

  'services/web-software/custom-software': {
    image: { src: '/images/pages/services-web-software-custom-software.svg', alt: 'Illustration for Custom Software' },
    intro: 'Software made to fit the way your business works, instead of forcing your work to fit off-the-shelf tools.',
    overview: [
      'Sometimes the available tools almost fit, but not quite, and the gaps cost time every day. Custom software closes those gaps.',
      'We study how your team really works, then build software that matches it.',
    ],
    offers: [
      'Web applications and internal tools',
      'Workflow, approvals and reporting systems',
      'Integrations with your existing software',
      'Training for your team and ongoing support',
    ],
    benefits: [
      { title: 'Fits your process', desc: 'No workarounds or wasted features.' },
      { title: 'One system', desc: 'Replace scattered spreadsheets and tools.' },
      { title: 'You control it', desc: 'Change it when your business changes.' },
    ],
    useCases: ['Inventory and order tracking', 'Booking and scheduling systems', 'Customer and vendor portals'],
    stack: ['React or Next.js', 'Node.js or Python', 'PostgreSQL or MongoDB', 'REST APIs', 'Cloud hosting'],
    faqs: [
      {
        q: 'Is custom software better than ready-made tools?',
        a: 'Not always. If a ready-made tool fits well, use it. We suggest custom work only when it clearly saves time or money.',
      },
      {
        q: 'Can you connect it to our current systems?',
        a: 'Usually yes, as long as those systems offer an API or data export.',
      },
    ],
  },

  'services/web-software/enterprise-software': {
    image: { src: '/images/pages/services-web-software-enterprise-software.svg', alt: 'Illustration for Enterprise Software' },
    intro: 'Large, dependable business systems with strong security, many users and long-term support.',
    overview: [
      'Enterprise software must handle many users, complex rules and strict security, and it must keep running for years. Planning and testing matter as much as features.',
      'We build with clear architecture, documentation and handover so your own team can take it forward.',
    ],
    offers: [
      'ERP, CRM and operations platforms',
      'Role-based access, audit trails and approval flows',
      'Integration with existing enterprise systems and single sign-on',
      'Performance testing, monitoring and ongoing maintenance',
    ],
    benefits: [
      { title: 'Built for scale', desc: 'Designed for many users and large data.' },
      { title: 'Secure and traceable', desc: 'Access control and audit trails built in.' },
      { title: 'Long-term support', desc: 'Documentation and maintenance plans.' },
    ],
    useCases: ['Company-wide operations platforms', 'Replacing outdated legacy systems', 'Multi-branch or multi-department workflows'],
    stack: ['Java, .NET or Node.js', 'PostgreSQL or SQL Server', 'Docker and Kubernetes', 'SSO and identity providers', 'Monitoring and logging tools'],
    faqs: [
      {
        q: 'Can you replace a legacy system gradually?',
        a: 'Yes. A phased move, one module at a time, is often safer than replacing everything at once.',
      },
      {
        q: 'Who maintains it after launch?',
        a: 'We can offer a support plan, or hand it over with documentation to your own team.',
      },
    ],
  },

  'services/web-software/software-consulting': {
    image: { src: '/images/pages/services-web-software-software-consulting.svg', alt: 'Illustration for Software Consulting' },
    intro: 'Practical technical advice on what to build, how to build it and how to avoid expensive mistakes.',
    overview: [
      'Early technical decisions are hard to undo. A short, honest review at the start can save months later.',
      'We look at your goals, your team and your budget, and give you a clear recommendation.',
    ],
    offers: [
      'Architecture and technology choice review',
      'Code and security review of an existing project',
      'Estimate, roadmap and team planning',
      'Help choosing between building and buying',
    ],
    benefits: [
      { title: 'Independent view', desc: 'Advice based on your needs, not on selling more work.' },
      { title: 'Fewer surprises', desc: 'Risks and costs are clear before you start.' },
      { title: 'Written plan', desc: 'Something your team can follow.' },
    ],
    useCases: ['Planning a new product', 'Fixing a slow or fragile system', 'Preparing for growth or a technical audit'],
    stack: ['Cloud architecture', 'Web and mobile stacks', 'Databases and APIs', 'CI/CD and testing practice'],
    faqs: [
      {
        q: 'How long does a consulting engagement take?',
        a: 'A focused review can take a few days to a few weeks, depending on the size of the system.',
      },
      {
        q: 'Do I have to hire you to build it afterwards?',
        a: 'No. The plan is yours to use with any team.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* SERVICES / ANALYTICS & CRM                                          */
  /* ------------------------------------------------------------------ */
  'services/analytics-crm/big-data-analytics': {
    image: { src: '/images/pages/services-analytics-crm-big-data-analytics.svg', alt: 'Illustration for Big Data Analytics' },
    intro: 'Pipelines and analysis for data that is too large or too messy for spreadsheets.',
    overview: [
      'When data grows into millions of rows from many systems, ordinary tools slow down or break. You need a proper pipeline to collect, clean, store and query it.',
      'We design the pipeline and the reports, so the right people can get answers quickly.',
    ],
    offers: [
      'Data pipelines that collect and clean data from many sources',
      'Data warehouses and lakes sized for your volume',
      'Fast reports and dashboards over large datasets',
      'Scheduled jobs, monitoring and data quality checks',
    ],
    benefits: [
      { title: 'One source of truth', desc: 'Data from many systems in one place.' },
      { title: 'Fast answers', desc: 'Queries that finish in seconds, not hours.' },
      { title: 'Reliable data', desc: 'Automatic checks catch problems early.' },
    ],
    useCases: ['Combining sales, web and operations data', 'Event and log analysis', 'Reporting for large customer bases'],
    stack: ['Python and SQL', 'Apache Spark or dbt', 'BigQuery, Snowflake or PostgreSQL', 'Airflow for scheduling', 'Power BI or Metabase'],
    faqs: [
      {
        q: 'How do I know if I need big data tools?',
        a: 'If your reports are slow, files are too large for spreadsheets, or data sits in many systems, it is worth a review. We will tell you if simpler tools are enough.',
      },
      {
        q: 'Can you work with our cloud provider?',
        a: 'Usually yes. We work with the major cloud platforms.',
      },
    ],
  },

  'services/analytics-crm/ai-powered-analytics': {
    image: { src: '/images/pages/services-analytics-crm-ai-powered-analytics.svg', alt: 'Illustration for AI-Powered Analytics' },
    intro: 'Analytics where you can ask questions in plain language and get explained answers, plus alerts when something unusual happens.',
    overview: [
      'Dashboards show numbers, but people still have to work out what they mean. AI-powered analytics adds explanations, forecasts and unusual-change alerts on top of your data.',
      'We connect it to your real data and test the answers, so what it says is correct and traceable.',
    ],
    offers: [
      'Natural-language questions over your business data',
      'Automatic summaries of weekly and monthly performance',
      'Forecasts and anomaly alerts',
      'Links back to the underlying data so answers can be checked',
    ],
    benefits: [
      { title: 'Ask, do not search', desc: 'Managers get answers without waiting for a report.' },
      { title: 'Early warnings', desc: 'Unusual changes are flagged as they happen.' },
      { title: 'Checkable', desc: 'Every answer can be traced to the data.' },
    ],
    useCases: ['Weekly performance summaries', 'Sales and demand forecasting', 'Spotting unusual spend or drops in orders'],
    stack: ['LLM APIs with SQL generation', 'Python', 'Time-series forecasting libraries', 'PostgreSQL or a data warehouse', 'Dashboards in Power BI or custom web apps'],
    faqs: [
      {
        q: 'Can I trust the AI answers?',
        a: 'We limit the AI to your approved data, show the query behind each answer and test it on real questions before launch.',
      },
      {
        q: 'Does it replace our dashboards?',
        a: 'No, it adds to them. Dashboards stay for regular tracking, and the AI helps with questions and explanations.',
      },
    ],
  },

  'services/analytics-crm/power-bi': {
    image: { src: '/images/pages/services-analytics-crm-power-bi.svg', alt: 'Illustration for Power BI' },
    intro: 'Power BI dashboards and data models that give your team one clear, reliable view of the business.',
    overview: [
      'A good dashboard answers the questions people ask every day, loads quickly and uses numbers everyone agrees on.',
      'We build the data model first, then the reports, so the numbers stay correct as your data grows.',
    ],
    offers: [
      'Dashboards for sales, finance, operations and HR',
      'Data models and DAX measures',
      'Connection to Excel, SQL, CRM and other sources',
      'Scheduled refresh, access control and user training',
    ],
    benefits: [
      { title: 'One version of the truth', desc: 'Shared definitions for key numbers.' },
      { title: 'Always fresh', desc: 'Reports refresh automatically.' },
      { title: 'Easy to use', desc: 'Clear layouts people actually open.' },
    ],
    useCases: ['Sales performance tracking', 'Finance and cash flow reports', 'Operations and inventory monitoring'],
    stack: ['Power BI Desktop and Service', 'DAX and Power Query', 'SQL Server and Azure', 'Excel and SharePoint', 'REST APIs'],
    faqs: [
      {
        q: 'Do we need Power BI licenses?',
        a: 'Yes, Power BI has its own licensing from Microsoft. We help you choose the right plan for your number of users.',
      },
      {
        q: 'Can you fix our existing dashboards?',
        a: 'Yes. We can review slow or confusing reports and rebuild the model behind them.',
      },
    ],
  },

  'services/analytics-crm/salesforce': {
    image: { src: '/images/pages/services-analytics-crm-salesforce.svg', alt: 'Illustration for Salesforce' },
    intro: 'Salesforce set up, customised and connected so your sales and service teams can use it with less effort.',
    overview: [
      'Salesforce is powerful, but it only helps when it matches how your team really sells and supports customers. Poor setup leads to messy data and unused features.',
      'We configure it around your process, connect it to your other tools and train your team.',
    ],
    offers: [
      'Salesforce setup and configuration for sales and service',
      'Custom objects, fields, flows and automation',
      'Integration with your website, email, ERP and billing systems',
      'Data migration, reports and user training',
    ],
    benefits: [
      { title: 'Matches your process', desc: 'Stages, fields and rules fit your team.' },
      { title: 'Clean data', desc: 'Migration and validation rules keep records tidy.' },
      { title: 'Less manual work', desc: 'Automation handles routine updates.' },
    ],
    useCases: ['Setting up a new Salesforce instance', 'Cleaning up an over-complicated setup', 'Connecting Salesforce to billing or support tools'],
    stack: ['Salesforce Sales and Service Cloud', 'Flows and Apex', 'Lightning Web Components', 'REST and SOAP APIs'],
    faqs: [
      {
        q: 'Do you provide Salesforce licenses?',
        a: 'Licenses come directly from Salesforce. We help you decide which edition and how many you need.',
      },
      {
        q: 'Can you migrate data from our old CRM?',
        a: 'Yes. We map, clean and import your records, then check them with you.',
      },
    ],
  },

  'services/analytics-crm/hubspot': {
    image: { src: '/images/pages/services-analytics-crm-hubspot.svg', alt: 'Illustration for HubSpot' },
    intro: 'HubSpot set up for marketing, sales and support, with clean data, working automation and a team that knows how to use it.',
    overview: [
      'HubSpot is easy to start with and easy to misuse. Without a clear structure, contacts get duplicated, lead stages mean different things, and reports cannot be trusted.',
      'We set up the structure, automate the routine work and connect HubSpot to your website and other tools.',
    ],
    offers: [
      'Setup of CRM, pipelines, properties and lead scoring',
      'Email, forms and marketing automation workflows',
      'Integration with your website, billing and other software',
      'Reports, dashboards and team training',
    ],
    benefits: [
      { title: 'Clear lead process', desc: 'Everyone uses the same stages and definitions.' },
      { title: 'Automation that helps', desc: 'Follow-ups and handovers happen on time.' },
      { title: 'Trustworthy reports', desc: 'Clean data gives reliable numbers.' },
    ],
    useCases: ['Starting HubSpot from scratch', 'Fixing messy contact data', 'Linking forms and campaigns to sales follow-up'],
    stack: ['HubSpot CRM, Marketing and Sales Hubs', 'Workflows and custom properties', 'HubSpot APIs', 'Website form integration'],
    faqs: [
      {
        q: 'Can you work with the free version of HubSpot?',
        a: 'Yes, for basic CRM needs. Automation and reporting features need paid tiers, and we tell you where that applies.',
      },
      {
        q: 'Can you move us from another CRM?',
        a: 'Yes. We migrate contacts, companies and deals and check the result with you.',
      },
    ],
  },

  'services/analytics-crm/zoho': {
    image: { src: '/images/pages/services-analytics-crm-zoho.svg', alt: 'Illustration for Zoho' },
    intro: 'Zoho CRM and related apps configured around your business, at a cost that suits growing teams.',
    overview: [
      'Zoho offers a wide set of business apps at a friendly price. The challenge is choosing the right ones and connecting them so data flows smoothly.',
      'We set up Zoho around your process, connect it to your other tools and train your team.',
    ],
    offers: [
      'Zoho CRM setup, pipelines, fields and automation',
      'Connection with Zoho Books, Desk, Campaigns and other Zoho apps',
      'Custom functions and integrations with outside systems',
      'Data migration, reports and training',
    ],
    benefits: [
      { title: 'Good value', desc: 'A full toolset at a manageable cost.' },
      { title: 'Connected apps', desc: 'Sales, billing and support share one set of data.' },
      { title: 'Tailored setup', desc: 'Configured for your actual process.' },
    ],
    useCases: ['Small and mid-size business CRM', 'Linking CRM with invoicing', 'Customer support desks'],
    stack: ['Zoho CRM, Books and Desk', 'Deluge scripting', 'Zoho Flow', 'REST APIs'],
    faqs: [
      {
        q: 'Which Zoho apps do I need?',
        a: 'It depends on your process. We start with the main need, usually CRM, and add other apps only when they help.',
      },
      {
        q: 'Can Zoho connect to our website?',
        a: 'Yes. Website forms and leads can flow directly into Zoho CRM.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / SALES                                                      */
  /* ------------------------------------------------------------------ */
  'agents/sales/lead-management': {
    image: { src: '/images/pages/agents-sales-lead-management.svg', alt: 'Illustration for Lead Management' },
    intro: 'An AI agent that captures, scores and routes new leads, and makes sure none are forgotten.',
    overview: [
      'Leads arrive from forms, emails, calls and social media, and the first few hours decide whether they turn into customers. Doing this by hand means delays and missed follow-ups.',
      'The agent collects every lead into your CRM, scores it, and alerts the right person.',
    ],
    offers: [
      'Capture of leads from forms, email, chat and ads into your CRM',
      'Automatic duplicate checks and data enrichment',
      'Lead scoring based on rules you define',
      'First reply drafts and follow-up reminders',
    ],
    benefits: [
      { title: 'Faster response', desc: 'New leads are acknowledged and routed quickly.' },
      { title: 'No lost leads', desc: 'Everything lands in one place.' },
      { title: 'Better focus', desc: 'Sales time goes to the strongest leads.' },
    ],
    useCases: ['Website enquiry handling', 'Trade show and event lead follow-up', 'Routing leads by region or product'],
    stack: ['LLM APIs', 'CRM APIs (HubSpot, Salesforce, Zoho)', 'Email and form webhooks', 'Node.js or Python'],
    faqs: [
      {
        q: 'Does the agent send emails by itself?',
        a: 'You choose. It can draft replies for your team to approve, or send routine acknowledgements automatically.',
      },
      {
        q: 'Which CRM does it work with?',
        a: 'Common CRMs such as HubSpot, Salesforce and Zoho. Tell us which one you use.',
      },
    ],
  },

  'agents/sales/sales-management': {
    image: { src: '/images/pages/agents-sales-sales-management.svg', alt: 'Illustration for Sales Management' },
    intro: 'An AI agent that keeps your sales pipeline up to date, prepares reports and reminds the team what needs attention.',
    overview: [
      'Sales managers spend a lot of time chasing updates and building reports. The agent reads CRM activity, emails and meeting notes and keeps the picture current.',
      'It summarises performance and points out deals that need help.',
    ],
    offers: [
      'Automatic CRM updates from emails and meeting notes',
      'Weekly pipeline and forecast summaries',
      'Alerts for stalled deals and missed follow-ups',
      'Team and individual performance reports',
    ],
    benefits: [
      { title: 'Less admin', desc: 'Reps spend more time selling.' },
      { title: 'Clearer forecasts', desc: 'Up-to-date data behind the numbers.' },
      { title: 'Timely nudges', desc: 'Nothing quietly goes cold.' },
    ],
    useCases: ['Weekly sales review preparation', 'Forecast roll-ups for leadership', 'Coaching based on activity data'],
    stack: ['LLM APIs', 'CRM APIs', 'Email and calendar integrations', 'Python', 'Dashboards'],
    faqs: [
      {
        q: 'Will reps feel monitored?',
        a: 'The aim is to remove admin work. We design what is tracked with your team, and keep it focused on the pipeline.',
      },
      {
        q: 'Can it write to the CRM?',
        a: 'Yes, with rules you set. Sensitive changes can require approval.',
      },
    ],
  },

  'agents/sales/opportunity-management': {
    image: { src: '/images/pages/agents-sales-opportunity-management.svg', alt: 'Illustration for Opportunity Management' },
    intro: 'An AI agent that tracks each opportunity from first contact to close, suggesting the next best step.',
    overview: [
      'Each deal has its own history, people and risks. The agent keeps a clear summary of every opportunity, so anyone on the team can pick it up.',
      'It highlights risks, missing information and the next step to move the deal forward.',
    ],
    offers: [
      'Opportunity summaries built from emails, calls and CRM notes',
      'Risk flags such as no contact, no decision-maker or no budget',
      'Next-step suggestions and follow-up drafts',
      'Proposal and quote preparation support',
    ],
    benefits: [
      { title: 'Easy handovers', desc: 'Anyone can understand a deal in minutes.' },
      { title: 'Fewer lost deals', desc: 'Risks show up early.' },
      { title: 'Consistent process', desc: 'Every deal follows the same checks.' },
    ],
    useCases: ['Complex, long sales cycles', 'Account reviews', 'Quote and proposal preparation'],
    stack: ['LLM APIs', 'CRM APIs', 'Document generation', 'Python or Node.js'],
    faqs: [
      {
        q: 'Can it help with proposals?',
        a: 'Yes, it can prepare a first draft from the deal details, and your team reviews it before sending.',
      },
      {
        q: 'Does it decide which deals to pursue?',
        a: 'No. It gives your team information and suggestions, and people make the decisions.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / MARKETING                                                  */
  /* ------------------------------------------------------------------ */
  'agents/marketing/content-strategy': {
    image: { src: '/images/pages/agents-marketing-content-strategy.svg', alt: 'Illustration for Content Strategy' },
    intro: 'An AI agent that researches topics, keywords and competitors, and turns them into a content plan.',
    overview: [
      'A good content plan starts with knowing what your audience searches for and what competitors already cover. Gathering this by hand takes days.',
      'The agent collects the research and proposes a plan, and your team makes the final decisions.',
    ],
    offers: [
      'Keyword and topic research',
      'Competitor content review',
      'Monthly content calendars with suggested formats',
      'Performance reviews that show what to repeat or stop',
    ],
    benefits: [
      { title: 'Research in hours', desc: 'Less time spent gathering, more time deciding.' },
      { title: 'Data-backed plans', desc: 'Topics are chosen using real search and performance data.' },
      { title: 'Steady rhythm', desc: 'A calendar your team can follow.' },
    ],
    useCases: ['Blog and SEO planning', 'Launching content for a new product', 'Quarterly content reviews'],
    stack: ['LLM APIs', 'SEO and analytics APIs', 'Web research tools', 'Spreadsheet and calendar integrations'],
    faqs: [
      {
        q: 'Does it replace our marketing team?',
        a: 'No. It speeds up research and planning so your team can spend time on ideas and quality.',
      },
      {
        q: 'Which data sources does it use?',
        a: 'Your analytics and search data, plus public web research. We agree on sources during setup.',
      },
    ],
  },

  'agents/marketing/content-creation': {
    image: { src: '/images/pages/agents-marketing-content-creation.svg', alt: 'Illustration for Content Creation' },
    intro: 'An AI agent that drafts blog posts, emails, product descriptions and ad copy in your brand voice, ready for your review.',
    overview: [
      'Producing content regularly is hard to sustain. The agent creates first drafts from your briefs and brand guidelines, so your team edits instead of starting from a blank page.',
      'Everything goes through review before publishing.',
    ],
    offers: [
      'Drafts for blogs, emails, landing pages and product descriptions',
      'Brand voice and style guide built into the agent',
      'Versions for different channels and audiences',
      'Fact-check prompts and review workflow',
    ],
    benefits: [
      { title: 'Faster drafts', desc: 'Start from a solid first version.' },
      { title: 'Consistent voice', desc: 'Every piece follows your guidelines.' },
      { title: 'Easy to scale', desc: 'More content without more stress.' },
    ],
    useCases: ['Product catalog descriptions', 'Email campaigns', 'Regular blog publishing'],
    stack: ['LLM APIs', 'Brand guideline prompts and examples', 'CMS integrations (WordPress, Shopify)', 'Review and approval workflow'],
    faqs: [
      {
        q: 'Will the content sound generic?',
        a: 'We train the agent with your guidelines and real examples, and a person always reviews before publishing.',
      },
      {
        q: 'Can it publish directly to my website?',
        a: 'It can, if you want. Many teams prefer to keep a manual approval step.',
      },
    ],
  },

  'agents/marketing/social-media': {
    image: { src: '/images/pages/agents-marketing-social-media.svg', alt: 'Illustration for Social Media' },
    intro: 'An AI agent that plans, drafts and schedules social posts, and keeps an eye on comments and messages.',
    overview: [
      'Staying active on several platforms takes constant effort. The agent prepares posts that fit each platform, schedules them and reports what worked.',
      'It can also sort incoming comments and messages so your team replies to the important ones first.',
    ],
    offers: [
      'Post ideas and drafts for each platform',
      'Scheduling and a shared content calendar',
      'Comment and message sorting, with suggested replies',
      'Weekly performance summaries',
    ],
    benefits: [
      { title: 'Regular posting', desc: 'A steady schedule without daily scrambling.' },
      { title: 'Quicker replies', desc: 'Important messages rise to the top.' },
      { title: 'Clear results', desc: 'See which posts perform and why.' },
    ],
    useCases: ['Small teams managing many channels', 'Product launch campaigns', 'Community and brand monitoring'],
    stack: ['LLM APIs', 'Social platform APIs where available', 'Scheduling tools', 'Analytics integrations'],
    faqs: [
      {
        q: 'Does it post without approval?',
        a: 'Only if you want it to. Most teams approve drafts first.',
      },
      {
        q: 'Which platforms are supported?',
        a: 'It depends on what each platform allows through its API. Tell us your channels and we will confirm.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / OPERATIONS                                                 */
  /* ------------------------------------------------------------------ */
  'agents/operations/order-processing': {
    image: { src: '/images/pages/agents-operations-order-processing.svg', alt: 'Illustration for Order Processing' },
    intro: 'An AI agent that reads incoming orders from email, PDFs and portals and enters them into your system correctly.',
    overview: [
      'Orders often arrive in different formats, and someone has to read each one and key it in. This is slow and mistakes are easy to make.',
      'The agent extracts the details, checks them against your product and price data, and flags anything unclear for a person.',
    ],
    offers: [
      'Reading orders from email, PDF, spreadsheet and web forms',
      'Matching items, prices and customers to your records',
      'Entry into your ERP or order system',
      'Exception queue for orders that need a human check',
    ],
    benefits: [
      { title: 'Faster turnaround', desc: 'Orders are processed in minutes.' },
      { title: 'Fewer errors', desc: 'Automatic checks against your data.' },
      { title: 'Staff time freed', desc: 'People handle only the exceptions.' },
    ],
    useCases: ['Wholesale and B2B order intake', 'Distributors with many order formats', 'Peak-season order spikes'],
    stack: ['LLM APIs and OCR', 'ERP and order system APIs', 'Python or Node.js', 'Queues and logging'],
    faqs: [
      {
        q: 'What if an order is unclear?',
        a: 'It goes to an exception queue with the reason, so a person can fix it quickly.',
      },
      {
        q: 'Can it work with our ERP?',
        a: 'Usually yes, if the ERP has an API or import option. We check this at the start.',
      },
    ],
  },

  'agents/operations/order-consolidation': {
    image: { src: '/images/pages/agents-operations-order-consolidation.svg', alt: 'Illustration for Order Consolidation' },
    intro: 'An AI agent that groups related orders and shipments to cut handling effort and shipping cost.',
    overview: [
      'Customers often place several orders close together, or different orders go to the same destination. Handling each one separately costs time and money.',
      'The agent finds orders that can be combined, follows your rules, and prepares the combined shipment.',
    ],
    offers: [
      'Detection of orders that can be merged by customer, address or date',
      'Rules for weight, size, delivery date and product type',
      'Consolidated pick lists and shipping documents',
      'Savings reports',
    ],
    benefits: [
      { title: 'Lower shipping cost', desc: 'Fewer, fuller shipments.' },
      { title: 'Less handling', desc: 'One pick and pack instead of several.' },
      { title: 'Rule based', desc: 'You decide what may be combined.' },
    ],
    useCases: ['Ecommerce fulfilment', 'Distribution centres', 'B2B repeat orders'],
    stack: ['Python or Node.js', 'Warehouse and ERP APIs', 'Rule engine', 'Shipping carrier APIs'],
    faqs: [
      {
        q: 'Can it break the rules we set?',
        a: 'No. Consolidation follows your rules, and anything outside them is left alone or sent for review.',
      },
      {
        q: 'Will customers see any change?',
        a: 'Only if you want it to. Delivery promises are checked against your rules first.',
      },
    ],
  },

  'agents/operations/trade-operations': {
    image: { src: '/images/pages/agents-operations-trade-operations.svg', alt: 'Illustration for Trade Operations' },
    intro: 'An AI agent that supports the paperwork and checks behind trade and shipping, so deals settle correctly and on time.',
    overview: [
      'Trade operations involve many documents, such as invoices, bills of lading, packing lists and certificates, and details must match across all of them.',
      'The agent reads the documents, compares key fields and flags differences before they cause delays.',
    ],
    offers: [
      'Reading and extracting data from trade documents',
      'Cross-checking quantities, prices, dates and party names',
      'Deadline reminders and status tracking',
      'Discrepancy reports for your team to resolve',
    ],
    benefits: [
      { title: 'Fewer delays', desc: 'Mismatches are caught early.' },
      { title: 'Less manual checking', desc: 'Routine comparison is automatic.' },
      { title: 'Clear audit trail', desc: 'Every check is recorded.' },
    ],
    useCases: ['Import and export documentation', 'Commodity and goods trading', 'Settlement and reconciliation'],
    stack: ['LLM APIs and OCR', 'Document parsing', 'ERP and trade system APIs', 'Python', 'Audit logging'],
    faqs: [
      {
        q: 'Does it replace our compliance checks?',
        a: 'No. It supports your team by finding mismatches, and people remain responsible for decisions and compliance.',
      },
      {
        q: 'Which document types can it read?',
        a: 'Most common PDF and scan formats. We test with your real documents during setup.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / CUSTOMER SUPPORT                                           */
  /* ------------------------------------------------------------------ */
  'agents/customer-support/email-communication': {
    image: { src: '/images/pages/agents-customer-support-email-communication.svg', alt: 'Illustration for Email Communication' },
    intro: 'An AI agent that sorts your support inbox, drafts replies and sends routine answers, so customers hear back sooner.',
    overview: [
      'Support inboxes fill up with repeated questions, and urgent messages get buried. The agent reads each email, works out what it is about and how urgent it is, and prepares a reply.',
      'Your team approves the replies, or lets the agent send routine ones.',
    ],
    offers: [
      'Automatic sorting by topic, urgency and customer',
      'Reply drafts based on your help articles and past answers',
      'Routing to the right team member',
      'Summaries of long email threads',
    ],
    benefits: [
      { title: 'Faster first reply', desc: 'Customers hear back quickly.' },
      { title: 'Nothing buried', desc: 'Urgent emails are flagged.' },
      { title: 'Consistent tone', desc: 'Replies follow your standards.' },
    ],
    useCases: ['Shared support inboxes', 'Order and delivery questions', 'Complaint handling'],
    stack: ['LLM APIs', 'Gmail, Outlook and helpdesk APIs', 'Knowledge base search (RAG)', 'Node.js or Python'],
    faqs: [
      {
        q: 'Can it send replies on its own?',
        a: 'Yes for routine questions you approve, and with human review for everything else.',
      },
      {
        q: 'Does it learn from our past emails?',
        a: 'It can use your help articles and approved past replies as reference material.',
      },
    ],
  },

  'agents/customer-support/warranty-management': {
    image: { src: '/images/pages/agents-customer-support-warranty-management.svg', alt: 'Illustration for Warranty Management' },
    intro: 'An AI agent that checks warranty status, guides customers through claims and prepares the paperwork.',
    overview: [
      'Warranty questions follow a pattern: is the product covered, what is needed, what happens next. Answering each by hand takes time and is easy to get wrong.',
      'The agent checks purchase and warranty data, asks the customer for what is missing and opens the claim.',
    ],
    offers: [
      'Warranty lookup by serial number or order',
      'Guided claim intake with photos and documents',
      'Eligibility checks against your policy',
      'Case creation and status updates for the customer',
    ],
    benefits: [
      { title: 'Quick answers', desc: 'Customers learn their coverage immediately.' },
      { title: 'Complete claims', desc: 'Needed details are collected up front.' },
      { title: 'Consistent decisions', desc: 'Policy rules are applied the same way every time.' },
    ],
    useCases: ['Electronics and appliance makers', 'Retailers with extended warranties', 'Service centre intake'],
    stack: ['LLM APIs', 'Order and warranty database integration', 'Helpdesk APIs', 'Image and document upload handling'],
    faqs: [
      {
        q: 'Who approves a claim?',
        a: 'You decide. The agent can recommend a result and your team approves, or it can auto-approve clear cases you define.',
      },
      {
        q: 'Can customers upload photos?',
        a: 'Yes. Photos and documents are attached to the claim case.',
      },
    ],
  },

  'agents/customer-support/order-management': {
    image: { src: '/images/pages/agents-customer-support-order-management.svg', alt: 'Illustration for Order Management' },
    intro: 'An AI agent that answers order questions and handles changes, such as tracking, address updates and cancellations.',
    overview: [
      'A large share of support questions are about orders: where is it, can I change it, can I cancel. The answers already exist in your systems.',
      'The agent looks up the order and answers or makes the change within the rules you set.',
    ],
    offers: [
      'Order status and tracking answers',
      'Address change, cancellation and reschedule handling within your rules',
      'Hand-off to a person for exceptions',
      'Customer updates by email, chat or WhatsApp',
    ],
    benefits: [
      { title: 'Instant answers', desc: 'No waiting for an agent to look it up.' },
      { title: 'Lower ticket volume', desc: 'Routine order questions are handled automatically.' },
      { title: 'Safe changes', desc: 'Actions follow your policy.' },
    ],
    useCases: ['Ecommerce support', 'Delivery and logistics enquiries', 'Subscription order changes'],
    stack: ['LLM APIs', 'Shopify, WooCommerce or custom order APIs', 'Courier tracking APIs', 'Chat and WhatsApp channels'],
    faqs: [
      {
        q: 'Can it change an order?',
        a: 'Yes, within rules you set, such as only before dispatch. Other cases go to your team.',
      },
      {
        q: 'How does it identify the customer?',
        a: 'By order number plus another detail such as email or phone, so private data is not shared with the wrong person.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / FINANCE                                                    */
  /* ------------------------------------------------------------------ */
  'agents/finance/inquiry-management': {
    image: { src: '/images/pages/agents-finance-inquiry-management.svg', alt: 'Illustration for Inquiry Management' },
    intro: 'An AI agent that answers finance questions from customers, vendors and staff, using your records and policies.',
    overview: [
      'Finance teams get the same questions repeatedly: has my invoice been paid, when will I be paid, what is the policy on expenses.',
      'The agent finds the answer in your systems and replies, passing anything sensitive or unusual to a person.',
    ],
    offers: [
      'Payment status and due-date answers',
      'Policy and process answers from your finance documents',
      'Ticket creation and routing for complex questions',
      'Summary of open inquiries for the finance team',
    ],
    benefits: [
      { title: 'Fewer interruptions', desc: 'The finance team focuses on real work.' },
      { title: 'Quick replies', desc: 'Vendors and staff get answers at once.' },
      { title: 'Controlled access', desc: 'Only permitted information is shared.' },
    ],
    useCases: ['Vendor payment queries', 'Employee expense questions', 'Customer billing questions'],
    stack: ['LLM APIs', 'Accounting software APIs (Tally, Zoho Books, QuickBooks)', 'Knowledge base search', 'Role-based access'],
    faqs: [
      {
        q: 'Is financial data safe?',
        a: 'We design access carefully so the agent only sees what it needs, and we log every answer. We discuss security details for your setup.',
      },
      {
        q: 'Which accounting software does it work with?',
        a: 'It depends on available APIs. Tell us what you use and we will confirm.',
      },
    ],
  },

  'agents/finance/accounts-payable': {
    image: { src: '/images/pages/agents-finance-accounts-payable.svg', alt: 'Illustration for Accounts Payable' },
    intro: 'An AI agent that reads vendor invoices, matches them to orders and prepares payments for approval.',
    overview: [
      'Accounts payable means a steady flow of invoices to read, check and approve. Manual entry is slow and mistakes lead to wrong or duplicate payments.',
      'The agent extracts the invoice data, matches it with purchase orders and receipts, and prepares it for approval.',
    ],
    offers: [
      'Invoice reading from email and PDF',
      'Three-way match between invoice, purchase order and receipt',
      'Duplicate and unusual-amount checks',
      'Approval routing and payment schedule preparation',
    ],
    benefits: [
      { title: 'Faster processing', desc: 'Invoices move to approval in minutes.' },
      { title: 'Fewer payment errors', desc: 'Checks catch mismatches and duplicates.' },
      { title: 'Better cash planning', desc: 'Due dates are tracked automatically.' },
    ],
    useCases: ['High invoice volume', 'Multi-entity or multi-vendor businesses', 'Month-end close'],
    stack: ['LLM APIs and OCR', 'Accounting and ERP APIs', 'Approval workflows', 'Python or Node.js'],
    faqs: [
      {
        q: 'Does the agent make payments?',
        a: 'It prepares payments. A person approves them, unless you set clear rules for small routine amounts.',
      },
      {
        q: 'How accurate is the invoice reading?',
        a: 'We test on your real invoices and set a confidence limit. Unclear invoices go to a person.',
      },
    ],
  },

  'agents/finance/invoice-management': {
    image: { src: '/images/pages/agents-finance-invoice-management.svg', alt: 'Illustration for Invoice Management' },
    intro: 'An AI agent that organises invoices, tracks their status and keeps your records ready for reporting and audits.',
    overview: [
      'Invoices come and go in many forms, and finding the right one later can be a chore. The agent files each invoice, tags it and tracks it through its lifecycle.',
      'It also flags overdue items and missing paperwork.',
    ],
    offers: [
      'Automatic filing and tagging of invoices',
      'Status tracking from received to paid',
      'Reminders for overdue and upcoming items',
      'Search in plain language and audit-ready exports',
    ],
    benefits: [
      { title: 'Everything findable', desc: 'Search invoices by vendor, date or amount.' },
      { title: 'Nothing overdue unnoticed', desc: 'Reminders on due dates.' },
      { title: 'Audit ready', desc: 'Records and history in one place.' },
    ],
    useCases: ['Small finance teams', 'Audit preparation', 'GST and tax reporting support'],
    stack: ['LLM APIs and OCR', 'Cloud storage', 'Accounting APIs', 'Search index'],
    faqs: [
      {
        q: 'Does it help with tax filing?',
        a: 'It organises and extracts invoice data to support your accountant. Tax filing and advice stay with your qualified professionals.',
      },
      {
        q: 'Can it handle old invoices?',
        a: 'Yes. We can process an existing archive in a one-time batch.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / BILLING                                                    */
  /* ------------------------------------------------------------------ */
  'agents/billing/invoice-generation': {
    image: { src: '/images/pages/agents-billing-invoice-generation.svg', alt: 'Illustration for Invoice Generation' },
    intro: 'An AI agent that creates correct invoices from orders, time sheets or contracts and sends them on schedule.',
    overview: [
      'Creating invoices by hand is repetitive, and mistakes delay payment. The agent gathers the details, applies the right prices and taxes, and produces the invoice.',
      'You can review before sending, or let routine invoices go out automatically.',
    ],
    offers: [
      'Invoice creation from orders, timesheets and contracts',
      'Price, discount and tax rules applied automatically',
      'Sending by email with PDF attached',
      'Recurring and milestone billing schedules',
    ],
    benefits: [
      { title: 'On-time billing', desc: 'Invoices go out as soon as work is done.' },
      { title: 'Fewer errors', desc: 'Rules apply the right prices and taxes.' },
      { title: 'Faster payment', desc: 'Prompt invoices usually mean prompt payment.' },
    ],
    useCases: ['Services businesses billing by hours', 'Subscription and recurring billing', 'Project milestone invoicing'],
    stack: ['LLM APIs', 'Accounting software APIs', 'PDF generation', 'Email integration', 'Scheduler'],
    faqs: [
      {
        q: 'Can it handle taxes such as GST?',
        a: 'It can apply the tax rules you configure. Please confirm the rules with your accountant.',
      },
      {
        q: 'Can we review invoices first?',
        a: 'Yes. A review step is easy to add and often recommended at the start.',
      },
    ],
  },

  'agents/billing/accounts-receivable': {
    image: { src: '/images/pages/agents-billing-accounts-receivable.svg', alt: 'Illustration for Accounts Receivable' },
    intro: 'An AI agent that tracks what customers owe, sends polite reminders and helps you get paid sooner.',
    overview: [
      'Late payments strain cash flow, but chasing them takes time and tact. The agent monitors every open invoice and follows up at the right moments.',
      'It also matches incoming payments to invoices and reports who is late.',
    ],
    offers: [
      'Tracking of open and overdue invoices',
      'Reminder emails with your tone and schedule',
      'Payment matching against bank or payment records',
      'Ageing reports and cash flow forecasts',
    ],
    benefits: [
      { title: 'Better cash flow', desc: 'Late payers are followed up consistently.' },
      { title: 'Less awkward chasing', desc: 'Reminders go out without anyone having to write them.' },
      { title: 'Clear picture', desc: 'Know who owes what and for how long.' },
    ],
    useCases: ['Businesses with many credit customers', 'Collections follow-up', 'Monthly receivables review'],
    stack: ['LLM APIs', 'Accounting software APIs', 'Bank and payment gateway data', 'Email integration'],
    faqs: [
      {
        q: 'Can I control the tone of reminders?',
        a: 'Yes. You set the wording, timing and when a case should go to a person.',
      },
      {
        q: 'Does it contact customers without approval?',
        a: 'Only if you allow it. Many teams start with approval and later automate the early reminders.',
      },
    ],
  },

  'agents/billing/refund-management': {
    image: { src: '/images/pages/agents-billing-refund-management.svg', alt: 'Illustration for Refund Management' },
    intro: 'An AI agent that handles refund requests by checking eligibility, preparing the refund and keeping the customer informed.',
    overview: [
      'Refunds need a few checks: was the item bought, is it within the return window, was it already refunded. Each check takes time when done by hand.',
      'The agent runs the checks, applies your policy and prepares the refund, and passes unusual cases to a person.',
    ],
    offers: [
      'Refund request intake from email, chat and forms',
      'Policy checks on dates, conditions and amounts',
      'Refund preparation in your payment or accounting system',
      'Customer updates and a log of every decision',
    ],
    benefits: [
      { title: 'Quicker refunds', desc: 'Customers do not wait days for a decision.' },
      { title: 'Policy applied fairly', desc: 'Same rules for everyone.' },
      { title: 'Fraud checks', desc: 'Repeated or odd requests are flagged.' },
    ],
    useCases: ['Ecommerce returns', 'Subscription cancellations', 'Service credit requests'],
    stack: ['LLM APIs', 'Payment gateway APIs', 'Order and accounting integrations', 'Audit logging'],
    faqs: [
      {
        q: 'Can it issue the refund by itself?',
        a: 'Only within limits you set, such as small amounts that clearly meet the policy. Larger or unusual ones need approval.',
      },
      {
        q: 'How are fraud risks handled?',
        a: 'It flags patterns such as repeated refunds, and your team reviews those cases.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / LEGAL                                                      */
  /* ------------------------------------------------------------------ */
  'agents/legal/contract-drafting': {
    image: { src: '/images/pages/agents-legal-contract-drafting.svg', alt: 'Illustration for Contract Drafting' },
    intro: 'An AI agent that prepares first drafts of standard contracts from your templates and clause library, for a lawyer to review.',
    overview: [
      'Many contracts follow the same structure with a few changing details. The agent fills in your approved templates and clauses based on the deal information.',
      'It speeds up routine drafting. It does not replace legal review, and a qualified person should check every draft before it is used.',
    ],
    offers: [
      'Drafting from your approved templates and clause library',
      'Automatic filling of names, dates, amounts and terms',
      'Alternative clause suggestions from your own library',
      'Version tracking and approval workflow',
    ],
    benefits: [
      { title: 'Faster first drafts', desc: 'Routine contracts start from a ready document.' },
      { title: 'Consistent wording', desc: 'Approved clauses are used every time.' },
      { title: 'Lawyer time saved', desc: 'Legal review focuses on the important points.' },
    ],
    useCases: ['NDAs and service agreements', 'Vendor and employment contracts', 'Sales agreements with standard terms'],
    stack: ['LLM APIs', 'Template and document generation (DOCX, PDF)', 'Clause library database', 'Approval workflow'],
    faqs: [
      {
        q: 'Is the output legal advice?',
        a: 'No. It produces drafts from your own templates, and a qualified lawyer should review them before use.',
      },
      {
        q: 'Can it use our own templates?',
        a: 'Yes. Your approved templates and clauses are the base for every draft.',
      },
    ],
  },

  'agents/legal/contract-review': {
    image: { src: '/images/pages/agents-legal-contract-review.svg', alt: 'Illustration for Contract Review' },
    intro: 'An AI agent that reads contracts, highlights key terms and flags clauses that differ from your standards, to speed up human review.',
    overview: [
      'Reading every contract in full takes a lot of time. The agent extracts the key terms and compares the clauses against your preferred positions.',
      'It points your reviewer to the sections that need attention. A qualified person still makes the decisions.',
    ],
    offers: [
      'Summary of key terms: parties, dates, payment, renewal and termination',
      'Comparison against your playbook or standard clauses',
      'Flags for unusual, missing or risky wording',
      'Comparison between versions of the same contract',
    ],
    benefits: [
      { title: 'Review in less time', desc: 'Reviewers start with the important points.' },
      { title: 'Fewer missed clauses', desc: 'Missing or unusual terms are highlighted.' },
      { title: 'Searchable contracts', desc: 'Find terms across your whole contract set.' },
    ],
    useCases: ['Vendor and customer contract review', 'Renewal tracking', 'Due diligence document review'],
    stack: ['LLM APIs', 'Document parsing (PDF, DOCX)', 'Clause playbook comparison', 'Search index'],
    faqs: [
      {
        q: 'Can it replace a lawyer?',
        a: 'No. It helps reviewers work faster, but legal judgement and sign-off stay with qualified people.',
      },
      {
        q: 'Is our contract data kept private?',
        a: 'We choose providers and settings suited to confidential documents and explain them before we start.',
      },
    ],
  },

  'agents/legal/risk-assessment': {
    image: { src: '/images/pages/agents-legal-risk-assessment.svg', alt: 'Illustration for Risk Assessment' },
    intro: 'An AI agent that scans documents and deals for common risk signals, and gives your team a structured summary to review.',
    overview: [
      'Risk review means reading many documents and remembering what to look for. The agent applies a checklist you define and reports what it finds.',
      'It supports your team by pointing out issues. It does not make legal or compliance decisions.',
    ],
    offers: [
      'Risk checklists applied across contracts and policies',
      'Scoring or tagging by risk type and severity',
      'Summary reports with the supporting text highlighted',
      'Tracking of open issues and owners',
    ],
    benefits: [
      { title: 'Consistent checks', desc: 'The same checklist for every document.' },
      { title: 'Evidence included', desc: 'Each flag links to the relevant text.' },
      { title: 'Better prioritising', desc: 'Time goes to the highest risks first.' },
    ],
    useCases: ['Vendor and third-party risk review', 'Policy and compliance gap checks', 'Pre-deal document screening'],
    stack: ['LLM APIs', 'Document parsing', 'Rule and checklist engine', 'Dashboards and reports'],
    faqs: [
      {
        q: 'Who defines what counts as a risk?',
        a: 'You do. We build the checklist with your legal or compliance team.',
      },
      {
        q: 'Does it give a final verdict?',
        a: 'No. It gives a structured summary for a qualified person to judge.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / PROCUREMENT                                                */
  /* ------------------------------------------------------------------ */
  'agents/procurement/payment-validation': {
    image: { src: '/images/pages/agents-procurement-payment-validation.svg', alt: 'Illustration for Payment Validation' },
    intro: 'An AI agent that checks vendor payments against orders, contracts and approvals before money goes out.',
    overview: [
      'Paying the wrong amount, to the wrong account or twice is costly. Checking every payment by hand is slow.',
      'The agent compares each payment request with the purchase order, receipt and approval, and stops anything that does not match.',
    ],
    offers: [
      'Matching of payment requests against purchase orders and receipts',
      'Checks for duplicates, changed bank details and unusual amounts',
      'Approval verification',
      'Exception reports for the finance team',
    ],
    benefits: [
      { title: 'Fewer wrong payments', desc: 'Mismatches are caught before payment.' },
      { title: 'Fraud awareness', desc: 'Changes in bank details are flagged.' },
      { title: 'Clear audit trail', desc: 'Every check is logged.' },
    ],
    useCases: ['High-volume vendor payments', 'Preventing duplicate payments', 'Month-end payment review'],
    stack: ['LLM APIs and OCR', 'ERP and accounting APIs', 'Rule engine', 'Audit logging'],
    faqs: [
      {
        q: 'Can it block a payment?',
        a: 'It can hold a payment and notify the approver. The final decision stays with your team.',
      },
      {
        q: 'What data does it need?',
        a: 'Purchase orders, receipts, invoices and approval records, ideally from your ERP.',
      },
    ],
  },

  'agents/procurement/procurement-policy': {
    image: { src: '/images/pages/agents-procurement-procurement-policy.svg', alt: 'Illustration for Procurement Policy' },
    intro: 'An AI agent that answers buying-policy questions and checks that purchases follow the rules.',
    overview: [
      'Employees often do not know the rules: who can approve what, which vendors are preferred, when quotes are needed. They ask procurement, which takes time on both sides.',
      'The agent answers from your policy documents and checks requests against them.',
    ],
    offers: [
      'Policy question answering from your documents',
      'Compliance checks on purchase requests',
      'Guidance on approval levels, quotes and preferred vendors',
      'Reports on requests that fall outside policy',
    ],
    benefits: [
      { title: 'Fewer questions to procurement', desc: 'Staff get answers instantly.' },
      { title: 'Better compliance', desc: 'Issues are found before purchase.' },
      { title: 'One source', desc: 'Everyone sees the same current policy.' },
    ],
    useCases: ['Large organisations with many buyers', 'New employee training', 'Spend control'],
    stack: ['LLM APIs', 'Policy document search (RAG)', 'Procurement system APIs', 'Slack or Teams integration'],
    faqs: [
      {
        q: 'What if the policy changes?',
        a: 'Update the document and the agent uses the new version after re-indexing.',
      },
      {
        q: 'Can it block a non-compliant request?',
        a: 'It can flag or route it for approval, depending on how you set it up.',
      },
    ],
  },

  'agents/procurement/purchase-orders': {
    image: { src: '/images/pages/agents-procurement-purchase-orders.svg', alt: 'Illustration for Purchase Orders' },
    intro: 'An AI agent that creates purchase orders from approved requests and follows them through to delivery.',
    overview: [
      'Raising and tracking purchase orders involves repeated data entry and follow-ups. The agent drafts the order from the request, sends it for approval and tracks it afterwards.',
      'It also reminds vendors and your team when a delivery is late.',
    ],
    offers: [
      'Purchase order creation from approved requests',
      'Vendor selection support using your price lists',
      'Sending orders and tracking confirmations',
      'Delivery reminders and receipt matching',
    ],
    benefits: [
      { title: 'Faster ordering', desc: 'Less time on forms and emails.' },
      { title: 'Fewer missed deliveries', desc: 'Late items are chased automatically.' },
      { title: 'Cleaner records', desc: 'Every order is tracked end to end.' },
    ],
    useCases: ['Manufacturing and retail purchasing', 'Office and project supplies', 'Repeat orders'],
    stack: ['LLM APIs', 'ERP and procurement APIs', 'Email integration', 'Approval workflow'],
    faqs: [
      {
        q: 'Does it choose the vendor?',
        a: 'It can suggest vendors from your price lists and rules, and your team approves the choice.',
      },
      {
        q: 'Can it connect to our ERP?',
        a: 'Usually yes, if the ERP offers an API or import option.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AGENTS / HUMAN RESOURCES                                            */
  /* ------------------------------------------------------------------ */
  'agents/human-resources/talent-acquisition': {
    image: { src: '/images/pages/agents-human-resources-talent-acquisition.svg', alt: 'Illustration for Talent Acquisition' },
    intro: 'An AI agent that helps with sourcing, screening and scheduling, so recruiters spend more time talking to people.',
    overview: [
      'Recruiters spend much of their time reading resumes and arranging interviews. The agent handles the early steps and leaves the decisions to people.',
      'We recommend careful setup and regular checks to keep screening fair and free of unwanted bias.',
    ],
    offers: [
      'Job description drafting',
      'Resume parsing and matching against role requirements',
      'Candidate summaries for recruiters',
      'Interview scheduling and candidate updates',
    ],
    benefits: [
      { title: 'Shorter hiring time', desc: 'Early screening is quicker.' },
      { title: 'Better candidate experience', desc: 'Timely updates and scheduling.' },
      { title: 'Recruiter focus', desc: 'More time for conversations.' },
    ],
    useCases: ['High-volume hiring', 'Hiring across many roles', 'Campus recruitment'],
    stack: ['LLM APIs', 'Resume parsing', 'ATS and calendar integrations', 'Email automation'],
    faqs: [
      {
        q: 'Does the agent decide who to hire?',
        a: 'No. It organises information and recruiters make every decision.',
      },
      {
        q: 'How do you avoid bias?',
        a: 'We focus matching on job-related criteria, test the results and keep a human in the decision.',
      },
    ],
  },

  'agents/human-resources/employee-onboarding': {
    image: { src: '/images/pages/agents-human-resources-employee-onboarding.svg', alt: 'Illustration for Employee Onboarding' },
    intro: 'An AI agent that guides new joiners through paperwork, setup and first-week tasks, and answers their questions.',
    overview: [
      'A new hire has many forms to fill, accounts to get and people to meet. When this is poorly organised, the first week is stressful for everyone.',
      'The agent sends the right tasks at the right time, tracks completion, and answers common questions.',
    ],
    offers: [
      'Personalised onboarding checklist by role and location',
      'Document collection and reminders',
      'Requests to IT, admin and managers for accounts and equipment',
      'Question answering about policies and benefits',
    ],
    benefits: [
      { title: 'Smoother first week', desc: 'New joiners know what to do next.' },
      { title: 'Less HR chasing', desc: 'Reminders happen automatically.' },
      { title: 'Consistent experience', desc: 'Every hire gets the same quality of onboarding.' },
    ],
    useCases: ['Growing teams', 'Remote and multi-location hiring', 'Internship batches'],
    stack: ['LLM APIs', 'HRMS integrations', 'Slack, Teams and email', 'Policy document search (RAG)'],
    faqs: [
      {
        q: 'Does it handle personal documents?',
        a: 'It can collect them through a secure flow. We design access and storage carefully with you.',
      },
      {
        q: 'Can we customise the checklist?',
        a: 'Yes, by role, team and location.',
      },
    ],
  },

  'agents/human-resources/hr-support': {
    image: { src: '/images/pages/agents-human-resources-hr-support.svg', alt: 'Illustration for HR Support' },
    intro: 'An AI agent that answers employee questions about leave, payroll, benefits and policies, any time of day.',
    overview: [
      'HR teams answer the same questions often: how many leave days do I have, how do I claim expenses, what is the policy on this. Each answer interrupts other work.',
      'The agent answers from your policies and records, and passes private or sensitive matters to a person.',
    ],
    offers: [
      'Answers from your HR policies and handbook',
      'Leave balance and request support through your HR system',
      'Ticketing for issues that need an HR person',
      'Reports on common questions, to improve your policies',
    ],
    benefits: [
      { title: 'Quick answers', desc: 'Employees do not wait for an email reply.' },
      { title: 'HR time freed', desc: 'More time for people matters.' },
      { title: 'Consistent information', desc: 'Everyone gets the same policy answers.' },
    ],
    useCases: ['Employee helpdesk', 'Policy and benefits questions', 'Leave and attendance queries'],
    stack: ['LLM APIs', 'HRMS APIs', 'Policy search (RAG)', 'Slack, Teams or WhatsApp'],
    faqs: [
      {
        q: 'What about sensitive issues?',
        a: 'Sensitive topics are handed to a person. We set the rules for this together.',
      },
      {
        q: 'Can it see other employees data?',
        a: 'No. Access is restricted to each employee own information.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* INDUSTRIES / HEALTHCARE                                             */
  /* ------------------------------------------------------------------ */
  'industries/healthcare/patient-care': {
    image: { src: '/images/pages/industries-healthcare-patient-care.svg', alt: 'Illustration for Patient Care' },
    intro: 'Software and AI tools that help care teams keep in touch with patients, from reminders to follow-up and answers to common questions.',
    overview: [
      'Good care continues between visits. Patients forget appointments, have questions about instructions and need follow-up. Staff are often too busy to reach everyone.',
      'We build tools that support your care team. They help with communication and organisation and do not replace clinical judgement.',
    ],
    offers: [
      'Appointment reminders and rescheduling',
      'Patient communication by app, SMS and WhatsApp',
      'Follow-up questionnaires and care-plan reminders',
      'Answers to common non-clinical questions, with hand-off to staff',
    ],
    benefits: [
      { title: 'Fewer missed appointments', desc: 'Timely reminders and easy rescheduling.' },
      { title: 'Better follow-up', desc: 'Patients are checked on after visits.' },
      { title: 'Less front-desk load', desc: 'Routine queries are handled automatically.' },
    ],
    useCases: ['Clinics and hospitals', 'Post-discharge follow-up', 'Chronic care programs'],
    stack: ['Next.js and React Native', 'LLM APIs', 'WhatsApp and SMS gateways', 'Secure databases with access control'],
    faqs: [
      {
        q: 'Does it give medical advice?',
        a: 'No. It supports communication and organisation. Medical questions go to your clinical staff.',
      },
      {
        q: 'How is patient data protected?',
        a: 'We design access control, encryption and logging for health data and discuss the requirements that apply in your country.',
      },
    ],
  },

  'industries/healthcare/medical-diagnosis': {
    image: { src: '/images/pages/industries-healthcare-medical-diagnosis.svg', alt: 'Illustration for Medical Diagnosis' },
    intro: 'Decision-support tools that help clinicians review information and spot patterns, with the clinician always making the final call.',
    overview: [
      'Clinicians handle large amounts of information in little time. Decision-support software can organise records, highlight findings and bring up relevant references.',
      'These tools assist qualified professionals. They are not a substitute for a doctor, and they need careful testing for the setting they are used in.',
    ],
    offers: [
      'Summaries of patient history and test results for clinicians',
      'Risk scoring and flags based on clinical rules or models',
      'Symptom intake forms that organise patient information',
      'Evidence and guideline lookup for clinicians',
    ],
    benefits: [
      { title: 'Information at a glance', desc: 'Relevant history in one view.' },
      { title: 'Second look', desc: 'Flags help clinicians notice what matters.' },
      { title: 'Clinician in control', desc: 'Every output is reviewed by a professional.' },
    ],
    useCases: ['Clinical decision support', 'Triage support', 'Preparation of case summaries'],
    stack: ['Python and ML libraries', 'LLM APIs with strict prompts', 'FHIR and HL7 integration', 'Audit logging'],
    faqs: [
      {
        q: 'Can the AI diagnose patients?',
        a: 'No. It supports clinicians with information and flags. Diagnosis and treatment decisions remain with qualified doctors.',
      },
      {
        q: 'Do these tools need regulatory approval?',
        a: 'Software that supports diagnosis can fall under medical device rules in some countries. We advise you to check the requirements for your case.',
      },
    ],
  },

  'industries/healthcare/medical-imaging': {
    image: { src: '/images/pages/industries-healthcare-medical-imaging.svg', alt: 'Illustration for Medical Imaging' },
    intro: 'Image analysis tools that help radiology and imaging teams review scans more efficiently, with experts confirming every result.',
    overview: [
      'Imaging teams review large numbers of scans. Software can help organise them, highlight areas of interest and speed up routine measurements.',
      'These tools assist specialists. Models must be validated on data that matches your setting, and a qualified person reviews every finding.',
    ],
    offers: [
      'Image viewers and workflow tools for imaging teams',
      'Models that highlight regions of interest for review',
      'Measurements and report drafting support',
      'Integration with PACS and DICOM systems',
    ],
    benefits: [
      { title: 'Faster review', desc: 'Routine steps are assisted.' },
      { title: 'Consistent measurements', desc: 'Same method each time.' },
      { title: 'Specialist stays in charge', desc: 'Findings are always confirmed by an expert.' },
    ],
    useCases: ['Radiology workflow support', 'Screening programs', 'Research imaging projects'],
    stack: ['Python, PyTorch and MONAI', 'DICOM and PACS integration', 'Web viewers', 'GPU cloud or on-premise servers'],
    faqs: [
      {
        q: 'How accurate are the models?',
        a: 'Accuracy depends on the data and task. We evaluate on data that matches your setting and report the results honestly.',
      },
      {
        q: 'Is regulatory approval needed?',
        a: 'Imaging software used for clinical decisions may need approval depending on your country. We recommend getting regulatory advice early.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* INDUSTRIES / CUSTOMER SUPPORT                                       */
  /* ------------------------------------------------------------------ */
  'industries/customer-support/customer-service': {
    image: { src: '/images/pages/industries-customer-support-customer-service.svg', alt: 'Illustration for Customer Service' },
    intro: 'Tools and AI that help service teams respond faster, keep customers informed and resolve issues the first time.',
    overview: [
      'Customers expect quick, clear answers on the channel they like. Service teams are pulled between volume and quality.',
      'We build the systems that bring every channel into one view, give agents the right information at once and automate the routine work.',
    ],
    offers: [
      'Unified inbox for email, chat, phone and social messages',
      'Customer history shown alongside each conversation',
      'Suggested replies and knowledge base search for agents',
      'Reports on response time, volume and customer satisfaction',
    ],
    benefits: [
      { title: 'One view of the customer', desc: 'Agents see the whole history.' },
      { title: 'Faster resolution', desc: 'Answers are easier to find.' },
      { title: 'Measurable service', desc: 'Clear numbers to improve against.' },
    ],
    useCases: ['Contact centres', 'Product and service companies', 'Growing support teams'],
    stack: ['Next.js and Node.js', 'LLM APIs', 'Helpdesk APIs (Zendesk, Freshdesk)', 'Telephony and chat channels'],
    faqs: [
      {
        q: 'Can you improve our existing helpdesk?',
        a: 'Yes. We often add AI and automation to a helpdesk you already use.',
      },
      {
        q: 'Will it reduce the need for agents?',
        a: 'It reduces repetitive work. Most teams use the time saved to improve quality and handle harder cases.',
      },
    ],
  },

  'industries/customer-support/support-automation': {
    image: { src: '/images/pages/industries-customer-support-support-automation.svg', alt: 'Illustration for Support Automation' },
    intro: 'Automation that handles the repetitive parts of support, such as routing, tagging, status updates and standard replies.',
    overview: [
      'A large share of support work follows clear rules. Automating it shortens response time and frees people for complex problems.',
      'We start with the highest-volume tasks and add more as the results prove themselves.',
    ],
    offers: [
      'Automatic tagging, prioritising and routing of tickets',
      'Self-service flows for common requests',
      'Standard replies and status updates sent automatically',
      'Escalation rules and service-level alerts',
    ],
    benefits: [
      { title: 'Shorter queues', desc: 'Routine tickets are resolved quickly.' },
      { title: 'Right person first time', desc: 'Tickets are routed correctly.' },
      { title: 'No missed deadlines', desc: 'Alerts before service targets are breached.' },
    ],
    useCases: ['High-volume ticket queues', 'After-hours support', 'Seasonal peaks'],
    stack: ['LLM APIs', 'Helpdesk and CRM APIs', 'Workflow automation', 'Node.js or Python'],
    faqs: [
      {
        q: 'What should we automate first?',
        a: 'The most frequent, simplest question types. We review your tickets to find them.',
      },
      {
        q: 'How do customers reach a person?',
        a: 'Every automated flow includes a clear route to a human agent.',
      },
    ],
  },

  'industries/customer-support/chatbots': {
    image: { src: '/images/pages/industries-customer-support-chatbots.svg', alt: 'Illustration for Chatbots' },
    intro: 'Customer-facing chatbots that answer questions from your own content and hand over to people for the rest.',
    overview: [
      'A support chatbot works best when it is focused: it knows your products, policies and common problems, and it is honest about what it cannot do.',
      'We train it on your content, test it with real questions and keep improving it from real conversations.',
    ],
    offers: [
      'Chatbots for your website, app and messaging channels',
      'Answers drawn from your help centre and product data',
      'Hand-over to a person with the conversation attached',
      'Conversation reports showing questions the bot could not answer',
    ],
    benefits: [
      { title: 'Always available', desc: 'Customers get help at any hour.' },
      { title: 'Improves over time', desc: 'Unanswered questions show what to add.' },
      { title: 'Safe hand-over', desc: 'Customers can always reach a person.' },
    ],
    useCases: ['Website visitor questions', 'Order and account help', 'Product guidance'],
    stack: ['LLM APIs', 'RAG over your content', 'WhatsApp and web chat', 'Next.js and Node.js'],
    faqs: [
      {
        q: 'How is this different from a simple FAQ bot?',
        a: 'It understands questions in natural language and answers from your content, rather than matching fixed keywords.',
      },
      {
        q: 'Can it support more than one language?',
        a: 'Yes, depending on the model. Tell us your languages and we will test them.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* INDUSTRIES / INSURANCE                                              */
  /* ------------------------------------------------------------------ */
  'industries/insurance/underwriting': {
    image: { src: '/images/pages/industries-insurance-underwriting.svg', alt: 'Illustration for Underwriting' },
    intro: 'Tools that collect and check application data, score risk and help underwriters make faster, more consistent decisions.',
    overview: [
      'Underwriting depends on reading many documents and applying detailed rules. Much of the early work is gathering and checking data.',
      'We build systems that prepare the case so the underwriter can concentrate on judgement. Decisions stay with your qualified team and follow your rules.',
    ],
    offers: [
      'Application intake and document reading',
      'Data checks against internal and external sources',
      'Risk scoring using your rules or models',
      'Case summaries and referral rules for underwriters',
    ],
    benefits: [
      { title: 'Faster quotes', desc: 'Cases are ready for review sooner.' },
      { title: 'Consistent decisions', desc: 'Same rules applied each time.' },
      { title: 'Explainable', desc: 'Each score shows what drove it.' },
    ],
    useCases: ['Health, life and general insurance', 'Small business policies', 'Straight-through processing of simple cases'],
    stack: ['Python and ML libraries', 'LLM APIs and OCR', 'Rule engine', 'Policy admin system APIs'],
    faqs: [
      {
        q: 'Can it approve policies automatically?',
        a: 'For clear, low-risk cases that follow rules you set, yes. Others are passed to an underwriter.',
      },
      {
        q: 'How do you handle fairness and regulation?',
        a: 'We keep scoring explainable, test for unwanted bias and recommend a review against the rules in your market.',
      },
    ],
  },

  'industries/insurance/claims-processing': {
    image: { src: '/images/pages/industries-insurance-claims-processing.svg', alt: 'Illustration for Claims Processing' },
    intro: 'Systems that take in claims, read the documents, check them against the policy and speed up fair settlement.',
    overview: [
      'Claims are where customers judge an insurer. Slow, unclear processing hurts trust, and manual checks cost money.',
      'We automate the intake and checking, and give your claims team a clear case summary. People still decide on complex or disputed claims.',
    ],
    offers: [
      'Claim intake through app, web and WhatsApp',
      'Reading of claim forms, bills and supporting documents',
      'Policy coverage checks and missing-document requests',
      'Fraud-pattern flags and case summaries for handlers',
    ],
    benefits: [
      { title: 'Faster settlement', desc: 'Simple claims move quickly.' },
      { title: 'Better customer updates', desc: 'Customers see where their claim stands.' },
      { title: 'Fraud awareness', desc: 'Unusual patterns are flagged for review.' },
    ],
    useCases: ['Health and motor claims', 'Property claims', 'High-volume small claims'],
    stack: ['LLM APIs and OCR', 'Computer vision for photos', 'Claims system APIs', 'Python', 'Workflow engine'],
    faqs: [
      {
        q: 'Does the system reject claims?',
        a: 'It flags and recommends. Rejections and disputed claims are decided by your people.',
      },
      {
        q: 'Can customers upload photos and documents?',
        a: 'Yes, through a simple guided flow.',
      },
    ],
  },

  'industries/insurance/car-insurance': {
    image: { src: '/images/pages/industries-insurance-car-insurance.svg', alt: 'Illustration for Car Insurance' },
    intro: 'Digital tools for motor insurance, from quick quotes to claims with photo assessment.',
    overview: [
      'Motor insurance is competitive and customers want quick quotes and easy claims. Digital tools shorten both.',
      'We build quote and purchase flows, renewals and photo-based claims, connected to your policy systems.',
    ],
    offers: [
      'Quick-quote and purchase flows with vehicle data lookup',
      'Renewal reminders and policy management in an app or portal',
      'Claim intake with guided damage photos',
      'Damage assessment support for surveyors',
    ],
    benefits: [
      { title: 'Quotes in minutes', desc: 'Customers do not fill long forms.' },
      { title: 'Easier claims', desc: 'Photos and guidance reduce back-and-forth.' },
      { title: 'Higher renewals', desc: 'Timely reminders keep customers.' },
    ],
    useCases: ['Insurers and brokers', 'Insurance aggregator platforms', 'Fleet insurance management'],
    stack: ['Next.js and React Native', 'Computer vision models', 'Vehicle data APIs', 'Payment gateway integration'],
    faqs: [
      {
        q: 'Can AI estimate repair costs from photos?',
        a: 'It can support estimates, but a surveyor or handler should confirm the final amount.',
      },
      {
        q: 'Can you connect to our policy system?',
        a: 'Usually yes, if it offers an API or data exchange.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* INDUSTRIES / REAL ESTATE                                            */
  /* ------------------------------------------------------------------ */
  'industries/real-estate/property-analytics': {
    image: { src: '/images/pages/industries-real-estate-property-analytics.svg', alt: 'Illustration for Property Analytics' },
    intro: 'Data tools that help you understand pricing, demand and performance across properties and locations.',
    overview: [
      'Property decisions rest on data: what similar homes sold for, where demand is rising, how a building is performing. That data is often scattered.',
      'We bring it together and build analysis and dashboards so you can decide with evidence.',
    ],
    offers: [
      'Price benchmarking against comparable properties',
      'Demand, vacancy and rental-yield analysis by area',
      'Portfolio dashboards for owners and managers',
      'Valuation models, with clear notes on accuracy',
    ],
    benefits: [
      { title: 'Evidence-based pricing', desc: 'Compare with similar properties.' },
      { title: 'Spot trends', desc: 'See where demand is moving.' },
      { title: 'Portfolio view', desc: 'All properties in one dashboard.' },
    ],
    useCases: ['Developers and investors', 'Brokerages and portals', 'Property managers'],
    stack: ['Python and SQL', 'ML models for price estimation', 'Mapping and geodata tools', 'Power BI or custom dashboards'],
    faqs: [
      {
        q: 'How accurate are valuation models?',
        a: 'It depends on data quality and area. We report accuracy honestly, and models support, not replace, professional valuation.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From your own records and any sources you have the right to use. We discuss this during planning.',
      },
    ],
  },

  'industries/real-estate/agent-support-tools': {
    image: { src: '/images/pages/industries-real-estate-agent-support-tools.svg', alt: 'Illustration for Agent Support Tools' },
    intro: 'Tools that save real estate agents time on listings, enquiries, follow-ups and paperwork.',
    overview: [
      'Agents spend more time on admin than on clients. Writing listings, answering the same questions and chasing leads all take hours.',
      'We build tools that handle the routine parts so agents can focus on showings and relationships.',
    ],
    offers: [
      'Listing description drafts from property details and photos',
      'Lead capture, scoring and follow-up reminders',
      'Showing scheduling and client updates',
      'Document preparation and checklists for deals',
    ],
    benefits: [
      { title: 'More time with clients', desc: 'Admin work is reduced.' },
      { title: 'Faster follow-up', desc: 'Leads are contacted quickly.' },
      { title: 'Consistent listings', desc: 'Clear, well-written descriptions.' },
    ],
    useCases: ['Independent agents', 'Brokerages with many agents', 'Property portals'],
    stack: ['LLM APIs', 'CRM integration', 'WhatsApp and email automation', 'Calendar APIs', 'Next.js'],
    faqs: [
      {
        q: 'Can it write listings from photos?',
        a: 'It can draft descriptions from the details and images you provide, and the agent checks them for accuracy before publishing.',
      },
      {
        q: 'Does it work with our CRM?',
        a: 'Often yes. Tell us which CRM you use.',
      },
    ],
  },

  'industries/real-estate/estate-assistant': {
    image: { src: '/images/pages/industries-real-estate-estate-assistant.svg', alt: 'Illustration for Estate Assistant' },
    intro: 'An AI assistant that helps buyers and renters find suitable properties and answers their questions at any hour.',
    overview: [
      'Most visitors to a property site want help narrowing down: area, budget, size, nearby facilities. A conversational assistant does that naturally.',
      'It asks a few questions, suggests matching properties, and books viewings.',
    ],
    offers: [
      'Conversational search by budget, area, size and needs',
      'Answers about properties, neighbourhoods and process',
      'Viewing bookings and agent hand-over',
      'Lead details passed to your CRM',
    ],
    benefits: [
      { title: 'Better matches', desc: 'Visitors find suitable properties faster.' },
      { title: 'Always on', desc: 'Enquiries get answered at night and weekends.' },
      { title: 'Warmer leads', desc: 'Agents receive qualified enquiries.' },
    ],
    useCases: ['Property portals', 'Developer sales sites', 'Rental platforms'],
    stack: ['LLM APIs', 'Property database search', 'WhatsApp and web chat', 'CRM and calendar integration'],
    faqs: [
      {
        q: 'Does it only show properties I list?',
        a: 'Yes. It searches your own listings and data.',
      },
      {
        q: 'Can visitors speak to a person?',
        a: 'Yes. The assistant hands over to an agent whenever the visitor asks or needs it.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* INDUSTRIES / BANKING & LENDING                                      */
  /* ------------------------------------------------------------------ */
  'industries/banking-lending/lending': {
    image: { src: '/images/pages/industries-banking-lending-lending.svg', alt: 'Illustration for Lending' },
    intro: 'Digital lending tools, from application to disbursement, with clear checks and an audit trail at each step.',
    overview: [
      'Borrowers expect to apply online and hear back quickly. Lenders need accurate checks, consistent rules and records for regulators.',
      'We build lending platforms and automation that shorten decision time while keeping your credit policy in control.',
    ],
    offers: [
      'Online application and document collection',
      'Identity and document verification flows',
      'Credit rules, scoring and decision support',
      'Loan servicing, repayment reminders and reporting',
    ],
    benefits: [
      { title: 'Faster decisions', desc: 'Less time between application and answer.' },
      { title: 'Consistent credit policy', desc: 'Rules apply the same to every case.' },
      { title: 'Full audit trail', desc: 'Each step is recorded.' },
    ],
    useCases: ['NBFCs and fintech lenders', 'Small business loans', 'Consumer and personal loans'],
    stack: ['Node.js or Java', 'PostgreSQL', 'KYC and bureau API integration', 'Rule engine and ML scoring', 'Secure cloud hosting'],
    faqs: [
      {
        q: 'Do you handle regulatory compliance?',
        a: 'We build with compliance features such as audit logs and verification. Lending is regulated, so you should take legal advice for your region.',
      },
      {
        q: 'Can credit decisions be automated?',
        a: 'For clear cases within your policy, yes. Borderline cases can be sent to a credit officer.',
      },
    ],
  },

  'industries/banking-lending/mortgages': {
    image: { src: '/images/pages/industries-banking-lending-mortgages.svg', alt: 'Illustration for Mortgages' },
    intro: 'Mortgage tools that guide applicants through a long process and help lenders review documents faster.',
    overview: [
      'A mortgage involves many documents, many steps and many people. Delays and lost paperwork frustrate applicants and cost lenders money.',
      'We build portals and automation that keep every case moving and visible.',
    ],
    offers: [
      'Applicant portal with checklist and document upload',
      'Document reading and completeness checks',
      'Affordability and eligibility calculators using your rules',
      'Case tracking for loan officers and underwriters',
    ],
    benefits: [
      { title: 'Fewer back-and-forth requests', desc: 'Missing documents are spotted early.' },
      { title: 'Transparent progress', desc: 'Applicants see where they are.' },
      { title: 'Faster processing', desc: 'Less manual checking.' },
    ],
    useCases: ['Banks and housing finance companies', 'Mortgage brokers', 'Refinancing journeys'],
    stack: ['Next.js and Node.js', 'LLM APIs and OCR', 'Core banking and LOS integration', 'Workflow engine'],
    faqs: [
      {
        q: 'Can it integrate with our loan origination system?',
        a: 'Usually yes, if the system offers an API or integration option.',
      },
      {
        q: 'Does the calculator give final offers?',
        a: 'It gives estimates based on your rules. Final offers come from your underwriting process.',
      },
    ],
  },

  'industries/banking-lending/payments': {
    image: { src: '/images/pages/industries-banking-lending-payments.svg', alt: 'Illustration for Payments' },
    intro: 'Payment features and systems that are fast, reliable and designed with security in mind.',
    overview: [
      'Payments are the point where trust matters most. They must work every time, handle failures gracefully and keep records that reconcile.',
      'We build payment flows, integrations and reconciliation tools with careful attention to security and edge cases.',
    ],
    offers: [
      'Payment gateway integration for cards, UPI, wallets and bank transfers',
      'Checkout, subscription and payout flows',
      'Reconciliation and settlement reports',
      'Fraud rules, alerts and monitoring',
    ],
    benefits: [
      { title: 'Reliable flows', desc: 'Failures and retries are handled properly.' },
      { title: 'Clear records', desc: 'Payments reconcile with your books.' },
      { title: 'Security minded', desc: 'Sensitive data handled with care.' },
    ],
    useCases: ['Fintech apps', 'Marketplaces paying out to sellers', 'Subscription businesses'],
    stack: ['Node.js or Java', 'Razorpay, Stripe and similar gateways', 'PostgreSQL', 'Webhooks and queues', 'Monitoring and alerting'],
    faqs: [
      {
        q: 'Do you store card details?',
        a: 'We avoid it. Card data is handled by certified payment providers, which keeps your own system out of most of the compliance burden.',
      },
      {
        q: 'Which payment methods can you support?',
        a: 'Those supported by your chosen gateway, such as cards, UPI, net banking and wallets.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* INDUSTRIES / ECOMMERCE                                              */
  /* ------------------------------------------------------------------ */
  'industries/ecommerce/ecommerce-solutions': {
    image: { src: '/images/pages/industries-ecommerce-ecommerce-solutions.svg', alt: 'Illustration for Ecommerce Solutions' },
    intro: 'Online stores and the systems around them, from product catalog and checkout to inventory, shipping and analytics.',
    overview: [
      'A successful store needs more than a nice storefront. It needs accurate stock, smooth checkout, reliable delivery and a way to understand what customers do.',
      'We build or improve each part, on a platform like Shopify or as a custom build, depending on what fits your business.',
    ],
    offers: [
      'Storefront design and development on Shopify, WooCommerce or custom stacks',
      'Product catalog, inventory and order management',
      'Payment, shipping and tax integrations',
      'Analytics, email marketing and AI-based recommendations',
    ],
    benefits: [
      { title: 'Smooth checkout', desc: 'Fewer abandoned carts.' },
      { title: 'Accurate stock', desc: 'Inventory stays in sync across channels.' },
      { title: 'Insight into sales', desc: 'See what sells and why.' },
    ],
    useCases: ['New online stores', 'Moving from marketplaces to your own site', 'Multi-channel selling'],
    stack: ['Shopify or WooCommerce', 'Next.js headless storefronts', 'Node.js', 'Payment and courier APIs', 'Analytics tools'],
    faqs: [
      {
        q: 'Shopify or custom?',
        a: 'Shopify suits most stores and launches fast. Custom makes sense for unusual products or workflows. We recommend based on your needs.',
      },
      {
        q: 'Can you connect my existing inventory system?',
        a: 'Usually yes, through an API or scheduled sync.',
      },
    ],
  },

  'industries/ecommerce/shopping-assistant': {
    image: { src: '/images/pages/industries-ecommerce-shopping-assistant.svg', alt: 'Illustration for Shopping Assistant' },
    intro: 'An AI shopping assistant that helps customers find the right product, compare options and complete the purchase.',
    overview: [
      'Many shoppers leave because they cannot decide or cannot find what they want. A shopping assistant works like a helpful shop assistant: it asks about needs and suggests suitable products.',
      'It uses your catalog, so suggestions are real products that are in stock.',
    ],
    offers: [
      'Conversational product search and recommendations',
      'Side-by-side comparison and answers about product details',
      'Size, fit and compatibility guidance',
      'Add-to-cart actions and links to checkout',
    ],
    benefits: [
      { title: 'Easier decisions', desc: 'Shoppers find the right product sooner.' },
      { title: 'Higher conversion', desc: 'Fewer visitors leave without buying.' },
      { title: 'Always in stock', desc: 'Suggestions come from live catalog data.' },
    ],
    useCases: ['Fashion and electronics stores', 'Stores with large catalogs', 'Gifting and bundle selection'],
    stack: ['LLM APIs', 'Product catalog search and embeddings', 'Shopify and WooCommerce APIs', 'Next.js widget'],
    faqs: [
      {
        q: 'Will it recommend products I do not sell?',
        a: 'No. It only recommends items from your own catalog.',
      },
      {
        q: 'Can it be added to my existing store?',
        a: 'Yes, as a chat widget or a search feature on your current site.',
      },
    ],
  },

  'industries/ecommerce/store-chatbots': {
    image: { src: '/images/pages/industries-ecommerce-store-chatbots.svg', alt: 'Illustration for Store Chatbots' },
    intro: 'Chatbots for online stores that answer questions about orders, shipping, returns and products.',
    overview: [
      'Online store support gets many repeated questions: where is my order, how do I return this, do you ship to my area. These are perfect for automation.',
      'The chatbot answers from your policies and live order data, and passes anything tricky to your team.',
    ],
    offers: [
      'Order tracking and delivery status answers',
      'Return, exchange and refund guidance',
      'Product, size and stock questions',
      'WhatsApp, Instagram and website chat channels',
    ],
    benefits: [
      { title: 'Lower support load', desc: 'Common questions answered automatically.' },
      { title: 'Faster answers', desc: 'Customers get replies at once.' },
      { title: 'More sales', desc: 'Pre-purchase questions are answered in the moment.' },
    ],
    useCases: ['Order status enquiries', 'Return and exchange requests', 'Pre-sale product questions'],
    stack: ['LLM APIs', 'Shopify, WooCommerce and courier APIs', 'WhatsApp Business API', 'Node.js'],
    faqs: [
      {
        q: 'Can it look up real orders?',
        a: 'Yes, by connecting to your store and verifying the customer with order details.',
      },
      {
        q: 'What if it cannot answer?',
        a: 'It hands the chat over to your team with the conversation attached.',
      },
    ],
  },
};

export const contentKey = (section: string, group: string, item: string) => `${section}/${group}/${item}`;