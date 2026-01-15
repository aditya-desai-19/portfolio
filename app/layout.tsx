import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Header from "./header"
import Footer from "./footer"
import ScrollToTopBtn from "./scroll-to-top-btn"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Aditya Desai - Full Stack Developer",
  description: "My portfolio website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={cn(inter.className, "antialiased", "flex justify-center")}
      >
        <ThemeProvider attribute="class">
          <div className="w-full p-4 lg:w-1/2">
            <Header />
            <main className="border-t-2 border-b-2 my-2">{children}</main>
            <Footer />
            <Toaster position="bottom-center" />
          </div>
          <ScrollToTopBtn />
        </ThemeProvider>
      </body>
    </html>
  )
}
