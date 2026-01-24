import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { LoadingProvider } from "@/components/providers/LoadingContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LoadingScreen from "@/components/layout/LoadingScreen"
import { Toaster } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Skymarex",
    template: "%s | Skymarex",
  },
  description: "Welcome to Skymarex - Your trusted partner",
  keywords: ["skymarex", "portfolio", "services"],
  authors: [{ name: "Skymarex" }],
  icons: {
    icon: "/svgs/Favicon.svg",
  },
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
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoadingProvider>
            <LoadingScreen />
            <div className="flex min-h-screen flex-col cursor-default">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LoadingProvider>
          <Toaster richColors position="bottom-center" theme="light" closeButton={true} />
        </ThemeProvider>
      </body>
    </html>
  )
}