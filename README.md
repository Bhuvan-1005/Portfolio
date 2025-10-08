# 🚀 Bhuvaneshwar N - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Featuring a comprehensive showcase of my Full Stack Development journey with interactive UI components, GitHub stats integration, and a professional contact system.

![Portfolio Screenshot](https://img.shields.io/badge/Next.js-14.2.16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel)

## 🌟 Key Features

### 🎨 **Modern Design & UX**
- **Dark Theme**: Professional dark theme optimized for developer aesthetic
- **Responsive Layout**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Enhanced Loading Screen**: Custom animated loading experience with Next.js branding
- **Smooth Animations**: Intersection Observer-based animations and smooth transitions
- **Custom Favicon**: Next.js branded favicon with PWA support

### 💼 **Portfolio Sections**
- **Hero Section**: Dynamic typing effect with social media integration
- **About Me**: Personal story with downloadable resume functionality
- **Skills Showcase**: Interactive skill cards with official technology logos and proficiency levels
- **Project Gallery**: Featured projects with live demos and GitHub links
- **GitHub Stats**: Real-time GitHub activity, contribution calendar, and repository statistics
- **Personal Stats**: Development metrics and achievement highlights
- **Contact Form**: Professional contact system with email notifications

### 🔧 **Technical Features**
- **GitHub API Integration**: Live stats, contribution graphs, and repository data
- **Email System**: Contact form with Resend API integration and custom templates
- **PWA Support**: Progressive Web App functionality with manifest.json
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized bundle size with unused component cleanup

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router and Server Components
- **TypeScript** - Type-safe development with strict mode
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Modern icon library with 1000+ icons

### Backend & APIs
- **Next.js API Routes** - Serverless API endpoints
- **Resend** - Modern email delivery service
- **GitHub API** - Real-time repository and user statistics

### Development & Deployment
- **Vercel** - Zero-configuration deployment platform
- **GitHub** - Version control with automated deployments
- **ESLint & Prettier** - Code quality and formatting

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page component
│   └── api/               # API routes
│       ├── contact/       # Contact form endpoint
│       └── github/        # GitHub stats endpoint
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact form
│   ├── github-stats.tsx  # GitHub integration
│   ├── hero.tsx          # Landing section
│   ├── loading-screen.tsx # Enhanced loading animation
│   ├── navigation.tsx    # Header navigation
│   ├── personal-stats.tsx # Development metrics
│   ├── projects.tsx      # Project showcase
│   ├── skills.tsx        # Skills and technologies
│   └── typing-effect.tsx # Animated typing component
├── data/                 # Configuration and content
│   └── portfolio-config.ts # Site configuration
├── lib/                  # Utilities
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    ├── favicon.svg       # Next.js branded favicon
    ├── apple-touch-icon.svg # Apple touch icon
    ├── manifest.json     # PWA manifest
    └── Bhuvaneshwar-Resume.pdf # Resume file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - JavaScript runtime
- **npm or pnpm** - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhuvan-1005/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### 📧 Email Setup (Contact Form)

1. **Sign up at [Resend.com](https://resend.com/)**
2. **Get your API key** from the Resend dashboard
3. **Add to environment variables**:
   - Development: Add to `.env.local`
   - Production: Add to your hosting platform (Vercel, Netlify, etc.)

### 🎨 Customization

**Personal Information** - Edit `/data/portfolio-config.ts`:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
    location: "Your Location",
    email: "your.email@example.com",
    resumeUrl: "/your-resume.pdf",
    // ... other settings
  },
  // ... rest of configuration
}
```

**Project Showcase** - Update the projects array in the same file:
```typescript
projects: [
  {
    title: "Your Project",
    description: "Project description...",
    technologies: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-project.com",
    featured: true
  }
]
```

**Skills & Technologies** - Modify the skills array:
```typescript
skills: [
  {
    name: "Technology Name",
    level: 90, // 0-100
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/..."
  }
]
```

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    email: "your-email@example.com",
    // ... other fields
  },
  // ... other sections
};
```

