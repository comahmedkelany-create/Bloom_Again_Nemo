# Bloom Again, Nemo

# Animation System

> This document defines the complete animation architecture of Bloom Again, Nemo.
>
> Animations are not decorative.
>
> They are part of the storytelling system.

---

# Document Information

Document

14_ANIMATION_SYSTEM.md

Status

Living Document

Authority

High

Depends On

PROJECT_VISION.md

PROJECT_ARCHITECTURE.md

DESIGN_SYSTEM.md

Referenced By

COMPONENT_GUIDELINES.md

SERVICES_PLAN.md

ROADMAP.md

---

# Purpose

Animations communicate emotion.

They transform a collection of UI components into a living experience.

Every animation should have a narrative purpose.

Nothing should move without reason.

---

# Animation Philosophy

Bloom Again, Nemo follows one rule above all others.

**Animation communicates state.**

Animations should never exist because they look beautiful.

They exist because something changed.

Every animation must answer one question:

> What changed?

If no answer exists, the animation probably should not exist.

---

# Animation Architecture

The animation system is divided into four layers.

```
Configuration

↓

Animation State

↓

Animation Controller

↓

Components
```

Configuration

Defines timing.

Animation State

Defines what should happen.

Animation Controller

Coordinates execution.

Components

Render movement.

---

# Animation Ownership

Animation logic belongs to:

AnimationService

Animation configuration belongs to:

AnimationConfigService

Components only react.

---

# State Machine

Every major animation is state-driven.

Never animate arbitrary values.

Instead transition between states.

General structure

```
Hidden

↓

Entering

↓

Idle

↓

Active

↓

Leaving

↓

Hidden
```

Every experience should follow this philosophy.

---

# Experience Timeline

The complete experience follows this sequence.

```
Arrival

↓

Background Appears

↓

Flowers Bloom

↓

Pause

↓

Envelope Enters

↓

Envelope Floats

↓

User Interaction

↓

Envelope Opens

↓

Letter Appears

↓

Letter Expands

↓

Reading

↓

Upload

↓

Reward

↓

Goodbye
```

No stage should be skipped.

---

# Stage 1

Arrival

Purpose

Prepare the visitor.

Nothing dramatic happens.

The visitor simply enters the world.

---

# Stage 2

Background

Purpose

Establish atmosphere.

Examples

Night sky

Stars

Fog

Light

Soft ambient movement

---

# Stage 3

Flowers

Purpose

Bring the world to life.

Animation

Flowers grow.

Flowers bloom.

Leaves settle.

Grass finishes growing.

Duration

Configuration driven.

---

# Stage 4

Pause

Purpose

Allow the visitor to appreciate the environment.

No interaction yet.

Silence is intentional.

---

# Stage 5

Envelope Entrance

Purpose

Introduce the primary object.

Animation

Envelope enters.

Allowed directions

Bottom

Left

Right

Top

Preferred

Bottom

The envelope should settle naturally.

Never stop abruptly.

---

# Stage 6

Idle

Purpose

Invite interaction.

Envelope performs a gentle floating animation.

Motion should remain subtle.

The visitor should never feel rushed.

---

# Stage 7

Opening

Triggered By

User interaction.

Sequence

Flap rotates.

↓

Envelope opens.

↓

Paper begins sliding.

The paper should not appear before the flap opens.

---

# Stage 8

Letter Extraction

Purpose

Reveal the emotional content.

Animation

Paper slides upward.

Envelope becomes secondary.

Letter becomes primary.

The motion should resemble removing a real letter.

---

# Stage 9

Letter Expansion

Purpose

Transition from envelope to reading.

Animation

Letter expands.

Envelope fades into the background.

Reading becomes the visual focus.

---

# Stage 10

Reading

Purpose

Allow uninterrupted reading.

Animations become almost invisible.

Nothing should distract from the message.

---

# Stage 11

Upload

Purpose

Invite participation.

Animation

Smooth appearance.

Soft transitions.

No abrupt modal behavior.

---

# Stage 12

Reward

Purpose

Celebrate participation.

Possible animations

Butterflies

Golden petals

Sparkles

Special flowers

Animation should feel rewarding.

Never overwhelming.

---

# Stage 13

Closing

Purpose

Gracefully conclude the experience.

Letter contracts.

Paper slides back.

Envelope closes.

Background remains calm.

---

# Animation Categories

Animations belong to one category.

Environment

Envelope

Letter

UI

Particles

Rewards

Dialogs

No animation should belong to multiple categories.

---

# Environment Animations

Includes

Flowers

Grass

Sky

Stars

Wind

Light

Characteristics

Continuous

Slow

Organic

Never repetitive.

---

# Envelope Animations

Includes

Entrance

Floating

Opening

Closing

Characteristics

Physical

Weighted

Elegant

Never mechanical.

---

# Letter Animations

Includes

Extraction

Expansion

Collapse

Return

Characteristics

Gentle

Readable

Natural

The letter is the emotional center of the experience.

---

# UI Animations

Includes

Buttons

Cards

Dialogs

Progress

Hover

Characteristics

Short

Subtle

Responsive

Never theatrical.

---

# Reward Animations

Reserved for special moments.

They should remain rare.

Rarity increases emotional impact.

---

# Timing Principles

Timing values should never be hardcoded.

Every duration should originate from

animations.json

Examples

Flower Bloom

Envelope Entrance

Letter Expansion

Reward Duration

Particle Lifetime

---

# Easing

Preferred easing

Ease In Out

Ease Out

Gentle Overshoot

Avoid

Linear

Elastic

Bounce

Unless explicitly required.

---

# Sequencing

Animations should never compete.

One major animation should finish before the next begins.

Good

Bloom

↓

Pause

↓

Envelope

↓

Pause

↓

Open

Bad

Everything starts simultaneously.

---

# Interruptions

Animations should be interruptible only when appropriate.

Examples

Reading

Should not be interrupted.

Opening

Should finish naturally.

Upload

May be cancelled.

Replay

Should restart cleanly.

---

# Reduced Motion

The application should respect user accessibility preferences.

When reduced motion is enabled:

Remove decorative animations.

Preserve functional transitions.

Maintain usability.

---

# Performance

Prefer

CSS transforms

Opacity

GPU accelerated animations

Avoid

Layout thrashing

Continuous reflows

Expensive paint operations

---

# Animation Rules

Every animation must:

Support the story.

Communicate state.

Feel natural.

Respect accessibility.

Remain configurable.

Avoid visual noise.

Avoid repetition.

---

# Future Expansion

The animation system should support future additions.

Examples

Seasonal animations

Rain

Snow

Cherry blossoms

Fireflies

New envelope entrances

Alternative flower scenes

These additions should extend the system rather than replace it.

---

# Final Statement

Animation is one of the defining characteristics of Bloom Again, Nemo.

It is not decoration.

It is not spectacle.

It is storytelling through motion.

Every movement should make the visitor feel that the world is alive, that the letter is real, and that the experience has been carefully crafted for them.
