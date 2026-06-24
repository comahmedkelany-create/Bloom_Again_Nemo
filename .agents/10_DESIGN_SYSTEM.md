# Bloom Again, Nemo

# Design System

> This document defines the complete visual language of Bloom Again, Nemo.
>
> Every visual element in the application must follow this document.
>
> Components consume the design system.
> They never redefine it.

---

# Document Information

Document

10_DESIGN_SYSTEM.md

Status

Living Document

Authority

High

Depends On

PROJECT_VISION.md

Referenced By

COMPONENT_GUIDELINES.md

---

# Purpose

The Design System exists to ensure visual consistency across the entire application.

It provides a shared language for:

- Colors
- Typography
- Spacing
- Layers
- Shadows
- Motion
- Components

Every UI element should feel like it belongs to the same handcrafted experience.

---

# Design Principles

The visual language follows these principles.

## Calm

The interface should never feel loud.

---

## Elegant

Avoid visual noise.

Every decoration has a purpose.

---

## Organic

Nothing should appear mechanical.

Soft curves are preferred over sharp corners.

Natural motion is preferred over rigid movement.

---

## Romantic

The project should evoke warmth rather than luxury.

The emotional tone is more important than realism.

---

## Timeless

Avoid trendy UI styles.

The interface should still look beautiful years from now.

---

# Design Tokens

No component should contain magic numbers.

Everything should originate from reusable tokens.

Examples:

Colors

Spacing

Border Radius

Shadows

Animation Duration

Typography

Opacity

Layers

---

# Color System

The application uses a layered color architecture.

```
Raw Colors
        ↓
Color Tokens
        ↓
Semantic Colors
        ↓
Components
```

Components never reference raw colors directly.

---

## Raw Colors

Defined in:

```
public/data/configuration/colors.json
```

Contains the project's complete color palette.

No component should directly reference this file.

---

## Color Tokens

Defined in:

```
public/data/configuration/color-tokens.json
```

Examples

- primary
- secondary
- surface
- accent
- success
- warning
- error

Tokens describe meaning.

Not appearance.

---

## Semantic Colors

Semantic colors describe purpose.

Examples

Background

Surface

Paper

Envelope

Button

Text

Border

Flower

Sky

Night

Gold

Silver

Seal

These semantic colors are resolved from color tokens.

---

# Theme System

Themes change the application's appearance without changing implementation.

Themes include:

Envelope

Paper

Flowers

Decorations

Buttons

Particles

Accent colors

Every theme should be selectable through configuration.

---

# Stationery Themes

Stationery themes define the appearance of the letter.

A stationery theme may include:

Paper texture

Border

Corner decoration

Wax seal

Illustrations

Watermark

Typography

Envelope palette

Each stationery theme is defined inside:

```
public/data/configuration/stationery.json
```

---

# Typography

Typography is divided into two domains.

## Interface Typography

Used for:

Buttons

Navigation

Dialogs

Labels

Settings

Characteristics

Clean

Modern

Readable

Consistent

---

## Letter Typography

Used only for emotional content.

Characteristics

Elegant

Comfortable

Expressive

Readable

The letter should feel handwritten without sacrificing readability.

---

# Spacing System

Spacing follows a consistent scale.

Recommended scale:

```
4

8

12

16

24

32

40

48

64

80
```

Components should avoid arbitrary spacing values.

---

# Border Radius

Rounded corners reinforce the handcrafted feeling.

Recommended scale:

Small

Medium

Large

Extra Large

Circular

Avoid inconsistent radius values.

---

# Shadows

Shadows should communicate depth.

Never decoration.

Levels:

None

Small

Medium

Large

Floating

Modal

Shadows should remain soft.

Never harsh.

---

# Layer System

The application uses a defined visual hierarchy.

```
Background

↓

Flowers

↓

Particles

↓

Envelope

↓

Letter

↓

Dialogs

↓

Notifications
```

Every component should belong to one layer.

---

# Iconography

Icons should feel lightweight.

Preferred characteristics:

Outline

Rounded

Minimal

Consistent stroke width

Avoid:

3D icons

Filled icon sets mixed with outline icons

Multiple icon styles

---

# Illustration Style

Illustrations should feel handcrafted.

Preferred:

Watercolor

Botanical

Paper textures

Soft gradients

Natural imperfections

Avoid:

Corporate illustrations

Flat business graphics

Aggressive geometric patterns

---

# Buttons

Buttons should communicate invitation.

Never urgency.

Preferred appearance:

Rounded corners

Soft colors

Comfortable padding

Subtle hover animation

Avoid:

Sharp edges

Aggressive shadows

Bright saturated colors

---

# Motion

Motion is part of the Design System.

Animations should use:

Ease In Out

Natural acceleration

Gentle overshoot where appropriate

Never:

Abrupt stopping

Linear movement

Fast bouncing

---

# Responsive Design

The application is mobile-first.

Primary target:

Modern smartphones.

Secondary targets:

Tablets

Desktop browsers

Large displays

The emotional experience should remain consistent across all devices.

---

# Accessibility

The Design System should support:

Readable contrast

Keyboard navigation

Reduced motion preferences

Semantic HTML

Scalable typography

Accessibility is considered part of visual quality.

---

# Consistency Rules

Every new UI element should answer:

Does it follow the color system?

Does it use design tokens?

Does it respect spacing?

Does it match typography?

Does it belong to the correct layer?

Does it support the emotional experience?

If any answer is "No", the implementation should be reconsidered.

---

# Final Statement

The Design System is not a collection of styles.

It is the visual language of Bloom Again, Nemo.

Every component, animation, illustration, and interaction should feel like part of the same carefully crafted world.
