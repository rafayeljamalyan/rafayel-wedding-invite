# AI Coding Agent Instructions

## Project Overview
Wedding invitation website built with **Next.js 16 (App Router)**, React 19, TypeScript, and Tailwind CSS 4. The app features animated sections using Framer Motion and collects RSVPs via Google Sheets API. Primary language: **Armenian (hy)**.

## Architecture

### Single-Page Structure
- **Main entry**: [src/app/page.tsx](../src/app/page.tsx) renders 5 sections in order: Hero, Details, Reception, Schedule, RSVP
- **Component pattern**: Each section is a self-contained component in `src/components/`
- **Data flow**: RSVP form → Server Action → Google Sheets API (no database)

### Server Actions Pattern
Use Next.js Server Actions (not API routes) for server-side logic:
- All server actions in `src/app/actions/` with `'use server'` directive
- Validation uses **Zod schemas** - see [submitRSVP.ts](../src/app/actions/submitRSVP.ts)
- Return type pattern: `{ success: true } | { success: false; error: string }`
- Error messages must be in **Armenian** (e.g., `"Անունը պարտադիր է"`)

### Google Sheets Integration
- **Service account authentication** via environment variables (see README.md)
- Wrapper function: [googleSheets.ts](../src/lib/googleSheets.ts) with `appendRowToSheet(name, count)`
- Data format: `[ISO date, name, count]` - dates formatted as `YYYY-MM-DD`
- Sheet name defaults to `Sheet1` but configurable via `GOOGLE_SHEET_RANGE` env var
- Provides helpful error when sheet not found (parses `Unable to parse range`)

## Animation System

### Centralized Animation Configuration
All animation settings in [src/lib/animations/](../src/lib/animations/):
- **animation-config.ts**: Easing curves (`EASING.smooth`), durations (`DURATION.medium`), viewport settings
- **animation-variants.ts**: Reusable Framer Motion variants (`fadeInUp`, `scaleIn`, `slideInFromLeft`, etc.)
- **hooks.ts**: Custom hooks (`useScrollAnimation()`, `useIsMobile()`, `useAnimationConfig()`)

### Usage Pattern
```tsx
import { fadeInUp } from "@/lib/animations/animation-variants";
import { EASING, DURATION } from "@/lib/animations/animation-config";
import { useScrollAnimation } from "@/lib/animations/hooks";

const { ref, isInView } = useScrollAnimation();

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={fadeInUp}
  transition={{ duration: DURATION.medium, ease: EASING.smooth }}
>
```

### Mobile Animation Adjustments
- Use `useIsMobile()` hook to detect viewport width < 769px
- Apply `fadeInUpMobile` (20px movement) instead of `fadeInUp` (40px movement) on mobile
- Respects `prefers-reduced-motion` via `useAnimationConfig()`

## Styling Conventions

### Tailwind CSS 4
- **Path aliases**: Use `@/` for imports (configured in [tsconfig.json](../tsconfig.json))
- **Custom fonts**: `font-['OptimaModoki:Regular',sans-serif]` for headings, `font-['OptimaModoki:Regular',sans-serif]` for body (declared in [globals.css](../src/app/globals.css))
- **Responsive breakpoints**: `md:` (768px), `min-[1201px]:` (1201px), `min-[1561px]:` (1561px)
- **Color palette**: Whites (`#f5f4f1`, `#ffffff`), greens (`#2d5016`), browns (`#110c09`)

### Image Handling
- Use Next.js `<Image>` component with `fill` prop for full-size backgrounds
- Public assets in `/public` (e.g., `/icon-large.svg`, `/rsvp-bg.jpg`)
- Background animations: slow scale effect `animate={{ scale: [1.0, 1.1] }}` with 20s duration

## Testing Requirements

### Test Organization
- Tests colocated in `__tests__/` folders next to source files
- **Jest + Testing Library** configured with [jest.config.js](../jest.config.js) and [jest.setup.js](../jest.setup.js)
- Coverage focus: Server actions, components, utility functions

### Testing Patterns (44 tests total - see TESTING.md)

**Server Actions** ([submitRSVP.test.ts](../src/app/actions/__tests__/submitRSVP.test.ts)):
- Mock `@/lib/googleSheets` with `jest.mock()`
- Test validation (empty name, whitespace, length, count range)
- Test trimming behavior and Armenian character support
- Test error handling (API errors, network failures)

**Components** ([RSVPSection.test.tsx](../src/components/__tests__/RSVPSection.test.tsx)):
- Mock server actions with `jest.mock('@/app/actions/submitRSVP')`
- Mock Framer Motion: `jest.mock('framer-motion', () => ({ motion: { div: 'div' }, AnimatePresence: ({ children }) => children, useInView: () => true }))`
- Test form state, user interactions, loading states, success/error displays
- Use `waitFor()` for async state changes

**Utilities** ([googleSheets.test.ts](../src/lib/__tests__/googleSheets.test.ts)):
- Mock googleapis: `jest.mock('googleapis')`
- Test credential validation, data structure, timestamp generation
- Verify correct API call parameters

### Run Commands
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm test -- --coverage  # With coverage report
```

## Development Workflow

### Environment Setup
1. Copy `.env.local.example` → `.env.local` (if it exists) or create with:
   - `GOOGLE_SHEETS_PRIVATE_KEY` (service account private key)
   - `GOOGLE_SHEETS_CLIENT_EMAIL` (service account email)
   - `GOOGLE_SHEET_ID` (spreadsheet ID from URL)
   - `GOOGLE_SHEET_RANGE` (optional, defaults to `Sheet1!A:C`)

2. Ensure Google Sheet has matching sheet name (rename in Google Sheets or update env var)

### Commands
```bash
npm run dev     # Dev server on http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint check
```

### Common Tasks
- **Add new section**: Create component in `src/components/`, import in [page.tsx](../src/app/page.tsx)
- **Add animation**: Choose variant from [animation-variants.ts](../src/lib/animations/animation-variants.ts), apply with `useScrollAnimation()`
- **Modify form validation**: Update Zod schema in [submitRSVP.ts](../src/app/actions/submitRSVP.ts) with Armenian error messages
- **Update Google Sheets data**: Modify `values` array in [googleSheets.ts](../src/lib/googleSheets.ts#L47)

## Critical Gotchas

1. **Armenian text**: All user-facing text must be in Armenian, including validation errors
2. **Sheet name mismatch**: Default spreadsheet sheet is "Sheet1" - common error when users name it "Responses"
3. **Server actions**: Always use `'use server'` directive and return typed result objects
4. **Animation performance**: Wrap background images in `motion.div` with slow scale, keep text animations separate
5. **Mobile-first**: Always test responsive breakpoints - this is a mobile-heavy use case
6. **Font loading**: Custom fonts loaded via [globals.css](../src/app/globals.css) - ensure font files exist in `/public`
7. **ISO dates**: Google Sheets receives dates as `YYYY-MM-DD` strings (`.split('T')[0]`), not Date objects

## Deployment
Next.js app deployable to Vercel with environment variables set in project settings. No additional configuration needed beyond `.env.local` variables.
