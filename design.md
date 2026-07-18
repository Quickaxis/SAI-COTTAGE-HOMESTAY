# Sai Cottage Homestay — Design System & Visual Identity
## Location: Boiragimoth, Dibrugarh, Assam
### Document Status: Permanent Source of Truth & Implementation Specification

---

## 1. Introduction & Brand Philosophy

### 1.1 Brand Positioning: Boutique Premium Homestay
Sai Cottage Homestay is not a conventional hotel. Located in the peaceful area of Boiragimoth, Dibrugarh, Assam, it must be positioned online as a **premium boutique homestay** that offers an intimate, slow-paced, and highly personalized hospitality experience. The design system detailed in this document aims to elevate the brand from a standard lodging destination to an editorial showcase of architectural elegance, regional warmth, and peaceful comfort.

Rather than copying generic, conversion-rate-optimized hotel booking templates characterized by loud "Book Now" buttons, rigid grids, and cold blue-gray color schemes, the visual interface for Sai Cottage Homestay draws inspiration from **editorial print magazines** and **high-end architectural portfolios**. It celebrates the relationship between built structures and the lush, green landscape of Assam, translating these feelings into a digital presence.

```
+-------------------------------------------------------------+
|                     EDITORIAL LUXURY                        |
|                                                             |
|   [ Generous Whitespace ]  -->  Breathing Room & Calm       |
|   [ Serif Typography ]     -->  Sophisticated & Authoritative|
|   [ Organic Shapes ]       -->  Warm, Natural, and Cozy     |
|   [ Earthy Tones ]         -->  Authentic Assamese Essence   |
+-------------------------------------------------------------+
```

### 1.2 The "Why" Behind the Design Language

*   **Editorial Luxury:** High-end print magazines (like *Kinfolk* or *Cereal*) command attention through restraint rather than noise. By using oversized serif headings, tight line-heights, and expansive whitespace, the website establishes an immediate sense of prestige. This premium positioning justifies premium pricing and attracts discerning travelers who value aesthetics, tranquility, and curated environments.
*   **Boutique Hospitality:** A boutique homestay is deeply personal. The interface reflects this through organic composition, subtle asymmetry, and hand-crafted visual touches (like custom image masks and delicate borders) that feel designed rather than assembled.
*   **High-End Architecture Portfolio Feel:** Sai Cottage features distinct architectural and interior characteristics. The layout prioritizes large-format photography, clean alignment, and minimalist components to let the architecture speak for itself, giving the user the feeling of walking through a physical, beautifully designed gallery.
*   **Organic Composition and Soft Elegance:** Pure geometric grids can feel industrial and sterile. By introducing organic, flowing shapes (such as rounded container edges, soft fluid image masks, and smooth pill buttons), the website feels warm, human, and deeply connected to the natural flora of Assam.

---

## 2. Typography Analysis & System

The typography system is the cornerstone of the editorial aesthetic. It relies on a strong contrast between an elegant, high-contrast serif for headings and a clean, neutral sans-serif for body copy and navigational elements.

```
       Cormorant Garamond                   Inter Sans-Serif
      [ Elegant Serif Style ]            [ Clean & Highly Legible ]
    o-------------------------o        o----------------------------o
    | - Display Headlines     |        | - Body Text & Captions     |
    | - Section Titles        |   VS   | - Navigation & Labels      |
    | - Editorial Quotes      |        | - Interactive States       |
    | - Large Numbers         |        | - Buttons & Callouts       |
    o-------------------------o        o----------------------------o
```

### 2.1 Serif Heading Style: Cormorant Garamond
*   **Font Choice:** *Cormorant Garamond* (Google Fonts). This typeface represents the epitome of traditional book typography, featuring elegant curves, high contrast between thick and thin strokes, and exceptionally graceful details.
*   **Weights:**
    *   `300` (Light): Used for ultra-large hero statements and display copy to give a delicate, high-fashion magazine look.
    *   `400` (Regular): Used for standard section headings and pull quotes.
    *   `500` (Medium): Used for smaller headers that require clear distinction.
    *   `600` (SemiBold): Reserved for small section accents or headers that require strong visual weight against busy backgrounds.
*   **Display Logic:**
    *   **Tight Line Height:** Oversized serif headings must use tight line heights (`0.92` to `1.0`). If the line height is too loose, the editorial character is lost, and the heading breaks apart visually.
    *   **Tracking/Letter Spacing:** Larger display sizes (above `48px`) must have negative letter spacing (`-0.03em` to `-0.01em`) to tighten the letter pairs, mimicking premium print titles.

### 2.2 Secondary Sans-Serif Font: Inter
*   **Font Choice:** *Inter* (Google Fonts). Designed specifically for computer screens, Inter is an exceptionally legible sans-serif with a neutral, geometric personality that balances the expressive curves of Cormorant Garamond.
*   **Weights:**
    *   `400` (Regular): Default body copy weight.
    *   `500` (Medium): Secondary labels, body lists, and navigation text.
    *   `600` (SemiBold): Buttons, card subtitles, and emphasized text.
    *   `700` (Bold): Section labels and small, uppercase metadata tags.