### Projects

Add your projects to the `projects` array in the same file.

### Styling

- Customize colors and themes in `/styles/globals.css`
- Modify component styles using Tailwind classes
- Add custom animations in component files

## � Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Bhuvan-1005/Portfolio)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add `RESEND_API_KEY` in Vercel dashboard
3. **Deploy**: Automatic deployment on every push to main branch
4. **Custom Domain**: Configure your custom domain in Vercel settings

### Alternative Deployments

**Netlify**:
```bash
npm run build
# Deploy the .next folder
```

**GitHub Pages**:
```bash
npm run build
npm run export
# Deploy the out folder
```

## 📱 Performance & Optimization

### ⚡ Performance Features
- **Next.js App Router**: Server-side rendering and static generation
- **Image Optimization**: Automatic image optimization and lazy loading
- **Bundle Analysis**: Optimized component tree-shaking
- **Lighthouse Score**: 90+ across all metrics

### 🧹 Clean Codebase
- **TypeScript**: Type safety and better developer experience
- **ESLint**: Code quality and consistency
- **Component Cleanup**: Removed unused UI components (35+ files cleaned)
- **Optimized Imports**: Tree-shaking friendly imports

## �️ Scripts & Commands

```bash
# Development
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint checks

# Deployment
npm run export       # Export static files for GitHub Pages
```

## 📊 Features Breakdown

### 🎯 Core Components
- ✅ **Hero Section** - Dynamic typing effect with social links
- ✅ **About Section** - Personal story with resume download
- ✅ **Skills Showcase** - Interactive technology cards with proficiency
- ✅ **Projects Gallery** - Featured work with live demos
- ✅ **GitHub Integration** - Real-time stats and contribution data
- ✅ **Contact System** - Professional form with email notifications
- ✅ **Loading Animation** - Enhanced loading experience
- ✅ **PWA Support** - Progressive Web App functionality

### 🔧 Technical Highlights
- ✅ **TypeScript Integration** - Full type safety
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimization** - Meta tags and Open Graph
- ✅ **Performance Optimization** - Lighthouse 90+ scores
- ✅ **Email Integration** - Resend API with custom templates
- ✅ **GitHub API** - Live repository and user statistics
- ✅ **Custom Animations** - Intersection Observer based
- ✅ **PWA Ready** - Manifest and service worker support

## 🤝 Contributing & Support

### Contributing
While this is a personal portfolio, feedback and suggestions are always welcome!

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Support
- 🐛 **Issues**: Report bugs via GitHub Issues
- 💡 **Feature Requests**: Suggest improvements
- 📧 **Contact**: Reach out via the contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For the seamless deployment platform
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Resend** - For reliable email delivery

---

**Built with ❤️ by [Bhuvaneshwar N](https://github.com/Bhuvan-1005)**

[![GitHub](https://img.shields.io/badge/GitHub-Bhuvan--1005-181717?logo=github)](https://github.com/Bhuvan-1005)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin)](https://www.linkedin.com/in/bhuvaneshwar-n-2577232b3)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-success?logo=vercel)](https://portfolio-website-six-olive-95.vercel.app)
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Bhuvaneshwar N**

- 📧 Email: bhuvaneshwar2006@gmail.com
- 💼 LinkedIn: [bhuvaneshwar-n-2577232b3](https://www.linkedin.com/in/bhuvaneshwar-n-2577232b3)
- 🐙 GitHub: [@Kitkat1005](https://github.com/Kitkat1005)
- 🐦 Twitter: [@Bhuvaneshwarn4](https://www.x.com/Bhuvaneshwarn4)
- 📍 Chennai, Tamil Nadu, India

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Email service by [Resend](https://resend.com/)
- Deployed on [Vercel](https://vercel.com/)

---

⭐ **If you like this project, please give it a star on GitHub!**
