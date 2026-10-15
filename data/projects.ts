// IMPORTANT: these are placeholder case studies so you can see the layout.
// Replace them with Ai Angel's real projects and real results before launch.
export type Project = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  tags: string[];
  tone: 'sky' | 'sun' | 'iris'; // preview gradient, see components/ProjectCover.tsx
  featured?: boolean;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'clinic-triage-assistant',
    title: 'Clinic triage assistant',
    industry: 'Healthcare',
    summary: 'An AI assistant that collects symptoms and routes patients to the right doctor.',
    tags: ['AI Chatbot', 'Web App'],
    tone: 'sky',
    featured: true,
    challenge: 'Describe the client problem here: what was slow, costly or frustrating before the project.',
    solution: 'Describe what you built and how it works, in two or three plain sentences.',
    results: ['Add a real, measurable result here (time saved, cost cut, users reached).', 'Add a second real result.'],
    stack: ['Next.js', 'Python', 'MongoDB'],
  },
  {
    slug: 'claims-review-agent',
    title: 'Claims review agent',
    industry: 'Insurance',
    summary: 'Reads claim documents, flags risks and prepares a summary for the reviewer.',
    tags: ['AI Agent', 'Automation'],
    tone: 'sun',
    challenge: 'Describe the client problem here.',
    solution: 'Describe what you built and how it works.',
    results: ['Add a real, measurable result here.'],
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    slug: 'store-shopping-assistant',
    title: 'Store shopping assistant',
    industry: 'Ecommerce',
    summary: 'A chat assistant that recommends products and answers order questions.',
    tags: ['Chatbot', 'Mobile App'],
    tone: 'iris',
    challenge: 'Describe the client problem here.',
    solution: 'Describe what you built and how it works.',
    results: ['Add a real, measurable result here.'],
    stack: ['React Native', 'Node.js', 'MongoDB'],
  },
];