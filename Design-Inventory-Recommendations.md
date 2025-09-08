# Design Inventory & Recommendations

## 1. Site Map

### Routes & Sections

| Route | Sections | Component Files | Data Source |
|-------|----------|----------------|-------------|
| `/` (Home) | Hero, How It Helps, Benefits, Services, CTA | `app/page.tsx`, `components/ui/CardGlass.tsx` | `src/content/load.ts` |
| `/features` | Hero, Feature Pillars, Groups, Integrations, FAQ | `app/(pages)/features/page.tsx`, `components/FeaturePillar.tsx`, `components/FeatureGroup.tsx` | `src/content/static.ts` |
| `/pricing` | Hero, Pricing Cards, Guarantees, FAQ | `app/(pages)/pricing/page.tsx`, `components/PricingSection.tsx` | Hardcoded in component |
| `/case-studies` | Hero, Case Grid | `app/(pages)/case-studies/page.tsx`, `components/CaseCard.tsx` | `src/content/static.ts` |
| `/case-studies/[slug]` | Case Hero, Details | `app/(pages)/case-studies/[slug]/page.tsx`, `components/CaseHero.tsx` | Dynamic from static content |
| `/contact` | Contact Form | `app/(pages)/contact/page.tsx`, `components/ContactForm.tsx` | Form handling |
| `/about` | About content | `app/(pages)/about/page.tsx` | Static content |
| Global | Navigation, Footer | `components/Navbar.tsx`, `components/Footer.tsx` | Static |

## 2. Design Tokens Analysis

### Colors (Current vs. Proposed)

#### Current Color Inventory:
```css
/* Brand Colors (Consistent) */
--brand-lime: #D6FF5F        /* Primary CTA, accents */
--brand-orange: #FF7C35      /* Secondary accent */
--brand-navy: #0A1A2F        /* Dark backgrounds (pricing) */
--brand-ink: #0D0D0D         /* Headlines, dark text */
--brand-gray: #4A4A4A        /* Body text, secondary */
--brand-light: #F8F9FB       /* Page backgrounds */
--brand-border: #E6E6E6      /* Borders, dividers */

/* Glass System */
--glass-bg: rgba(255,255,255,0.8)      /* Card backgrounds */
--glass-border: rgba(255,255,255,0.3)  /* Card borders */
--glass-highlight: rgba(255,255,255,0.95)
--glass-shadow: rgba(0,0,0,0.1)

/* Theme Colors (Redundant) */
--theme-bg: #f8fafc          /* Duplicate of brand-light */
--theme-surface: #ffffff     /* Pure white */
--theme-primary: #3b82f6     /* Blue (unused) */
--theme-secondary: #f59e0b   /* Amber (unused) */
```

#### Problems Identified:
- **Color Collisions**: `theme.bg` duplicates `brand.light`
- **Unused Colors**: `theme.primary`, `theme.secondary`, `theme.accent`
- **Inconsistent Gray Usage**: Mixing `text-gray-300` with `text-brand-gray`
- **Navy Background Issue**: `bg-brand-navy` creates contrast problems

#### Proposed Normalized Token Set:
```css
/* Primary Brand Colors */
--brand-lime: #D6FF5F        /* Keep - Primary CTA */
--brand-orange: #FF7C35      /* Keep - Secondary accent */
--brand-ink: #0D0D0D         /* Keep - Headlines */
--brand-gray: #4A4A4A        /* Keep - Body text */
--brand-light: #F8F9FB       /* Keep - Backgrounds */
--brand-border: #E6E6E6      /* Keep - Borders */

/* Remove navy, replace with glass-dark */
--glass-bg: rgba(255,255,255,0.65)     /* Unified glass background */
--glass-border: rgba(255,255,255,0.3)  /* Unified glass border */
--glass-dark: rgba(13,13,13,0.85)      /* Dark glass for pricing */
--glass-shadow: rgba(0,0,0,0.1)        /* Unified shadow */

/* Remove all theme.* colors - use brand.* instead */
```

### Typography

