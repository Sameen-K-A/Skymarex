"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Equal, X } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Button } from "../ui/button"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const navRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setMenuState(false)
  }, [pathname])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuState && navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuState(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [menuState])

  return (
    <header>
      <nav
        ref={navRef}
        data-state={menuState ? "active" : undefined}
        className={`fixed left-0 w-full z-20 px-4 sm:px-6 transition-all duration-500 ease-in-out ${isScrolled ? "" : "bg-background"}`}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl",
            "transition-[padding,max-width,margin-top,border-radius,background-color,backdrop-filter] duration-500 ease-in-out py-1.5",
            isScrolled && "px-6 bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5 mt-2 py-0"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-2 lg:gap-0 py-2">

            <div className="flex w-full justify-between lg:w-auto py-2">
              <Link href="/" aria-label="home" className="flex gap-2 items-center">
                <span className="pointer-events-none py-1 whitespace-pre-wrap bg-linear-to-b from-black to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-xl font-bold leading-none text-transparent">
                  Skymarex
                </span>
              </Link>

              <Button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer lg:hidden"
                size={"icon-sm"}
              >
                <Equal
                  className={cn(
                    "absolute inset-0 m-auto size-6 transition-all duration-300 ease-in-out",
                    menuState ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 transition-all duration-300 ease-in-out",
                    menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </Button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-2 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:text-foreground hover:bg-muted/50",
                        pathname === item.href ? "text-foreground bg-muted" : "text-muted-foreground"
                      )}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                "bg-background mb-4 w-full flex-wrap items-center justify-end space-y-4 rounded-3xl border p-4 shadow-2xl shadow-zinc-300/20 dark:shadow-zinc-900/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                "transition-all duration-500 ease-in-out",
                menuState ? "block" : "hidden lg:flex"
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-3 text-base text-center">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block transition-all duration-300 ease-in-out hover:text-foreground text-sm",
                          pathname === item.href ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full items-center justify-center gap-2">
                <ThemeToggle />
                <ShinyButton>
                  Get a Quote
                </ShinyButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}