'use client'

import { BookmarkDetailScreen } from 'app/features/bookmarks'
import { useParams } from 'solito/navigation'

export default function BookmarkDetailPage() {
  const { id } = useParams<{ id: string }>()
  return <BookmarkDetailScreen id={id ?? ''} />
}
