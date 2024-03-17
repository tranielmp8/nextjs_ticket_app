import { Rubik } from 'next/font/google'
import './globals.css'

// export const dynamic = 'force-dynamic'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticket Master',
  description: 'Created using Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={rubik.className}>
          {children}
        </body>
    
    </html>
  )
}
