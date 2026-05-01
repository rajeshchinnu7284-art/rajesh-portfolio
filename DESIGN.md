# Design System: Elite Hacker Terminal Portfolio

## Visual Direction
Retro-futuristic hacker terminal aesthetic with modern premium polish. Pure black background, neon cyan primary accents, neon green highlights. Dark mode terminal-inspired layout with glowing borders, scanline overlays, and interactive command prompts.

## Palette

| Token | OKLCH | Purpose |
| --- | --- | --- |
| Background | 0.09 0 0 | Pure black, terminal-like |
| Foreground | 0.95 0 0 | Bright white text |
| Card | 0.12 0 0 | Slightly elevated dark surface |
| Primary (Cyan) | 0.65 0.2 190 | Interactive elements, glow borders |
| Accent (Green) | 0.62 0.2 142 | Highlights, active states |
| Muted | 0.25 0 0 | Subdued text, secondary UI |
| Border | 0.2 0 0 | Subtle dark borders |
| Input | 0.2 0 0 | Form fields |

## Fonts
- **Display/Code**: JetBrains Mono (monospace elegance for headings, code blocks)
- **Body**: Inter (clean, readable body copy)
- **Mono**: JetBrains Mono (consistent terminal aesthetic)

## Custom Tokens
- `--shadow-glow-primary`: 0 0 20px oklch(0.65 0.2 190 / 0.5) — cyan glow shadow
- `--shadow-glow-accent`: 0 0 20px oklch(0.62 0.2 142 / 0.5) — green glow shadow
- `--gradient-neon`: Linear 135deg cyan-to-green gradient
- `--gradient-hero`: Linear 180deg background gradient

## Utilities
- `.glow-primary`, `.glow-accent`: Box-shadow glows
- `.glow-border-primary`, `.glow-border-accent`: Inset + outer glow borders
- `.scanline`: Subtle repeating lines overlay (retro effect)
- `.cursor-blink`: 1s blink animation for cursor elements
- `.text-neon`: Gradient text using neon gradient

## Keyframes & Animations
- `blink-cursor`: 1s infinite opacity toggle
- `glow-pulse`: 2s pulse effect on glowing elements
- `typewriter`: Character-by-character reveal animation

## Structural Zones
- **Header/Nav**: Card-based with glow-border-primary, sticky positioning
- **Hero**: Full-width gradient background with animated boot sequence text
- **Content Sections**: Card-based layout with alternating background depth
- **Interactive Elements**: Hover state with glow-pulse animation and scale (1.05)
- **Footer**: Terminal-style with exit message, subtle border-top

## Motion Choreography
- Fade + slide-up on scroll (framer-motion)
- Count-up animations for stats (numbers tick when visible)
- Staggered skill cards with 80ms delays
- Accordion smooth expand (300ms ease-out)
- Cursor blink in terminal interface

## Responsive Breakpoints
- Mobile: 375px (base)
- Tablet: 768px (md:)
- Desktop: 1280px (lg:)

## Quality Benchmarks
- AA+ contrast maintained (0.95 on 0.09 background = 0.86 L difference)
- Glow effects subtle but distinctive (0.5 opacity base, 0.8 on hover)
- No generic defaults; all colors OKLCH-based
- Animations coordinated with cubic-bezier(0.4, 0, 0.2, 1) easing
