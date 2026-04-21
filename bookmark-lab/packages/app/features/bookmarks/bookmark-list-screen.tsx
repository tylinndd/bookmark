'use client'

import { Link } from 'solito/link'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { SAMPLE_BOOKMARKS } from 'app/data'

export function BookmarkListScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
        gap: 16,
        paddingBottom: 32,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: '800' }}>Bookmarks</Text>
      <Text style={{ fontSize: 16, color: '#525252', lineHeight: 22 }}>
        Sample list from shared in-memory data. Tap a card to open the detail
        route; use Add Bookmark when you wire create flow.
      </Text>
      <Pressable
        style={{
          alignSelf: 'flex-start',
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: '#2563eb',
          borderRadius: 8,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '600' }}>
          Add Bookmark
        </Text>
      </Pressable>
      <View style={{ gap: 12 }}>
        {SAMPLE_BOOKMARKS.map((b) => (
          <Link
            key={b.id}
            href={`/bookmarks/${b.id}`}
            style={{
              borderWidth: 1,
              borderColor: '#e5e5e5',
              borderRadius: 10,
              padding: 16,
              backgroundColor: '#fafafa',
            }}
          >
            <View style={{ gap: 6 }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: '#171717' }}>
                {b.title}
              </Text>
              <Text style={{ fontSize: 14, color: '#737373' }}>{b.url}</Text>
            </View>
          </Link>
        ))}
      </View>
    </ScrollView>
  )
}
