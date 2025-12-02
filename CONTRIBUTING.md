# Contributing to Shopify Seasonal Theme Extension

First off, thank you for considering contributing to this project! 🎄

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/shopify-seasonal-theme.git
   cd shopify-seasonal-theme
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/shopify-seasonal-theme.git
   ```

## Development Setup

### Prerequisites

- Node.js 18+ (for Shopify CLI)
- Shopify Partner account
- Development store for testing

### Installation

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Authenticate with your store
shopify auth login --store YOUR_STORE.myshopify.com

# Start development server
cd theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am
shopify theme dev
```

## Making Changes

### Branch Naming

Use descriptive branch names:
- `feature/` - New features (e.g., `feature/easter-theme`)
- `fix/` - Bug fixes (e.g., `fix/mobile-countdown`)
- `docs/` - Documentation updates (e.g., `docs/installation-guide`)
- `refactor/` - Code refactoring (e.g., `refactor/game-class`)

### Creating a Branch

```bash
# Update your local main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
```

## Coding Standards

### Liquid Templates

```liquid
{%- comment -%}
  Component: christmas-banner
  Description: Displays holiday promotional banner
  Parameters:
    - banner_text: string (optional)
    - show_countdown: boolean (optional)
{%- endcomment -%}

{%- liquid
  assign banner_text = banner_text | default: 'Default text'
-%}
```

### JavaScript

- Use ES6+ syntax
- No external dependencies (vanilla JS only)
- Use meaningful variable names
- Add JSDoc comments for functions

```javascript
/**
 * Creates animated snowflakes on the page
 * @param {number} count - Number of snowflakes to create
 * @returns {void}
 */
function createSnowflakes(count = 25) {
  // Implementation
}
```

### CSS

- Use BEM-like naming for custom classes
- Prefix all custom classes with `xmas-` or `christmas-`
- Mobile-first approach
- Use CSS custom properties for theming

```css
/* Component: Game Button */
.xmas-game-btn {
  /* Base styles */
}

.xmas-game-btn:hover {
  /* Hover state */
}

@media (max-width: 480px) {
  .xmas-game-btn {
    /* Mobile adjustments */
  }
}
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(game): Add pause functionality
fix(countdown): Correct timezone handling
docs(readme): Update installation instructions
style(css): Format game styles
refactor(snowfall): Extract animation logic to separate function
```

## Pull Request Process

1. **Update documentation** if you changed functionality
2. **Test thoroughly** on both desktop and mobile
3. **Update CHANGELOG.md** with your changes
4. **Create Pull Request** with:
   - Clear title following commit guidelines
   - Description of changes
   - Screenshots/GIFs for visual changes
   - Link to any related issues

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested on Chrome (desktop)
- [ ] Tested on Safari (desktop)
- [ ] Tested on Chrome (mobile)
- [ ] Tested on Safari (mobile)

## Screenshots
(if applicable)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed my code
- [ ] Added comments for complex logic
- [ ] Updated documentation
- [ ] No new warnings
```

---

## Questions?

Feel free to open an issue for any questions or suggestions!

Thank you for contributing! 🎁
