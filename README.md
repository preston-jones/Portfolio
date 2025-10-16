# 🚀 Preston's Portfolio

A modern, responsive portfolio website built with Angular 17, showcasing my skills and projects as a Frontend Developer. This application features smooth animations, internationalization, and a clean, professional design.

🌐 **[View Live Demo](https://prestonjones.dev/)**

![Angular](https://img.shields.io/badge/Angular-17.0.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styled-pink?style=for-the-badge&logo=sass)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-green?style=for-the-badge&logo=accessibility)
![Lighthouse](https://img.shields.io/badge/Lighthouse-A11y%20≥90-brightgreen?style=for-the-badge&logo=lighthouse)

## ✨ Features

- **🌐 Internationalization**: Multi-language support (English/German) with NgxTranslate
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Smooth Animations**: Custom CSS animations and AOS (Animate On Scroll) integration
- **🚀 Modern Angular**: Built with Angular 17+ standalone components architecture
- **💼 Project Showcase**: Dynamic portfolio section with detailed project information
- **📧 Contact Form**: Functional contact form with validation and animations
- **🎯 Clean UI/UX**: Professional design with smooth scrolling and interactive elements
- **♿ WCAG 2.1 AA Compliant**: Full accessibility compliance with screen reader support
- **🏆 Lighthouse Optimized**: High performance and accessibility scores (≥90)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 17.0.0
- **Language**: TypeScript 5.2.2
- **Styling**: SCSS with custom animations
- **UI Components**: Angular Material 17.3.10
- **Animations**: Angular Animations + AOS library

### Libraries & Tools
- **Internationalization**: @ngx-translate/core (15.0.0)
- **Animation Library**: AOS (Animate On Scroll) 2.3.4
- **State Management**: RxJS Observables
- **Build Tool**: Angular CLI 17.0.6
- **Testing**: Jasmine & Karma

### Development
- **Code Quality**: TypeScript strict mode
- **Architecture**: Standalone components
- **Routing**: Angular Router with smooth scrolling
- **Forms**: Angular Reactive Forms with validation

## ♿ Accessibility & WCAG 2.1 AA Compliance

This portfolio is fully compliant with **WCAG 2.1 AA standards** and optimized for all users, including those using assistive technologies.

### 🎯 Accessibility Features

#### **Semantic HTML & ARIA**
- Proper semantic elements (`<header>`, `<main>`, `<nav>`, `<footer>`)
- Comprehensive ARIA labels and descriptions
- Logical heading hierarchy (H1 → H2 → H3)
- Skip navigation link for keyboard users
- Landmark roles for screen reader navigation

#### **Keyboard Navigation**
- Full keyboard accessibility (Tab, Enter, Esc)
- Visible focus indicators on all interactive elements
- No keyboard traps or inaccessible content
- Skip link: "Zum Inhalt springen" / "Skip to content"
- Logical tab order throughout the application

#### **Visual Accessibility**
- **High Contrast**: All text meets WCAG AA contrast ratios (≥4.5:1)
- **Scalable Text**: Responsive design up to 200% zoom
- **Touch Targets**: All interactive elements ≥44px for mobile accessibility
- **Color Independence**: Information never conveyed by color alone
- **Focus Visibility**: Clear focus states with `:focus-visible`

#### **Screen Reader Support**
- Comprehensive `alt` attributes for all images
- Descriptive link text and button labels
- Form labels and error messages
- Live regions for dynamic content updates
- Proper table headers and data associations

#### **Motion & Animation**
- Respects `prefers-reduced-motion` user preferences
- No autoplay videos or audio
- Animations can be paused or disabled
- No flashing or strobing content >3Hz

#### **Language & Content**
- Proper `lang` attributes (German/English)
- Clear, simple language structure
- Consistent navigation and terminology
- Helpful error messages and form validation

### 🧪 Accessibility Testing

#### **Automated Testing**
- **Lighthouse Accessibility**: Score ≥90
- **axe-core**: No violations detected
- **WAVE**: Web accessibility evaluation passed

#### **Manual Testing**
- **Screen Readers**: Tested with NVDA, JAWS, VoiceOver
- **Keyboard Only**: Full functionality without mouse
- **High Contrast Mode**: Windows High Contrast compatible
- **Zoom Testing**: 200% zoom functional and usable

#### **Browser Compatibility**
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Assistive technology compatibility

### 📊 Performance Optimization

#### **Image Optimization**
- `NgOptimizedImage` for automatic image optimization
- Proper aspect ratios to prevent layout shifts
- WebP format support with fallbacks
- Responsive image loading

#### **Lighthouse Scores**
- **Performance**: ≥90
- **Accessibility**: ≥90
- **Best Practices**: ≥90
- **SEO**: ≥90

### 🛠️ WCAG Implementation

#### **Level A Compliance**
✅ Non-text content alternatives  
✅ Audio/video alternatives  
✅ Adaptable content structure  
✅ Distinguishable visual presentation  
✅ Keyboard accessible functionality  
✅ No seizure-inducing content  
✅ Navigable and findable content  
✅ Readable and understandable content  
✅ Predictable functionality  
✅ Input assistance and error handling  
✅ Compatible with assistive technologies  

#### **Level AA Enhancements**
✅ Enhanced contrast ratios (4.5:1 minimum)  
✅ Text resize up to 200% without scrolling  
✅ Multiple ways to locate content  
✅ Consistent navigation and identification  
✅ Context-sensitive help available  

### 🔧 Accessibility Tools Used

- **@angular/cdk/a11y**: Angular accessibility utilities
- **ARIA Live Regions**: Dynamic content announcements
- **Focus Trap**: Modal and dialog accessibility
- **Color Contrast Analyzers**: WCAG compliance verification
- **Screen Reader Testing**: Regular validation with assistive technologies

## 🎯 Sections

### 1. Above the Fold
- Hero section with animated typewriter effect
- Call-to-action button
- Professional introduction

### 2. About Me
- Personal introduction and philosophy
- Professional background
- Animated scroll effects

### 3. My Skills
- Interactive skill showcase
- Technology icons with hover effects
- Organized skill categories

### 4. Portfolio
- Dynamic project gallery
- Project filtering and navigation
- Live demo and GitHub links
- Responsive project cards

### 5. Contact
- Animated contact form
- Form validation with custom error messages
- Success/error feedback animations
- Social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
# Build the project
npm run build

# The build artifacts will be stored in the `dist/` directory
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop**: 1920px and above
- **Large Tablets**: 1024px - 1919px
- **Tablets**: 768px - 1023px
- **Mobile Large**: 480px - 767px
- **Mobile**: 479px and below

## 🌐 Internationalization

The application supports multiple languages:
- **English** (default)
- **German**

Language files are located in `src/assets/i18n/`:
- `en.json` - English translations
- `de.json` - German translations

## 🎨 Animations & Effects

### Custom Animations
- **Typewriter Effect**: Animated text typing in hero section
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Hover Effects**: Interactive buttons and links
- **Form Animations**: Success/error feedback with GIF animations

### AOS Integration
- Scroll-triggered animations
- Fade, slide, and zoom effects
- Customizable animation delays and durations

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
ng test --code-coverage
```

## 📋 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build and watch for changes

## 🔧 Configuration

### Angular.json Budgets
The project is optimized with specific budget configurations:
- Initial bundle: 2MB warning, 5MB error
- Any bundle: 2MB warning, 5MB error

### TypeScript Configuration
- Strict mode enabled
- ES2022 target
- Module resolution optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

*Built with ❤️ using Angular 17, TypeScript, and modern web technologies.*
