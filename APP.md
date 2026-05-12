# Abyakto — Detailed Implementation Plan

## 1. Project Foundation

**Environment & Config**

- Set up `env.ts` with Zod validation for all env vars (DATABASE_URL, BETTER_AUTH_SECRET, UPLOADTHING_SECRET, NEXT_PUBLIC_APP_URL)
- Configure `next.config.ts` for font optimization and image domains
- Initialize Tailwind 4 config with custom CSS variables for theming
- Set up shadcn/ui with a neutral base, then override with a custom Bangla-friendly palette

**AGENTS.md / DESIGN.md**

- Document the stack decisions, folder conventions, and component patterns
- DESIGN.md should capture the visual language: earthy/poetic tones, handwritten-feel UI elements

---

## 2. Database Schema (Prisma)

**Models to define:**

- `User` — Better Auth managed, extended with display name, avatar
- `Quote` — text (Bangla), author (optional), source (optional), language tag, createdAt, userId
- `Design` — linked to Quote: fontId, backgroundType (solid/gradient/image/texture), backgroundValue, textColor, textAlign, fontSize scale
- `SavedCard` — a snapshot of a rendered quote design, stores the final config + optional uploaded image URL
- `Collection` — user-curated groups of quotes (optional but nice for MVP+)

**Key relationships:**

- User → many Quotes
- Quote → many SavedCards (different designs of same quote)
- User → many Collections → many Quotes

---

## 3. Authentication (Better Auth)

- Email/password sign-up + sign-in
- Google OAuth (optional but recommended)
- Session management via Better Auth's built-in adapter wired to Prisma
- Protected routes via middleware for `/dashboard`, `/create`, `/saved`
- Auth state exposed via Jotai atom wrapping the session

---

## 4. Bangla Font System

This is the **core identity** of the app. Plan carefully.

**Font Selection (Google Fonts / local):** | Font Name | Style | Use Case | |---|---|---| | Kalpurush | Clean, readable | Body quotes | | SolaimanLipi | Classic | Traditional feel | | Akaash | Lightweight | Minimal designs | | Nikosh | Print-like | Formal quotes | | Mitra Mono | Monospace | Modern/techy | | Hind Siliguri | Modern sans | Contemporary | | Baloo Da 2 | Playful | Casual quotes | | Noto Serif Bengali | Elegant | Literary quotes |

**Implementation:**

- Load fonts via `next/font` or self-hosted in `public/fonts/`
- Each font gets a metadata object: `{ id, name, banglaName, category, weights, previewText }`
- Font picker shows live preview of the quote text in each font
- Store font choice as a string ID in the Design model

---

## 5. Background System

**Four background categories:**

**Solid Colors**

- Curated palette of ~20 colors: earthy tones, pastels, deep moody colors
- Each with a recommended text color (light/dark)

**Gradients**

- ~15 hand-crafted CSS gradients (linear + radial)
- Named poetically: "শেষ বিকেল" (Late Afternoon), "ভোরের আলো" (Morning Light), etc.

**Textures**

- Paper texture, grain, noise, linen — CSS-based or SVG patterns
- Layered over solid/gradient backgrounds

**Image Backgrounds**

- Curated set of ~10 free-to-use nature/abstract photos (stored in Uploadthing or bundled)
- User can upload their own background image (Uploadthing integration)
- Blur/dim overlay control so text stays readable

---

## 6. Quote Card Designer (Core Feature)

**Layout: Split-panel editor**

- Left/top: Live preview of the card
- Right/bottom: Controls panel

**Card Canvas:**

- Fixed aspect ratio options: Square (1:1), Portrait (4:5), Story (9:16), Landscape (16:9)
- Renders as a styled `div` (not canvas) for crisp text at any size
- Quote text + optional attribution line (— লেখক)
- Decorative elements: quotation marks (styled per font), thin rule lines, subtle ornaments

**Controls Panel sections:**

1. **Font** — picker grid with live preview
2. **Background** — tabbed: Solid / Gradient / Texture / Image
3. **Text** — size scale (small/medium/large/xl), alignment (left/center/right), color override
4. **Layout** — padding, text position (top/center/bottom), attribution toggle
5. **Decorations** — quote marks style, border, subtle pattern overlay

**State management (Jotai):**

- `designAtom` — all current design choices
- `quoteAtom` — the quote text and metadata
- `exportStateAtom` — loading/idle/done for download flow
- Atoms persist to localStorage so work-in-progress isn't lost

---

## 7. Image Export / Download

**Strategy: DOM-to-image via `html-to-image` or `dom-to-image-more`**

- The card preview `div` is the source of truth
- On "Download", capture the div at 2x or 3x pixel ratio for high resolution
- Export as PNG (default), with a JPEG option for smaller file size
- Filename: `abyakto-[quote-snippet]-[timestamp].png`

**Why not Canvas?**

- Bangla font rendering in Canvas is inconsistent across browsers
- DOM rendering via CSS is far more reliable for complex Unicode scripts

**Resolution targets:**

- Square: 1080×1080px
- Portrait: 1080×1350px
- Story: 1080×1920px

---

## 8. Pages & Routes

```
/                    → Landing page with featured quotes
/create              → Main quote designer (protected)
/explore             → Browse public quotes from all users
/saved               → User's saved cards (protected)
/profile/[username]  → Public profile with their quotes
/sign-in             → Auth page
/sign-up             → Auth page
/api/auth/[...all]   → Better Auth handler
/api/quotes          → CRUD for quotes
/api/designs         → Save/load designs
/api/uploadthing     → File upload handler
```

---

## 9. API Layer (React Query + Server Actions)

**Server Actions (preferred for mutations):**

- `createQuote(data)` — validates with Zod, saves to DB
- `saveDesign(quoteId, designData)` — upsert design config
- `deleteQuote(id)` — soft delete
- `saveCard(data)` — save final rendered card config

**React Query (for reads):**

- `useQuotes()` — paginated list for explore page
- `useMyQuotes()` — user's own quotes
- `useSavedCards()` — user's saved designs
- Optimistic updates on like/save actions

---

## 10. UI Components to Build

**Domain components** (in `components/`):

- `QuoteCard` — the actual rendered card (used in preview AND explore grid)
- `FontPicker` — grid of font options with live sample
- `BackgroundPicker` — tabbed panel
- `DesignControls` — assembled controls panel
- `CardExporter` — wraps the card with export logic
- `QuoteForm` — input for quote text + author with Bangla keyboard hint
- `AspectRatioSelector` — visual button group

**Shared UI** (shadcn + custom):

- `ThemeToggle` — light/dark (affects the editor chrome, not the card)
- `BanglaTextarea` — textarea with font preview and character count
- Navigation, mobile drawer, user dropdown

---

## 11. Explore / Social Layer

- Public feed of community quotes (paginated, React Query infinite scroll)
- Each card shows: the designed quote preview, author username, font used
- "Use this design" — copy someone's design config to your own editor
- Like/heart system (optimistic UI)
- Filter by font, background type, mood tag

---

## Key Technical Decisions to Note

- **No `<canvas>`** — use DOM rendering for reliable Bangla text
- **Fonts loaded eagerly** in the designer (not lazy) to prevent layout shift during preview
- **Design config is pure JSON** — easy to serialize, clone, and version
- **Card preview div is the single source of truth** — no separate "render" step before export
- **Uploadthing** only for user-uploaded backgrounds; curated assets are bundled
