export type Bookmark = {
  id: string
  title: string
  url: string
  tags: readonly string[]
  note: string
}

/** In-memory sample data for routing spikes (no persistence, no network). */
export const SAMPLE_BOOKMARKS: readonly Bookmark[] = [
  {
    id: 'solito',
    title: 'Solito',
    url: 'https://solito.dev',
    tags: ['react-native', 'next.js', 'navigation'],
    note: 'Cross-platform navigation for React Native + Next.js.',
  },
  {
    id: 'expo',
    title: 'Expo',
    url: 'https://expo.dev',
    tags: ['expo', 'tooling'],
    note: 'Dev workflow and native modules for RN apps.',
  },
  {
    id: 'next',
    title: 'Next.js',
    url: 'https://nextjs.org',
    tags: ['web', 'ssr'],
    note: 'App Router pairs with Solito hooks on the web side.',
  },
] as const

export function getBookmarkById(id: string): Bookmark | undefined {
  return SAMPLE_BOOKMARKS.find((b) => b.id === id)
}
