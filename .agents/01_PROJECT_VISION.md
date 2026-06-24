# Bloom Again, Nemo

> **Project Constitution**
>
> This document is the highest-level design authority for the Bloom Again, Nemo project.
>
> Every future architectural decision, implementation decision, UI decision, animation decision, and AI-generated contribution must respect the principles defined here unless the project owner explicitly decides otherwise.

---

# Document Information

**Document Name**

PROJECT_VISION.md

**Project**

Bloom Again, Nemo

**Status**

Living Document

**Authority**

Highest

If another document contradicts this one, this document wins.

---

# Purpose

This document explains **why** Bloom Again, Nemo exists.

It does not describe implementation details.

It does not describe code.

It describes the philosophy behind every technical decision made inside the project.

A developer should be able to read this file before opening the codebase and understand exactly what kind of experience Bloom Again, Nemo is trying to create.

---

# Vision Statement

Bloom Again, Nemo is not a website.

Bloom Again, Nemo is not an application.

Bloom Again, Nemo is an interactive emotional experience.

Technology exists only to support emotion.

Every animation...

Every transition...

Every sound...

Every color...

Every interaction...

exists for one purpose:

To make someone feel loved.

If a feature is technically impressive but emotionally empty, it does not belong in this project.

Emotion always has higher priority than technology.

---

# Mission

The mission of Bloom Again, Nemo is to transform written messages into memorable experiences.

Instead of reading text on a screen, the visitor experiences a small story.

Flowers bloom.

An envelope arrives.

The envelope opens.

A handwritten letter slowly appears.

The visitor reads.

The visitor smiles.

The visitor keeps the memory.

The experience should feel closer to opening an old handwritten letter than browsing a modern website.

---

# Core Philosophy

The project follows one fundamental belief.

People rarely remember interfaces.

People remember feelings.

The user should never think:

"This website has beautiful animations."

Instead, the user should think:

"I'll never forget how this made me feel."

Every design decision should be evaluated against that principle.

---

# The Story Behind Bloom Again, Nemo

Bloom Again, Nemo was created as a deeply personal gift.

Its purpose is not commercial.

Its purpose is not social.

Its purpose is not educational.

It exists to preserve memories.

Every message represents a moment.

Every QR code represents a memory waiting to be reopened.

The project treats memories as living things.

Just like flowers...

they bloom again every time someone returns.

That idea inspired the name:

Bloom Again.

---

# Experience First

Most websites are built around content.

Bloom Again is built around experience.

Traditional website flow:

Open website.

Read.

Leave.

Bloom Again flow:

Arrive.

Observe.

Feel curious.

Interact.

Discover.

Read.

Smile.

Remember.

Only then leave.

Notice that reading the message is intentionally delayed.

Curiosity creates emotional investment.

The letter should feel earned.

---

# Emotional Goals

The experience should make the visitor feel:

• Curiosity

• Calmness

• Warmth

• Surprise

• Nostalgia

• Affection

• Comfort

Never:

• Stress

• Urgency

• Confusion

• Information overload

Every screen should feel peaceful.

Nothing should demand attention.

Instead, everything should gently invite interaction.

---

# Design Principle 1

Everything should feel alive.

Flowers move.

Light moves.

The envelope floats.

Particles drift.

Nothing should feel static.

The interface should appear to breathe.

Very small continuous motion is preferable to dramatic constant movement.

Calm motion is one of the project's strongest emotional tools.

---

# Design Principle 2

Nothing should happen instantly.

Instant changes feel mechanical.

Everything important deserves an animation.

Opening.

Closing.

Loading.

Saving.

Uploading.

Transitioning.

Even the smallest interactions should communicate physicality.

The project should feel tangible.

Not digital.

---

# Design Principle 3

The visitor should never see complexity.

Internally the project may contain hundreds of files.

The visitor should experience simplicity.

One envelope.

One letter.

One story.

Everything else remains invisible.

Complexity belongs in the architecture.

Simplicity belongs in the experience.

---

# Design Principle 4

Beauty should never compete with readability.

Animations exist to support content.

