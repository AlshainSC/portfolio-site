import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/navbar/page"
import BackgroundParticles from "./components/particles/particles"

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
      <body className={inter.className}>
        <div className="flex flex-col">
          <>
            <main className="mx-auto flex h-screen max-w-4xl flex-col">
              <br className="my-5" />
              {children}
            </main>
          </>
          <Navbar />
          <BackgroundParticles />
        </div>
      </body>
    </html>
  )
}