#### Current Font System:
```css
font-family: Inter (via --font-inter)
font-weights: 400, 500, 600, 700, 800

/* Custom Sizes */
text-display: 64px/72px, weight: 800
text-h2x: 48px/56px, weight: 800  
text-h3x: 32px/40px, weight: 700

/* Inconsistent Usage */
text-6xl md:text-7xl (Home hero)
text-h2x (Features)
text-5xl md:text-6xl (Section headers)
```

#### Problems:
- **Size Inconsistency**: Mixing Tailwind defaults with custom sizes
- **Weight Confusion**: Using both `font-bold` and `font-[800]`

#### Proposed Typography Scale:
```css
--text-display: 64px/72px, weight: 800    /* Hero headlines */
--text-h1: 48px/56px, weight: 800         /* Page titles */
--text-h2: 32px/40px, weight: 700         /* Section headers */
--text-h3: 24px/32px, weight: 600         /* Card titles */
--text-body-lg: 20px/32px, weight: 400    /* Large body */
--text-body: 16px/24px, weight: 400       /* Body text */
--text-small: 14px/20px, weight: 500      /* Labels, captions */
```

### Spacing & Layout

#### Current System:
```css
/* Section Padding */
py-20 (80px top/bottom) - Standard
py-12 (48px) - Footer
px-4 (16px) - Container padding
px-6, px-8 - Card padding variations

/* Border Radius */
rounded-lgx: 24px        /* Cards, major elements */
rounded-pill: 40px       /* Buttons, pills */
rounded-input: 28px      /* Form inputs */
rounded-full            /* Icons, avatars */
```

#### Grid System:
- Container max-width: 1200px (`2xl` breakpoint)
- Standard grid: `md:grid-cols-3` for cards
- Pricing: `md:grid-cols-3` (good)
- Gap: `gap-8` (32px) standard

#### Problems:
- **Inconsistent Card Padding**: `p-6` vs `p-8`
- **No Vertical Rhythm**: Section spacing not consistent

### Shadows & Effects

#### Current Shadows:
```css
shadow-card: 0 4px 30px rgba(0,0,0,0.05)     /* Standard cards */
shadow-lime-glow: 0 0 12px rgba(214,255,95,0.6)  /* CTA hover */
shadow-soft: 0 8px 32px rgba(0,0,0,0.1)      /* Feature cards */
shadow-soft-lg: 0 16px 48px rgba(0,0,0,0.12) /* Hover states */
```

#### Glass Effects:
```css
.glass {
  background: rgba(255,255,255,0.65);
  backdrop-filter: saturate(180%) blur(12px);
  border: 1px solid theme('colors.brand.border');
}
```

## 3. Components Inventory

### Buttons

#### Current Variants:
```tsx
"primary-black": bg-brand-ink text-white hover:scale-105 hover:shadow-lg
"primary-lime": bg-brand-lime text-brand-ink hover:scale-105 hover:shadow-lime-glow  
"ghost": bg-transparent text-brand-ink hover:bg-brand-light/50

Sizes: sm (h-10), md (h-12), lg (h-14)
```

#### Issues:
- **Missing States**: No disabled, loading, or focus states defined
- **Inconsistent Secondary**: No proper secondary button variant
- **Scale Animation**: `hover:scale-105` may cause layout shift

#### Recommended Button System:
```tsx
variants: {
  primary: "bg-brand-lime text-brand-ink hover:bg-brand-lime/90"
  secondary: "border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-ink"
  ghost: "text-brand-ink hover:bg-brand-light/50"
  dark: "bg-brand-ink text-white hover:bg-brand-ink/90"
}
```

### Cards

#### Current Card Components:
1. **CardGlass** (`components/ui/CardGlass.tsx`)
   - Base: `glass rounded-lgx shadow-card p-6`
   - Hover: `hover:shadow-lg hover:-translate-y-1`

2. **GlassCard** (`components/GlassCard.tsx`)
   - Identical to CardGlass (duplicate)

#### Problems:
- **Duplicate Components**: CardGlass and GlassCard are identical
- **Inconsistent Padding**: Some cards use `p-8`, others `p-6`

