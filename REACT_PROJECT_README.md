# Botomotion React Project

A modern React + Vite conversion of the Botomotion landing page. This project features AI automation and chatbot solutions with smooth animations and interactive components.

## 🚀 Features

- **React 19** with modern hooks
- **Vite** for fast development and optimized builds
- **Responsive design** with mobile-first approach
- **Smooth scroll animations** with intersection observer
- **Interactive contact form** with visual feedback
- **Custom styling** with CSS variables and animations
- **Component-based architecture** for easy maintenance

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── StatsBar.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Portfolio.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/              # Custom React hooks
│   └── useScrollReveal.js
├── styles/             # CSS files
│   └── App.css
├── App.jsx
└── main.jsx
```

## 🛠 Installation & Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`

3. **Build for production:**

   ```bash
   npm run build
   ```

   Output files will be in the `dist/` directory

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📋 Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## 🎨 Styling

All styles are in `src/styles/App.css` with:

- CSS custom properties (variables) for consistent theming
- Responsive design breakpoints
- Smooth animations using `@keyframes`
- Mobile-first approach with media queries

## 🔄 Key Components

### Navigation

Fixed header with smooth navigation links and CTA button

### Hero Section

Large-format introduction with animated orbit visualization and floating chips

### Services

Grid of service offerings with hover effects

### About

Company information with highlighted features

### Portfolio

Past projects showcase with gradient backgrounds

### Contact

Contact information and interactive form with submit feedback

### Footer

Navigation footer with links and copyright

## 🎯 Component Communication

- **useScrollReveal hook**: Manages scroll-based animations for all `.reveal` elements
- **Contact form state**: Managed with React hooks (useState)
- **Navigation**: Smooth scroll anchors to all sections

## 🌐 Browser Support

- Modern browsers supporting ES6+
- CSS Grid and Flexbox support required
- CSS Variables support required

## 📝 Notes

- Google Fonts (DM Serif Display, DM Sans) are loaded in `index.html`
- Animations use CSS keyframes for optimal performance
- Form submission is simulated with a 1.2s delay and visual feedback
- All emojis are used for visual indicators

## 🔧 Customization

Edit `src/styles/App.css` to modify:

- Colors (CSS variables in `:root`)
- Fonts
- Spacing and sizing
- Animation timings
- Breakpoints

Edit individual components in `src/components/` to modify:

- Content
- Structure
- Component-specific logic

## 📦 Dependencies

- `react@^19.2.4` - UI library
- `react-dom@^19.2.4` - React DOM rendering
- `vite@5` - Build tool and dev server
- `@vitejs/plugin-react@4` - React support for Vite

---

Built with React + Vite ⚡
