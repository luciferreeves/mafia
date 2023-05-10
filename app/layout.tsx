import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mafia - Online Multiplayer Game',
  description: 'Online Multiplayer Mafia Game = No Signup Required!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
