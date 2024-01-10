import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import SidebarSection from '@/components/Sidebar/SidebarSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dukaan dashboard',
  description: 'This is dashboard of Dukaan!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SidebarSection />
          <div className="ml-64 flex-1"> 
            <Navbar />
            <main>{children}</main> 
          </div>
        </div>
      </body>
    </html>
  )
}
