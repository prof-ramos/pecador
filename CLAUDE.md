# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wrapped dos Pecados 2025** is a viral web application inspired by Spotify Wrapped, allowing users to take an anonymous self-assessment of their "sins" throughout 2025. The app generates a shareable PNG image (1080x1920px - Instagram Stories format) based on a scoring system derived from 105 sins across 11 categories.

Key characteristics:
- **100% Client-side**: No data storage, all processing happens in the browser
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dual Design System**: Celestial (holy), Neutral, and Infernal (sinful) themes based on score
- **Single-page Experience**: Landing → Checklist → Result → Export

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Building & Testing
npm run build           # Build for production
npm start              # Run production server
npm run lint           # Run ESLint
npm run lint:fix       # Automatically fix linting issues (auto-triggered on file save)
npm run format         # Format with Prettier (auto-triggered on file save)

# NOTE: Tests not currently configured, but TypeScript compilation is auto-checked
```

**Hooks in place**: This project uses **Husky** to manage git hooks. Post-file changes automatically run Prettier formatting and TypeScript type checking. Avoid wildcard imports (auto-rejected by hook). To enable hooks locally, run `npm install`.

## Project Architecture

### State Management Pattern
The app uses simple React state with three main states in `app/page.tsx`:

- **`appState`** (`'landing' | 'checklist' | 'result'`) - Controls which view renders
- **`selection`** - Key-value object tracking checked sins (`{ [sinId]: boolean }`)
- **`result`** - Computed result object containing score, tier, and messages

The flow is: Landing (start) → Checklist (select sins) → Result (export PNG) → Restart (reset state)

### Core Components

**`app/page.tsx`** (~145 lines)
- Root component with state management
- Renders one of three child components based on `appState`
- Handles state transitions and data flow between screens

**`components/Landing.tsx`** (≈200 lines)
- Intro screen with animations (Framer Motion)
- Explains the concept and gathers consent
- Triggers state transition to checklist

**`components/Checklist.tsx`** (≈350 lines)
- Main interactive form with 105 sins organized by 11 categories
- Real-time filtering and category expansion
- Selection checkboxes with visual feedback
- "Calculate Result" button to generate scoring

**`components/Result.tsx`** (550+ lines approx.)
- Displays personalized score, tier, and message
- Shows top 3 weighted sins and dominant category
- **Image Export**: Uses `html2canvas` + `file-saver` to generate PNG
- Social sharing encouragement

> [!NOTE]
> Line counts are informational and maintained informally; they may change as the project evolves.

### Data Structure

**`lib/types.ts`**
```typescript
interface Sin {
  id: string;                    // Unique identifier
  text: string;                  // The sin description
  category: SinCategory;         // One of 11 categories
  weight: number;                // 1-10 gravity scale
}

interface Result {
  score: number;                 // 0-100 normalized
  selectedSins: Sin[];           // All checked sins
  topSins: Sin[];                // Top 3 by weight
  dominantCategory: SinCategory; // Most frequent category
  message: string;               // Tier-based message
  tier: 'santo' | 'leve' | 'equilibrado' | 'contumaz' | 'demonio';
}

type SinCategory = 'Moral' | 'Luxúria' | 'Orgulho' | 'Espiritual' | 'Vícios' |
                   'Violência' | 'Mentira' | 'Social' | 'Ganância' | 'Ocultismo' | 'Outros';
```

**`lib/data/sins.ts`** (105 sins)
- Array of Sin objects, pre-loaded at build time
- Grouped by category for faster lookups

**`lib/data/categories.ts`**
- Configuration for 11 categories (color, border, description)
- Used by Checklist for rendering and filtering

### Scoring System (`lib/utils/scoring.ts`)

**Algorithm**:
1. Sum weights of selected sins
2. Apply gravity boost: sins with weight ≥8 get +2 points each
3. Add quantity bonus: +0.3 per sin selected
4. Normalize to 0-100 range
5. Assign tier and generate message

**Tiers & Messages**:
- 0-20: Santo (holy)
- 21-40: Leve (light)
- 41-60: Equilibrado (balanced)
- 61-80: Contumaz (hardened sinner)
- 81-100: Demonio (demon)

### Image Export (`lib/utils/imageExport.ts`)

- Uses `html2canvas` to render a specific DOM element to canvas
- Exports as PNG (1080x1920px)
- Downloaded via `file-saver` with timestamp filename
- Result component has a `ref` to the exportable div

## Styling & Design

**Framework**: Tailwind CSS 4 with PostCSS

**Color System** (defined in `app/globals.css`):
- **Celestial** (0-30): `bg-sky-100`, `text-blue-900`, glow with gold
- **Neutral** (31-60): `bg-gray-100`, `text-gray-900`
- **Infernal** (61-100): `bg-red-900`, `text-red-100`, glow with red

**Typography**:
- Headings: Poppins (700-900 weight)
- Body: Inter (400-700 weight)
- Accent: Playfair Display

**Responsive Design**:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Exported image always 1080x1920px

## Key Dependencies

This project uses **npm** as the default package manager. Run `npm install` to set up the environment.

- **Next.js 16.1.1** - Framework (App Router, SSR)
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion 12.23** - Animations (Landing, transitions)
- **html2canvas 1.4.1** - PNG generation from DOM
- **file-saver 2.0.5** - Download PNG in browser

> **Dependency Maintenance**: Keep these version numbers updated when upgrading dependencies. The canonical source is `package.json` / `package-lock.json`. Consider using Dependabot or similar automation for update notifications.

## Common Development Tasks

### Adding a New Sin
1. Edit `lib/data/sins.ts` - add Sin object with unique `id`, `text`, `category`, `weight` (1-10)
2. Ensure category exists in `lib/types.ts` SinCategory type
3. Type checking auto-runs, formatting auto-applied

### Modifying Scoring Logic
1. Edit `lib/utils/scoring.ts` - adjust weight calculations, tier thresholds, or messages
2. Test by selecting different combinations in Checklist and checking Result
3. Re-run `npm run dev` to see changes

### Adjusting Colors/Theme
1. Update `app/globals.css` for celestial/neutral/infernal palettes
2. Or update `lib/data/categories.ts` for per-category colors
3. Changes reflect immediately in dev server

### Testing PNG Export
1. Complete the flow in dev: Landing → Checklist (select sins) → Result
2. Click export button, verify PNG downloads
3. Check 1080x1920px dimensions and visual appearance

## Performance Considerations

- **No API calls** - entirely client-side
- **Lightweight bundle** - ~50KB gzipped (measured Dec 2025)
- **Lazy Framer Motion** - minimal animation overhead
- **html2canvas** can be slow on older devices - consider debouncing export button

### Future Optimization Strategies
- Implement periodic bundle-size measurement scripts
- Use code-splitting and dynamic imports for non-critical modules
- Asset compression and modern image formats (WebP/AVIF)
- Off-main-thread rendering for html2canvas using Web Workers
- Debounce/throttle export button to prevent multiple simultaneous renders
- Implement caching and proper HTTP headers for static assets

## Privacy & Security

- ✅ No data storage or transmission
- ✅ No analytics or tracking (Next.js Vercel defaults only)
- ✅ No cookies except Vercel essentials
- ✅ All sins are fictional/entertainment only
- ✅ HTTPS enforced on Vercel deployment
