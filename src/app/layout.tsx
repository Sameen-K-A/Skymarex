import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { LoadingProvider } from "@/components/providers/LoadingContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import LoadingScreen from "@/components/layout/LoadingScreen"
import { Toaster } from "@/components/ui/sonner"
import { FaWhatsapp } from "react-icons/fa"
import { ShineBorder } from "@/components/ui/shine-border"

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

              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-8 md:right-8 cursor-pointer z-50 flex h-16 w-16 items-center justify-center rounded-full bg-black shadow-lg hover:scale-103 transition-all duration-300 ease-in-out"
                aria-label="Contact us on WhatsApp"
              >
                <ShineBorder borderWidth={4} shineColor="#00b7ff" />
                <FaWhatsapp className="h-8 w-8 text-white" strokeWidth={1.5} />
              </a>
            </div>
          </LoadingProvider>
          <Toaster richColors position="bottom-center" theme="light" closeButton={true} />
        </ThemeProvider>
      </body>
    </html>
  )
}