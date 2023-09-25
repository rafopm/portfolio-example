import './globals.css'

import Providers from './providers'
import { Menu } from './components/Menu'


export const metadata = {
  title: 'Portafolio de Rafael Pampavilca',
  description: 'Para mostrar mis proyectos y habilidades.'
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