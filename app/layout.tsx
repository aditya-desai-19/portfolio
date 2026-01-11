import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

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
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider attribute="class">
          <main>
            <div className="flex justify-center">{children}</div>
          </main>
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
