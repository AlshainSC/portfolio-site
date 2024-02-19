import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./navbar/page"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicholas Larson",
  description: "n.larson dev story"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Navbar />
          <main className={inter.className}>{children}</main>
        </div>
      </body>
    </html>
  )
}
