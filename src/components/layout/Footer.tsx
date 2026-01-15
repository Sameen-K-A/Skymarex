"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="container mx-auto p-4 sm:p-8 border-t">
      <div className="max-w-7xl mx-auto pt-5">

        {/* Desktop: 3 columns | Mobile: stacked */}
        <StaggerContainer className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-center lg:items-start" staggerDelay={0.15}>

          {/* Mobile: Logo first | Desktop: Hidden here (shown in center) */}
          <StaggerItem className="lg:hidden">
            <Link href="/">
              <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-3xl font-bold leading-none text-transparent">
                Skymarex
              </span>
            </Link>
          </StaggerItem>

          {/* Right Column: Address */}
          <StaggerItem className="lg:flex-1 order-3 lg:order-3">
            <address className="not-italic leading-relaxed flex flex-col text-center lg:text-left lg:ml-auto lg:w-fit text-sm text-muted-foreground">
              <span>123 Business Street</span>
              <span>Suite 456</span>
              <span>New York, NY 10001</span>
              <span>United States</span>
            </address>
          </StaggerItem>

          {/* Center Column: Logo (Desktop only) */}
          <StaggerItem className="hidden lg:block lg:flex-1 order-1 lg:order-2">
            <div className="text-center pt-5">
              <Link href="/">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-5xl font-bold leading-none text-transparent">
                  Skymarex
                </span>
              </Link>
            </div>
          </StaggerItem>

          {/* Left Column: Links */}
          <StaggerItem className="lg:flex-1 order-2 lg:order-1">
            <div className="lg:text-left">
              <h3 className="hidden lg:block text-foreground text-xl font-semibold mb-4">Links</h3>
              <div className="flex flex-row lg:flex-col lg:items-start gap-6 lg:gap-2">
                {footerLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-sm transition-colors duration-200 hover:text-foreground group ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {link.label}
                      <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <Reveal delay={0.2}>
          <div className="p-4">
            <span className="block mx-auto text-center mb-5 pb-5 bg-linear-to-t opacity-30 from-black to-gray-500/10 dark:from-white dark:to-gray-500/10 bg-clip-text text-4xl sm:text-6xl md:text-8xl font-bold leading-none text-transparent">
              Ship With Us
            </span>

            <p className="text-base text-center mb-2">
              Copyright &copy; {new Date().getFullYear()} All rights reserved by
              Skymarex
            </p>

            <div className="flex justify-center gap-2 md:gap-4 text-lg md:text-xl text-foreground">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-muted-foreground transition-colors duration-200" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-muted-foreground transition-colors duration-200" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-muted-foreground transition-colors duration-200" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-muted-foreground transition-colors duration-200" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}