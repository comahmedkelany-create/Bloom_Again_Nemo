# 1. Project Overview

- Project Name:
  - `package.json` name: `bloom-again-nemo`
  - `angular.json` project key: `Bloom_Again_Nemo`
  - `APP_CONSTANTS.APP_NAME`: `Bloom Again, Nemo`
- Framework:
  - Angular application.
  - Standalone bootstrap through `bootstrapApplication(App, appConfig)` in `src/main.ts`.
- Angular Version:
  - `package.json` Angular dependency ranges: `^21.2.0` for Angular runtime packages.
  - Installed lockfile versions:
    - `@angular/core`: `21.2.17`
    - `@angular/common`: `21.2.17`
    - `@angular/compiler`: `21.2.17`
    - `@angular/forms`: `21.2.17`
    - `@angular/platform-browser`: `21.2.17`
    - `@angular/router`: `21.2.17`
    - `@angular/cli`: `21.2.16`
    - `@angular/build`: `21.2.16`
    - `@angular/compiler-cli`: `21.2.17`
- Folder Structure:
  - `src/` contains the Angular application source.
  - `src/app/components/` contains reusable UI components.
  - `src/app/layout/` contains the app layout component.
  - `src/app/pages/` contains routed page components.
  - `src/app/services/` contains empty service folders.
  - `src/app/models/` contains empty model folders.
  - `src/app/shared/` contains constants and enums; `interfaces/` and `types/` are empty.
  - `src/app/utils/` contains empty utility subfolders.
  - `public/` contains copied static assets and JSON data.
- Build System:
  - Angular CLI workspace.
  - Build builder: `@angular/build:application`.
  - Serve builder: `@angular/build:dev-server`.
  - Unit test builder: `@angular/build:unit-test`.
  - Build entry: `src/main.ts`.
  - Styles entry: `src/styles.css`.
  - Assets config copies everything under `public/`.
  - Scripts:
    - `npm start`: `ng serve`
    - `npm run build`: `ng build`
    - `npm run watch`: `ng build --watch --configuration development`
    - `npm test`: `ng test`
- Routing Style:
  - Routes are defined as a `Routes` array in `src/app/app.routes.ts`.
  - Router providers are configured with `provideRouter(routes)` in `src/app/app.config.ts`.
  - No `RouterModule` NgModule is present.
  - No `<router-outlet>` exists in the current `src/app/app.html` or `src/app/layout/app-layout/app-layout.html`.

# 2. Complete Folder Tree

```text
src/
|   index.html
|   main.ts
|   styles.css
|
\---app
    |   app.config.ts
    |   app.css
    |   app.html
    |   app.routes.ts
    |   app.spec.ts
    |   app.ts
    |
    +---animations
    +---components
    |   +---background
    |   |   \---flowers-background
    |   |           flowers-background.css
    |   |           flowers-background.html
    |   |           flowers-background.spec.ts
    |   |           flowers-background.ts
    |   |
    |   +---envelope
    |   |       envelope.css
    |   |       envelope.html
    |   |       envelope.spec.ts
    |   |       envelope.ts
    |   |
    |   \---letter
    |           letter.css
    |           letter.html
    |           letter.spec.ts
    |           letter.ts
    |
    +---guards
    +---layout
    |   \---app-layout
    |           app-layout.css
    |           app-layout.html
    |           app-layout.spec.ts
    |           app-layout.ts
    |
    +---models
    |   +---link
    |   +---message
    |   +---reward
    |   +---stationery
    |   \---upload
    +---pages
    |   +---letter
    |   |       letter.css
    |   |       letter.html
    |   |       letter.spec.ts
    |   |       letter.ts
    |   |
    |   +---links
    |   |       links.css
    |   |       links.html
    |   |       links.spec.ts
    |   |       links.ts
    |   |
    |   \---not-found
    |           not-found.css
    |           not-found.html
    |           not-found.spec.ts
    |           not-found.ts
    |
    +---services
    |   +---letter
    |   +---settings
    |   +---sound
    |   +---storage
    |   +---upload
    |   \---visit
    +---shared
    |   +---constants
    |   |       app.constants.ts
    |   |       routes.ts
    |   |       storage-keys.ts
    |   |
    |   +---enums
    |   |       animation-state.enum.ts
    |   |       reward-type.enum.ts
    |   |       sound.enum.ts
    |   |       stationery-theme.enum.ts
    |   |
    |   +---interfaces
    |   \---types
    \---utils
        +---extensions
        +---helpers
        \---validators
```

