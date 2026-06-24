# Bloom Again, Nemo

# Architectural Decisions

> This document records every important architectural decision made during the lifetime of Bloom Again, Nemo.
>
> Unlike CHANGELOG.md, this document records _why_ decisions were made, not _when_ code changed.
>
> Once a decision is approved, every future contribution should respect it unless the project owner explicitly replaces it with a newer approved decision.

---

# Document Information

Document

30_DECISIONS.md

Status

Living Document

Authority

High

Depends On

PROJECT_VISION.md

PROJECT_ARCHITECTURE.md

Referenced By

All Architecture Documents

---

# Purpose

Software changes.

Architecture evolves.

People forget why decisions were made.

This document exists to preserve architectural intent.

Future contributors should read this document before proposing architectural changes.

---

# Decision Format

Every decision follows the same structure.

Decision ID

Status

Date

Decision

Reason

Alternatives Considered

Consequences

Affected Systems

---

# Decision 001

Status

Approved

Decision

Bloom Again, Nemo is experience-driven rather than feature-driven.

Reason

The project exists to create emotional experiences rather than provide application functionality.

Consequences

Features that do not improve the visitor's experience should not be added.

Affected Systems

Entire Project

---

# Decision 002

Status

Approved

Decision

The project follows a configuration-first architecture.

Reason

Content and behavior should be editable without recompiling the application.

Consequences

Configuration belongs inside JSON.

Components should consume configuration rather than defining it.

Affected Systems

Configuration Layer

Services

Components

---

# Decision 003

Status

Approved

Decision

Content and configuration are separate domains.

Reason

Messages should evolve independently from application behavior.

Consequences

Configuration files remain under

public/data/configuration

Content files remain under

public/data/content

Affected Systems

Entire Data Layer

---

# Decision 004

Status

Approved

Decision

EnvelopeComponent and LetterComponent are independent components.

Reason

Each component owns one responsibility.

The envelope controls envelope behavior.

The letter controls message presentation.

Consequences

Letter logic must never migrate into EnvelopeComponent.

Affected Systems

Envelope

Letter

Animations

---

# Decision 005

Status

Approved

Decision

Parents own state.

Children render state.

Reason

Predictable data flow.

Simpler debugging.

Better maintainability.

Consequences

Components receive Inputs.

Components emit Outputs.

Children never modify parent state directly.

Affected Systems

Entire Component Architecture

---

# Decision 006

Status

Approved

Decision

Business logic belongs in services.

Reason

Components should remain focused on presentation.

Consequences

Future business rules belong inside services.

Affected Systems

Business Layer

---

# Decision 007

Status

Approved

Decision

Every service owns exactly one domain.

Reason

Maintainability.

Scalability.

Predictability.

Consequences

Avoid large multi-purpose services.

Affected Systems

Business Layer

---

# Decision 008

Status

Approved

Decision

Every component owns exactly one responsibility.

Reason

Single Responsibility Principle.

Consequences

Large components should be decomposed rather than expanded indefinitely.

Affected Systems

Presentation Layer

---

# Decision 009

Status

Approved

Decision

Animations are state-driven.

Reason

Animations communicate state rather than arbitrary visual effects.

Consequences

AnimationService coordinates transitions.

Components render state.

Affected Systems

Animation Layer

---

# Decision 010

Status

Approved

Decision

Animation timing is configuration-driven.

Reason

Timing should be adjustable without changing implementation.

Consequences

Durations belong inside animations.json.

Affected Systems

Animation Layer

---

# Decision 011

Status

Approved

Decision

The application follows a layered architecture.

Layers

Presentation

↓

Business

↓

Configuration

↓

Content

Reason

Clear separation of responsibilities.

Affected Systems

Entire Project

---

# Decision 012

Status

Approved

Decision

The Design System is the only source of visual truth.

Reason

Consistency.

Maintainability.

Scalability.

Consequences

Components consume design tokens.

Components never define visual standards.

Affected Systems

Entire UI

---

# Decision 013

Status

Approved

Decision

The project is mobile-first.

Reason

The primary audience uses smartphones.

Consequences

Desktop support is secondary.

Affected Systems

Entire UI

---

# Decision 014

Status

Approved

Decision

The interface language is Turkish.

The emotional content language is Arabic.

Reason

Intentional artistic identity.

Consequences

Future localization must preserve this architecture.

Affected Systems

UI

Localization

Content

---

# Decision 015

Status

Approved

Decision

Project documentation is part of the architecture.

Reason

AI-assisted development requires persistent knowledge.

Consequences

Architectural changes require documentation updates.

Affected Systems

.agents

Documentation

---

# Decision 016

Status

Approved

Decision

The .agents folder is the project's long-term memory.

Reason

AI models should not rely on previous conversations.

Consequences

Documentation becomes the authoritative source of knowledge.

Affected Systems

Entire Project

---

# Decision 017

Status

Approved

Decision

One implementation task should accomplish one objective.

Reason

Small tasks reduce risk and simplify review.

Consequences

Large features must be decomposed into granular tasks.

Affected Systems

Development Workflow

---

# Decision 018

Status

Approved

Decision

Architecture must stabilize before feature expansion.

Reason

Frequent redesign slows development and increases technical debt.

Consequences

Major architectural changes should become increasingly rare as the project matures.

Affected Systems

Entire Project

---

# Decision Lifecycle

A decision may have one of the following states.

Proposed

Approved

Deprecated

Rejected

Superseded

Approved decisions remain valid until explicitly replaced.

---

# Changing a Decision

Architectural decisions should not be changed lightly.

Every modification should include:

Reason

Impact

Affected systems

Migration strategy

Documentation updates

---

# Final Statement

Architectural decisions preserve the identity of Bloom Again, Nemo.

The implementation may evolve.

Technologies may change.

Frameworks may change.

Approved architectural decisions exist to ensure the project continues to feel like the same carefully crafted experience regardless of how many years it continues to grow.
