"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/animations";
import { GradientLogo } from "@/components/ui/GradientLogo";

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
              <GradientLogo width={150} height={45} />
            </Link>
          </StaggerItem>

          {/* Right Column: Address */}
          <StaggerItem className="lg:flex-1 order-3 lg:order-3">
            <address className="not-italic leading-relaxed flex flex-col text-center lg:text-left lg:ml-auto lg:w-fit text-sm text-muted-foreground">
              <span>{process.env.NEXT_PUBLIC_ADDRESS_LINE_1}</span>
              <span>{process.env.NEXT_PUBLIC_ADDRESS_LINE_2}</span>
              <span>{process.env.NEXT_PUBLIC_ADDRESS_LINE_3}</span>
              <span>{process.env.NEXT_PUBLIC_ADDRESS_LINE_4}</span>
            </address>
          </StaggerItem>

          {/* Center Column: Logo (Desktop only) */}
          <StaggerItem className="hidden lg:block lg:flex-1 order-1 lg:order-2">
            <div className="text-center pt-5">
              <Link href="/" className="inline-block">
                <GradientLogo width={200} height={60} className="mx-auto" />
              </Link>
            </div>
          </StaggerItem>

          {/* Left Column: Links */}
          <StaggerItem className="lg:flex-1 order-2 lg:order-1">
            <div className="lg:text-left">
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
            <span className="block mx-auto text-center mb-5 pb-5 bg-linear-to-t opacity-30 from-black to-gray-500/10 dark:from-white dark:to-gray-500/10 bg-clip-text text-5xl line-clamp-1 sm:text-6xl md:text-8xl font-bold leading-none text-transparent">
              Ship With Us
            </span>

            <p className="text-base text-center mb-5">
              Copyright &copy; {new Date().getFullYear()} All rights reserved by
              Skymarex
            </p>

            <div className="flex justify-center gap-2 md:gap-4 text-lg md:text-xl text-foreground">
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base flex justify-center items-center gap-2 text-foreground/50 hover:text-foreground transition-colors duration-200"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base flex justify-center items-center gap-2 text-foreground/50 hover:text-foreground transition-colors duration-200"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_XTWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base flex justify-center items-center gap-2 text-foreground/50 hover:text-foreground transition-colors duration-200"
              >
                <FaXTwitter />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}