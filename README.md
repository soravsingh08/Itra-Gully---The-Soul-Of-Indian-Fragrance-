

# 🏺 Itra Gully — Liquid Royalty

Bringing the 500-year-old heritage of Kannauj’s **Deg-Bhapka** distillation to a premium digital storefront. This project is a high-end perfume showcase built with a focus on luxury aesthetics, typography, and precise spacing.

---

## 🚀 Quick Setup Instructions

Follow these exact commands to run the project locally. No assumptions, just execution:

1. **Clone the Repository:**
```bash
git clone <your-repo-link>
cd itra-gully

```

2. **Install Dependencies:**
```bash
npm install

```

3. **Run Development Server:**
```bash
npm run dev

```

*The site will be available at `https://itra-gully-the-soul-of-indian-fragr-five.vercel.app/#/`
4. **Build for Production:**
```bash
npm run build

```



---

## 🛠️ Tech Stack & Architecture

* **React (Vite):** Chosen for lightning-fast HMR and modular component architecture.
* **React Router (HashRouter):** Implemented to ensure seamless navigation and deep-linking on static hosting platforms like Vercel/GitHub Pages.
* **CSS3 (Custom Properties):** Used a strict design system with CSS variables for colors, spacing, and typography to avoid "cheap" inline styles.
* **Asset Pipeline:** All images are served from the root `/public` directory to ensure optimized paths on production builds.

---

## 🎨 Design Rationale

### **1. Typography Hierarchy**

* **Heading:** *Playfair Display* – A classic serif that reflects the "Royalty" aspect of the brand.
* **Body:** *Inter* – A modern sans-serif for high readability and a clean professional feel.

### **2. Color Palette**

* **Primary BG (`#0a0a08`):** An obsidian black used to create a "dark mode" luxury atmosphere.
* **Accent (`#c9a84c`):** A custom gold that represents the "Liquid Gold" nature of premium Attars.
* **Secondary Text (`#888`):** Low-contrast grey for supporting information to maintain visual hierarchy.

### **3. Layout & Spacing**

* **Grid System:** 4-column desktop, 2-column tablet, and 1-column mobile grid.
* **Spacing Scale:** Strictly followed an 8px base scale (8/16/24/32/64) to ensure absolute consistency as requested.
* **Image Handling:** Used `object-fit: cover` on all product cards to prevent stretching and maintain a high-end look.

---

## 📝 Known Limitations & Trade-offs

* **Frontend Only:** As per requirements, there is no backend; all data is managed via a static JSON-like structure.
* **Search/Filter:** Basic category filtering is implemented; however, advanced search indexing was omitted to keep the bundle size light.
* **Scrollbar Hack:** Implemented `overflow-y: overlay` for a seamless edge-to-edge Navbar experience, which may behave differently on older legacy browsers.

---
