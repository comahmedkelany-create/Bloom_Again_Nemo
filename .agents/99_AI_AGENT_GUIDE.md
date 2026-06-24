# Bloom Again, Nemo

# AI Agent Guide

> This document defines how AI coding agents should work on the Bloom Again, Nemo project.
>
> It is intended for autonomous coding agents such as Codex, ChatGPT, Claude Code, Gemini Code, Cursor AI, Windsurf, and future AI assistants.
>
> Every AI agent should read this document before writing code.

---

# Purpose

The goal of this document is not to explain the project.

Other documents already do that.

The goal is to explain **how an AI agent should behave** while contributing.

---

# Before Writing Any Code

Always follow this order.

1. Read `PROJECT_VISION.md`
2. Read `PROJECT_ARCHITECTURE.md`
3. Read `ROADMAP.md`
4. Read `TASKS.md`
5. Read any domain-specific document (Design System, Data Schema, etc.)
6. Locate the affected files.
7. Understand the existing implementation.
8. Only then begin coding.

Never skip these steps.

---

# Primary Goal

The AI agent's objective is **not** to write the most code.

Its objective is to preserve:

- architecture
- consistency
- readability
- maintainability
- emotional experience

Correct architecture is always preferred over rapid implementation.

---

# Development Workflow

Every task should follow the same workflow.

Understand

↓

Plan

↓

Implement

↓

Verify

↓

Refactor (if necessary)

↓

Document

↓

Complete

Never jump directly into implementation.

---

# Scope Control

Only modify files required by the current task.

Do not perform unrelated refactoring.

Do not rename files unless explicitly instructed.

Do not reorganize folders.

Do not redesign architecture.

Small, focused changes are preferred.

---

# Existing Code

Assume existing code is intentional.

Before changing existing behavior ask:

- Why was it implemented this way?
- Does documentation explain it?
- Is there an architectural decision supporting it?

Never replace code simply because another approach is possible.

---

# Architecture Rules

Always preserve:

Single Responsibility Principle

Parent owns state

Child renders state

Service owns business logic

Configuration owns behavior

Content owns information

Animation owns motion

If uncertain, preserve the current architecture.

---

# Components

Components should:

Render UI

Receive Inputs

Emit Outputs

Consume services

Components should NOT:

Read JSON directly

Contain business logic

Manipulate unrelated state

Communicate through global variables

---

# Services

Services should:

Interpret data

Provide business logic

Coordinate systems

Validate input

Services should NOT:

Manipulate DOM

Render UI

Know component implementation details

---

# Configuration

Never hardcode values that belong in configuration.

Examples

Animation duration

Theme

Colors

Spacing

Stationery

Application settings

Whenever possible:

Configuration

↓

Service

↓

Component

---

# Data

Treat JSON as the source of truth.

Do not duplicate data inside components.

If information already exists in JSON, use it.

---

# Design System

Never introduce new visual styles without updating the Design System.

Always use:

Design tokens

Typography rules

Spacing system

Layer system

Color system

Avoid magic values.

---

# Animations

Animations must:

Communicate state

Support storytelling

Remain configurable

Respect reduced motion preferences

Never add animations solely for decoration.

---

# Documentation

Whenever architecture changes:

Update

PROJECT_ARCHITECTURE.md

Whenever implementation order changes:

Update

ROADMAP.md

Whenever work completes:

Update

TASKS.md

Whenever architecture decisions change:

Update

DECISIONS.md

Whenever releases change:

Update

CHANGELOG.md

Documentation is part of the implementation.

---

# Code Quality

Prefer:

Readable code

Explicit names

Small functions

Predictable behavior

Consistent formatting

Avoid:

Premature optimization

Overengineering

Duplicate logic

Hidden side effects

---

# Error Handling

Fail gracefully.

Validate external input.

Prefer fallback behavior.

Never expose technical errors to visitors.

Protect the emotional experience.

---

# Performance

Optimize only after correctness.

Prefer maintainability over clever optimizations.

Measure before optimizing.

---

# Communication

If requirements are ambiguous:

Ask for clarification.

Do not guess.

Do not invent architecture.

Do not silently redesign systems.

---

# Completion Checklist

Before marking a task complete verify:

✓ Code compiles.

✓ No console errors.

✓ Architecture respected.

✓ Existing behavior preserved.

✓ Documentation updated (if required).

✓ Acceptance criteria satisfied.

Only then should a task be considered complete.

---

# Final Principle

Bloom Again, Nemo is an emotional experience implemented through software.

Every contribution should preserve that identity.

When choosing between a technically impressive solution and a solution that better supports the project's vision, choose the one that preserves the vision.