They never replace it.

The letter is always the emotional focus.

Everything else prepares the visitor for that moment.

---

# Design Philosophy

Bloom Again, Nemo is intentionally designed to feel timeless.

The interface should never follow short-lived design trends.

Glassmorphism.

Neumorphism.

Brutalism.

Any visual trend that exists only because it is fashionable should be avoided.

Instead, the project should resemble a carefully crafted physical object.

The visual inspiration comes from:

- handwritten letters
- premium stationery
- envelopes
- flowers
- gardens
- watercolor
- Turkish romance
- warm paper
- soft lighting

The project should never look like software.

It should look like a keepsake.

---

# Minimalism

Minimalism does not mean "few elements."

Minimalism means:

Every visible element has a purpose.

If an element does not improve emotion, usability, or storytelling, it should not exist.

The interface should always feel spacious.

Whitespace is part of the design.

Silence is part of the experience.

Motion is part of the storytelling.

---

# Color Philosophy

Colors are emotional tools.

Colors are never chosen randomly.

Every color belongs to a semantic system.

Never hardcode colors inside components.

Instead:

Configuration

↓

Color Tokens

↓

Theme

↓

Component

Components should never know actual hexadecimal values.

Components should only know semantic meaning.

Example:

Good

buttonPrimary

surfaceBackground

letterPaper

flowerAccent

Bad

#FF33AA

rgb(...)

magic color values

---

# Typography Philosophy

Typography should communicate personality.

Arabic letters should feel handwritten.

UI should feel clean and modern.

Therefore the project intentionally separates typography.

Arabic Message

↓

Handwritten Arabic Font

UI

↓

Modern Sans Serif

The visitor should immediately understand which text belongs to the interface and which belongs to the emotional content.

---

# Motion Philosophy

Motion is not decoration.

Motion communicates state.

Every animation must answer one question:

"What changed?"

Animations should never exist simply because they look impressive.

Good animation:

Envelope opening.

Paper sliding.

Flowers blooming.

Floating.

Bad animation:

Random spinning.

Continuous bouncing.

Unnecessary flashing.

Animations should always support the story.

---

# Sound Philosophy

Sound is optional.

Silence must always remain beautiful.

If sound is enabled, it should enhance immersion.

The project should never depend on sound.

Every important interaction must remain understandable without audio.

Audio should feel natural.

Examples:

Paper sliding.

Envelope opening.

Gentle wind.

Soft ambience.

Never:

Explosion sounds.

Notification sounds.

Mechanical clicks.

Everything should feel organic.

---

# Architecture Philosophy

The architecture exists to make future development predictable.

Every system should have exactly one responsibility.

One component.

One purpose.

One service.

One responsibility.

One configuration file.

One domain.

This principle appears repeatedly throughout the project.

It intentionally sacrifices convenience in exchange for long-term maintainability.

---

# Separation of Responsibilities

Presentation

Displays data.

Never loads data.

Business Logic

Makes decisions.

Never renders UI.

Configuration

Defines behavior.

Never contains application logic.

Content

Contains data.

Never contains implementation.

Animations

Describe movement.

Never describe business logic.

This separation is considered mandatory.

---

# Component Philosophy

Components are building blocks.

They should behave like physical objects.

Example:

EnvelopeComponent

Knows:

How an envelope looks.

How an envelope opens.

How an envelope closes.

EnvelopeComponent does NOT know:

Which message is inside.

Which stationery is selected.

Whether this is the first visit.

Which reward should appear.

Those responsibilities belong elsewhere.

Likewise:

LetterComponent

Knows:

How to display a letter.

How to display stationery.

How to display message content.

LetterComponent does NOT know:

How the envelope opens.

When the envelope opens.

Who triggered the opening.

Every component owns exactly one domain.

---

# Parent Controls Children

Children never control parents.

Parents orchestrate.

Children render.

Example:

App Layout

↓

Envelope

↓

Letter

The layout decides:

Open.

Close.

Hide.

Show.

The envelope simply responds.

This rule applies to the entire application.

---

# JSON First

