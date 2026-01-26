# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MİRAN İLETİŞİM LOJİSTİK - Modern corporate website built with React.js and Material-UI. Multi-page application with React Router.

## Build & Development Commands

```bash
# Install dependencies (use --legacy-peer-deps due to i18next version conflict)
npm install --legacy-peer-deps

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Architecture

### Tech Stack
- **React.js** - UI Framework
- **React Router** - Page navigation
- **Material-UI (MUI)** - Component library
- **Framer Motion** - Page transitions and animations
- **React Slick** - Hero carousel/slider
- **i18next** - Internationalization (TR/EN)

### Project Structure
```
src/
├── components/     # Reusable UI components
│   ├── Header.js          # Sticky navigation with React Router Links
│   ├── Footer.js          # Site footer with Router Links
│   ├── HeroSlider.js      # Auto-play hero carousel (compact height)
│   ├── ServiceCard.js     # Service display card
│   ├── ProductCard.js     # Product display card
│   ├── ContactForm.js     # Contact form with validation
│   ├── WhatsAppButton.js  # Floating WhatsApp FAB
│   └── LanguageToggle.js  # TR/EN language switcher
├── pages/          # Page components (separate routes)
│   ├── HomePage.js        # / - Hero + intro section
│   ├── AboutPage.js       # /hakkimizda - Mission, Vision, Areas
│   ├── ProductsPage.js    # /urunler - Product grid
│   ├── ServicesPage.js    # /hizmetler - Services grid
│   └── ContactPage.js     # /iletisim - Contact form + info
├── i18n/           # Translations
│   ├── tr.json            # Turkish translations
│   ├── en.json            # English translations
│   └── i18n.js            # i18next configuration
├── theme/          # MUI theme customization
│   └── theme.js           # Colors, typography, component overrides
└── App.js          # Root component with Router and AnimatePresence
```

### Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Hero slider + brief intro |
| `/hakkimizda` | AboutPage | About us (Mission, Vision, Areas) |
| `/urunler` | ProductsPage | Products catalog |
| `/hizmetler` | ServicesPage | Services catalog |
| `/iletisim` | ContactPage | Contact form + info |

### Key Configuration Files
- **Theme colors**: `src/theme/theme.js` - Primary: #1565C0 (blue), Secondary: #37474F (gray)
- **Translations**: `src/i18n/tr.json` and `src/i18n/en.json`
- **WhatsApp number**: Update in `src/components/WhatsAppButton.js` and `src/components/Footer.js`
- **Contact info**: Update in translation files under `contact.info`

### Navigation
- Multi-page app with React Router (BrowserRouter)
- Header uses `Link` components from react-router-dom
- Active page highlighted with underline indicator
- Header is transparent on home page, white on other pages
- Smooth page transitions via Framer Motion's AnimatePresence

### Styling Patterns
- Uses MUI's `sx` prop for inline styles
- Theme-based colors via `primary.main`, `secondary.main`, etc.
- Responsive breakpoints: `xs`, `sm`, `md`, `lg`
- Card hover effects defined in `theme.js`
- Header height: 70-80px with larger padding
- Hero slider height: 65-70vh (compact)
