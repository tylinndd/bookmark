// @ts-nocheck
'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { StyleSheet } from 'react-native'

export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    )
  })

  return (
    <div
      id="__next"
      style={{
        display: 'flex',
        flex: 1,
        flexBasis: 'auto',
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        minHeight: '100%',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
