# Portfolio Showcase

A dynamic personal portfolio built with React + Vite, Framer Motion, and Tailwind CSS, designed for data science and AI professionals. Features a deep dark purple-blue glassmorphism aesthetic with scroll-triggered animations, animated gradient borders, and floating ambient orbs.

## ✨ Features

- **Glassmorphism Design**: Deep dark purple-blue aesthetic with glass-like components
- **Smooth Animations**: Scroll-triggered animations powered by Framer Motion
- **Animated Elements**: Gradient borders, floating ambient orbs, and spinning avatar rings
- **Centralized Content**: All personal data stored in `src/data/cv.ts` for easy updates
- **Responsive Design**: Optimized for all device sizes
- **Security First**: XSS protection, input sanitization, and email validation
- **Zero Config Deployment**: Ready for Replit, Vercel, or Netlify

## 🏗️ Architecture

### Content Management
All personal information is centralized in `src/data/cv.ts`:
- Personal info and contact details
- Work experience and timeline
- Projects with expandable cards
- Skills categorized in tag clouds
- Education with glass cards
- Language proficiencies

### Components Structure
```
src/
├── components/
│   ├── About.tsx          # Stats + language proficiency
│   ├── Contact.tsx        # Secure contact form
│   ├── Education.tsx      # Glass education cards
│   ├── Experience.tsx     # Timeline-style experience
│   ├── Hero.tsx           # Animated hero with spinning avatar
│   ├── Navbar.tsx         # Navigation component
│   ├── Projects.tsx       # Expandable project cards
│   ├── Skills.tsx         # Categorized skills tag cloud
│   └── ui/                # Reusable UI components
├── data/
│   └── cv.ts             # Centralized content data
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aleem-mja/Aleem-portfolio.git
   cd Aleem-portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

3. **Start development server**
   ```bash
   # Using pnpm
   pnpm --dir artifacts/portfolio dev

   # Or navigate to portfolio directory
   cd artifacts/portfolio
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the portfolio
pnpm --dir artifacts/portfolio build

# Preview production build
pnpm --dir artifacts/portfolio serve
```

## 🛡️ Security Features

- **XSS Protection**: Input sanitization on all user inputs
- **Email Validation**: Regex-based email validation
- **Field Limits**: Character limits on all form fields
- **Secure Links**: `rel="noopener noreferrer"` on external links
- **Input Validation**: Client-side validation with proper error handling

## 🎨 Design System

### Color Palette
- **Primary**: Deep purple-blue gradients
- **Accent**: Animated gradient borders
- **Background**: Glassmorphism with blur effects
- **Text**: High contrast for accessibility

### Animations
- **Scroll Triggers**: Elements animate on viewport entry
- **Hover Effects**: Interactive feedback on components
- **Loading States**: Smooth transitions and skeleton loaders
- **Micro-interactions**: Subtle animations for better UX

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for tablets
- **Desktop Enhancement**: Additional features for larger screens
- **Touch Friendly**: Proper touch targets and gestures

## 🏃‍♂️ Performance

- **Vite Build**: Fast development and optimized production builds
- **Code Splitting**: Automatic chunk splitting for better loading
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Analysis**: Minimal bundle size with tree shaking

## 🚀 Deployment

### Replit
1. Fork this repository on Replit
2. Run `pnpm install` in the portfolio directory
3. Click "Run" to start the development server

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `pnpm --dir artifacts/portfolio build`
3. Set output directory: `artifacts/portfolio/dist`
4. Deploy!

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm --dir artifacts/portfolio build`
3. Set publish directory: `artifacts/portfolio/dist`
4. Deploy!

## 📝 Customization

### Updating Content
Edit `src/data/cv.ts` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Languages

### Styling Changes
- Modify Tailwind classes in components
- Update color variables in `tailwind.config.js`
- Adjust animations in Framer Motion components

### Adding Sections
1. Create new component in `src/components/`
2. Add data structure to `cv.ts`
3. Import and use in `App.tsx`

## 🧪 Development

### Available Scripts
```bash
# Development
pnpm dev                    # Start dev server
pnpm build                  # Build for production
pnpm serve                  # Preview production build
pnpm typecheck             # Run TypeScript checks
```

### Project Structure
This is a pnpm workspace with multiple packages:
- `artifacts/portfolio/` - Main portfolio application
- `lib/` - Shared libraries and utilities
- `scripts/` - Build and development scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Made with ❤️ for data science and AI professionals**</content>
<parameter name="filePath">/Users/abdulhaleem/Desktop/Portfolio/Portfolio-Showcase/README.md