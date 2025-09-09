# 🚀 Preston's Portfolio

A modern, responsive portfolio website built with Angular 17, showcasing my skills and projects as a Frontend Developer. This application features smooth animations, internationalization, and a clean, professional design.

🌐 **[View Live Demo](https://prestonjones.dev/)**

![Angular](https://img.shields.io/badge/Angular-17.0.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styled-pink?style=for-the-badge&logo=sass)

## ✨ Features

- **🌐 Internationalization**: Multi-language support (English/German) with NgxTranslate
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Smooth Animations**: Custom CSS animations and AOS (Animate On Scroll) integration
- **🚀 Modern Angular**: Built with Angular 17+ standalone components architecture
- **💼 Project Showcase**: Dynamic portfolio section with detailed project information
- **📧 Contact Form**: Functional contact form with validation and animations
- **🎯 Clean UI/UX**: Professional design with smooth scrolling and interactive elements

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
