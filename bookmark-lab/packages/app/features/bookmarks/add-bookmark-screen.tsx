'use client'

import { useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { useRouter } from 'solito/navigation'

// Persistence is intentionally skipped for this routing spike—the goal is to
// exercise Solito navigation and form state, not a real bookmark store.

export function AddBookmarkScreen() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [tags, setTags] = useState('')

  const onSave = () => {
    console.log('[AddBookmarkScreen] save (in-memory only)', {
      title,
      url,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    })
    router.push('/')
  }

  const inputStyle = {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#171717',
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 32 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Text style={{ fontSize: 16, color: '#2563eb', fontWeight: '600' }}>
            Back
          </Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 24, fontWeight: '800', color: '#171717' }}>
        Add bookmark
      </Text>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#525252' }}>
          Title
        </Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          placeholderTextColor="#a3a3a3"
          style={inputStyle}
        />
      </View>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#525252' }}>
          URL
        </Text>
        <TextInput
          value={url}
          onChangeText={setUrl}
          placeholder="https://"
          placeholderTextColor="#a3a3a3"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          style={inputStyle}
        />
      </View>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#525252' }}>
          Tags (comma-separated)
        </Text>
        <TextInput
          value={tags}
          onChangeText={setTags}
          placeholder="react-native, next.js"
          placeholderTextColor="#a3a3a3"
          style={inputStyle}
        />
      </View>
      <Pressable
        onPress={onSave}
        style={{
          alignSelf: 'flex-start',
          marginTop: 8,
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: '#2563eb',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '600' }}>Save</Text>
      </Pressable>
    </ScrollView>
  )
}
