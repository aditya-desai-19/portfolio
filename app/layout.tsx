import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Header from "./header"
import Footer from "./footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Aditya Desai",
  description: "Aditya Desai's Personal Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(inter.className, "antialiased", "flex justify-center")}
      >
        <ThemeProvider attribute="class">
          <div className="w-full p-4 border-2 lg:w-1/2">
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster position="bottom-center" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
