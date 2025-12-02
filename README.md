<div align="center">

# 🎄 Shopify Seasonal Theme Extension

### Professional Holiday Theme Modifications for Shopify Stores

[![Shopify](https://img.shields.io/badge/Shopify-Dawn%202.0-7AB55C?style=for-the-badge&logo=shopify)](https://shopify.dev)
[![Liquid](https://img.shields.io/badge/Liquid-Template%20Engine-blue?style=for-the-badge)](https://shopify.github.io/liquid/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

*A complete seasonal theme modification system demonstrating advanced Shopify Liquid development, custom JavaScript animations, and mobile-first responsive design.*

[Features](#-features) • [Demo](#-live-demo) • [Installation](#-installation) • [Documentation](#-documentation) • [Architecture](#-architecture)

</div>

---

## 📋 Project Overview

This project showcases a **production-ready seasonal theme extension** for Shopify stores, built on top of the Dawn 2.0 theme. It demonstrates professional Liquid templating, custom section development, interactive JavaScript games, and responsive CSS design patterns.

### Key Highlights

- **Zero Dependencies** - Pure vanilla JavaScript, no external libraries required
- **Mobile-First** - Optimized for 99%+ mobile traffic with touch-friendly interactions
- **Performance Focused** - Lazy-loaded assets, CSS animations over JavaScript where possible
- **Fully Customizable** - All text and settings configurable via Shopify Theme Editor
- **Internationalized** - Ready for multi-language stores (Spanish UX demonstrated)

---

## ✨ Features

### 🌨️ Dynamic Snowfall Animation
Performant snowflake animation using CSS transforms and JavaScript DOM manipulation.

```javascript
// Optimized snowflake generation with randomized properties
const snowflake = document.createElement('div');
snowflake.style.animationDuration = `${Math.random() * 12 + 8}s`;
snowflake.style.left = `${Math.random() * 100}%`;
```

### ⏰ Christmas Countdown Timer
Real-time countdown with responsive design that adapts to all screen sizes.

| Desktop | Mobile |
|---------|--------|
| 4-column layout | Flexible wrap |
| 60px min-width items | 42px min-width items |
| Full labels | Abbreviated labels |

### 🎁 Holiday Promotional Banner
Gradient banner with customizable messaging via Liquid variables.

```liquid
{%- liquid
  assign banner_text = banner_text | default: '🎄 Holiday Sale!'
  assign show_countdown = show_countdown | default: true
-%}
```

### 🎮 Interactive Christmas Game
**"Entrega Navideña"** - A mobile-first endless runner game featuring:
- Touch and keyboard controls
- SVG-based graphics (no external assets required)
- Local storage high score persistence
- Progressive difficulty scaling

### 🏷️ Smart Collection Badges
Automatic badge injection for seasonal collection pages with intelligent selectors.

---

## 🚀 Live Demo

> **Note**: Replace with your actual store URL or screenshots

```
https://your-store.myshopify.com
```

<details>
<summary>📸 Screenshots</summary>

| Feature | Screenshot |
|---------|------------|
| Snowfall + Banner | *Add screenshot* |
| Countdown Timer | *Add screenshot* |
| Mobile Game | *Add screenshot* |
| Collection Badges | *Add screenshot* |

</details>

---

## 📦 Installation

### Option 1: Manual Upload (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/shopify-seasonal-theme.git
cd shopify-seasonal-theme

# 2. Create deployment package
cd theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am
zip -r ../seasonal-theme.zip . -x "*.git*"

# 3. Upload via Shopify Admin
# Online Store > Themes > Add theme > Upload zip file
```

### Option 2: Shopify CLI

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Authenticate
shopify auth login --store YOUR_STORE.myshopify.com

# Push theme
cd theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am
shopify theme push --unpublished

# Preview changes
shopify theme dev
```

---

## 📖 Documentation

### Project Structure

```
shopify-seasonal-theme/
│
├── 📁 theme_export_.../           # Shopify theme files
│   │
│   ├── 📁 assets/
│   │   ├── christmas-theme.css    # Seasonal styles & animations
│   │   ├── christmas-theme.js     # Snowfall, countdown, badges
│   │   ├── christmas-game.css     # Game UI styles
│   │   ├── christmas-game.js      # Game logic (ES6 Class)
│   │   └── snowflakes.png         # Custom snowflake sprite
│   │
│   ├── 📁 sections/
│   │   └── christmas-game.liquid  # Game section with schema
│   │
│   ├── 📁 snippets/
│   │   └── christmas-banner.liquid # Banner & countdown snippet
│   │
│   ├── 📁 templates/
│   │   ├── index.json             # Homepage (includes game)
│   │   └── collection.christmas.json # Seasonal collection template
│   │
│   └── 📁 layout/
│       └── theme.liquid           # Main layout (asset injection)
│
├── 📄 README.md                   # This file
├── 📄 LICENSE                     # MIT License
├── 📄 CONTRIBUTING.md             # Contribution guidelines
└── 📄 CHANGELOG.md                # Version history
```

### Configuration Options

#### Banner Settings (Snippet)
```liquid
{% render 'christmas-banner',
   banner_text: '🎄 Custom promotional message!',
   show_countdown: true
%}
```

#### Game Settings (Section Schema)
| Setting | Type | Default |
|---------|------|---------|
| `game_title` | text | "Entrega Navideña" |
| `start_title` | text | "🎄 ¡Entrega los Regalos!" |
| `start_description` | textarea | "Esquiva los obstáculos..." |
| `instructions` | text | "Toca la pantalla para saltar" |

### Activation Period

The theme features automatically activate during the holiday season:
```javascript
// Active December 1-26
const now = new Date();
if (now.getMonth() === 11 && now.getDate() <= 26) {
  initChristmasTheme();
}
```

---

## 🏗️ Architecture

### Component Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      theme.liquid                           │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │ christmas-      │  │ christmas-      │                  │
│  │ theme.css       │  │ theme.js        │                  │
│  └────────┬────────┘  └────────┬────────┘                  │
│           │                    │                            │
│           ▼                    ▼                            │
│  ┌─────────────────────────────────────────┐               │
│  │         christmas-banner.liquid         │               │
│  │  • Holiday Banner                       │               │
│  │  • Countdown Timer                      │               │
│  └─────────────────────────────────────────┘               │
│                                                             │
│  ┌─────────────────────────────────────────┐               │
│  │         christmas-game.liquid           │               │
│  │  ┌─────────────┐  ┌─────────────┐      │               │
│  │  │ game.css    │  │ game.js     │      │               │
│  │  └─────────────┘  └─────────────┘      │               │
│  └─────────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────────┘
```

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Vanilla JS** | No jQuery dependency, faster load times |
| **CSS Animations** | GPU-accelerated, smoother than JS animations |
| **SVG Graphics** | Scalable, no additional HTTP requests |
| **LocalStorage** | Persist game scores without backend |
| **Liquid Defaults** | Graceful fallbacks for all settings |

---

## 🛠️ Development

### Local Development

```bash
# Start development server with hot reload
shopify theme dev --store YOUR_STORE.myshopify.com

# Run in specific environment
shopify theme dev --environment development
```

### Testing Checklist

- [ ] Snowfall renders on all pages
- [ ] Countdown displays correctly
- [ ] Game works on mobile (touch controls)
- [ ] Game works on desktop (keyboard/click)
- [ ] Badges appear on collection pages
- [ ] Responsive on screens 320px - 1920px
- [ ] Performance: < 3s First Contentful Paint

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Fork the repository
# Create feature branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m 'feat: Add amazing feature'

# Push and create PR
git push origin feature/amazing-feature
```

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Your Name**
- Portfolio: [your-website.com](https://your-website.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Shopify Dawn Theme](https://github.com/Shopify/dawn) - Base theme
- [Shopify Liquid Documentation](https://shopify.dev/docs/themes/liquid) - Template reference

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

*Built with ❤️ for the Shopify developer community*

</div>
