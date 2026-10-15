import type { Project } from '@/data/projects';

const tones: Record<Project['tone'], string> = {
  sky: 'from-sky via-white to-iris/30',
  sun: 'from-halo/30 via-white to-sky',
  iris: 'from-iris/25 via-white to-halo/30',
};

// A CSS gradient stands in for a screenshot, so no image loads.
// When you have real screenshots, swap this for next/image with set width and height.
export default function ProjectCover({ tone, className = '' }: { tone: Project['tone']; className?: string }) {
  return <div aria-hidden className={`bg-gradient-to-br ${tones[tone]} ${className}`} />;
}