```text
public/
|   favicon.ico
|
+---branding
|   +---app-icon
|   +---favicon
|   \---logo
+---data
|   +---configuration
|   |       color-tokens.json
|   |       colors.json
|   |       envelopes.json
|   |       papers.json
|   |       rewards.json
|   |       settings.json
|   |       stationery.json
|   |
|   +---content
|   |       links.json
|   |       messages.json
|   |
|   \---design-system
|           animation.json
|           breakpoints.json
|           colors.json
|           layers.json
|           radius.json
|           shadows.json
|           spacing.json
|
+---decorations
|   +---butterflies
|   |       butterfly-01.svg
|   |       butterfly-02.svg
|   |       butterfly-03.svg
|   |
|   +---hearts
|   |       heart-01.svg
|   |       heart-02.svg
|   |       heart-03.svg
|   |       heart-04.svg
|   |
|   +---petals
|   |       petal-01.svg
|   |       petal-02.svg
|   |       petal-03.svg
|   |       petal-04.svg
|   |       petal-05.svg
|   |       petal-06.svg
|   |       petal-07.svg
|   |       petal-08.svg
|   |
|   +---sparkles
|   |       sparkle-01.svg
|   |       sparkle-02.svg
|   |       sparkle-03.svg
|   |       sparkle-04.svg
|   |       sparkle-05.svg
|   |
|   +---stickers
|   +---tulips
|   |       tulip-lavender.svg
|   |       tulip-pink.svg
|   |       tulip-purple.svg
|   |       tulip-white.svg
|   |
|   \---wax-seals
|           red-wax-seal.zip
|           wax-seal-gold.zip
|           wax-seal-pink.zip
|
+---envelope
|   +---textures
|   \---themes
+---fonts
|   +---aref-ruqaa
|   |       ArefRuqaaInk-Bold.ttf
|   |       ArefRuqaaInk-Regular.ttf
|   |       OFL.txt
|   |
|   \---poppins
|           OFL.txt
|           Poppins,Work_Sans.zip
|           Poppins-Black.ttf
|           Poppins-BlackItalic.ttf
|           Poppins-Bold.ttf
|           Poppins-BoldItalic.ttf
|           Poppins-ExtraBold.ttf
|           Poppins-ExtraBoldItalic.ttf
|           Poppins-ExtraLight.ttf
|           Poppins-ExtraLightItalic.ttf
|           Poppins-Italic.ttf
|           Poppins-Light.ttf
|           Poppins-LightItalic.ttf
|           Poppins-Medium.ttf
|           Poppins-MediumItalic.ttf
|           Poppins-Regular.ttf
|           Poppins-SemiBold.ttf
|           Poppins-SemiBoldItalic.ttf
|           Poppins-Thin.ttf
|           Poppins-ThinItalic.ttf
|
+---icons
|   \---outline
|           add-photo.svg
|           camera.svg
|           check.svg
|           chevron-left.svg
|           chevron-right.svg
|           close.svg
|           envelope.svg
|           heart.svg
|           image.svg
|           link.svg
|           loading.svg
|           replay.svg
|           save.svg
|           sparkles.svg
|           upload.svg
|
+---paper
|   +---textures
|   \---themes
\---sounds
    +---ambient
    |       floating-ambient.mp3
    |
    +---buttons
    |       save-letter.mp3
    |
    +---envelope
    |       envelope-fly.mp3
    |       envelope-open.mp3
    |
    +---paper
    |       letter-close.mp3
    |       paper-slide.mp3
    |
    +---rewards
    |       reward.mp3
    |
    \---upload
            image-selected.mp3
            upload-start.mp3
            upload-success.mp3
```