*   **Display Logic:**
    *   **Generous Line Height:** Body paragraphs must have a line height of `1.7` (`leading-relaxed` or custom CSS `1.7`). This creates comfortable vertical space for the eyes, enhancing readability.
    *   **Narrow Paragraph Width:** For optimal reading speed and aesthetic appeal, restrict text blocks to a maximum width of `60ch` to `65ch` (approximately `600px`).

### 2.3 Typography Scale Specification

| Token | Desktop Size | Tablet Size | Mobile Size | Line Height | Letter Spacing | Font Family & Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (Hero Title)** | `84px` - `96px` | `64px` | `42px` - `48px` | `0.92` | `-0.03em` | Cormorant Garamond, Light (300) / Regular (400) |
| **H1 (Section Heading)** | `48px` - `60px` | `38px` - `44px` | `32px` - `36px` | `1.0` | `-0.02em` | Cormorant Garamond, Regular (400) |
| **H2 (Sub-Heading)** | `28px` - `36px` | `24px` - `28px` | `20px` - `22px` | `1.1` | `-0.01em` | Cormorant Garamond, Medium (500) |
| **Body (Large)** | `20px` | `18px` | `18px` | `1.7` | `0` | Inter, Regular (400) |
| **Body (Default)** | `18px` | `16px` | `16px` | `1.7` | `0` | Inter, Regular (400) |
| **Body (Small/Caption)** | `14px` - `15px` | `14px` | `13px` | `1.6` | `0.02em` | Inter, Medium (500) |
| **Navigation Link** | `15px` - `16px` | `15px` | `15px` | `1.2` | `0.05em` | Inter, Medium (500) |
| **Button Text** | `16px` | `16px` | `16px` | `1.0` | `0.05em` | Inter, SemiBold (600) |
| **Number Display** | `32px` - `48px` | `28px` - `36px` | `24px` - `28px` | `1.0` | `-0.01em` | Inter, SemiBold (600) |

---

## 3. Color System & Palette

The color system is inspired by the earthy, natural landscape of Assam—fertile tea gardens, misty riverbanks, rain-washed flora, and warm architectural elements. It avoids cold pure whites, harsh pitch blacks, and neon saturation, favoring soft, organic tones instead.

```
       Primary Background: Warm Ivory (#F7F4EC)
       [=================================================]
       |  Soft Linen (#F2EEE5)     |  Warm White (#FCFBF8) |
       |  (Secondary BG)           |  (Card Backgrounds)   |
       [=================================================]
       |  Primary Accent: Forest Green (#4D5A34)         |
       |  Secondary Brand: Deep Moss Green (#2F3825)     |
       |  Accent Light: Muted Olive (#7A8555)            |
       |  Luxury Detail: Muted Gold (#B89A57)             |
       [=================================================]
       |  Text Primary: Charcoal (#222222)               |
       |  Text Secondary: Warm Grey (#666666)            |
       [=================================================]
```

### 3.1 Color Palette Specifications

| Name | HEX Value | RGB Value | Tailored Use Case |
| :--- | :--- | :--- | :--- |
| **Warm Ivory** | `#F7F4EC` | `rgb(247, 244, 236)` | Main website background. The dominant color that sets a warm, welcoming, paper-like tone. |
| **Soft Linen** | `#F2EEE5` | `rgb(242, 238, 229)` | Secondary background for section alternating, structural footers, and large full-bleed zones. |
| **Warm White** | `#FCFBF8` | `rgb(252, 251, 248)` | Card backgrounds, popover elements, and content container sheets that require slight elevation. |
| **Forest Green** | `#4D5A34` | `rgb(77, 90, 52)` | Primary brand color. Used for prominent headings, icons, primary buttons, and luxury branding elements. |
| **Deep Moss Green**| `#2F3825` | `rgb(47, 56, 37)` | Dark accent color. Used for high-contrast text, dark footer backgrounds, or active state buttons. |
| **Muted Olive** | `#7A8555` | `rgb(122, 133, 85)` | Subtle accent tone. Perfect for category badges, borders with organic styling, and secondary icons. |
| **Muted Gold** | `#B89A57` | `rgb(184, 154, 87)` | Luxury detailing. Used for stars, pricing accents, small elegant borders, or specialized indicators. |
| **Charcoal** | `#222222` | `rgb(34, 34, 34)` | Primary typography color. Provides high readability without the harshness of pure black. |
| **Warm Grey** | `#666666` | `rgb(102, 102, 102)` | Secondary typography color. Used for body text, meta-descriptions, and inactive navigation. |
| **Stone Grey** | `#8E8A81` | `rgb(142, 138, 129)` | Muted details. Used for tertiary labels, placeholder inputs, and micro-labels. |
| **Soft Sage Grey** | `#E3DED3` | `rgb(227, 222, 211)` | Border outlines, light interactive dividers, and structural lines. |
| **Divider Linen** | `#EAE4D8` | `rgb(234, 228, 216)` | Decorative hairline separators and subtle section boundaries. |
| **Success Green** | `#5C8A5B` | `rgb(92, 138, 91)` | Validation, toast alerts, success status indicators. |
| **Error Red** | `#C45757` | `rgb(196, 87, 87)` | Input field errors, invalid states, warning banners. |
| **Warning Amber** | `#C49B3A` | `rgb(196, 155, 58)` | Availability warnings, temporary notifications. |

