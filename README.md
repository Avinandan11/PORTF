# Avinandan Biswas — Personal Portfolio Website

A modern, responsive, dark-mode portfolio website tailored for **Avinandan Biswas**, a first-year B.Tech Computer Science Engineering student specializing in **Artificial Intelligence & Machine Learning** at **JECRC University, Jaipur**.

Built with pure **HTML5**, **Vanilla CSS3**, and **Vanilla JavaScript** — 100% lightweight, modular, accessible, and fast with zero framework dependencies.

---

## 🚀 Quick Start (Running Locally)

You can run this website instantly using any of the following methods:

### Option 1: Double-Click to Open
Simply double-click [`index.html`](index.html) in your file explorer. It will open directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server in VS Code / Antigravity IDE
1. Open the `PORTF` directory in your IDE.
2. If using the "Live Server" extension, right-click `index.html` and select **"Open with Live Server"**.
3. Or using Node.js / Python in the terminal:
   ```bash
   # Python 3
   python -m http.server 3000

   # Or npx serve
   npx serve .
   ```
4. Visit `http://localhost:3000` in your web browser.

---

## 🛠️ How to Customize Your Personal Information

All personal links, usernames, emails, and phrases are centralized in **one single place** inside [`script.js`](script.js).

Open `script.js` and look at the top section:

```javascript
const PORTFOLIO_CONFIG = {
  fullName: "Avinandan Biswas",
  shortName: "Avinandan",
  roleTitle: "CSE AI & ML Student",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  university: "JECRC University, Jaipur, Rajasthan",
  hometown: "Kolkata, West Bengal",
  currentCity: "Jaipur, Rajasthan",
  
  // REPLACE THESE WITH YOUR ACTUAL CONTACTS & USERNAME:
  email: "your_real_email@gmail.com",
  githubUsername: "your_github_username",
  linkedinUsername: "your_linkedin_username",
  linkedinFullUrl: "https://www.linkedin.com/in/your_linkedin_username",
  githubFullUrl: "https://github.com/your_github_username",
  
  // Path to your resume PDF inside the assets folder:
  resumePath: "assets/Avinandan_Biswas_Resume.pdf",

  // Typewriter phrases shown in the Hero section:
  typewriterRoles: [
    "Aspiring AI/ML Developer & Software Engineer",
    "First-Year B.Tech CSE Student @ JECRC",
    "Python, Algorithms & Web Developer",
    "Building Technology To Solve Real Problems"
  ]
};
```

When you edit this object, the changes will automatically update throughout the website!

---

## 📄 Adding Your Resume PDF

1. Name your resume PDF: `Avinandan_Biswas_Resume.pdf`
2. Move or copy it into the `assets/` folder:
   ```
   PORTF/
   ├── assets/
   │   └── Avinandan_Biswas_Resume.pdf
   ```
3. Once placed, clicking **"Download Resume"** on the website will automatically open and download your PDF.
4. If the PDF has not been placed yet, the button will display an informative modal guide.

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

1. Create a new public repository on GitHub named `portfolio` (or `avinandanbiswas.github.io`).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** &rarr; **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your portfolio will be live at `https://YOUR_GITHUB_USERNAME.github.io/portfolio/` in a few minutes!

---

## 📂 Project Structure

```
PORTF/
│
├── index.html       # Semantic HTML5 markup, SEO meta tags, OpenGraph, accessibility
├── style.css        # Vanilla CSS3, dark/light themes, glassmorphism, responsive grid
├── script.js        # Vanilla JS, configuration object, 60fps neural canvas, filter, forms
├── README.md        # Documentation and customization guide
└── assets/
    ├── README.txt   # Instructions for dropping Avinandan_Biswas_Resume.pdf
    └── (Your resume PDF here)
```

---

## 🌟 Key Features Included

- **Dark / Light Theme Toggle** with `localStorage` memory.
- **Subtle AI Neural Network Particle Background** running on a 60fps HTML5 Canvas without slowing down the page or interfering with reading.
- **Interactive Developer Terminal** in the Hero section with realistic styling and animations.
- **Realistic First-Year Framing**: Honest skill proficiency labels (`Developing`, `Beginner`, `Learning`) without fake 99% progress bars.
- **Projects Showcase with Filtering Tabs**: Filter projects by All, Web, JavaScript, Python, and AI/ML.
- **Education, Certifications & Milestones**: Clear, realistic cards with editable placeholders and "Coming Soon" indicators.
- **One-Click "Copy Email"** button with a modern toast feedback notification.
- **Validated Contact Form** with real-time feedback.
- **Fully Responsive**: Perfectly formatted for mobile phones, tablets, laptops, and ultra-wide desktops.
