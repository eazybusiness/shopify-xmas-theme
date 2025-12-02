# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-02

### Added

- **Snowfall Animation**
  - Dynamic snowflake generation with randomized properties
  - CSS-based animations for smooth performance
  - Custom snowflake image support

- **Christmas Countdown Timer**
  - Real-time countdown to December 25th
  - Responsive design for mobile devices
  - Spanish language labels (Días, Horas, Minutos, Segundos)

- **Holiday Banner**
  - Gradient green banner with festive styling
  - Customizable text via Liquid variables
  - Positioned below header for maximum visibility

- **Collection Badges**
  - Automatic "Oferta Navideña" badges on Christmas collection
  - Smart detection of collection pages (`/collections/navidad` or `/collections/christmas`)

- **Interactive Christmas Game**
  - "Entrega Navideña" endless runner game
  - Mobile-first touch controls
  - Keyboard support (Spacebar)
  - SVG-based graphics (bike, obstacles, presents)
  - Local storage high score persistence
  - Progressive difficulty scaling

- **Shopify Integration**
  - Custom section with schema for Theme Editor
  - Snippet-based banner for easy inclusion
  - JSON templates for collection pages
  - Asset management via theme.liquid

### Technical Details

- Zero external dependencies (vanilla JavaScript)
- ES6 Class-based game architecture
- CSS animations (GPU-accelerated)
- Mobile-first responsive design
- Lazy-loaded image assets

---

## [Unreleased]

### Planned Features

- [ ] Easter theme variant
- [ ] Halloween theme variant
- [ ] Valentine's Day theme variant
- [ ] Admin panel for enabling/disabling features
- [ ] Additional game modes
- [ ] Leaderboard integration

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2025-12-02 | Initial release with full Christmas theme |

---

## Migration Guide

### Upgrading from Pre-release

If you were using a pre-release version, please:

1. Backup your current theme
2. Remove old Christmas-related files from `assets/`
3. Upload the new theme as a fresh installation
4. Reconfigure any custom settings in Theme Editor
