# Little York Smoke Shop — Digital Retail Experience

A modern, conversion-focused retail website designed to elevate the digital presence of a local smoke shop in Houston, TX.

This project was built to function as a **digital storefront**, not just an informational website — emphasizing product visibility, strong calls-to-action, and real-world customer conversion.

---

## 🚀 Overview

Most local business websites stop at basic information.  
This project rethinks that approach by delivering a **retail-first experience** that:

- Communicates value immediately
- Showcases products and deals clearly
- Reduces friction for high-intent users
- Drives in-store visits through strong UX patterns

---

## 🎯 Objectives

- Improve brand presence and first impression
- Increase visibility of products and promotions
- Enable faster user decision-making
- Optimize mobile usability for on-the-go users
- Create a scalable, component-driven UI system

---

## ✨ Key Features

### 🧭 Customer Experience

- High-impact hero with live store status
- Clear navigation focused on user intent
- Strong call-to-action placement (Call / Directions)

### 🛍️ Product Discovery

- Product browsing with category filtering
- Search functionality
- Featured deals and promotions
- Structured product card system

### 📍 Store Engagement

- Location and hours display
- Google Maps integration
- Contact form for inquiries
- Newsletter signup for retention

### ⚙️ Enhanced Functionality

- Live chat support
- Shopping cart UI system
- Age verification modal
- Cookie consent management (GDPR-aware)
- Progressive Web App (PWA) support

### ♿ Accessibility

- Skip-to-content navigation
- ARIA labeling
- Keyboard-friendly interactions
- High contrast UI patterns

---

## 🧱 Tech Stack

### Frontend

- **React 19**
- **Vite 8**
- **Tailwind CSS 4**

### UX & Interaction

- **Framer Motion** (animations)
- Component-driven UI architecture

### Testing & Quality

- **Vitest**
- **React Testing Library**
- **ESLint**
- **Prettier**

### Deployment

- **Vercel**

---

## 🧩 Architecture Highlights

- Modular component structure (`layout`, `sections`, `ui`)
- Data-driven product rendering (`storeData.js`)
- Reusable UI primitives for scalability
- Clean separation between presentation and data
- Test files colocated with components

---

## 📁 Project Structure

little-york/
├── public/ # Static assets + PWA config
├── src/
│ ├── assets/ # Images and media
│ ├── components/
│ │ ├── layout/ # Header, Footer
│ │ ├── sections/ # Page sections
│ │ └── ui/ # Reusable components
│ ├── data/ # Store/product data
│ ├── pages/ # Route-level components
│ ├── test/ # Test setup
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── vercel.json

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd little-york
npm install
npm run dev
```

---

Visit: http://localhost:5173

---

## 🏗️ Build & Preview

npm run build
npm run preview

---

## 🧪 Testing

npm run test
npm run test:ui
npm run test:coverage

---

## 🚀 Deployment

This project is configured for Vercel deployment.

Automatic

Connect the repository to Vercel for CI/CD deployment.

Manual
npm run build

Deploy the dist/ folder to your hosting provider.

## 🌐 Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

---

## 🧠 Key Takeaways

This project demonstrates:

Strong UI/UX thinking applied to a local business context
Ability to transform a basic site into a retail-driven experience
Scalable front-end architecture using modern tools
Attention to performance, accessibility, and usability

---

## ⚠️ Disclaimer

This project is presented as a portfolio case study.
It is not an actively managed or affiliated production system.

---

Built with precision, intention, and a little bit of attitude 😤
