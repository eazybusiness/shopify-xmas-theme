# HiPlus Christmas Theme

This repository contains the Christmas theme modifications for the HiPlus Shopify store (www.hiplus.de).

## Project Structure

- `assets/` - Custom CSS, JavaScript, and image assets
- `snippets/` - Shopify theme snippets for Christmas elements
- `templates/` - Modified theme templates
- `config/` - Configuration files
- `sections/` - Custom sections for Christmas features

## Getting Started

1. Install the Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
2. Authenticate with your store: `shopify theme login --store hiplus-com-bo.myshopify.com`
3. Pull the current theme: `shopify theme pull --live`

## Development

1. Make your changes to the theme files
2. Test locally using the theme dev server: `shopify theme dev`
3. Deploy changes: `shopify theme push --unpublished`

## Christmas Features

- Snowfall effect
- Festive header and footer decorations
- Christmas-themed product highlights
- Seasonal promotional banners
- Holiday countdown timer

## Deployment

1. Create a new theme version in Shopify
2. Push changes to the new theme
3. Preview and test thoroughly
4. Publish when ready
