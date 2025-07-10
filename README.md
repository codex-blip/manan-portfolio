# Manan Kumar - Portfolio Website

A modern, responsive personal portfolio website showcasing my journey as a CS undergraduate from IIT Ropar and aspiring full-stack developer.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes
- **Interactive**: Smooth scrolling, hover effects, and engaging animations
- **Typewriter Effect**: Dynamic hero section with animated text transitions
- **Authentic Content**: Real projects, skills, and achievements
- **Contact Form**: Professional contact form (email integration coming soon)
- **SEO Optimized**: Semantic HTML and proper meta tags

## 🚀 Sections

1. **Hero Section** - Dynamic intro with typewriter effect and social links
2. **About** - Personal story and academic background from IIT Ropar
3. **Skills** - Technical skills with realistic proficiency levels
4. **Projects** - Featured projects including Max-Hub (deployed)
5. **Competitive Programming** - Codeforces achievements and ratings
6. **Achievements** - Timeline of academic and technical accomplishments
7. **Contact** - Contact form and social media links

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Vite 4.x
- **Development**: Hot Module Replacement (HMR), ESLint

## � Real Portfolio Content

### Skills Showcased
- **Frontend**: React, JavaScript, HTML5, CSS3, Tailwind CSS
- **Backend**: Python, Django, Node.js, REST APIs
- **Database**: MySQL
- **Programming**: C++, Python, JavaScript
- **Tools**: Git, VS Code, DataGrip

### Featured Project
- **Max-Hub**: Live project deployed at [maxhub.vercel.app](https://maxhub.vercel.app)

### Competitive Programming
- **Codeforces Rating**: 1300+ 
- **Profile**: [AKIDNAR on Codeforces](https://codeforces.com/profile/AKIDNAR)

## �📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codex-blip/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: '#1F2937',    // Charcoal
  accent: '#6366F1',     // Indigo
  background: '#F9FAFB', // Light gray
  text: '#111827',       // Dark gray
}
```

### Content
Update personal information in `src/data/portfolio.js`:
- Personal info (name, bio, contact details)
- Skills with realistic proficiency levels
- Project details and deployment links
- Social media profiles
- Achievement records and timeline

### Animations
Framer Motion animations are configured in individual components and can be customized by modifying the `motion` props and transition timings.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px (optimized for smartphones)
- **Tablet**: 768px - 1024px (tablet-friendly layout)
- **Desktop**: 1024px+ (full desktop experience)

## 🌐 Deployment

Perfect for deployment on modern platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── sections/     # Main page sections (Hero, About, Skills, etc.)
│   └── ui/          # Reusable UI components (Navbar, Footer)
├── data/            # Portfolio content and personal information
├── hooks/           # Custom React hooks
└── assets/          # Static assets and images
```

### Available Scripts
- `npm run dev` - Start development server with HMR
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎯 Performance & Features

- **Lightweight**: Optimized bundle size with Vite
- **Fast Loading**: Code splitting and lazy loading
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **SEO Ready**: Meta tags and structured data
- **Modern Browser Support**: ES6+ features with compatibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Manan Kumar**
- **Email**: kumarmanan106@gmail.com
- **LinkedIn**: [linkedin.com/in/manan-kumar-11b21431b](https://www.linkedin.com/in/manan-kumar-11b21431b/)
- **GitHub**: [github.com/codex-blip](https://github.com/codex-blip)
- **Instagram**: [@manankumar_69420](https://www.instagram.com/manankumar_69420/)
- **Codeforces**: [AKIDNAR](https://codeforces.com/profile/AKIDNAR)

## 🚀 Future Enhancements

- [ ] Email functionality for contact form
- [ ] Blog section for technical articles
- [ ] More project showcases as they're completed
- [ ] Performance analytics integration
- [ ] Multi-language support

---

**CS Undergraduate @ IIT Ropar | Made with ❤️ and React**
