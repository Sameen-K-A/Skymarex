import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { LoadingProvider } from "@/components/providers/LoadingContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LoadingScreen from "@/components/layout/LoadingScreen"

export const metadata: Metadata = {
  title: {
    default: "Skymarex",
    template: "%s | Skymarex",
  },
  description: "Welcome to Skymarex - Your trusted partner",
  keywords: ["skymarex", "portfolio", "services"],
  authors: [{ name: "Skymarex" }],
  openGraph: {
    title: "Skymarex",
    description: "Welcome to Skymarex - Your trusted partner",
    url: "https://skymarex.com",
    siteName: "Skymarex",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingProvider>
            <LoadingScreen />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}