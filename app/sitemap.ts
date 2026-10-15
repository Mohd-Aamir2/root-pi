import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { sections, slug, type SectionKey } from '@/lib/catalog';
import { projects } from '@/data/projects';
import { content, contentKey } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
const urls: string[] = ['/', '/about', '/careers', '/portfolio', '/privacy', '/terms'];

  (Object.keys(sections) as SectionKey[]).forEach((section) => {
    urls.push(`/${section}`);
    sections[section].groups.forEach((g) => {
      urls.push(`/${section}/${slug(g.title)}`);
           g.items.forEach((i) => {
        // Only list item pages that have real content
        if (content[contentKey(section, slug(g.title), slug(i))]) urls.push(`/${section}/${slug(g.title)}/${slug(i)}`);
      });
    });
  });

  projects.forEach((p) => urls.push(`/portfolio/${p.slug}`));

  return urls.map((u) => ({
    url: `${siteUrl}${u === '/' ? '' : u}`,
    lastModified: now,
    priority: u === '/' ? 1 : u.split('/').length <= 2 ? 0.8 : 0.6,
  }));
}