# 3. Components

## App

- Location: `src/app`
- Class: `App`
- Selector: `app-root`
- Purpose: Bootstrapped root component. Its template renders `<app-app-layout>`.
- Parent: Bootstrapped by `src/main.ts`.
- Children: `AppLayout`
- Inputs: none.
- Outputs: none.
- Signals: `title = signal('Bloom_Again_Nemo')`
- Services Used: none.
- Current State: Root template contains only `<app-app-layout></app-app-layout>`.

## AppLayout

- Location: `src/app/layout/app-layout`
- Class: `AppLayout`
- Selector: `app-app-layout`
- Purpose: Defines the full-screen layout container and named layers.
- Parent: `App`
- Children: `FlowersBackgroundComponent`, `EnvelopeComponent`
- Inputs: none.
- Outputs: none.
- Signals: `isEnvelopeOpen = signal(false)`
- Services Used: none.
- Current State: Clicking `<app-envelope>` calls `toggleEnvelope()`, which flips `isEnvelopeOpen`.

## FlowersBackgroundComponent

- Location: `src/app/components/background/flowers-background`
- Class: `FlowersBackgroundComponent`
- Selector: `app-flowers-background`
- Purpose: Renders flower, grass, night, light, and leaf markup for the background animation.
- Parent: `AppLayout`
- Children: none.
- Inputs: none.
- Outputs: none.
- Signals: none.
- Services Used: none.
- Current State: Static Angular component; motion is implemented in `flowers-background.css`.

## EnvelopeComponent

- Location: `src/app/components/envelope`
- Class: `EnvelopeComponent`
- Selector: `app-envelope`
- Purpose: Renders an envelope with flap, pocket, and a nested letter.
- Parent: `AppLayout`
- Children: `LetterComponent`
- Inputs: `@Input() isOpen = false`
- Outputs: none.
- Signals: none.
- Services Used: none.
- Current State: Template applies `[class.open]="isOpen"` and `[class.close]="!isOpen"` to `#envelope`.

## LetterComponent

- Location: `src/app/components/letter`
- Class: `LetterComponent`
- Selector: `app-letter`
- Purpose: Renders the letter body, message area, and two buttons.
- Parent: `EnvelopeComponent`
- Children: none.
- Inputs: none.
- Outputs: none.
- Signals: none.
- Services Used: none.
- Current State: Template has static message text, a `Kaydet` button, and a `Kapat` button. No click handlers are bound.

## Letter Page Component

- Location: `src/app/pages/letter`
- Class: `Letter`
- Selector: `app-letter`
- Purpose: Routed page component for `messages/:id`.
- Parent: Referenced by `app.routes.ts`; no current `<router-outlet>` exists in the rendered app templates.
- Children: none.
- Inputs: none.
- Outputs: none.
- Signals: none.
- Services Used: none.
- Current State: Template contains `<p>letter works!</p>`. CSS file is empty.

## Links Page Component

- Location: `src/app/pages/links`
- Class: `Links`
- Selector: `app-links`
- Purpose: Routed page component for `links`.
- Parent: Referenced by `app.routes.ts`; no current `<router-outlet>` exists in the rendered app templates.
- Children: none.
- Inputs: none.
- Outputs: none.
- Signals: none.
- Services Used: none.
- Current State: Template contains `<p>links works!</p>`. CSS file is empty.

## NotFound Page Component

- Location: `src/app/pages/not-found`
- Class: `NotFound`
- Selector: `app-not-found`
- Purpose: Routed page component for wildcard routes.
- Parent: Referenced by `app.routes.ts`; no current `<router-outlet>` exists in the rendered app templates.
- Children: none.
- Inputs: none.
- Outputs: none.
- Signals: none.
- Services Used: none.
- Current State: Template contains `<p>not-found works!</p>`. CSS file is empty.