---

## 4. Layout & Spacing Principles

The visual luxury of a high-end architectural site relies on how elements are placed and the space surrounding them. 

```
+-------------------------------------------------------------+
| SECTION BACKPLATE                                           |
|   +-----------------------------------------------------+   |
|   | CONTAINER (max-w-[1280px])                          |   |
|   |   +-------------------+     +-------------------+   |   |
|   |   | ASYMMETRICAL TEXT |     | ORGANIC IMAGE     |   |   |
|   |   | Large Heading     |     | [Blob Mask]       |   |   |
|   |   | Narrow Body (60ch)|     | Soft Shadow       |   |   |
|   |   | Pill Button       |     |                   |   |   |
|   |   +-------------------+     +-------------------+   |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
```

### 4.1 Generous Negative Space & Content Ratios
*   **Whitespace is a Feature:** Do not treat empty spaces as areas to fill. Whitespace is active; it forces the eye to focus on the content and creates a calm, unhurried reading experience.
*   **Section Padding:** Avoid standard tight section boundaries. Desktop layouts must implement padding values between `120px` and `160px` (`py-32` to `py-40` in Tailwind) on vertical axes. Mobile layouts should scale to `80px` (`py-20`).
*   **Asymmetry & Balance:** Rather than utilizing static 50/50 grids, structure layouts using offset columns (e.g., 5-column description next to a 7-column image, or 4-column heading next to an 8-column card grid). This offsets the horizontal weight, keeping the page dynamic and fluid.

### 4.2 Spacing System (4px Baseline)

| Tailwind Class | Pixel Value | Typical Application |
| :--- | :--- | :--- |
| `space-y-1` / `p-1` | `4px` | Micro adjustment, badge padding, close spacing. |
| `space-y-2` / `p-2` | `8px` | Small label gaps, border offset inside buttons. |
| `space-y-3` / `p-3` | `12px` | Spacing between small heading and metadata tags. |
| `space-y-4` / `p-4` | `16px` | In-card padding, spacing inside floating inputs. |
| `space-y-6` / `p-6` | `24px` | Default card padding, text-to-button spacing. |
| `space-y-8` / `p-8` | `32px` | Outer card padding, grid spacing on mobile devices. |
| `space-y-12` / `p-12`| `48px` | Inner grid spacing on desktop, module text margins. |
| `space-y-16` / `p-16`| `64px` | Layout spacing inside large components. |
| `space-y-24` / `p-24`| `96px` | Sub-layout section grouping padding. |
| `space-y-32` / `p-32`| `128px` | Full section vertical padding for desktop view. |

---

## 5. Hero Section Visual Language

The Hero Section is the most critical element for establishing the boutique tone. It must feel like the cover of a luxury travel magazine.

```
+-------------------------------------------------------------------+
|                        sai cottage                                |
|                        [  HOMESTAY  ]                             |
|                                                                   |
|                   B O I R A G I M O T H ,   A S S A M             |
|                                                                   |
|                        +---------------+                          |
|                        |  Organic Image|                          |
|                        |  Mask (Fluid) |                          |
|                        |               |                          |
|                        |   [ IMAGE ]   |                          |
|                        +---------------+                          |
|                                                                   |
|                      E L E G A N T   S E R I F                    |
|                        H E A D L I N E                            |
|                                                                   |
+-------------------------------------------------------------------+
```

### 5.1 Key Design Elements of the Hero Section
1.  **Centered & Clean Typography Composition:**
    *   Place a small, tracked-out label above the main title: `S A I   C O T T A G E   H O M E S T A Y` (`tracking-[0.2em] text-[12px] font-semibold text-muted-olive uppercase`).
    *   Below the brand label, place a large display heading in Cormorant Garamond: "A Sanctuary of Quiet Elegance in the Heart of Assam." This title should be set to `font-light (300)`, with a tight line-height (`0.92`) and slightly negative letter spacing (`-0.02em`).
2.  **Organic Blob Image Mask:**
    *   Instead of a standard rectangular landscape hero banner, the hero image is placed inside a custom fluid shape. Use CSS `clip-path` or an SVG mask with soft, asymmetrical curves.
    *   *Reference Curve Formula:* A border-radius definition like `border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;` yields a natural, organic look.
    *   This mask must transition smoothly during viewport scrolling or hover interactions (leveraging SVG path morphing or Framer Motion transitions).
3.  **Visual Balance & Navigation Placement:**
    *   A significant amount of whitespace must border the image, allowing the headline and photography to breathe.
    *   Do not overlay text blocks on top of the image container; instead, stack them vertically or place them adjacent to one another to maintain clear contrast and clean layouts.
