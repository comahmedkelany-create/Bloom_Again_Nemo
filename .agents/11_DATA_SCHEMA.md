# Bloom Again, Nemo

# Data Schema

> This document defines every data source used by Bloom Again, Nemo.
>
> The application is configuration-driven.
>
> Code should interpret data.
>
> Data should never contain implementation.

---

# Document Information

Document

11_DATA_SCHEMA.md

Status

Living Document

Authority

High

Depends On

PROJECT_VISION.md

PROJECT_ARCHITECTURE.md

Referenced By

SERVICES_PLAN.md

COMPONENT_GUIDELINES.md

---

# Purpose

The project separates data into two major domains.

Configuration

↓

Controls application behavior.

Content

↓

Controls application information.

This separation is mandatory.

---

# Folder Structure

```
public/

└── data/

    ├── configuration/

    └── content/
```

Configuration and Content must never be mixed.

---

# Configuration

Configuration files define how the application behaves.

Examples include:

Application settings

Colors

Themes

Animations

Stationery

Tokens

Configuration should rarely change after deployment.

---

# Content

Content files define what the visitor experiences.

Examples include:

Messages

Rewards

Links

Localized text

Content should be editable without touching Angular code.

---

# Configuration Files

## settings.json

Purpose

Application-wide settings.

Examples

- Language
- Default Theme
- Sound Enabled
- Animation Speed
- Upload Limits
- Default Stationery
- Accessibility Options

Used By

SettingsService

---

## colors.json

Purpose

Contains the raw color palette.

Contains only hexadecimal color definitions.

No semantic meaning.

Used By

Theme Engine

---

## color-tokens.json

Purpose

Maps raw colors into semantic tokens.

Examples

Primary

Secondary

Surface

Accent

Text

Paper

Border

Used By

Theme Engine

Components

---

## stationery.json

Purpose

Defines every stationery theme available in the application.

Each stationery entry should contain:

Identifier

Display Name

Paper Theme

Envelope Theme

Decorations

Typography

Optional Assets

Stationery must remain data-driven.

Adding a new stationery theme should require editing only this file and related assets.

---

## animations.json

Purpose

Defines reusable animation configuration.

Examples

Durations

Delays

Easing

Particle Count

Envelope Entrance

Flower Bloom Timing

Letter Expansion

Used By

AnimationService

---

## layers.json

Purpose

Defines visual stacking order.

Examples

Background

Flowers

Envelope

Letter

Dialogs

Notifications

Avoid hardcoded z-index values inside components.

---

## typography.json

Purpose

Defines typography configuration.

Contains

Interface Fonts

Letter Fonts

Sizes

Weights

Line Heights

Responsive Scaling

---

## spacing.json

Purpose

Defines spacing tokens.

Examples

xs

sm

md

lg

xl

Components should consume spacing tokens rather than fixed pixel values.

---

# Content Files

## messages.json

Purpose

Contains every letter that can be displayed.

Messages should never be hardcoded inside Angular components.

Every message should be loaded from this file.

Recommended Structure

```

{
"messages": [

{
"id": 1,
"slug": "bloom-again",
"title": "...",
"stationery": "...",
"message": [
"...",
"..."
]
}

]
}

```

The message is stored as an array to preserve paragraph separation.

---

## links.json

Purpose

Maps QR codes and routes to messages.

Example

QR

↓

Slug

↓

Message

↓

Stationery

This prevents QR logic from being embedded in components.

---

## rewards.json

Purpose

Defines rewards available to returning visitors.

Examples

Butterflies

Golden flowers

Special stationery

Seasonal rewards

Reward configuration should remain data-driven.

---

## localization.json

Purpose

Contains interface translations.

UI language should never be hardcoded.

Current target language

Turkish

Future languages

Configuration-driven.

---

# Asset References

Configuration files may reference assets.

Examples

```

assets/images/

assets/icons/

assets/audio/

assets/stationery/

```

Configuration should reference assets by identifier rather than absolute implementation details whenever possible.

---

# Data Ownership

Each file owns exactly one domain.

| File              | Owns                    |
| ----------------- | ----------------------- |
| settings.json     | Application Settings    |
| colors.json       | Raw Colors              |
| color-tokens.json | Semantic Colors         |
| stationery.json   | Stationery Themes       |
| animations.json   | Animation Configuration |
| typography.json   | Typography              |
| spacing.json      | Layout Spacing          |
| layers.json       | Visual Layers           |
| messages.json     | Letters                 |
| links.json        | QR Mapping              |
| rewards.json      | Rewards                 |
| localization.json | Interface Text          |

No two files should own the same responsibility.

---

# Data Relationships

```

QR

↓

links.json

↓

messages.json

↓

stationery.json

↓

colors.json

↓

color-tokens.json

↓

Angular Components

```

This flow should remain consistent throughout the project.

---

# Validation Principles

Every JSON file should be considered external input.

Services are responsible for validation.

Components should assume validated data.

Invalid configuration should fail gracefully whenever possible.

---

# Future Expansion

The schema should support future additions without architectural changes.

Examples

Seasonal themes

Multiple envelope styles

Additional languages

Accessibility presets

Special events

Alternative flower scenes

Future data should extend the schema rather than replacing it.

---

# Final Statement

The Data Layer exists to separate content and configuration from implementation.

The more information that can be expressed through data rather than code, the more maintainable Bloom Again, Nemo becomes.

Components should display data.

Services should interpret data.

Configuration should define behavior.

Content should define emotion.