# 4. Pages

| Route          | Component                                              | Purpose                                             |
| -------------- | ------------------------------------------------------ | --------------------------------------------------- |
| ``             | Redirects to `messages/1`                              | Empty path redirect with `pathMatch: 'full'`.       |
| `messages/:id` | `Letter` from `src/app/pages/letter/letter.ts`         | Current template renders `<p>letter works!</p>`.    |
| `links`        | `Links` from `src/app/pages/links/links.ts`            | Current template renders `<p>links works!</p>`.     |
| `**`           | `NotFound` from `src/app/pages/not-found/not-found.ts` | Current template renders `<p>not-found works!</p>`. |

# 5. Layout

- App:
  - `src/app/app.html` renders only `<app-app-layout></app-app-layout>`.
  - `src/app/app.css` defines global element reset rules, `html/body` size, body background/font/overflow, and `.app-shell`.
- Layout:
  - `AppLayout` renders `<div class="layout-container">`.
  - `.layout-container` and its direct child `div`s are absolutely positioned with `inset: 0`.
  - `.layout-container` uses `overflow: hidden`.
- Background Layer:
  - `#background-layer` contains `<app-flowers-background>`.
- Envelope Layer:
  - `#envelope-layer` contains `<app-envelope [isOpen]="isEnvelopeOpen()" (click)="toggleEnvelope()">`.
- Letter Layer:
  - `#letter-layer` exists as an empty `div`.
- Upload Layer:
  - `#upload-layer` exists as an empty `div`.
- Other Layers:
  - `#effects-layer`, `#dialog-layer`, and `#reward-layer` exist as empty `div`s.

# 6. Services

No Angular service classes were found. No `@Injectable`, `inject(...)`, constructors, or service class files were found under `src/app`.

Existing empty service directories:

| Directory                   | Purpose           | Methods | Used By     |
| --------------------------- | ----------------- | ------- | ----------- |
| `src/app/services/letter`   | No files present. | none.   | none found. |
| `src/app/services/settings` | No files present. | none.   | none found. |
| `src/app/services/sound`    | No files present. | none.   | none found. |
| `src/app/services/storage`  | No files present. | none.   | none found. |
| `src/app/services/upload`   | No files present. | none.   | none found. |
| `src/app/services/visit`    | No files present. | none.   | none found. |

# 7. Models

No TypeScript interfaces were found.

Existing empty model directories:

- `src/app/models/link`
- `src/app/models/message`
- `src/app/models/reward`
- `src/app/models/stationery`
- `src/app/models/upload`

Existing enums:

- `AnimationState` in `src/app/shared/enums/animation-state.enum.ts`:
  - `Hidden = 'hidden'`
  - `Entering = 'entering'`
  - `Idle = 'idle'`
  - `Opening = 'opening'`
  - `Opened = 'opened'`
  - `Closing = 'closing'`
  - `Closed = 'closed'`
- `RewardType` in `src/app/shared/enums/reward-type.enum.ts`:
  - `Petal`
  - `Butterfly`
  - `GoldenSeal`
  - `Sparkle`
  - `HiddenQuote`
  - `SpecialAnimation`
- `Sound` in `src/app/shared/enums/sound.enum.ts`:
  - `EnvelopeFly`
  - `EnvelopeOpen`
  - `PaperSlide`
  - `ButtonClick`
  - `Save`
  - `Upload`
  - `Success`
  - `Reward`
- `StationeryTheme` in `src/app/shared/enums/stationery-theme.enum.ts`:
  - `VioletDream`
  - `RoseGarden`
  - `TurkishTulip`
  - `LavenderSky`
  - `CottonCandy`
  - `Sakura`
  - `Orchid`
  - `PurpleBloom`
  - `Moonlight`
  - `GoldenLetter`

# 8. Assets Structure

There is no `public/assets` directory. Static files are stored directly under `public/`.

