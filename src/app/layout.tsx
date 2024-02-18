// app/layout.tsx
import { fonts } from './fonts'
import { Providers } from './providers/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='cs' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}