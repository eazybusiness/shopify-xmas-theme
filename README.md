# HiPlus Christmas Theme 🎄

Christmas theme modifications for the HiPlus Shopify store (www.hiplus.de).

## Overview

This project contains all modifications to give the online shop a festive Christmas look:
- Snowfall animation on all pages
- Christmas countdown timer
- Holiday promotional banner
- Special Christmas collection with product badges

## Project Structure

```
theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am/
├── assets/
│   ├── christmas-theme.css    # Christmas styles
│   └── christmas-theme.js     # Snowfall & countdown logic
├── snippets/
│   └── christmas-banner.liquid # Banner & countdown display
├── layout/
│   └── theme.liquid            # Modified: loads Christmas assets
└── templates/
    └── collection.christmas.json # Special Christmas collection template
```

## Christmas Features

| Feature | Description |
|---------|-------------|
| 🌨️ Snowfall | Animated snowflakes across all pages |
| ⏰ Countdown | Countdown to Christmas (days, hours, minutes, seconds) |
| 🎁 Banner | Green banner with promotional message |
| 🏷️ Badges | "Oferta Navideña" badges on products in the Christmas collection |

## Installation

### 1. Install Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
```

### 2. Connect to the store
```bash
shopify theme login --store hiplus-com-bo.myshopify.com
```

### 3. Upload theme
```bash
cd theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am
shopify theme push --unpublished
```

### 4. In Shopify Admin
1. Go to **Online Store > Themes**
2. Find the new theme and click **Preview**
3. Test all features
4. When everything works: **Publish**

## Creating the Christmas Collection

1. In Shopify Admin: **Products > Collections**
2. Create new collection:
   - **Title**: Ofertas de Navidad
   - **Handle**: `navidad` or `christmas`
3. Add products
4. Optional: Set up discounts via **Discounts**

## Customization

### Change banner text
In `snippets/christmas-banner.liquid`:
```liquid
assign banner_text = banner_text | default: '🎄 Your new text here!'
```

### Disable snowfall
In `assets/christmas-theme.js`, comment out the line with `createSnowflakes();`

### Remove after Christmas
1. Remove Christmas includes from `layout/theme.liquid`
2. Or simply reactivate the previous theme

## Development

```bash
# Start live preview
shopify theme dev

# Upload changes
shopify theme push
```

---
*Created: December 2025*
