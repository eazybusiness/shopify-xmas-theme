# HiPlus Christmas Theme 🎄

Weihnachtliche Theme-Anpassungen für den HiPlus Shopify Store (www.hiplus.de).

## Übersicht

Dieses Projekt enthält alle Änderungen, um den Online-Shop weihnachtlich zu gestalten:
- Schneefall-Animation auf allen Seiten
- Weihnachts-Countdown-Timer
- Festliche Banner mit Werbeaktionen
- Spezielle Weihnachts-Kollektion mit Badges

## Projektstruktur

```
theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am/
├── assets/
│   ├── christmas-theme.css    # Weihnachts-Styles
│   └── christmas-theme.js     # Schneefall & Countdown
├── snippets/
│   └── christmas-banner.liquid # Banner & Countdown
├── layout/
│   └── theme.liquid            # Geändert: Lädt Weihnachts-Assets
└── templates/
    └── collection.christmas.json # Spezielle Weihnachts-Vorlage
```

## Weihnachts-Features

| Feature | Beschreibung |
|---------|--------------|
| 🌨️ Schneefall | Animierte Schneeflocken auf allen Seiten |
| ⏰ Countdown | Countdown bis Weihnachten (Tage, Stunden, Minuten, Sekunden) |
| 🎁 Banner | Grüner Banner mit Aktionsnachricht |
| 🏷️ Badges | "Weihnachtsangebot" Badges auf Produkten der Weihnachts-Kollektion |

## Installation

### 1. Shopify CLI installieren
```bash
npm install -g @shopify/cli @shopify/theme
```

### 2. Mit dem Store verbinden
```bash
shopify theme login --store hiplus-com-bo.myshopify.com
```

### 3. Theme hochladen
```bash
cd theme_export__hiplus-de-updated-copy-of-dawn__02DEC2025-0920am
shopify theme push --unpublished
```

### 4. Im Shopify Admin
1. Gehe zu **Online Store > Themes**
2. Finde das neue Theme und klicke auf **Preview**
3. Teste alle Funktionen
4. Wenn alles funktioniert: **Publish**

## Weihnachts-Kollektion erstellen

1. Im Shopify Admin: **Products > Collections**
2. Neue Kollektion erstellen:
   - **Titel**: Weihnachtsangebote
   - **Handle**: `weihnachten` oder `christmas`
3. Produkte hinzufügen
4. Optional: Rabatte über **Discounts** einrichten

## Anpassungen

### Banner-Text ändern
In `snippets/christmas-banner.liquid`:
```liquid
assign banner_text = banner_text | default: '🎄 Dein neuer Text hier!'
```

### Schneefall deaktivieren
In `assets/christmas-theme.js`, Zeile mit `createSnowflakes();` auskommentieren.

### Nach Weihnachten entfernen
1. In `layout/theme.liquid` die Christmas-Einbindungen entfernen
2. Oder einfach das vorherige Theme wieder aktivieren

## Entwicklung

```bash
# Live-Vorschau starten
shopify theme dev

# Änderungen hochladen
shopify theme push
```

---
*Erstellt: Dezember 2025*
