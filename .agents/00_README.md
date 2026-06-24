# Bloom Again, Nemo

# AI Documentation Index

> **Purpose**
>
> This folder is the long-term memory of the Bloom Again, Nemo project.
>
> Every AI coding agent working on this project **must** read these documents before modifying the codebase.
>
> This documentation exists to preserve architectural consistency, reduce context loss, and ensure every future contribution aligns with the project's vision.

---

# Document Information

**Document Name**

00_README.md

**Status**

Living Document

**Authority**

Highest Entry Point

---

# Reading Order

Every AI agent must read the documents in the following order before implementing any feature.

1. PROJECT_VISION.md
2. PROJECT_ARCHITECTURE.md
3. DESIGN_SYSTEM.md
4. DATA_SCHEMA.md
5. COMPONENT_GUIDELINES.md
6. SERVICES_PLAN.md
7. ANIMATION_SYSTEM.md
8. ROADMAP.md
9. USER_EXPERIENCE_ROADMAP.md
10. TASKS.md
11. DECISIONS.md
12. CHANGELOG.md

This order is intentional.

Do not skip documents.

---

# Purpose of Each Document

## PROJECT_VISION.md

Defines the philosophy of Bloom Again, Nemo.

Contains:

- Vision
- Mission
- Emotional goals
- Design philosophy
- Technical philosophy
- Development principles
- AI rules

This is the highest authority document.

---

## PROJECT_ARCHITECTURE.md

Documents the current implementation.

Contains:

- Folder structure
- Components
- Services
- Models
- Assets
- Data folders
- Current architecture

This document describes reality.

---

## DESIGN_SYSTEM.md

Defines the visual language.

Contains:

- Colors
- Tokens
- Typography
- Icons
- Shadows
- Radius
- Layers
- Motion
- Responsive rules

---

## DATA_SCHEMA.md

Documents every JSON configuration and content file.

Contains:

- Purpose
- Schema
- Relationships
- Examples

---

## COMPONENT_GUIDELINES.md

Defines responsibilities for every component.

Contains:

- Responsibilities
- Inputs
- Outputs
- State ownership
- Communication rules

---

## SERVICES_PLAN.md

Defines every service.

Contains:

- Responsibilities
- Public API
- Dependencies
- Usage

---

## ANIMATION_SYSTEM.md

Defines all application animations.

Contains:

- State machines
- Timing
- Easing
- Transitions
- Sequencing

---

## ROADMAP.md

Defines the implementation order.

Contains:

- Phases
- Milestones
- Dependencies
- Exit criteria

---

## USER_EXPERIENCE_ROADMAP.md

Defines the visitor journey.

Contains:

- Emotional flow
- Interaction flow
- Story progression
- Experience stages

---

## TASKS.md

Contains actionable implementation work.

Contains:

- Tasks
- Subtasks
- Acceptance criteria
- Status

This is the primary working document during development.

---

## DECISIONS.md

Records approved architectural decisions.

Contains:

- Decision
- Reason
- Status
- Impact

Never delete historical decisions.

---

## CHANGELOG.md

Records implementation history.

Contains:

- Versions
- Features
- Fixes
- Refactoring
- Documentation updates

---

# Development Workflow

Every implementation should follow this workflow.

1. Read the required documentation.
2. Understand the affected architecture.
3. Identify the relevant task.
4. Implement the smallest possible change.
5. Verify correctness.
6. Update documentation if necessary.

---

# Documentation Rules

Documentation is considered part of the project.

Whenever architecture changes:

Update:

- PROJECT_ARCHITECTURE.md
- ROADMAP.md
- DECISIONS.md
- CHANGELOG.md

Whenever implementation progress changes:

Update:

- ROADMAP.md
- TASKS.md

Whenever philosophy changes:

Update:

- PROJECT_VISION.md

---

# Sources of Truth

The project has multiple sources of truth.

Each owns a specific responsibility.

| Document                   | Owns                          |
| -------------------------- | ----------------------------- |
| PROJECT_VISION.md          | Philosophy                    |
| PROJECT_ARCHITECTURE.md    | Current architecture          |
| DESIGN_SYSTEM.md           | Visual language               |
| DATA_SCHEMA.md             | Data contracts                |
| COMPONENT_GUIDELINES.md    | Component responsibilities    |
| SERVICES_PLAN.md           | Business services             |
| ANIMATION_SYSTEM.md        | Motion system                 |
| ROADMAP.md                 | Long-term implementation plan |
| USER_EXPERIENCE_ROADMAP.md | Visitor experience            |
| TASKS.md                   | Active work                   |
| DECISIONS.md               | Architectural decisions       |
| CHANGELOG.md               | Project history               |

No document should duplicate another document's responsibility.

---

# AI Agent Rules

Every AI agent contributing to Bloom Again, Nemo must follow these rules.

- Read the documentation before coding.
- Respect the approved architecture.
- Preserve the project vision.
- Avoid introducing duplicate systems.
- Implement one task at a time.
- Keep components focused on a single responsibility.
- Prefer extending existing systems over creating new ones.
- Do not redesign approved architecture without explicit instruction.
- Update documentation when architectural changes occur.

---

# Final Statement

The `.agents` folder exists to ensure that Bloom Again, Nemo can continue evolving consistently regardless of which AI model or developer contributes to the project.

Every contribution should strengthen the existing architecture, preserve the project's emotional vision, and maintain long-term consistency.