- Fonts:
  - `public/fonts/aref-ruqaa/`
    - `ArefRuqaaInk-Bold.ttf`
    - `ArefRuqaaInk-Regular.ttf`
    - `OFL.txt`
  - `public/fonts/poppins/`
    - Poppins `.ttf` files for Black, Bold, ExtraBold, ExtraLight, Italic, Light, Medium, Regular, SemiBold, Thin, and italic variants.
    - `Poppins,Work_Sans.zip`
    - `OFL.txt`
- Icons:
  - `public/icons/outline/`
  - SVG files: `add-photo`, `camera`, `check`, `chevron-left`, `chevron-right`, `close`, `envelope`, `heart`, `image`, `link`, `loading`, `replay`, `save`, `sparkles`, `upload`.
- Images / Decorative SVGs:
  - `public/favicon.ico`
  - `public/decorations/butterflies/`: 3 SVGs.
  - `public/decorations/hearts/`: 4 SVGs.
  - `public/decorations/petals/`: 8 SVGs.
  - `public/decorations/sparkles/`: 5 SVGs.
  - `public/decorations/tulips/`: 4 SVGs.
  - `public/decorations/wax-seals/`: 3 ZIP files.
- Stationery:
  - `public/paper/textures/` is empty.
  - `public/paper/themes/` is empty.
  - `public/envelope/textures/` is empty.
  - `public/envelope/themes/` is empty.
  - `public/data/configuration/stationery.json` contains stationery entries.
- Audio:
  - `public/sounds/ambient/floating-ambient.mp3`
  - `public/sounds/buttons/save-letter.mp3`
  - `public/sounds/envelope/envelope-fly.mp3`
  - `public/sounds/envelope/envelope-open.mp3`
  - `public/sounds/paper/letter-close.mp3`
  - `public/sounds/paper/paper-slide.mp3`
  - `public/sounds/rewards/reward.mp3`
  - `public/sounds/upload/image-selected.mp3`
  - `public/sounds/upload/upload-start.mp3`
  - `public/sounds/upload/upload-success.mp3`
- Animations:
  - No animation asset files were found under `public/`.
  - `public/data/design-system/animation.json` contains timing values.
  - `src/app/components/background/flowers-background/flowers-background.css` contains CSS keyframes.

# 9. Data Structure

## `public/data/configuration`

### `colors.json`

- Purpose documented in project: none.
- Current content: grouped color palette.
- Current schema:
  - Object keys: `primary`, `secondary`, `background`, `accent`, `neutral`, `status`.
  - Each group is an object mapping color names to hex strings.
- Example object:

```json
{
  "primary": {
    "violet": "#7C4DFF",
    "lavender": "#B388FF",
    "deepViolet": "#5E35B1"
  }
}
```

### `color-tokens.json`

- Purpose documented in project: none.
- Current content: semantic token names mapped to color names.
- Current schema:
  - Object mapping token names to strings.
- Example object:

```json
{
  "appBackground": "warmWhite",
  "letterBackground": "snow",
  "buttonPrimary": "violet"
}
```

### `stationery.json`

- Purpose documented in project: none.
- Current content: stationery list.
- Current schema:
  - Object with `stationery` array.
  - Each array item has `id`, `name`, `theme`, and `mood`.
- Example object:

```json
{
  "id": 1,
  "name": "Violet Dream",
  "theme": "violet-dream",
  "mood": "Romantic"
}
```

### `envelopes.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

### `papers.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

### `rewards.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

### `settings.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

## `public/data/content`

### `links.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

### `messages.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

## `public/data/design-system`

### `animation.json`

- Purpose documented in project: none.
- Current content: timing names mapped to numbers.
- Current schema:
  - Object with numeric values: `instant`, `fast`, `normal`, `slow`, `verySlow`, `cinematic`.
- Example object:

```json
{
  "instant": 100,
  "fast": 200,
  "normal": 350
}
```

### `breakpoints.json`