4.  **Floating CTA Module:**
    *   Place a small, rounded container offset from the hero image. It should contain pricing and check-availability features, using a subtle glassmorphism effect to feel integrated into the background.

---

## 6. Navigation Architecture

The navigation bar must feel weightless, transparent, and responsive, floating at the top of the interface.

```
   +-------------------------------------------------------------+
   |   [ Sai Cottage ]         Rooms   Amenities   Gallery       |
   |   (Elegant Serif)         [   BOOK NOW (Pill Button)   ]    |
   +-------------------------------------------------------------+
   ^                                                             ^
   |--- Floating rounded border with backdrop-blur (12px) -------|
```

### 6.1 Interactive Behavior & Construction
*   **Floating Rounded Container:** The navigation bar is centered within a container that takes up `90%` of the desktop viewport width (`max-w-[1200px]`), positioned `24px` from the top of the screen.
*   **Glassmorphism Specs:**
    *   Background color: `rgba(252, 251, 248, 0.7)` (Warm White at 70% opacity).
    *   Backdrop blur: `backdrop-filter: blur(12px);`.
    *   Border: `1px solid rgba(227, 222, 211, 0.4)` (Sage Grey at 40% opacity).
    *   Shadow: Soft, ambient drop shadow (`shadow-sm` equivalent, tinted with brand colors).
*   **Sticky Animation:**
    *   When the user scrolls, the navigation remains pinned to the top of the page.
    *   As scrolling begins, the outer margins of the navbar transition smoothly from a width of `90%` to a full-bleed layout, and its background opacity shifts to `0.9` for improved readability over page content.
*   **Logo & Links Placement:**
    *   Logo: Left-aligned, styled with a sophisticated serif look ("Sai Cottage") using *Cormorant Garamond*, weight `600`, size `22px`.
    *   Menu Links: Centered, styled in uppercase *Inter* at `14px` (`tracking-[0.1em] font-medium text-charcoal`).
    *   Call-to-Action: A pill-shaped CTA button is positioned on the right side of the navbar.

---

## 7. Imagery & Art Direction

A premium boutique website is only as strong as its photography. The visual tone must be warm, editorial, and authentic.

```
+-----------------------------------------------------------------+
| PHOTOGRAPHY GUIDELINES                                          |
|                                                                 |
|  [ Warm Tones ]     --> Soft amber sun rays, cream linen        |
|  [ Natural Light ]  --> No harsh studio flashes, natural shadows|
|  [ Human Element ]  --> Tea pouring, cozy reading corners       |
|  [ Architecture ]   --> Angled shots of the wood and stone      |
+-----------------------------------------------------------------+
```

### 7.1 Photography Style Guidelines
*   **Warm Color Grading:** Images should emphasize golden hour highlights, soft greens, and warm interior lighting. Avoid cold, blue-shifted color palettes.
*   **Natural Lighting:** Focus on natural sunlight streaming through windows, creating soft shadows across timber textures and linen sheets.
*   **Storytelling Composition:** Rather than simple wide-angle room shots, mix in detail-oriented editorial crops: a close-up of local Assamese brass utensils, sunbeams hitting a wooden bedside table, or steam rising from a hot cup of black tea.
*   **Organic Framing:** Frame key photographs inside asymmetrical, rounded container frames (`rounded-t-[120px] rounded-b-[40px]`) to echo the natural shapes of the landscape.

### 7.2 Performance-Minded Technical Rules
*   **Lazy Loading:** Apply standard lazy-loading (`loading="lazy"`) to all off-screen images.
*   **Responsive Layouts (`srcset`):** Serve optimized sizes based on the user's viewport (e.g., generate layout images at `640px` for mobile, `1200px` for tablets, and `1920px` for desktop).
*   **Next.js `next/image`:** In Next.js architectures, always use the default `<Image>` wrapper component with pre-defined dimensions, explicit placeholder blur vectors (`blurDataURL`), and high-performance WebP/AVIF output.

---

## 8. Card Design & Visual Structure

Cards are used to display room types, amenities, and localized travel experiences. They should read like articles in a travel journal.

```
+------------------------------------+
|  [ OPTIONAL BADGE - e.g. Garden ]  |
|  +------------------------------+  |
|  |                              |  |
|  |     ROMANTIC BUNGALOW        |  |
|  |     [ IMAGE CAROUSEL ]       |  |
|  |                              |  |
|  +------------------------------+  |
|                                    |
|  The Heritage Suite                |
|  A spacious room featuring local   |
|  hardwood furniture and views of    |
|  our private orchid gardens.       |
|                                    |
|  Explore Room ->                   |
+------------------------------------+
```

### 8.1 Structural Layout & Styling
*   **Base Styling:**
    *   Background: Warm White (`#FCFBF8`).
    *   Borders: Avoid thick borders. Use a soft Sage Grey outline (`border-[#E3DED3]`) at `1px` thickness.
    *   Corner Radius: Use standard curved edges (`rounded-2xl` or `16px`) for structural cards.