Bloom Again, Nemo is configuration driven.

The project owner should be able to change:

Themes.

Stationery.

Messages.

Rewards.

Settings.

Colors.

Without recompiling the application.

Whenever reasonable:

Behavior should be described by JSON.

Code should interpret configuration.

Not replace it.

---

# Design System First

The design system is a first-class citizen.

Spacing.

Radius.

Layers.

Animation timing.

Colors.

Typography.

Shadows.

Breakpoints.

Should all originate from the Design System.

Components should consume the design system.

They should never redefine it.

---

# AI Agent Principles

Every AI agent working on this project must respect the following rules.

Rule 1

Never redesign the architecture without explicit approval.

Suggestions are welcome.

Changes are not.

Rule 2

Never move files unless instructed.

Rule 3

Never rename folders simply because another structure looks cleaner.

Consistency is more valuable than personal preference.

Rule 4

Always prefer extending existing systems over creating parallel systems.

Rule 5

Never duplicate configuration.

If information already exists inside JSON, use it.

Do not create another source of truth.

Rule 6

When uncertain, preserve the existing architecture.

Breaking consistency is worse than delaying implementation.

Rule 7

One coding task should accomplish one objective.

Large tasks should be decomposed.

Rule 8

Before implementing a feature, understand where it belongs in the architecture.

Adding working code to the wrong layer is considered a bug.

---

# Development Principles

Every implementation should optimize for:

Readability

Consistency

Maintainability

Scalability

Predictability

Not cleverness.

Code should be obvious.

Future contributors should understand a file within minutes.

---

# Definition of Simplicity

Simple does not mean fewer files.

Simple means every file has an obvious purpose.

Ten focused files are preferred over one massive file.

Large components should naturally evolve into multiple smaller components.

---

# Performance Philosophy

Performance matters.

However...

Readability comes first until profiling demonstrates a real problem.

Avoid premature optimization.

Optimize only when measurements justify it.

The project values maintainable performance over clever micro-optimizations.

---

# Folder Philosophy

Folders represent domains.

They are **not** created simply to organize files alphabetically.

Each top-level folder exists because it owns a responsibility.

Example:

src/app/components

Owns visual building blocks.

src/app/services

Owns business logic.

src/app/models

Owns data contracts.

src/app/shared

Owns reusable application-wide definitions.

public/data

Owns configuration and content.

If a new file does not clearly belong to one domain, the architecture should be reconsidered before creating it.

---

# Data Philosophy

The project distinguishes between three different kinds of data.

## Configuration

Configuration changes how the application behaves.

Examples:

- settings.json
- stationery.json
- colors.json
- color-tokens.json

Configuration is owned by developers.

---

## Content

Content changes what the visitor reads or experiences.

Examples:

- messages.json
- links.json

Content is independent from implementation.

A new message should never require changing Angular code.

---

## Design System

The Design System defines visual rules.

Examples:

- spacing.json
- shadows.json
- radius.json
- animation.json
- layers.json

The Design System exists so visual consistency is guaranteed.

---

# State Philosophy

Everything should be represented by state.

The application should avoid imperative UI manipulation whenever possible.

Instead of:

"Open the envelope."

The application changes state.

EnvelopeState = Open

The UI reacts automatically.

Future systems should follow the same principle.

Examples:

Loading

Uploading

Reading

Saving

Reward

Dialogs

Animations

All of them should be state-driven.

---

# Animation State Philosophy

Animations are transitions between states.

Never animate arbitrary values directly.

Instead:

Hidden

↓

Entering

↓

Idle

↓

Opening

↓

Opened

↓

Closing

↓

Closed

The state machine is the source of truth.

Animations are merely visual representations of state transitions.

---

# Future Expansion Strategy

The project is intentionally designed to grow.

Future additions should integrate naturally into the existing architecture.

Examples:

New stationery themes

New envelope styles

Seasonal events

Birthday messages

Special rewards

Localization

Accessibility improvements

Different flower scenes

Alternative music

None of these additions should require redesigning the architecture.

The architecture should already support them.

---

