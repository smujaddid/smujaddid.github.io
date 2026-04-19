import { getCollection, type CollectionEntry } from 'astro:content'
import type { Locale } from '../i18n/ui'

type BlogEntry = CollectionEntry<'blog'>
type ProjectEntry = CollectionEntry<'project'>

function byLocale(locale: Locale) {
  return (id: string) => id.startsWith(`${locale}/`)
}

/**
 * Strip the leading `locale/` prefix from a collection entry id.
 */
export function toSlug(entry: { id: string }): string {
  const [, ...rest] = entry.id.split('/')
  return rest.join('/') || entry.id
}

export async function getBlogs(locale: Locale): Promise<BlogEntry[]> {
  const all = await getCollection('blog', ({ data, id }) => {
    if (data.draft) return false
    return byLocale(locale)(id)
  })
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getBlogsByTag(locale: Locale, tag: string): Promise<BlogEntry[]> {
  const all = await getBlogs(locale)
  const normalizedTag = tag.replace(/-/g, ' ').toLowerCase()
  return all.filter((entry) =>
    entry.data.tags.some((t) => t.toLowerCase() === normalizedTag)
  )
}

/**
 * Featured first (newest featured first), then the newest non-featured posts fill the rest.
 * Capped at `limit`. Dedupes by slug (locale-stripped).
 */
export async function getHomeBlogs(locale: Locale, limit = 3): Promise<BlogEntry[]> {
  const all = await getBlogs(locale)
  const featured = all.filter((p) => p.data.featured)
  const rest = all.filter((p) => !p.data.featured)
  const merged = [...featured, ...rest]
  const seen = new Set<string>()
  const unique: BlogEntry[] = []
  for (const entry of merged) {
    const slug = toSlug(entry)
    if (seen.has(slug)) continue
    seen.add(slug)
    unique.push(entry)
    if (unique.length >= limit) break
  }
  return unique
}

export async function getProjects(locale: Locale): Promise<ProjectEntry[]> {
  const all = await getCollection('project', ({ data, id }) => {
    if (data.draft) return false
    return byLocale(locale)(id)
  })
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export async function getProjectsByTag(locale: Locale, tag: string): Promise<ProjectEntry[]> {
  const all = await getProjects(locale)
  const normalizedTag = tag.replace(/-/g, ' ').toLowerCase()
  return all.filter((entry) =>
    entry.data.tags.some((t) => t.toLowerCase() === normalizedTag)
  )
}

/**
 * Rough reading-time estimator: 200 words per minute.
 */
export function estimateReadingTime(body: string | undefined): number {
  if (!body) return 1
  const words = body.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
