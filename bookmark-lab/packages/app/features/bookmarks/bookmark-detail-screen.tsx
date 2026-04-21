'use client'

import { Pressable, ScrollView, Text, View } from 'react-native'
import { useRouter } from 'solito/navigation'

import { getBookmarkById } from 'app/data'

export function BookmarkDetailScreen({ id }: { id: string }) {
  const router = useRouter()
  const bookmark = getBookmarkById(id)

  if (!bookmark) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
          gap: 16,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#171717' }}>
          Bookmark not found
        </Text>
        <Text style={{ fontSize: 16, color: '#737373', textAlign: 'center' }}>
          No bookmark with id &quot;{id}&quot;.
        </Text>
        <Pressable
          onPress={() => router.back()}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: '#2563eb',
            borderRadius: 8,
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: '600' }}>Go back</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 32 }}
    >
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={{ fontSize: 16, color: '#2563eb', fontWeight: '600' }}>
            ← Back
          </Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 24, fontWeight: '800', color: '#171717' }}>
        {bookmark.title}
      </Text>
      <Text style={{ fontSize: 16, color: '#2563eb' }} selectable>
        {bookmark.url}
      </Text>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#525252' }}>
          Tags
        </Text>
        <Text style={{ fontSize: 15, color: '#404040' }}>
          {bookmark.tags.join(', ')}
        </Text>
      </View>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#525252' }}>
          Note
        </Text>
        <Text style={{ fontSize: 16, color: '#404040', lineHeight: 22 }}>
          {bookmark.note}
        </Text>
      </View>
      <Pressable
        onPress={() => router.push('/add')}
        style={{
          alignSelf: 'flex-start',
          marginTop: 8,
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: '#171717',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '600' }}>Go to /add</Text>
      </Pressable>
    </ScrollView>
  )
}
