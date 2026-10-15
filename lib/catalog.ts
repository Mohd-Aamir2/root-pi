import { services, industries, agents, type Group } from '@/data/nav';

export const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const sections = {
  services: {
    title: 'Services',
    intro: 'AI, web, mobile, blockchain and data work, delivered by one team.',
    groups: services,
  },
  industries: {
    title: 'Industries',
    intro: 'AI solutions shaped around how each industry works.',
    groups: industries,
  },
  agents: {
    title: 'AI Agents',
    intro: 'Ready-to-adapt AI agents for the teams that run your business.',
    groups: agents,
  },
} as const;

export type SectionKey = keyof typeof sections;

export const isSection = (s: string): s is SectionKey => Object.keys(sections).includes(s);

export const findGroup = (section: SectionKey, g: string): Group | undefined =>
  (sections[section].groups as readonly Group[]).find((x) => slug(x.title) === g);