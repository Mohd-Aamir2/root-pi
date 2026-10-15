export type Group = { title: string; items: string[] };

export const agents: Group[] = [
  { title: 'Sales', items: ['Lead Management', 'Sales Management', 'Opportunity Management'] },
  { title: 'Marketing', items: ['Content Strategy', 'Content Creation', 'Social Media'] },
  { title: 'Operations', items: ['Order Processing', 'Order Consolidation', 'Trade Operations'] },
  { title: 'Customer Support', items: ['Email Communication', 'Warranty Management', 'Order Management'] },
  { title: 'Finance', items: ['Inquiry Management', 'Accounts Payable', 'Invoice Management'] },
  { title: 'Billing', items: ['Invoice Generation', 'Accounts Receivable', 'Refund Management'] },
  { title: 'Legal', items: ['Contract Drafting', 'Contract Review', 'Risk Assessment'] },
  { title: 'Procurement', items: ['Payment Validation', 'Procurement Policy', 'Purchase Orders'] },
  { title: 'Human Resources', items: ['Talent Acquisition', 'Employee Onboarding', 'HR Support'] },
];

export const industries: Group[] = [
  { title: 'Healthcare', items: ['Patient Care', 'Medical Diagnosis', 'Medical Imaging'] },
  { title: 'Customer Support', items: ['Customer Service', 'Support Automation', 'Chatbots'] },
  { title: 'Insurance', items: ['Underwriting', 'Claims Processing', 'Car Insurance'] },
  { title: 'Real Estate', items: ['Property Analytics', 'Agent Support Tools', 'Estate Assistant'] },
  { title: 'Banking & Lending', items: ['Lending', 'Mortgages', 'Payments'] },
  { title: 'Ecommerce', items: ['Ecommerce Solutions', 'Shopping Assistant', 'Store Chatbots'] },
];

export const services: Group[] = [
  { title: 'AI Development', items: ['Enterprise AI', 'AI Chatbots', 'AI Voice Agents', 'AI Agents', 'Agentic AI', 'AI Automation', 'Generative AI', 'ML Development', 'Data Science'] },
  { title: 'Blockchain', items: ['Smart Contracts', 'Exchange Development', 'Wallet Development', 'NFT Marketplaces', 'DeFi', 'Blockchain Consulting'] },
  { title: 'Mobile App', items: ['iOS Apps', 'Android Apps', 'Hybrid Apps'] },
  { title: 'Web & Software', items: ['MVP Development', 'SaaS Development', 'Custom Software', 'Enterprise Software', 'Software Consulting'] },
  { title: 'Analytics & CRM', items: ['Big Data Analytics', 'AI-Powered Analytics', 'Power BI', 'Salesforce', 'HubSpot', 'Zoho'] },
];