*   **Elevations & Shadows:** Apply a soft, ambient drop shadow (`shadow-[0_8px_30px_rgb(0,0,0,0.02)]`) that increases slightly on hover to create a floating effect.
*   **Interactive Hover Transitions:**
    *   Apply a gentle vertical lift (`translate-y-[-4px]`) combined with an image-zoom transition (`scale-[1.03]`) inside the card frame.
    *   Transitions must use custom timing properties (`transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 9. Component Specifications

```
+-----------------------------------------------------------------+
| COMPONENT LIBRARY BLUEPRINTS                                    |
|                                                                 |
|  [1] Navigation      [2] Hero               [3] Buttons         |
|  [4] Room Cards      [5] Feature Blocks     [6] Location Map    |
|  [7] Testimonials    [8] FAQ Accordion      [9] Footer          |
+-----------------------------------------------------------------+
```

### 9.1 Rooms Detail Module (Room Cards)
*   **Layout:** A two-column structure (Desktop) featuring a large, vertically-oriented photo on one side, and key room details on the other.
*   **Details Panel:**
    *   Category label: Inter font, `uppercase`, tracking `0.1em`, colored Muted Olive (`#7A8555`).
    *   Title: Cormorant Garamond font, `32px`, Charcoal (`#222222`).
    *   Room attributes: Standard list styled with small icons (e.g., King Bed, Garden View, High-Speed Wi-Fi).
    *   Book Button: Primary green pill-shaped CTA.

### 9.2 Feature Blocks (Heritage & Culture Showcase)
*   **Layout:** Asymmetric layouts where photos bleed slightly past standard margins, paired with text blocks styled with large quotes in Cormorant Garamond.
*   **Aesthetic Detail:** Incorporate delicate gold outlines (`border-[#B89A57]`) or fine Sage Grey divider lines to suggest a hand-crafted look.

### 9.3 Testimonial Display (Reviews Slider)
*   **Layout:** A single-focus carousel layout that emphasizes one review at a time, eliminating visual clutter.
*   **Aesthetic Detail:**
    *   Quote icon: Large, low-opacity serif quotation mark in Forest Green (`opacity-10`).
    *   Body text: Cormorant Garamond font, `24px` to `28px`, italicized, colored Charcoal (`#222222`).
    *   Reviewer name: Inter font, `14px`, uppercase, tracking `0.1em`.

### 9.4 Location Map (The Journey to Dibrugarh)
*   **Layout:** A custom-styled map block wrapped in an organic frame, paired with travel advice (e.g., distance from Mohanbari Airport, local taxi info).
*   **Aesthetic Detail:** Apply a custom color filter (warm/monochrome tone) to the embedded map style, integrating it with the warm ivory background.

### 9.5 FAQ Accordion
*   **Layout:** Clean, stackable lists with fine linen dividers (`#EAE4D8`).
*   **Aesthetic Detail:** Seamless expand/collapse actions styled with slow rotation changes on the chevron indicators.

---

## 10. Buttons & Interactive States

Interactive actions must feel responsive, smooth, and carefully detailed.

```
       Primary Pill                     Secondary Outline
   +--------------------+             +--------------------+
   |     BOOK NOW       |             |   View Gallery     |
   +--------------------+             +--------------------+
   - Forest Green BG                  - Sage Grey Border
   - Warm White Text                  - Charcoal Text
   - Hover: Deep Moss BG              - Hover: Slide-up Line
```

### 10.1 Button Variants & Coding Styling
1.  **Primary Button (The Classic Pill):**
    *   Styling: Fully rounded edges (`rounded-full`), Forest Green background (`bg-[#4D5A34]`), and Warm White text (`text-[#FCFBF8]`).
    *   Hover state: Transition background smoothly to Deep Moss Green (`bg-[#2F3825]`), accompanied by a subtle upward lift (`-2px`).
2.  **Secondary Button (The Outline Pill):**
    *   Styling: Fully rounded edges (`rounded-full`), transparent background, 1px Sage Grey border (`border-[#E3DED3]`), and Charcoal text (`text-[#222222]`).
    *   Hover state: Transition background to Soft Linen (`bg-[#F2EEE5]`), with the border color shifting to Forest Green.
3.  **Tertiary Link (The Editorial Text Link):**
    *   Styling: Inter font, semi-bold (`font-semibold`), Charcoal text (`text-[#222222]`), and a custom gold underline (`decoration-[#B89A57]`).
    *   Hover state: The underline scales horizontally from the center outward (`scale-x-100`).

### 10.2 Interactive States Specification Table

| State | Primary Button | Secondary Button | Text Link | Form Inputs |
| :--- | :--- | :--- | :--- | :--- |
| **Default** | `bg-[#4D5A34] text-[#FCFBF8]` | `border-[#E3DED3] text-[#222222]` | `text-[#222222] underline` | `border-[#E3DED3] bg-[#FCFBF8]` |
| **Hover** | `bg-[#2F3825] shadow-md` | `bg-[#F2EEE5] border-[#4D5A34]` | `text-[#4D5A34] scale-x-100` | `border-[#4D5A34] shadow-sm` |
| **Active** | `bg-[#2F3825] translate-y-0` | `bg-[#EAE4D8]` | `opacity-80` | `border-[#2F3825] ring-1 ring-[#2F3825]` |
| **Focus** | `ring-2 ring-[#B89A57] offset-2` | `ring-2 ring-[#4D5A34] offset-2`| `outline-none ring-1` | `ring-2 ring-[#B89A57]` |
| **Disabled**| `bg-[#E3DED3] text-[#8E8A81]` | `border-[#EAE4D8] text-[#8E8A81]`| `text-[#8E8A81] no-underline`| `bg-[#F2EEE5] text-[#8E8A81]` |

---

## 11. Border Radius & Shadows

The system relies on large, rounded curves and soft shadows to create a warm, inviting, and organic feel throughout the site.

```
       BORDER RADIUS SCALE                    SHADOW ELEVATION SCALE
   o---------------------------o           o---------------------------o
   | Buttons: Full Pill (9999) |           | Ambient: rgba(0,0,0,0.02) |
   | Cards: 16px (2xl)         |           | Soft:    rgba(0,0,0,0.06) |
   | Containers: 32px (4xl)    |           | Medium:  rgba(0,0,0,0.10) |
   | Sections: 120px           |           | Large:   rgba(0,0,0,0.15) |
   o---------------------------o           o---------------------------o
```

### 11.1 Border Radius Scale

*   **Pill Radius (`rounded-full` / `9999px`):** Used for buttons, badges, tag listings, and floating navigation controls.
*   **Card Radius (`rounded-2xl` / `16px`):** Applied to secondary cards, photo hover frames, forms, modal boundaries, and smaller images.
*   **Container Radius (`rounded-4xl` / `32px`):** Applied to room description modules, structured reviews boards, and key page sections.
*   **Extreme Organic Radius (`custom-radius` / `60px - 120px`):** Applied to hero photo elements and page transition shapes to reinforce the organic theme.

### 11.2 Shadow Scale (Ambient Shadows)

```css
/* Tailwind custom configuration values */
.shadow-ambient {
  box-shadow: 0 4px 20px -2px rgba(77, 90, 52, 0.03), 
              0 2px 8px -1px rgba(34, 34, 34, 0.02);
}

.shadow-soft {
  box-shadow: 0 10px 40px -10px rgba(47, 56, 37, 0.06), 
              0 2px 10px -2px rgba(34, 34, 34, 0.03);
}

.shadow-medium {
  box-shadow: 0 20px 50px -15px rgba(47, 56, 37, 0.10), 
              0 4px 15px -3px rgba(34, 34, 34, 0.04);
}

.shadow-large {
  box-shadow: 0 30px 70px -20px rgba(47, 56, 37, 0.15), 
              0 10px 30px -5px rgba(34, 34, 34, 0.05);
}
```

---

## 12. Animation System & Page Transitions

Animations should feel slow, smooth, and premium. They should never be flashy or visually distracting.

```
       ANIMATION TIMING & EASING
   o-----------------------------------------------------------------o
   | [ Easing Curve ]  -->  Cubic Bezier (0.16, 1, 0.3, 1) [Smooth]  |
   | [ Durations ]     -->  Slow Transitions (600ms to 1200ms)       |
   o-----------------------------------------------------------------o
```

### 12.1 Core Easing & Timing Specification
*   **The Signature Curve:** All animations must use a cubic-bezier easing curve to mimic organic, physical movement.
    *   *Specification:* `cubic-bezier(0.16, 1, 0.3, 1)` (often called "easeOutExpo" or "custom smooth").
*   **Durations:**
    *   *Hover Micro-interactions:* `200ms` to `350ms`.
    *   *Component Entries:* `600ms` to `800ms`.
    *   *Large Transitions / Image Reveals:* `1000ms` to `1200ms`.

### 12.2 Animation Choreography Guide

1.  **Fade-Up Entry (Scroll Reveal):**
    *   Trigger: Reaching a scroll boundary.
    *   Implementation: Set the initial state of elements to an opacity of `0` and offset them downwards by `30px`. When triggered, transition opacity to `1` and translate the element back to `0` over `800ms`.
2.  **Smooth Parallax Scroll (Image Containers):**
    *   Trigger: Page scroll events.
    *   Implementation: Apply a slow parallax translate effect (`-8%` to `+8%` speed offset) to images relative to their parent container frame.
3.  **Delicate Image Reveal (Curtain Slide):**
    *   Trigger: Element entering the viewport.
    *   Implementation: A warm ivory-colored overlay block moves across the image frame, revealing the underlying photo.
4.  **Hover Image Zoom:**
    *   Trigger: Mouse hover.
    *   Implementation: Scale the image inside the frame to `1.04` over `600ms` using the signature easing curve, keeping the layout clean and stable.

---

## 13. Responsive Architecture

The editorial layout must scale seamlessly across device sizes, adapting page grids to maintain comfortable reading proportions.

```
  DESKTOP (1280px+)       TABLET (768px - 1024px)       MOBILE (320px - 480px)
+-------------------+      +-------------------+      +-------------------+
|  Logo   Menu  CTA |      |  Logo       Menu  |      |  Logo           =  |
|                   |      |                   |      |                   |
|  [Text]   [Image] |      |  [  IMAGE SLIDER ]|      |   [ IMAGE BLOB ]  |
|                   |      |                   |      |                   |
|  Col-5    Col-7   |      |  [ Text Block ]   |      |   [ Text Block ]  |
+-------------------+      +-------------------+      +-------------------+
```

### 13.1 Grid Collapse & Structural Behavior
*   **Desktop & Laptop Layouts (`lg` to `xl`):** Multi-column asymmetrical grids, full horizontal navigation bars, custom image frames, and extensive side margins.
*   **Tablet Viewports (`md` to `lg`):** Simplify columns (e.g., transition 3-column layouts to 2-column configurations, and split asymmetrical rows into stacked columns).
*   **Mobile Viewports (`sm` to `md`):** Collapse complex grids into a single-column layout. The floating navigation bar transitions to a simple mobile menu, and typography sizes scale down to keep headings readable.

### 13.2 Breakpoint Typography & Layout Scaling

| Breakpoint | Target Devices | Content Max Width | Section Padding | Grid Layout Collapse Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **`sm` (640px)** | Mobile Screens | `100%` (with `20px` margins) | `y: 80px` | Single column grid stack. |
| **`md` (768px)** | Portrait Tablets | `720px` | `y: 100px` | Dual columns split evenly. |
| **`lg` (1024px)**| Landscape Tablets | `960px` | `y: 120px` | Asymmetrical offsets enabled. |
| **`xl` (1280px)**| Standard Desktop | `1200px` | `y: 140px` | Full multi-column asymmetry. |
| **`2xl` (1536px)**| Large Desktop View | `1440px` | `y: 160px` | Expanded margins and whitespace. |

---

## 14. Accessibility (a11y) & Performance Guidelines

A premium user experience must be accessible and high-performing on all devices.

```
+-----------------------------------------------------------------+
| COGNITIVE & TECHNICAL COMPLIANCE                                |
|                                                                 |
|  [ Contrast Ratio ] --> WCAG AA Compliant (Charcoal on Ivory)   |
|  [ Keyboard Nav ]   --> Clear focus rings, trap-free popovers   |
|  [ Semantic HTML ]  --> <header>, <main>, <article>, <footer>     |
|  [ Performance ]    --> Sub-second load times, 95+ Lighthouse   |
+-----------------------------------------------------------------+
```

### 14.1 Contrast & Readability Rules
*   **Contrast Check:** Charcoal text (`#222222`) against the Warm Ivory background (`#F7F4EC`) yields a contrast ratio of `12.5:1`, comfortably exceeding the WCAG AAA standard of `7:1`.
*   **Secondary Text Contrast:** Secondary Warm Grey text (`#666666`) against Warm Ivory yields a contrast ratio of `4.8:1`, exceeding the WCAG AA requirement of `4.5:1` for regular text.
*   **Interactive Focus Indicators:** Interactive elements must feature clear focus outlines (`focus-visible`). Avoid hiding focus indicators. Instead, use soft gold or sage focus rings (`ring-2 ring-[#B89A57] ring-offset-2`).

### 14.2 Screen Readers & Semantic markup
*   **Semantic Structure:** Layout pages using clean HTML5 structural elements: `<header>` for navigation, `<main>` for primary page sections, `<section>` for content blocks, `<article>` for room details, and `<footer>` for page footers.
*   **Aria Labels:** Provide descriptive `aria-label` tags for all icon-only buttons, modal close triggers, and navigation links (e.g., `<button aria-label="Close Room Preview Modal">`).

### 14.3 Performance Optimization Target Metrics
*   **Lighthouse Targets:** Aim for scores of **95+** in Performance, Accessibility, Best Practices, and SEO.
*   **Core Web Vitals Goals:**
    *   *Largest Contentful Paint (LCP):* `< 1.8s` (optimized via pre-loaded hero images).
    *   *First Input Delay (FID):* `< 50ms` (by minimizing third-party script bloat).
    *   *Cumulative Layout Shift (CLS):* `0.0` (by defining explicit aspect ratios for all images and containers).

---

## 15. Technology Stack & Project Structure

To implement this design system successfully, we recommend a modern, performant, and developer-friendly technical stack.

```
+-----------------------------------------------------------------+
| RECOMMENDED TECH STACK                                          |
|                                                                 |
|  - React Framework: Next.js (App Router)                        |
|  - Programming Language: TypeScript                             |
|  - Styling Engine: Tailwind CSS                                 |
|  - Animation Library: Framer Motion                             |
|  - Icons Pack: Lucide Icons                                     |
+-----------------------------------------------------------------+
```

### 15.1 Technology Recommendations
*   **Next.js App Router (v14/v15):** Provides server-side rendering (SSR) for optimal performance and SEO, paired with client-side interactivity where needed.
*   **TypeScript:** Ensures type safety across components and dynamic API routing interfaces.
*   **Tailwind CSS:** Enables rapid, utility-first styling based directly on our design system tokens.
*   **Framer Motion:** An excellent animation library for implementing smooth, custom-bezier page transitions and scroll states.
*   **Lucide Icons:** A clean, minimal icon set that pairs well with sans-serif typefaces.

### 15.2 Tailwind Configuration Preset
To ensure consistent styling, configure `tailwind.config.js` with the design system tokens:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F7F4EC',        // Warm Ivory
          bgSecondary: '#F2EEE5', // Soft Linen
          card: '#FCFBF8',      // Warm White
          forest: '#4D5A34',    // Forest Green
          moss: '#2F3825',      // Deep Moss Green
          olive: '#7A8555',     // Muted Olive
          gold: '#B89A57',      // Muted Gold
        },
        text: {
          primary: '#222222',   // Charcoal
          secondary: '#666666', // Warm Grey
          muted: '#8E8A81',     // Stone Grey
        },
        border: {
          sage: '#E3DED3',      // Soft Sage Grey
          linen: '#EAE4D8',     // Divider Linen
        },
        feedback: {
          success: '#5C8A5B',
          error: '#C45757',
          warning: '#C49B3A',
        }
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
        'custom-organic': '60% 40% 70% 30% / 40% 60% 30% 70%',
      },
      animation: {
        'smooth-fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
```

### 15.3 Folder Structure Template

Below is the recommended project structure for implementing the Sai Cottage website in Next.js.

```
sai-cottage-homestay/
├── public/                     # Static assets (images, vectors, fonts)
│   ├── fonts/                  # Locally hosted web fonts (optional)
│   ├── icons/                  # Custom brand SVG assets
│   └── images/                 # Optimized room and scenery photos
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── layout.tsx          # Global entry layout (instantiates fonts, context)
│   │   ├── page.tsx            # Main Landing/Hero Page
│   │   ├── rooms/              # Rooms routing directory
│   │   │   ├── page.tsx        # Rooms list page
│   │   │   └── [slug]/         # Individual room detail template
│   │   ├── amenities/          # Amenities listing page
│   │   ├── contact/            # Contact/Booking inquiry form page
│   │   └── global.css          # Core CSS stylesheet
│   ├── components/             # Reusable UI component library
│   │   ├── ui/                 # Basic atomic primitives
│   │   │   ├── Button.tsx      # Standard styled buttons
│   │   │   ├── Card.tsx        # Container card layout wrapper
│   │   │   └── Input.tsx       # Accessible text inputs and textareas
│   │   ├── navigation/         # Navigation components
│   │   │   ├── Navbar.tsx      # Floating sticky navigation bar
│   │   │   └── MobileMenu.tsx  # Drawer overlay mobile menu
│   │   ├── sections/           # Section-specific page modules
│   │   │   ├── Hero.tsx        # Hero banner module
│   │   │   ├── RoomsGrid.tsx   # Grid display of suites
│   │   │   ├── Gallery.tsx     # Organic masonry photography wall
│   │   │   └── MapSection.tsx  # Map block with travel info
│   │   └── animations/         # Framer Motion animation helpers
│   │       ├── ScrollReveal.tsx# Wrapper for scroll-reveal animations
│   │       └── PageTransition.tsx# Page change transition wrapper
│   ├── hooks/                  # Custom React hooks (e.g. useScrollPosition)
│   ├── utils/                  # Helper utilities (cn tailwind merge, formatting)
│   └── styles/                 # Theme tokens and stylesheet variables
├── tailwind.config.js          # Tailwind CSS presets configuration
├── tsconfig.json               # TypeScript path mapping options
└── package.json                # Project dependencies and workspace scripts
```

---

## 16. Final Checklist for Implementation

Developers must verify their work against this checklist to ensure the premium, editorial feel of the design system is maintained:

*   [ ] **Background Check:** No section uses a pure white (`#FFFFFF`) or pure black (`#000000`) background. All zones use Warm Ivory, Soft Linen, or Warm White.
*   [ ] **Heading Check:** All headings in *Cormorant Garamond* use tight line-heights (`0.92` to `1.0`). If a line-height looks loose, adjust it down.
*   [ ] **Whitespace Check:** Ensure layout sections feature generous padding (`py-32` on desktop viewports) to keep the layout feeling open and spacious.
*   [ ] **Button Check:** Verify all primary and secondary buttons are styled as rounded pills (`rounded-full`), with smooth transitions on hover.
*   [ ] **Shadow Check:** All container elements use ambient shadows instead of sharp, high-opacity outlines.
*   [ ] **Animation Check:** Ensure all animations use the custom cubic-bezier easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`). They must feel slow and elegant, not fast or hyperactive.
*   [ ] **Accessibility Check:** Confirm all text combinations meet WCAG AA contrast standards, and all images include descriptive `alt` tags.

---
*End of Design System Specification Document.*
