<div align="center">

  <img src="public/logo.png" alt="Fancy Printing Press Logo" width="100" height="100" />

  # 🖨️ Fancy Printing Press

  **A modern, performant, and responsive commercial printing showcase web application built with Next.js 14, TypeScript, Tailwind CSS, and Radix UI / shadcn/ui.**

  [![Live Website](https://img.shields.io/badge/Live_Site-fancyprintingpress.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://fancyprintingpress.com)
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📑 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Available Scripts](#-available-scripts)
- [SEO & Open Graph](#-seo--open-graph)
- [Core Services Showcase](#-core-services-showcase)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact & Team](#-contact--team)

---

## 💡 About The Project

**Fancy Printing Press** is an established commercial printing company based in Gujranwala, Pakistan, with over two decades of printing excellence. 

This repository houses the modern web application designed to showcase their full range of printing services—from custom business cards and marketing flyers to hard-cover thesis binding and Shinny rubber stamps. It features direct integration with WhatsApp for seamless client quoting and customer acquisition.

---

## ✨ Key Features

- ⚡ **Next.js 14 App Router:** High performance, server-side rendering, Edge dynamic OG image generation, and optimized metadata handling.
- 🎨 **Modern Design & Animations:** Custom HSL color scheme (*Oxford Blue, Soft Ivory, and Crimson Red*), smooth scrolling, and micro-interactions powered by `tailwindcss-animate`.
- 📱 **Fully Responsive UI:** Optimized across all screen sizes with accessible mobile drawers, carousels (`embla-carousel-react`), and dynamic navigation sheets.
- 💬 **WhatsApp Lead Generation:** Direct instant-quote routing via personalized WhatsApp message deep-links for team members.
- 🔘 **Interactive Service Modals:** Dynamic dialog boxes (`shadcn/ui` + Radix UI) showcasing sub-service categories with rich visuals and quick-action quoting buttons.
- 🔍 **Search Engine Optimized (SEO):** Includes structured `schema.org` (`PrintingService` JSON-LD), dynamic `robots.ts`, dynamic `sitemap.ts`, and edge OpenGraph image generator (`app/opengraph-image.tsx`).
- 📊 **Vercel Analytics & Insights:** Integrated `@vercel/analytics` and `@vercel/speed-insights` for performance tracking.

---

## 🛠️ Tech Stack

<div align="center">

| Area | Technologies |
|---|---|
| **Framework** | Next.js 14 (App Router), React 18 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4, PostCSS, `clsx`, `tailwind-merge` |
| **UI Components** | Radix UI primitives, `shadcn/ui` ("New York" style) |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans (`geist`), Google Manrope (`next/font`) |
| **Carousel & Sliders** | Embla Carousel React |
| **Analytics & SEO** | Vercel Analytics, Vercel Speed Insights, OpenGraph Edge Engine |

</div>

---

## 📂 Directory Structure

```text
abdulwahabsaim-fancy-printing-press/
├── app/
│   ├── globals.css           # Global Tailwind classes, design tokens & theme vars
│   ├── layout.tsx            # Root layout with Google Fonts, Analytics & Metadata
│   ├── opengraph-image.tsx   # Dynamic OG Image generator running on Edge runtime
│   ├── page.tsx              # Homepage (Hero, Services, About, Contact)
│   ├── robots.ts             # Robots.txt generator
│   └── sitemap.ts            # Dynamic sitemap generator
├── components/
│   ├── ui/                   # Modular shadcn/ui components (dialog, button, etc.)
│   ├── footer.tsx            # Footer with navigation and business info
│   ├── header.tsx            # Sticky navbar with mobile sheet navigation
│   ├── json-ld-schema.tsx    # Schema.org structured JSON-LD data
│   ├── service-modal.tsx     # Reusable popup dialog for service details
│   ├── theme-provider.tsx    # Next-themes wrapper
│   └── whatsapp-float.tsx    # Floating WhatsApp CTA button
├── hooks/
│   ├── use-mobile.ts         # Hook to detect mobile viewports
│   └── use-toast.ts          # Hook for UI toast notifications
├── lib/
│   ├── data.ts               # Core service catalog and subservice configurations
│   ├── icons.tsx             # Dynamic Lucide icon mapper
│   ├── image-paths.ts        # Centralized static image asset paths
│   ├── page-content.tsx      # About and Team/Contact UI sections
│   └── utils.ts              # Tailwind CSS class merging helper (`cn`)
├── public/                   # Static assets, logos, manifests, favicons
├── components.json           # shadcn/ui configuration
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration and keyframes
└── tsconfig.json             # TypeScript compiler settings
🚀 Getting Started
Follow these instructions to get a local development instance up and running.
Prerequisites
Node.js: v18.17.0 or later
Package Manager: npm, pnpm, yarn, or bun
Installation
Clone the repository:
code
Bash
git clone https://github.com/abdulwahabsaim/fancy-printing-press.git
cd fancy-printing-press
Install dependencies:
code
Bash
npm install
# or
pnpm install
# or
yarn install
Environment Variables
Create a .env.local file in the root directory and configure the following variables:
code
Env
# Team WhatsApp contact numbers (include country code without '+' or special characters)
NEXT_PUBLIC_WHATSAPP_NADEEM=923006484741
NEXT_PUBLIC_WHATSAPP_JAZIB=923041568682
Running Locally
Start the development server:
code
Bash
npm run dev
# or
pnpm dev
# or
yarn dev
Open http://localhost:3000 in your browser to view the application.
📜 Available Scripts
Command	Description
npm run dev	Starts the local development server at localhost:3000
npm run build	Builds the production application with Next.js compiler
npm run start	Starts the production server
npm run lint	Runs ESLint to check for code quality and syntax errors
🌐 SEO & Open Graph
This application is built with SEO best practices:
Edge OG Images: Utilizes ImageResponse from next/og on Edge runtime (app/opengraph-image.tsx) to generate dynamic social share preview cards.
Rich Snippets: Implements JSON-LD (PrintingService) specifying business location, operating hours, contact endpoints, and founders.
Search Metadata: Configured with canonical links, sitemaps, and robots instructions in the App Router.
📦 Core Services Showcase
<details>
<summary>Click to view the supported printing services</summary>
💳 Business & ID Cards: Digital business cards, offset cards, PVC ID badges.
💌 Greeting & Wedding Cards: Custom wedding invitations, holiday cards, formal envelopes.
📢 Marketing Materials: Digital/Offset flyers, event posters, custom die-cut sticker labels, A3 sheets.
🚩 Banners & Displays: Weather-resistant flex banners, X-Stands, roll-up banners, display accessories.
📚 Book & Thesis Printing: Hardcover thesis binding, saddle-stitched booklets, tape/press binding.
🖋️ Rubber Stamps: Self-inking Shinny stamps (S-724, S-824, S-844, E-916), round stamps, personal seals.
📄 Office Stationery: Customized high-grade digital and offset corporate letterheads.
🎁 Specialty & Promotional: Magic heat-reveal mugs, standard ceramic mugs, non-woven reusable bags.
</details>
🤝 Contributing
Contributions, issues, and feature requests are welcome!
Fork the Project (https://github.com/abdulwahabsaim/fancy-printing-press/fork)
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
