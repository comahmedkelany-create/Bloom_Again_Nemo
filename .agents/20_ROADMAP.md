# Bloom Again, Nemo

# Master Development Roadmap

> This document defines the official implementation order of the project.
>
> It is the authoritative source for development sequencing.
>
> It does **not** describe implementation details.
>
> It does **not** replace TASKS.md.
>
> ROADMAP.md answers:
>
> **What should be built?**
>
> TASKS.md answers:
>
> **How do we build it?**

---

# Document Information

Document

ROADMAP.md

Status

Living Document

Authority

High

Priority

PROJECT_VISION.md

↓

PROJECT_ARCHITECTURE.md

↓

ROADMAP.md

↓

TASKS.md

---

# Purpose

The roadmap exists to ensure that every feature is implemented in the correct order.

Incorrect order creates:

- duplicated work
- architecture redesigns
- unnecessary refactoring
- inconsistent UX

Every phase depends on previous phases.

Future contributors should never skip phases unless explicitly instructed.

---

# Overall Development Strategy

Bloom Again, Nemo is developed using five layers.

Foundation

↓

Architecture

↓

Core Experience

↓

Content

↓

Polish

Every completed layer becomes the foundation for the next one.

---

# Development Principles

Every phase must satisfy three conditions before moving forward.

Functional

The system works.

Architectural

The implementation respects the project architecture.

Experiential

The feature contributes positively to the emotional experience.

Working code alone is not considered sufficient.

---

# Current Status

Current Version

Pre-Alpha

Current Stage

Core Development

Current Focus

Core Experience

Overall Completion

Approximately 20%

(The percentage should be updated throughout development.)

---

# Roadmap Overview

Phase 0

Foundation

↓

Phase 1

Architecture Refactoring

↓

Phase 2

Letter System

↓

Phase 3

Animation System

↓

Phase 4

Data Layer

↓

Phase 5

Content System

↓

Phase 6

Visitor Experience

↓

Phase 7

Upload Experience

↓

Phase 8

Reward System

↓

Phase 9

Audio System

↓

Phase 10

Polish

↓

Phase 11

Optimization

↓

Phase 12

Testing

↓

Phase 13

Deployment

↓

Version 1.0

---

# Phase 0

Foundation

Goal

Create a clean Angular foundation.

Milestones

✓ Angular project

✓ Folder architecture

✓ Routing

✓ Design System

✓ Static assets

✓ Configuration structure

✓ Project documentation

Exit Criteria

The project has a stable foundation.

No major structural changes are expected.

Status

Completed

---

# Phase 1

Architecture Refactoring

Goal

Convert experimental code into maintainable architecture.

Major Deliverables

Reusable components

Layered layout

Configuration folders

Component separation

State ownership

JSON-first architecture

Exit Criteria

No component owns responsibilities belonging to another component.

Status

Mostly Complete

---

# Phase 2

Letter System

Goal

Build the real interactive letter.

Major Deliverables

Letter Component

Stationery support

Message rendering

Typography

Buttons

Theme support

Future image export compatibility

Exit Criteria

The application can correctly display any message using any stationery theme.

Status

In Progress

---

# Phase 3

Animation System

Goal

Replace isolated animations with a complete cinematic experience.

Major Deliverables

Flower sequence

Envelope entrance

Floating state

Envelope opening

Paper extraction

Letter expansion

Closing animation

Replay animation

State machine

Exit Criteria

Every animation is driven by application state.

No animation depends on manual DOM manipulation.

Status

## Not Started

# Phase 4

Data Layer

Goal

Connect the application to structured JSON content.

Major Deliverables

Configuration loading

Message loading

Theme loading

Reward loading

Settings loading

Models

Services

Caching

Exit Criteria

The application becomes fully data-driven.

Adding a new message should require editing only JSON.

---

# Phase 5

Content System

Goal

Build the actual emotional content.

Major Deliverables

Arabic letters

Stationery collection

Envelope themes

Paper themes

Decorations

Localization

Exit Criteria

Content is completely independent from implementation.

---

# Phase 6

Visitor Experience

Goal

Create a memorable first-time experience.

Major Deliverables

QR entry

Loading sequence

Interactive letter

Replay support

Return visit detection

Exit Criteria

The complete journey feels natural from beginning to end.

---

# Phase 7

Upload Experience

Goal

Allow the visitor to respond.

Major Deliverables

Image picker

Preview

Validation

Upload

Success animation

Storage

Exit Criteria

## Uploading should feel like part of the story rather than a form.

# Phase 8

Reward System

Goal

Encourage revisiting the project.

Major Deliverables

Reward engine

Special decorations

Unlockables

Random rewards

Milestones

Seasonal rewards

Future expansion support

Exit Criteria

Returning visitors experience meaningful variation.

---

# Phase 9

Audio System

Goal

Complete the sensory experience.

Major Deliverables

Ambient sounds

Envelope sounds

Paper sounds

Button sounds

Reward sounds

Settings

Exit Criteria

Every important interaction has optional sound support.

---

# Phase 10

Polish

Goal

Transform the application from functional to delightful.

Major Deliverables

Responsive improvements

Accessibility

Visual consistency

Animation tuning

Typography refinement

Performance review

Exit Criteria

No obvious visual inconsistencies remain.

---

# Phase 11

Optimization

Goal

Prepare for production.

Major Deliverables

Lazy loading

Asset optimization

Bundle reduction

Caching

Loading improvements

Exit Criteria

The application performs smoothly on mobile devices.

---

# Phase 12

Testing

Goal

Increase confidence.

Major Deliverables

Unit tests

Service tests

Utility tests

Manual UX testing

Cross-device testing

Exit Criteria

Critical systems are validated.

---

# Phase 13

Deployment

Goal

Release Version 1.

Major Deliverables

Production build

Hosting

QR generation

Analytics

Monitoring

Documentation

Exit Criteria

## The project is publicly accessible and stable.

# Phase Dependencies

The order of phases is intentional.

Foundation

↓

Architecture

↓

Letter

↓

Animations

↓

Data

↓

Content

↓

Visitor Experience

↓

Upload

↓

Rewards

↓

Audio

↓

Polish

↓

Optimization

↓

Testing

↓

Deployment

Changing this order requires explicit architectural approval.

---

# Success Metrics

The roadmap is complete when:

✓ Every planned phase has been completed.

✓ Every milestone satisfies its exit criteria.

✓ The implementation follows PROJECT_VISION.md.

✓ The implementation matches PROJECT_ARCHITECTURE.md.

✓ No architectural debt remains.

---

# Maintenance

ROADMAP.md is a living document.

Whenever:

- a phase begins,
- a milestone completes,
- priorities change,

this document should be updated.

TASKS.md should always be generated from the current roadmap.

The roadmap is never generated from completed tasks.

---

# Final Statement

This roadmap defines the intended evolution of Bloom Again, Nemo.

It exists to preserve development consistency, reduce unnecessary redesigns, and ensure that every future contribution strengthens the project instead of fragmenting it.

Every completed phase should make the next phase easier.

The project should grow through deliberate, incremental progress rather than rapid accumulation of features.
