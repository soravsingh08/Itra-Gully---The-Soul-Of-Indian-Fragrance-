
# 🏺 Itra Gully  | इत्र गली — The Soul of Indian Fragrance

Bringing the 500-year-old heritage of Kannauj’s **Deg-Bhapka** distillation to a premium digital storefront. This project is a high-end perfume showcase built with a focus on luxury aesthetics, typography, and precise spacing.

---

## 📸 Visual Showcase (Screenshots)


| <img width="1908" height="899" alt="image" src="https://github.com/user-attachments/assets/f9487449-4a2c-49a0-83ac-06ee51e17def" />
 | <img width="362" height="793" alt="image" src="https://github.com/user-attachments/assets/ca91c058-1fd2-4754-93ba-a8187d0f2895" />
 |<img width="363" height="788" alt="image" src="https://github.com/user-attachments/assets/7420b052-f137-45b3-9d77-fd83f06b5e75" />


---

## 🚀 Live Demo & Quick Start

**Live URL:** [https://itra-gully-the-soul-of-indian-fragr-five.vercel.app/#/](https://itra-gully-the-soul-of-indian-fragr-five.vercel.app/#/)

Follow these exact commands to run the project locally:

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


4. **Build for Production:**
```bash
npm run build

```



---

## 🛠️ Tech Stack & Architecture

* **React (Vite):** Chosen for lightning-fast HMR and modular component architecture.
* **React Router (HashRouter):** Implemented to ensure seamless navigation on static hosting like Vercel.
* **CSS3 (Custom Properties):** Used a strict design system with CSS variables for colors, spacing, and typography.
* **Asset Pipeline:** All images are served from the root `/public` directory for optimized production paths.

---

## 🎨 Design Rationale

### **1. Typography Hierarchy**

* **Heading:** *Playfair Display* – A classic serif that reflects the "Royalty" aspect of the brand.
* **Body:** *Inter* – A modern sans-serif for high readability.

### **2. Color Palette**

* **Primary BG (`#0a0a08`):** Obsidian black for a "dark mode" luxury atmosphere.
* **Accent (`#c9a84c`):** Custom gold representing premium Attars.
* **Secondary Text (`#888`):** Low-contrast grey for visual hierarchy.

### **3. Layout & Spacing**

* **Grid System:** 4-column desktop, 2-column tablet, and 1-column mobile grid.
* **Spacing Scale:** Followed an 8px base scale (8/16/24/32/64) for absolute consistency.
* **Image Handling:** Used `object-fit: cover` to maintain a high-end look.

---

## 📝 Known Limitations & Trade-offs

* **Frontend Only:** No backend; data is managed via a static JSON structure.
* **Search/Filter:** Basic category filtering implemented for performance.
* **Scrollbar Hack:** Implemented `overflow-y: overlay` for a seamless edge-to-edge Navbar experience.

---
