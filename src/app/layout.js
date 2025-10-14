import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WM Teatro - Espetáculos Educativos',
  description: 'Companhia teatral especializada em espetáculos educativos para escolas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-black border-t border-gray-800 text-white py-8 text-center">
          <p>&copy; 2025 <span className="text-purple-400">WM Teatro</span>. Todos os direitos reservados.</p>
          <a
            href="/politica-de-privacidade"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Política de Privacidade
          </a>
        </footer>
      </body>
    </html>
  )
}