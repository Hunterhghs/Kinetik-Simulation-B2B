# Kinetik Simulation B2B Website

A modern B2B marketing website for Kinetik Simulation, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Hunterhghs/Kinetik-Simulation-B2B.git
cd Kinetik-Simulation-B2B

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
kinetikb2b/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   └── ui/          # Reusable UI components
│   └── lib/             # Utility functions and helpers
├── content/             # MDX content files
│   ├── blog/           # Blog posts
│   ├── guides/         # User guides
│   └── benchmarks/     # Benchmark templates
├── public/             # Static assets
└── docs/               # Documentation

```

## 🎨 Features

- **Modern Stack**: Next.js 15, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Built-in theme switching
- **Content Management**: MDX-based blog, guides, and benchmarks
- **SEO Optimized**: Metadata, sitemaps, and robots.txt
- **Performance**: Static generation and optimized builds

## 📄 Content

The site includes three content types:

- **Blog**: Operator-first writing on signals, governance, and RevOps workflows
- **Guides**: Step-by-step playbooks for signal governance
- **Benchmarks**: Templates and measurement frameworks

All content is stored in the `content/` directory as MDX files.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done)
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure build settings
5. Add custom domain: `kinetikb2b.ai`
6. Configure environment variables (optional):
   - `NEXT_PUBLIC_SITE_URL` - Your production URL
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - For analytics (optional)

### Deploy to Netlify

1. Visit [netlify.com](https://netlify.com)
2. Import your repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add custom domain and configure DNS

### DNS Configuration (Route 53 or other)

For `kinetikb2b.ai`:

1. **A Record** (apex): Point to your hosting provider's IP
2. **CNAME** (www): Point to your hosting provider's domain

See `docs/deploy-aws.md` for detailed AWS deployment instructions.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://kinetikb2b.ai
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kinetikb2b.ai
```

### Customization

- **Branding**: Update `src/lib/site.ts` for site name and description
- **Theme**: Modify `src/app/globals.css` for color scheme
- **Content**: Add/edit MDX files in `content/` directory

## 📝 Adding Content

### Blog Post

Create a new file in `content/blog/your-post.mdx`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
date: "2025-01-15"
author: "Your Name"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

### Guide or Benchmark

Same format, but place in `content/guides/` or `content/benchmarks/`

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **Content**: MDX with gray-matter
- **Theme**: next-themes

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run linkedin:export` - Export LinkedIn carousel images

## 🔗 Links

- **Repository**: https://github.com/Hunterhghs/Kinetik-Simulation-B2B
- **Original Site**: https://www.kinetiksimulation.com
- **Documentation**: See `docs/` directory

## 📄 License

This project is proprietary to Kinetik Simulation.

## 🤝 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ for Kinetik Simulation**