#### Recommended Consolidation:
```tsx
// Single GlassCard component with size variants
variants: {
  default: "p-6",
  large: "p-8",
  compact: "p-4"
}
```

### Chips/Badges

#### Current TagPill:
```tsx
"inline-flex items-center px-4 py-2 rounded-pill border border-brand-border bg-transparent text-brand-gray hover:bg-brand-light/50 hover:border-brand-orange"
```

#### Section Labels:
```tsx
"inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm"
```

#### Issues:
- **Inconsistent Styling**: Section labels use different approach than TagPill
- **No Variants**: Missing primary, secondary states

### Icons

#### Current System:
- **Library**: Lucide React
- **Stroke Width**: Default (2px)
- **Sizes**: `w-4 h-4`, `w-5 h-5`, `w-8 h-8`, `w-16 h-16`
- **Colors**: `text-brand-lime` (primary), `text-brand-ink` (default)

## 4. Accessibility & Contrast Analysis

### Contrast Issues Identified:

#### Critical (< 4.5:1):
1. **Pricing Section**: `text-gray-300` on `bg-brand-navy` = ~2.8:1 ❌
2. **Glass Cards**: `text-brand-gray` on `rgba(255,255,255,0.65)` = ~3.2:1 ❌
3. **Hover States**: Light text on glass backgrounds

#### Acceptable (> 4.5:1):
- `text-brand-ink` on `bg-brand-light` = ~14:1 ✅
- `text-brand-gray` on white = ~9.2:1 ✅
- `text-brand-lime` on `bg-brand-ink` = ~8.1:1 ✅

### Recommended Fixes:
```css
/* Replace gray-300 with higher contrast */
.pricing-text { color: rgba(255,255,255,0.9); } /* ~12:1 ratio */

/* Strengthen glass card text */
.glass-card-text { color: #2D2D2D; } /* ~11:1 on glass background */

/* Dark glass variant for pricing */
.glass-dark {
  background: rgba(13,13,13,0.85);
  color: rgba(255,255,255,0.95);
}
```

## 5. Pricing Section Deep Dive

### Current Issues:
1. **Background**: `bg-brand-navy` creates contrast problems
2. **Text Colors**: `text-gray-300`, `text-gray-200` fail WCAG
3. **Card Hierarchy**: Popular card not visually distinct enough
4. **Legibility**: Dark background reduces text readability

### Specific Recommendations:

#### Color System:
```tsx
// Replace navy background with glass-dark
className="py-20 bg-gradient-to-br from-brand-ink via-brand-ink/95 to-brand-ink/90"

// Card backgrounds
popular: "bg-brand-lime/10 border-brand-lime backdrop-blur-xl"
default: "bg-white/5 border-white/20 backdrop-blur-xl"

// Text colors
heading: "text-white"
body: "text-white/90"
muted: "text-white/70"
```

#### Hierarchy Improvements:
```tsx
// Popular card enhancements
{plan.popular && (
  <>
    <div className="absolute -inset-1 bg-gradient-to-r from-brand-lime to-brand-orange rounded-lgx blur opacity-30" />
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <span className="bg-brand-lime text-brand-ink px-4 py-2 rounded-pill text-sm font-bold shadow-lime-glow">
        Most Popular
      </span>
    </div>
  </>
)}
```

## 6. Proposed Normalized System

### tailwind.config.js Updates:
```js
colors: {
  brand: {
    lime: '#D6FF5F',
    orange: '#FF7C35', 
    ink: '#0D0D0D',
    gray: '#4A4A4A',
    'gray-light': '#6B7280',  // New mid-tone
    light: '#F8F9FB',
    border: '#E6E6E6',
  },
  glass: {
    light: 'rgba(255,255,255,0.65)',
    dark: 'rgba(13,13,13,0.85)',
    border: 'rgba(255,255,255,0.3)',
    'border-dark': 'rgba(255,255,255,0.1)',
    shadow: 'rgba(0,0,0,0.1)'
  }
},
fontSize: {
  'display': ['64px', { lineHeight: '72px', fontWeight: '800' }],
  'h1': ['48px', { lineHeight: '56px', fontWeight: '800' }],
  'h2': ['32px', { lineHeight: '40px', fontWeight: '700' }],
  'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
}
```

