# Om's Portfolio

A personal portfolio website showcasing my work and skills as a B.Tech student in AI and ML at TCET, Mumbai.

## Live Site

[https://omtailor.github.io/personal_portfolio/](https://omtailor.github.io/personal_portfolio/)

## Screenshot

![Portfolio Screenshot](screenshot.png)

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom notebook theme with CSS variables
- **Vanilla JavaScript** - Smooth scrolling, dark mode, intersection observer, clipboard API

## Features

- Responsive design (mobile-first)
- Dark mode toggle with localStorage persistence
- Smooth scrolling navigation
- Active section highlighting with IntersectionObserver
- Copy email to clipboard functionality
- Notebook theme with ruled lines and margin
- WCAG AA accessible with proper contrast ratios
- Open Graph tags for social sharing

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Omtailor/personal_portfolio.git
   cd personal_portfolio
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## Folder Structure

```
personal_portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with notebook theme
├── js/
│   └── main.js         # JavaScript for interactivity
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

## GitHub Pages Deployment

To enable GitHub Pages from the main branch:

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Build and deployment**, click on **Source**
5. Select **Deploy from a branch**
6. Under **Branch**, select `main` and folder `/ (root)`
7. Click **Save**
8. Wait for the deployment to complete (usually 1-2 minutes)
9. Your site will be available at `https://omtailor.github.io/personal_portfolio/`

## Project Links

- [NutriAI](https://diet-planner-three-sable.vercel.app/login) - AI nutrition and meal planning platform
- [TripPlanner](https://tripplanner-tawny.vercel.app/auth) - AI itinerary generator
- [Financial Crime Investigation Agent](https://github.com/username/Financial-Crime-Investigation-Agent) - AML detection system

## Contact

- Email: omtailork@gmail.com
- LinkedIn: [om-tailor-ba72b8310](https://www.linkedin.com/in/om-tailor-ba72b8310/)
- GitHub: [Omtailor](https://github.com/Omtailor)

---

&copy; 2024 Om's Portfolio. All rights reserved.