# Scalability Principles

Whenever a feature becomes large enough to deserve its own domain:

Create a dedicated component.

Create a dedicated model.

Create a dedicated service.

Create a dedicated configuration.

Do not overload existing systems.

The project should grow horizontally rather than vertically.

---

# Error Philosophy

Errors should fail gracefully.

A missing sound should not stop the experience.

A missing animation should not stop the experience.

A missing decoration should not stop the experience.

If possible:

Fallback.

Continue.

Preserve the emotional experience.

The visitor should never encounter technical terminology.

---

# Accessibility Philosophy

Accessibility is part of quality.

The project should support:

Keyboard navigation.

Reduced motion preferences.

Readable typography.

Appropriate color contrast.

Semantic HTML.

Screen readers where applicable.

Accessibility should never be considered an optional feature.

---

# Internationalization Philosophy

The project intentionally separates interface language from content language.

Interface

↓

Turkish

Content

↓

Arabic

This is an intentional artistic decision.

Future localization should not require changing components.

Languages should eventually become configuration-driven.

---

# Security Philosophy

The project contains emotional content.

Integrity is more important than secrecy.

Configuration files should never allow arbitrary code execution.

Uploaded content should always be validated.

External data should never be trusted without validation.

---

# Testing Philosophy

Behavior should be predictable.

Critical systems should eventually have tests.

Priority order:

Business logic

Services

Utilities

Components

Animations

Visual appearance is validated manually.

Business behavior is validated automatically.

---

# Non-Goals

Bloom Again, Nemo is NOT:

A social network.

A blogging platform.

A messaging application.

A CMS.

A note-taking application.

A general-purpose greeting card builder.

A template marketplace.

A design editor.

Every feature proposal should be evaluated against this list.

If it moves the project toward becoming one of these products, it should be rejected.

---

# Success Criteria

The project is successful if:

The visitor immediately understands how to interact.

The animations feel natural.

The interface feels calm.

The letter becomes the emotional focus.

The experience is memorable.

The implementation remains maintainable.

A future contributor can understand the architecture quickly.

---

# Definition of Done

A feature is considered complete only when:

✓ It follows the architecture.

✓ It follows the design system.

✓ It follows the project philosophy.

✓ It respects component responsibilities.

✓ Configuration is externalized where appropriate.

✓ Code is readable.

✓ No unnecessary duplication exists.

✓ Existing behavior is preserved.

A feature is NOT complete simply because it works.

---

# Decision Hierarchy

Whenever uncertainty exists, decisions should be made according to this order.

1. PROJECT_VISION.md

↓

2. PROJECT_ARCHITECTURE.md

↓

3. ROADMAP.md

↓

4. TASKS.md

↓

5. Existing implementation

The higher document always has priority.

---

# AI Agent Workflow

Every AI coding agent must follow this workflow before modifying the project.

Step 1

Read:

PROJECT_VISION.md

Step 2

Read:

PROJECT_ARCHITECTURE.md

Step 3

Read:

ROADMAP.md

Step 4

Read:

TASKS.md

Step 5

Locate the affected domain.

Step 6

Understand existing architecture.

Step 7

Implement the smallest possible change.

Step 8

Verify consistency.

Step 9

Update documentation if architecture changed.

Skipping any of these steps is discouraged.

---

# Long-Term Vision

Bloom Again, Nemo should remain enjoyable years after its creation.

The codebase should age gracefully.

The architecture should remain understandable.

The experience should remain emotionally meaningful.

The project should feel handcrafted rather than assembled.

Every future improvement should preserve that feeling.

Technology will change.

Frameworks will change.

Libraries will change.

The emotional purpose of Bloom Again, Nemo should never change.

---

# Final Statement

Bloom Again, Nemo exists to preserve memories through interactive storytelling.

Every technical decision serves an emotional purpose.

Every architectural decision serves long-term maintainability.

Every visual decision serves beauty with restraint.

Every animation serves storytelling.

Every line of code should help create an experience that someone remembers long after they close the browser.

That purpose is the foundation of this project.

Everything else is built upon it.
