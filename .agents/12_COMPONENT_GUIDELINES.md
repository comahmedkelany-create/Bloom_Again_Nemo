# Bloom Again, Nemo

# Component Guidelines

> This document defines the responsibilities, ownership rules, communication patterns, and architectural constraints for all Angular components in Bloom Again, Nemo.
>
> Every component must follow these guidelines.

---

# Document Information

Document

12_COMPONENT_GUIDELINES.md

Status

Living Document

Authority

High

Depends On

PROJECT_VISION.md

PROJECT_ARCHITECTURE.md

DESIGN_SYSTEM.md

Referenced By

SERVICES_PLAN.md

TASKS.md

---

# Purpose

Components are the building blocks of the user experience.

A component should represent a single concept.

Examples:

Envelope

Letter

Flower Scene

Upload Dialog

Reward Card

A component should never represent multiple unrelated concepts.

---

# Core Principle

# One Component = One Responsibility

Every component owns exactly one domain.

Good

EnvelopeComponent

Responsible for:

- displaying the envelope
- opening animation
- closing animation

Bad

EnvelopeComponent

Responsible for:

- envelope
- message loading
- upload logic
- reward logic
- settings management

---

# Component Categories

The application contains four categories of components.

---

## Layout Components

Purpose

Orchestrate the page.

Examples

AppLayoutComponent

Future Page Layouts

Responsibilities

- state ownership
- orchestration
- routing integration
- coordination

Should NOT

- contain business logic
- load content directly
- contain animation implementation

---

## Experience Components

Purpose

Represent major user-facing experiences.

Examples

EnvelopeComponent

LetterComponent

FlowersBackgroundComponent

UploadComponent

RewardComponent

Responsibilities

Display and interaction.

Should NOT

Contain unrelated domains.

---

## UI Components

Purpose

Reusable visual building blocks.

Examples

Button

Card

Modal

Tooltip

Progress Indicator

Future components may be added here.

Responsibilities

Presentation only.

---

## Utility Components

Purpose

Support larger systems.

Examples

Particle Layer

Floating Decorations

Seasonal Decorations

Animation Helpers

These components should remain lightweight.

---

# State Ownership

The most important architectural rule.

Parents own state.

Children receive state.

---

Good

```text
AppLayout

↓

EnvelopeComponent

↓

LetterComponent
```

AppLayout owns:

```ts
isEnvelopeOpen;

currentMessage;

currentTheme;
```

EnvelopeComponent receives:

```ts
@Input()
isOpen
```

LetterComponent receives:

```ts
@Input()
message

@Input()
theme
```

---

Bad

EnvelopeComponent modifies AppLayout state.

LetterComponent directly controls EnvelopeComponent.

Children should never manage parent state.

---

# Inputs

Inputs are the preferred way to provide data.

Examples

```ts
@Input()
message!: Message;

@Input()
theme!: StationeryTheme;

@Input()
isOpen = false;
```

Inputs should be:

- typed
- predictable
- documented

Avoid excessive inputs.

If a component requires many inputs, reconsider its design.

---

# Outputs

Outputs communicate events upward.

Examples

```ts
@Output()
opened = new EventEmitter<void>();

@Output()
closed = new EventEmitter<void>();

@Output()
uploadCompleted =
new EventEmitter<string>();
```

Outputs describe events.

They do not contain business logic.

---

# Services

Components consume services.

Services should not consume components.

Good

```text
Component

↓

Service

↓

Data
```

Bad

```text
Service

↓

Component
```

Components depend on services.

Never the reverse.

---

# Component Communication

Preferred communication order.

Level 1

Parent → Child

Using Inputs.

---

Level 2

Child → Parent

Using Outputs.

---

Level 3

Shared Service

Used only when necessary.

Examples

SettingsService

ThemeService

RewardService

---

Avoid direct component references whenever possible.

---

# Smart vs Dumb Components

The project intentionally favors dumb components.

---

## Smart Components

Examples

AppLayout

Future Page Components

Responsibilities

- orchestration
- state ownership
- service interaction

---

## Dumb Components

Examples

EnvelopeComponent

LetterComponent

Button Components

Responsibilities

- rendering
- interaction
- animation

No business logic.

---

# Current Component Architecture

```text
AppLayout
│
├── FlowersBackgroundComponent
│
├── EnvelopeComponent
│
├── LetterComponent
│
├── UploadComponent
│
└── RewardComponent
```

This hierarchy is considered the target architecture.

---

# Envelope Component

Purpose

Display the envelope.

Owns

- opening animation
- closing animation
- floating animation

Does Not Own

- message content
- stationery
- uploads
- rewards
- routing

Inputs

```ts
isOpen;
```

Outputs

Future:

```ts
opened;

closed;
```

---

# Letter Component

Purpose

Display message content.

Owns

- typography
- stationery rendering
- content layout

Does Not Own

- envelope state
- routing
- uploads
- rewards

Inputs

```ts
message;

theme;
```

Outputs

Future:

```ts
saveRequested;

closeRequested;
```

---

# Flowers Background Component

Purpose

Display the environment.

Owns

- flowers
- grass
- sky
- particles

Does Not Own

- envelope
- message
- uploads

This component should remain independent.

---

# Upload Component

Purpose

Allow visitor participation.

Owns

- image selection
- preview
- validation UI

Does Not Own

- storage implementation
- rewards
- routing

Storage logic belongs in services.

---

# Reward Component

Purpose

Display rewards.

Owns

- reward presentation
- reward animations

Does Not Own

- reward calculations

Those belong to RewardService.

---

# Component Folder Structure

Recommended structure

```text
components/

├── envelope/
│
├── letter/
│
├── flowers-background/
│
├── upload/
│
├── reward/
│
└── shared/
```

Components should be grouped by domain.

Not by file type.

---

# File Size Guidelines

When a component becomes too large:

Extract.

Recommended limits

Template

~300 lines

Styles

~500 lines

Component Class

~300 lines

These are guidelines, not strict rules.

---

# Reusability

Do not create reusable components prematurely.

Create reusable components only when:

- duplication exists
- reuse is proven
- responsibilities are clear

Avoid speculative abstraction.

---

# Performance

Components should favor clarity first.

Optimization should occur only when necessary.

Avoid:

Manual DOM manipulation.

Direct element queries.

Complex lifecycle hacks.

Prefer Angular patterns.

---

# Signals

Signals are preferred for local state.

Examples

```ts
isOpen = signal(false);

currentTheme = signal('lavender');
```

Signals improve predictability and readability.

Use them when appropriate.

---

# Dependency Rules

Allowed

```text
Layout

↓

Experience Components

↓

UI Components
```

Not Allowed

```text
UI Components

↓

Layout
```

Dependencies should flow downward.

Never upward.

---

# Documentation Requirements

Every major component should document:

Purpose

Inputs

Outputs

Owned State

Dependencies

Future contributors should understand a component quickly.

---

# Final Statement

Components are not folders.

Components are responsibilities.

A component is successful when its purpose can be explained in a single sentence.

If a component requires multiple sentences to explain its responsibility, it is likely doing too much and should be reconsidered.