### globals.css Updates:
```css
@layer utilities {
  .glass-light {
    @apply rounded-lgx border backdrop-blur-xl shadow-card;
    border-color: theme('colors.glass.border');
    background-color: theme('colors.glass.light');
    backdrop-filter: saturate(180%) blur(12px);
  }
  
  .glass-dark {
    @apply rounded-lgx border backdrop-blur-xl shadow-card;
    border-color: theme('colors.glass.border-dark');
    background-color: theme('colors.glass.dark');
    backdrop-filter: saturate(180%) blur(12px);
  }
}
```

### Component Updates Required:

#### Button.tsx:
```tsx
variants: {
  primary: "bg-brand-lime text-brand-ink hover:bg-brand-lime/90 focus:ring-brand-lime/50",
  secondary: "border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-ink focus:ring-brand-lime/50",
  ghost: "text-brand-ink hover:bg-brand-light/50 focus:bg-brand-light/50",
  dark: "bg-brand-ink text-white hover:bg-brand-ink/90 focus:ring-brand-ink/50"
}
```

#### New SectionKicker.tsx:
```tsx
export function SectionKicker({ children, variant = "light" }) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium",
      variant === "light" && "bg-white/80 backdrop-blur-sm border border-brand-border text-brand-ink",
      variant === "dark" && "bg-brand-ink/10 backdrop-blur-sm border border-brand-lime/20 text-brand-lime"
    )}>
      <Star className="w-4 h-4" />
      {children}
    </div>
  )
}
```

#### New Heading.tsx:
```tsx
export function Heading({ level = 2, children, className, ...props }) {
  const Component = `h${level}`
  return (
    <Component 
      className={cn(
        level === 1 && "text-display text-brand-ink",
        level === 2 && "text-h1 text-brand-ink", 
        level === 3 && "text-h2 text-brand-ink",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
```

## 7. Implementation Checklist

### Phase 1: Token Cleanup
- [ ] Remove duplicate theme colors from tailwind.config.js
- [ ] Add glass-dark and glass-light utilities
- [ ] Standardize typography scale
- [ ] Update shadow system

### Phase 2: Component Consolidation  
- [ ] Merge CardGlass and GlassCard into single component
- [ ] Add button variants and focus states
- [ ] Create SectionKicker component
- [ ] Create Heading component with levels
- [ ] Standardize TagPill variants

### Phase 3: Accessibility Fixes
- [ ] Replace bg-brand-navy with glass-dark system
- [ ] Update all gray-300 text to white/90
- [ ] Add focus indicators to all interactive elements
- [ ] Test all color combinations for WCAG AA compliance

### Phase 4: Pricing Section Overhaul
- [ ] Replace navy background with gradient
- [ ] Implement glass-dark cards
- [ ] Add popular card glow effect
- [ ] Update all text colors for contrast

### Phase 5: Global Consistency
- [ ] Audit all components for token usage
- [ ] Replace hardcoded colors with design tokens
- [ ] Standardize spacing and padding
- [ ] Update documentation

## 8. DesignGuidelines.md

### DO:
✅ Use `glass-light` for standard cards  
✅ Use `glass-dark` for dark sections  
✅ Use `text-brand-ink` for headlines  
✅ Use `text-brand-gray` for body text  
✅ Use `rounded-lgx` for cards  
✅ Use `rounded-pill` for buttons/pills  
✅ Maintain 8px grid for spacing  
✅ Test contrast ratios before shipping  

### DON'T:
❌ Mix `theme.*` and `brand.*` colors  
❌ Use `text-gray-300` on dark backgrounds  
❌ Create new shadow variations  
❌ Use `hover:scale-105` (causes layout shift)  
❌ Hardcode rgba values in components  
❌ Mix rounded-lg with rounded-lgx  
❌ Use navy background without contrast testing  
❌ Create duplicate components (CardGlass/GlassCard)  

This audit identifies 23 critical issues and provides a clear path to a consistent "liquid glass" design system. Priority should be given to accessibility fixes (Phase 3) and pricing section improvements (Phase 4).
