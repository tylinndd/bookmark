import { StylesProvider } from './styles-provider'
import './globals.css'

export const metadata = {
  title: 'Bookmark Lab',
  description: 'Solito with Next.js App Router and React Native Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  )
}
