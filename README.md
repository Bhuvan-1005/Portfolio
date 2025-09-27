# 🚀 Bhuvaneshwar N - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing my journey as a Full Stack Developer with interactive UI components and a working contact form.

![Portfolio Screenshot](https://img.shields.io/badge/Next.js-14.2.16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)

## 🌟 Features

- **Modern Design**: Clean, professional UI with dark/light theme support
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and transitions
- **Contact Form**: Working email functionality using Resend API
- **Project Showcase**: Dynamic project cards with live GitHub integration
- **Skills Section**: Visual skill representation with progress indicators
- **Performance Optimized**: Built with Next.js for optimal loading speeds

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library

### Backend
- **Next.js API Routes** - Serverless functions
- **Resend** - Email delivery service

### Deployment
- **Vercel** - Optimal hosting for Next.js applications
- **GitHub** - Version control and CI/CD

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kitkat1005/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Resend API key to `.env.local`:
   ```
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

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Sign up at [Resend.com](https://resend.com/)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. For production, add the environment variable to your hosting platform

## 🎨 Customization

### Personal Information
Edit the portfolio configuration in `/data/portfolio-config.ts`:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    email: "your-email@example.com",
    // ... other fields
  },
  // ... other sections
}
```

### Projects
Add your projects to the `projects` array in the same file.

### Styling
- Customize colors and themes in `/styles/globals.css`
- Modify component styles using Tailwind classes
- Add custom animations in component files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📂 Project Structure

```
portfolio-website/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── hero.tsx       # Hero section
│   ├── about.tsx      # About section
│   ├── projects.tsx   # Projects section
│   └── contact.tsx    # Contact form
├── data/              # Configuration and data
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Additional styles
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the project
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