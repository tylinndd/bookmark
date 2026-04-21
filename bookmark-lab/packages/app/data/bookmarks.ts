export type Bookmark = {
  id: string
  title: string
  url: string
}

/** In-memory sample data for routing spikes (no persistence, no network). */
export const SAMPLE_BOOKMARKS: readonly Bookmark[] = [
  {
    id: 'solito',
    title: 'Solito',
    url: 'https://solito.dev',
  },
  {
    id: 'expo',
    title: 'Expo',
    url: 'https://expo.dev',
  },
  {
    id: 'next',
    title: 'Next.js',
    url: 'https://nextjs.org',
  },
] as const

export function getBookmarkById(id: string): Bookmark | undefined {
  return SAMPLE_BOOKMARKS.find((b) => b.id === id)
}
