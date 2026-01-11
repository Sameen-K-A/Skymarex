"use client"

import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations";

export default function Footer() {
  return (
    <footer className="container mx-auto p-4 sm:p-8 border-t">
      <div className="max-w-7xl mx-auto pt-5">

        <StaggerContainer className="flex flex-col sm:flex-row gap-5 justify-between items-center sm:items-start" staggerDelay={0.15}>
          <StaggerItem>
            <div className="text-center sm:text-left">
              <Link href="/">
                <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-xl sm:text-3xl ml-2 font-bold leading-none text-transparent">
                  Skymarex
                </span>
              </Link>

              <address className="not-italic text-muted-foreground text-xs mt-4 ml-2 leading-relaxed">
                123 Business Street<br />
                Suite 456<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex justify-around w-fit xl:min-w-xs">
              <div className="space-y-2 sm:space-y-6">
                <h3 className="text-foreground font-semibold text-center sm:text-left">Links</h3>
                <div className="space-y-4 space-x-4 flex flex-row sm:flex-col">
                  <Link
                    href="/"
                    className="block text-muted-foreground text-xs transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-3 hover:decoration-primary hover:decoration-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block text-muted-foreground text-xs transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-3 hover:decoration-primary hover:decoration-2"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="block text-muted-foreground text-xs transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-3 hover:decoration-primary hover:decoration-2"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-muted-foreground text-xs transition-all duration-200 hover:text-foreground hover:underline hover:underline-offset-3 hover:decoration-primary hover:decoration-2"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <Reveal delay={0.2}>
          <div className="p-4">
            <span className="block mx-auto text-center mb-5 pb-5 bg-linear-to-t opacity-30 from-black to-gray-500/10 dark:from-white dark:to-gray-500/10 bg-clip-text text-4xl sm:text-6xl md:text-8xl font-bold leading-none text-transparent">
              Ship With Us
            </span>

            <p className="text-xs text-center mb-2">
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