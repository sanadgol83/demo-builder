# 🏗️ Molke Bastan — Construction Company Website

A modern, minimal, and creative **frontend demo website** for a construction and architectural company.

**Molke Bastan** is a Persian RTL website concept designed to showcase construction services, completed projects, and the company's professional identity through a clean and serious visual experience.

> **Demo Project:** This repository contains a frontend demonstration. Some sections and interactions are intentionally limited and display a demo notice instead of providing full functionality.

---

## ✨ Features

* 🏠 Modern landing page with a full-screen hero section
* 🏗️ Construction company services showcase
* 📐 Architectural design and planning services
* 🚧 Excavation and land preparation services
* 🏢 Construction project portfolio
* 🖼️ Project gallery with responsive image layouts
* 📱 Fully responsive design
* 🌐 Persian RTL interface
* 🎨 Minimal, elegant, and professional visual design
* ✨ Subtle hover and transition animations
* 🔔 Demo notices for unfinished functionality
* 🔍 SEO-friendly page metadata
* 🧭 Client-side navigation with TanStack Router

---

## 📄 Pages

The website currently includes the following main pages:

| Page     | Route       | Description                                                               |
| -------- | ----------- | ------------------------------------------------------------------------- |
| Home     | `/`         | Hero section, services overview, featured projects and company advantages |
| About    | `/about`    | Company introduction and background                                       |
| Services | `/services` | Construction and architectural services                                   |
| Projects | `/projects` | Portfolio and selected construction projects                              |

The project intentionally focuses on these core sections. Other functionality is presented as a demo and is not fully implemented.

---

## 🛠️ Tech Stack

### Frontend

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS 4**
* **TanStack Router**
* **TanStack Start**
* **Lucide React**

### UI & Utilities

* Radix UI
* React Hook Form
* Zod
* Sonner
* Class Variance Authority
* Tailwind Merge

The project configuration and dependencies are defined in `package.json`.

---

## 📁 Project Structure

```text
demo-builder/
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── about.jpg
│   │   ├── hero.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   ├── service-build.jpg
│   │   └── service-design.jpg
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   │
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   └── services.tsx
│   │
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The routing structure follows TanStack Router's file-based routing convention.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

### 1. Clone the repository

```bash
git clone https://github.com/sanadgol83/demo-builder.git
```

### 2. Navigate to the project

```bash
cd demo-builder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The development server will be available at the local URL shown by Vite.

---

## 📦 Available Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the development server     |
| `npm run build`     | Create a production build        |
| `npm run build:dev` | Create a development-mode build  |
| `npm run preview`   | Preview the production build     |
| `npm run lint`      | Run ESLint                       |
| `npm run format`    | Format the project with Prettier |

These scripts are defined in the project's `package.json`.

---

## 🎨 Design

The visual direction of the project is intentionally **minimal, serious, and architectural**.

The interface combines:

* Neutral backgrounds
* Gold accent colors
* Large architectural imagery
* Strong typography
* Generous whitespace
* Subtle image transitions
* RTL-friendly layouts

The homepage uses a large architectural hero image and highlights the company's services and projects before leading the visitor toward a contact CTA.

---

## 🏢 Services

The services section currently showcases:

* **Phase 1 & Phase 2 Design**
* **Architectural Plans & Layout Design**
* **Construction Project Execution**
* **Excavation & Land Preparation**

Each service includes an image, description, and a demo interaction for additional details.

---

## 🏗️ Projects

The portfolio includes example projects covering different categories such as:

* Residential
* Commercial
* Administrative
* Excavation
* Interior and facade design

Project cards use responsive layouts, image hover effects, category labels, and project descriptions. Detailed project pages are intentionally outside the current demo scope.

---

## 🚧 Demo Limitations

This project is primarily a **frontend showcase** rather than a complete production website.

The following functionality is intentionally not fully implemented:

* Contact form submission
* Project detail pages
* Service detail pages
* Backend integration
* Database
* Authentication
* CMS
* Real contact/request processing

Instead, unfinished interactions display a demo notification to make the prototype behavior clear.

---

## 🔎 SEO

The main pages include page-specific metadata such as:

* Page titles
* Meta descriptions
* Open Graph titles
* Open Graph descriptions

For example, the homepage is configured around the title:

> **ملک باستان | طراحی مدرن، اجرای دقیق ساختمان**

This helps provide a basic SEO and social-sharing foundation for the demo.

---

## 📸 Assets

The project uses locally stored architectural and construction images located in:

```text
src/assets/
```

Current assets include:

```text
hero.jpg
about.jpg
project-1.jpg
project-2.jpg
project-3.jpg
service-build.jpg
service-design.jpg
```

These assets are reused across the homepage, services, projects, and about sections.

---

## 📌 Project Status

**Frontend Demo — In Development**

The current version focuses on visual presentation, responsive layout, navigation, and core company pages.

Backend functionality and additional website sections can be implemented in future versions.

---

## 👨‍💻 Author

**Mohammad Sanadgol**

GitHub: [@sanadgol83](https://github.com/sanadgol83)

---
 
## 📄 License

This project does not currently specify a separate open-source license.

If you intend to distribute or reuse the project publicly, consider adding an appropriate `LICENSE` file.