- Purpose documented in project: none.
- Current content: breakpoint names mapped to numbers.
- Current schema:
  - Object with numeric values: `mobileSmall`, `mobile`, `mobileLarge`, `tablet`, `desktop`.
- Example object:

```json
{
  "mobileSmall": 360,
  "mobile": 390,
  "mobileLarge": 430
}
```

### `colors.json`

- Purpose documented in project: none.
- Current schema: none; file length is `0` bytes.
- Example object: none.

### `layers.json`

- Purpose documented in project: none.
- Current content: layer names mapped to numbers.
- Current schema:
  - Object with numeric values: `background`, `flowers`, `particles`, `envelope`, `letter`, `upload`, `dialog`, `loading`.
- Example object:

```json
{
  "background": 1,
  "flowers": 10,
  "particles": 20
}
```

### `radius.json`

- Purpose documented in project: none.
- Current content: radius names mapped to numbers or strings.
- Current schema:
  - Object with values for `none`, `small`, `medium`, `large`, `xlarge`, `pill`, `circle`.
- Example object:

```json
{
  "none": 0,
  "small": 6,
  "circle": "50%"
}
```

### `shadows.json`

- Purpose documented in project: none.
- Current content: shadow names mapped to CSS box-shadow strings.
- Current schema:
  - Object with string values: `soft`, `medium`, `large`, `glow`.
- Example object:

```json
{
  "soft": "0 6px 20px rgba(0,0,0,.08)",
  "medium": "0 10px 30px rgba(0,0,0,.12)"
}
```

### `spacing.json`

- Purpose documented in project: none.
- Current content: spacing names mapped to numbers.
- Current schema:
  - Object with numeric values: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `section`, `page`.
- Example object:

```json
{
  "xs": 4,
  "sm": 8,
  "md": 16
}
```

# 10. Color System

- `public/data/configuration/colors.json`:
  - Defines named colors grouped under `primary`, `secondary`, `background`, `accent`, `neutral`, and `status`.
- `public/data/configuration/color-tokens.json`:
  - Maps semantic token names to color names.
  - Example: `buttonPrimary` maps to `violet`.
  - Example: `bodyText` maps to `dark`.
- `public/data/configuration/stationery.json`:
  - Defines stationery entries with `id`, `name`, `theme`, and `mood`.
  - Theme values include `violet-dream`, `rose-garden`, `turkish-tulip`, `lavender-sky`, `cotton-candy`, `sakura`, `orchid`, `purple-bloom`, `moonlight`, `golden-memory`, `watercolor`, and `vintage-letter`.
- Relationship currently present:
  - `color-tokens.json` references color names that exist in `colors.json`.
  - `stationery.json` does not contain color keys.
  - No TypeScript, HTML, or CSS file currently imports or fetches these JSON files.

# 11. Animation System

## Flowers

- Location: `src/app/components/background/flowers-background/flowers-background.css`
- Implementation: CSS animations and keyframes.
- Template structures include `.night`, `.flowers`, `.flower`, `.flower__leafs`, `.flower__line`, `.flower__light`, `.growing-grass`, `.grow-ans`, `.long-g`, and leaf elements.
- Keyframes present:
  - `blooming-flower`
  - `blooming-leaf-left`
  - `blooming-leaf-right`
  - `flower__g-fr-ans`
  - `flower__g-fr-leaft-ans-1`
  - `flower__g-fr-leaft-ans-5`
  - `flower__g-fr-leaft-ans-6`
  - `flower__g-fr-leaft-ans-7`
  - `flower__g-fr-leaft-ans-8`
  - `flower__g-front__leaf-ans`
  - `flower__g-front__leaf-left-ans`
  - `flower__g-front__leaf-left-ans-2`
  - `flower__g-front-ans`
  - `flower-g-long-ans`
  - `flower-g-right-ans`
  - `flower-g-right-ans--2`
  - `grow-ans`
  - `grow-flower-tree`
  - `growing-grass-ans`
  - `growing-grass-ans--1`
  - `growing-grass-ans--2`
  - `growing-grass-ans--3`
  - `growing-grass-ans--4`
  - `growing-grass-ans--5`
  - `growing-grass-ans--6`
  - `growing-grass-ans--7`
  - `growing-grass-ans--8`
  - `leaf-ans-1`
  - `leaf-ans-2`
  - `leaf-ans-3`
  - `light-ans`
  - `moving-flower-1`
  - `moving-flower-2`
  - `moving-flower-3`
  - `moving-grass`
  - `moving-grass--2`
