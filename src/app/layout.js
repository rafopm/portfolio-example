import './globals.css'

import Link from 'next/link'

import Providers from './providers'
import ThemeButton from './components/ThemeButton'
import { Menu } from './components/Menu'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body >
        <Providers>
          {/* Header */}
          <header className='py-6 p-fixed'>
            
            <Menu />
          </header>

          {/* Page */}
          <main>{children}</main>

          {/* Footer */}
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}