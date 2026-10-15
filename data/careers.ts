// Add real roles here. If the list is empty, the page shows a "send us your CV" message instead,
// so you never advertise jobs that don't exist.
export type Role = {
  slug: string;
  title: string;
  type: string; // e.g. 'Full-time', 'Internship'
  location: string; // e.g. 'Remote', 'Kanpur'
  summary: string;
};

export const roles: Role[] = [
  // Example (delete or edit):
  // {
  //   slug: 'ai-ml-intern',
  //   title: 'AI/ML Intern',
  //   type: 'Internship',
  //   location: 'Remote',
  //   summary: 'Help build and test AI agents and chatbots for client projects.',
  // },
];