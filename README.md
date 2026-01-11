<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<h1 align="center">🚢 Skymarex International Cargo</h1>

<p align="center">
  <strong>Your Trusted Partner in Global Logistics Solutions</strong>
</p>

<p align="center">
  A modern, responsive portfolio website for Skymarex International Cargo LLC — a UAE-based logistics company specializing in air, sea, and land freight services.
</p>

---

## 🌟 About The Project

**Skymarex International Cargo LLC** is a premier cargo and logistics company headquartered in the UAE. This website serves as a professional digital presence to showcase their comprehensive logistics solutions, emphasizing:

- ✈️ **Air Freight** — Fast and reliable air cargo services
- 🚢 **Sea Freight** — Cost-effective ocean shipping solutions  
- 🚛 **Land Freight** — Efficient ground transportation network
- ⏰ **24/7 Support** — Round-the-clock customer assistance

The website is built with modern web technologies to ensure optimal performance, SEO optimization, and a seamless user experience across all devices.

---

## 📄 Pages

| Page | Description |
|------|-------------|
| 🏠 **Home** | Hero section with animated image grid, about section, services overview, perks, testimonials, certificates, and FAQs |
| 📖 **About** | Company story, mission, vision, core values, and team information |
| 🛠️ **Services** | Detailed service cards with hover effects, FAQs, and CTA section |
| 📞 **Contact** | Contact form with Google Maps integration (theme-aware dark/light map) |
| 🚫 **404** | Custom not found page with navigation back to home |

---

## 🛠️ Tech Stack

This project leverages cutting-edge technologies for optimal performance:

| Technology | Purpose |
|------------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js_16-000?style=flat-square&logo=next.js) | React framework for production |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Type-safe development |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first styling |
| ![Framer Motion](https://img.shields.io/badge/Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | Smooth animations |
| ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white) | Accessible UI components |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000?style=flat-square) | Pre-built UI components |
| ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square) | Beautiful icon library |
| ![Vercel](https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel) | Static deployment & hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sameen-K-A/Skymarex.git
   cd skymarex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables:
   ```env
   NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL="your-google-maps-embed-url"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
skymarex/
├── public/
│   └── assets/
│       └── images/       # Image assets
├── src/
│   ├── app/
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── services/     # Services page
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── not-found.tsx # 404 page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── home/         # Home page sections
│   │   ├── about/        # About page sections
│   │   ├── services/     # Services page sections
│   │   ├── contact/      # Contact page sections
│   │   ├── shared/       # Reusable sections (FAQs)
│   │   ├── layout/       # Navbar, Footer, LoadingScreen
│   │   ├── providers/    # Theme provider
│   │   └── ui/           # UI components (Button, Input, Dialog, etc.)
│   ├── constants/        # Static data (services, testimonials, etc.)
│   └── lib/              # Utility functions
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✨ Key Features

- 🎬 **Loading Screen** — Animated splash screen with Framer Motion
- 🎨 **Modern Design** — Clean, professional UI with smooth animations
- 📱 **Fully Responsive** — Optimized for all screen sizes
- 🌙 **Theme Support** — Light/Dark mode switching with theme-aware components
- ⚡ **High Performance** — Static generation for blazing fast loads
- 🔍 **SEO Optimized** — Meta tags, Open Graph, and structured data
- ♿ **Accessible** — WCAG compliant components with Radix UI
- 🗺️ **Google Maps** — Theme-aware map integration (dark/light mode)
- 📝 **Reusable Components** — FAQs, service cards, testimonials, and more

---

## 🎨 Components

### Home Page Sections
- **HeroSection** — Animated image grid with CTA
- **AboutSection** — Company introduction with stats
- **ServicesSection** — Service highlights with icons
- **PerksSection** — Feature cards with numbered design
- **TestimonialsSection** — Horizontal scroll testimonials with hover effects
- **CertificatesSection** — Marquee with dialog popups
- **FAQSection** — Accordion-style FAQs (reusable)

### UI Components
- Button, Input, Textarea, Label
- Dialog, Accordion
- Marquee, NumberTicker
- WaveText, ShinyButton

---

## 🌐 Deployment

The website is deployed on **Vercel** for optimal performance with:

- Automatic HTTPS
- Global CDN distribution
- Zero-config deployments
- Preview deployments for PRs

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |


---

## 📄 License

This project is proprietary and developed for **Skymarex International Cargo LLC**.

---

<p align="center">
  <strong>Built by <a href="https://veevity.com">Veevity Technologies</a></strong>
</p>

<p align="center">
  <sub>Connecting the world through seamless logistics solutions</sub>
</p>