- A `.container *` CSS rule sets animation play state to paused, but no `.container` element exists in `flowers-background.html`.

## Envelope

- Location: `src/app/components/envelope/envelope.css`
- Current state input: `EnvelopeComponent.isOpen`.
- Template classes:
  - `[class.open]="isOpen"`
  - `[class.close]="!isOpen"`
- Open state CSS:
  - `.open .flap` uses `transform: rotateX(180deg)` and `z-index: 1`.
  - `.open .letter` uses `transform: translateY(-100px)` and `z-index: 2`.
- Close state CSS:
  - `.close .flap` uses `transform: rotateX(0deg)` and `z-index: 5`.
  - `.close .letter` uses `transform: translateY(0px)` and `z-index: 1`.

## Letter

- Location: `src/app/components/letter/letter.css`
- Current animation behavior:
  - `.save-btn` and `.close-btn` have `transition: 0.25s`.
  - Hover state applies `transform: translateY(-2px)`.
- No Angular animation trigger exists for the letter component.

## Current Animation States

- `src/app/shared/enums/animation-state.enum.ts` defines:
  - `hidden`
  - `entering`
  - `idle`
  - `opening`
  - `opened`
  - `closing`
  - `closed`
- No current import usage of `AnimationState` was found.
- The current envelope runtime state is represented by `AppLayout.isEnvelopeOpen`, a boolean signal initialized to `false`.

# 12. Current Progress

- No phase tracking file or explicit phase status list was found.
- Completed items visible in current files:
  - Angular CLI app scaffold exists.
  - Standalone root app bootstrap exists.
  - Router configuration exists.
  - Full-screen app layout exists.
  - Background flower component exists.
  - Envelope component exists.
  - Reusable letter component exists.
  - Routed page component folders exist for letter, links, and not-found pages.
  - Constants exist for app settings, routes, and storage keys.
  - Enums exist for animation state, reward type, sound, and stationery theme.
  - Static asset folders and files exist under `public/`.
  - Some configuration/design-system JSON files contain data.
- Placeholder or empty items visible in current files:
  - `src/app/animations` is empty.
  - `src/app/guards` is empty.
  - `src/app/shared/interfaces` is empty.
  - `src/app/shared/types` is empty.
  - `src/app/utils/extensions` is empty.
  - `src/app/utils/helpers` is empty.
  - `src/app/utils/validators` is empty.
  - All `src/app/services/*` folders are empty.
  - All `src/app/models/*` folders are empty.
  - `src/app/pages/letter/letter.html` contains generated text: `<p>letter works!</p>`.
  - `src/app/pages/links/links.html` contains generated text: `<p>links works!</p>`.
  - `src/app/pages/not-found/not-found.html` contains generated text: `<p>not-found works!</p>`.
  - Page CSS files for letter, links, and not-found are empty.
  - Zero-byte JSON files exist in `public/data`.
  - Empty asset directories exist under `public/branding`, `public/decorations/stickers`, `public/envelope`, and `public/paper`.

# 13. TODO

- TODO comments:
  - No `TODO` comments were found in `src`, `public`, `README.md`, `package.json`, or `angular.json`.
- Other searched markers:
  - No `FIXME`, `TBD`, `stub`, `throw new Error`, or `console.log` markers were found.
  - The generated `works!` templates were found in routed pages.
