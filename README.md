# PrimusOrigin - Premium Spices Export Website

A modern, multi-page React website for PrimusOrigin, an export business specializing in premium black pepper from Kerala, India.

## Features

- ✅ Multi-page navigation with React Router
- ✅ Fully responsive design (mobile & desktop optimized)
- ✅ Smooth animations with Framer Motion
- ✅ Contact form with Web3Forms integration
- ✅ Modern UI with Tailwind CSS
- ✅ SEO-friendly meta tags

## Pages

- **Home** - Hero section with brand introduction
- **About** - Company story and values
- **Products** - Product showcase (Whole pepper, Ground pepper, Custom packaging)
- **Process** - 4-step workflow from farm to export
- **Quality** - Certifications and quality standards
- **Contact** - Contact form and business information

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- Web3Forms

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run development server:
```bash
npm run dev
# or
yarn dev
```

3. Build for production:
```bash
npm run build
```

## Contact Information

- **Email:** primusoriginbusiness@gmail.com
- **Phone:** +91 87621 54637
- **Location:** Kerala, India

## Setup Instructions

### Logo and Favicon
See [LOGO_FAVICON_INSTRUCTIONS.md](./LOGO_FAVICON_INSTRUCTIONS.md) for details on adding your logo and favicon.

### Contact Form
The contact form uses Web3Forms. The access key is already configured. If you need to change it:
1. Visit [web3forms.com](https://web3forms.com)
2. Get your access key
3. Update it in `src/components/Contact.jsx`

## Color Scheme

- Primary: `#0E3D2F` (Dark Green)
- Secondary: `#476A57` (Medium Green)
- Accent: `#D4B98A` (Gold/Beige)
- Background: `#F3F0E6` (Cream)
- Text: `#1A1A1A` (Dark Gray)

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Process.jsx
│   ├── Quality.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   ├── Process.jsx
│   ├── Quality.jsx
│   └── Contact.jsx
├── assets/         # Images and static files
├── App.jsx         # Main app with routing
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## License

© 2026 PrimusOrigin. All rights reserved.