- Unfinished components or placeholders visible from files:
  - `Letter` page template: `<p>letter works!</p>`.
  - `Links` page template: `<p>links works!</p>`.
  - `NotFound` page template: `<p>not-found works!</p>`.
  - `LetterComponent` has static message text and buttons with no bound events.
  - Empty layers exist in `AppLayout`: `effects-layer`, `letter-layer`, `upload-layer`, `dialog-layer`, and `reward-layer`.

# 14. External Libraries

## Direct source or config references found

- `@angular/core`
  - Used for `Component`, `signal`, `ApplicationConfig`, and `provideBrowserGlobalErrorListeners`.
- `@angular/platform-browser`
  - Used for `bootstrapApplication`.
- `@angular/router`
  - Used for `Routes` and `provideRouter`.
- `@angular/core/testing`
  - Used in spec files for `TestBed` and `ComponentFixture`.
- `@angular/build`
  - Used in `angular.json` builders.
- `tailwindcss`
  - Imported in `src/styles.css`.
- `@tailwindcss/postcss`
  - Configured in `.postcssrc.json`.
- `vitest`
  - Referenced through `tsconfig.spec.json` type `vitest/globals`.

## Direct dependencies declared in `package.json`

- `@angular/common`: range `^21.2.0`, installed `21.2.17`
- `@angular/compiler`: range `^21.2.0`, installed `21.2.17`
- `@angular/core`: range `^21.2.0`, installed `21.2.17`
- `@angular/forms`: range `^21.2.0`, installed `21.2.17`
- `@angular/platform-browser`: range `^21.2.0`, installed `21.2.17`
- `@angular/router`: range `^21.2.0`, installed `21.2.17`
- `rxjs`: range `~7.8.0`, installed `7.8.2`
- `tslib`: range `^2.3.0`, installed `2.8.1`

## Dev dependencies declared in `package.json`

- `@angular/build`: range `^21.2.3`, installed `21.2.16`
- `@angular/cli`: range `^21.2.3`, installed `21.2.16`
- `@angular/compiler-cli`: range `^21.2.0`, installed `21.2.17`
- `@tailwindcss/postcss`: range `^4.3.1`, installed `4.3.1`
- `jsdom`: range `^28.0.0`, installed `28.1.0`
- `postcss`: range `^8.5.15`, installed `8.5.15`
- `prettier`: range `^3.8.1`, installed `3.8.4`
- `tailwindcss`: range `^4.3.1`, installed `4.3.1`
- `typescript`: range `~5.9.2`, installed `5.9.3`
- `vitest`: range `^4.0.8`, installed `4.1.9`

# 15. Known Issues

- No `<router-outlet>` exists in the rendered templates, while routes are configured in `app.routes.ts`.
- `src/app/components/background/flowers-background/flowers-background.spec.ts` imports `FlowersBackground`, but `flowers-background.ts` exports `FlowersBackgroundComponent`.
- `src/app/components/envelope/envelope.spec.ts` imports `Envelope`, but `envelope.ts` exports `EnvelopeComponent`.
- `src/app/components/letter/letter.spec.ts` imports `Letter`, but `letter.ts` exports `LetterComponent`.
- `src/app/app.spec.ts` expects an `h1` containing `Hello, Bloom_Again_Nemo`, but `src/app/app.html` contains only `<app-app-layout></app-app-layout>`.
- `src/app/components/letter/letter.ts` and `src/app/pages/letter/letter.ts` both declare selector `app-letter`.
- These JSON files are zero bytes:
  - `public/data/configuration/envelopes.json`
  - `public/data/configuration/papers.json`
  - `public/data/configuration/rewards.json`
  - `public/data/configuration/settings.json`
  - `public/data/content/links.json`
  - `public/data/content/messages.json`
  - `public/data/design-system/colors.json`
- `src/index.html` contains non-ASCII mojibake text in the `<title>` and description metadata.
- `src/app/components/letter/letter.html` contains non-ASCII mojibake text in `.message-text`.
- `src/app/components/background/flowers-background/flowers-background.css` contains a `.container *` animation-pause rule, but `flowers-background.html` does not contain a `.container` element.
