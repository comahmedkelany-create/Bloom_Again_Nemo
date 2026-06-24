# Bloom Again, Nemo

# Services Plan

> This document defines the business layer of Bloom Again, Nemo.
>
> Services contain business logic.
>
> Components display data.
>
> Components should never contain business logic that belongs inside services.

---

# Document Information

Document

13_SERVICES_PLAN.md

Status

Living Document

Authority

High

Depends On

PROJECT_VISION.md

PROJECT_ARCHITECTURE.md

DATA_SCHEMA.md

Referenced By

COMPONENT_GUIDELINES.md

TASKS.md

---

# Purpose

Services separate business logic from presentation.

A service answers questions such as:

• What message should be displayed?

• Which stationery should be used?

• Has this visitor already visited?

• Which reward should be unlocked?

• Is sound enabled?

• Which animation should play?

Components should never answer these questions.

---

# Service Philosophy

One Service = One Domain

Every service owns exactly one responsibility.

Good

MessageService

↓

Loads messages.

Bad

MessageService

↓

Loads messages

↓

Loads settings

↓

Controls animations

↓

Uploads images

---

# Service Categories

The application contains five categories of services.

Configuration

↓

Content

↓

Experience

↓

Infrastructure

↓

Utilities

---

# Configuration Services

Configuration services load and expose application configuration.

---

## SettingsService

Purpose

Provides application settings.

Reads

settings.json

Responsibilities

- Load settings
- Cache settings
- Expose application configuration
- Persist user preferences where appropriate

Consumers

Most application components

---

## ThemeService

Purpose

Provides theme information.

Reads

stationery.json

colors.json

color-tokens.json

Responsibilities

- Resolve color tokens
- Load stationery themes
- Provide active theme
- Handle theme switching

Consumers

Envelope

Letter

Buttons

Background

Future Components

---

## TypographyService

Purpose

Provide typography configuration.

Reads

typography.json

Responsibilities

- Interface fonts
- Letter fonts
- Font scaling
- Responsive typography

---

## AnimationConfigService

Purpose

Provide animation configuration.

Reads

animations.json

Responsibilities

- Durations
- Delays
- Easing
- Particle counts
- Timing values

This service provides configuration only.

It does not execute animations.

---

# Content Services

Content services provide emotional content.

---

## MessageService

Purpose

Load letter messages.

Reads

messages.json

Responsibilities

- Load messages
- Find by ID
- Find by slug
- Cache messages
- Validate message existence

Public API

```
load()

getAll()

getById()

getBySlug()
```

Consumers

LetterComponent

Future Pages

---

## RewardService

Purpose

Provide reward information.

Reads

rewards.json

Responsibilities

- Load rewards
- Determine available rewards
- Provide reward metadata

Business logic only.

Presentation belongs to RewardComponent.

---

## LocalizationService

Purpose

Provide interface translations.

Reads

localization.json

Responsibilities

- Active language
- Translation lookup
- Language switching

Current language

Turkish

Future languages

Configuration-driven.

---

# Experience Services

Experience services control application behavior.

---

## VisitService

Purpose

Manage visitor sessions.

Responsibilities

- First visit detection
- Return visit detection
- Visit history
- Session tracking

Future storage

Browser storage

Possible backend integration

---

## ExperienceService

Purpose

Coordinate the visitor journey.

Responsibilities

- Current experience stage
- Stage transitions
- Replay
- Experience progression

Stages

Arrival

↓

Bloom

↓

Envelope

↓

Reading

↓

Upload

↓

Reward

↓

Goodbye

This service becomes the central coordinator of the application.

---

## AnimationService

Purpose

Coordinate animations.

Responsibilities

- Play animation sequences
- Synchronize transitions
- Animation state
- Replay support

Animation configuration comes from

AnimationConfigService

This separation is intentional.

---

# Infrastructure Services

Infrastructure services communicate with external systems.

---

## UploadService

Purpose

Upload visitor images.

Responsibilities

- Upload
- Progress
- Success
- Failure
- Retry

Presentation belongs to UploadComponent.

---

## StorageService

Purpose

Store application data.

Future responsibilities

Uploads

Temporary files

Cache

Persistence

Storage implementation should remain replaceable.

---

## AssetService

Purpose

Resolve assets.

Responsibilities

Images

Audio

Stationery

Icons

Asset lookup

Components should not construct asset paths manually.

---

# Utility Services

Utility services provide reusable functionality.

---

## LoggerService

Purpose

Application logging.

Responsibilities

Errors

Warnings

Information

Development logging

Replace console.log usage.

---

## DeviceService

Purpose

Detect device capabilities.

Responsibilities

Touch support

Screen size

Reduced motion

Platform information

---

## AccessibilityService

Purpose

Accessibility helpers.

Responsibilities

Reduced motion

High contrast

Accessibility preferences

Future enhancements

---

# Future Services

The following services are expected but not immediately required.

AudioService

ParticleService

NotificationService

DialogService

AnalyticsService

ShareService

ExportService

PrintService

These services should only be created when needed.

---

# Service Dependencies

Allowed

```
Component

↓

Service

↓

Configuration

↓

Data
```

Allowed

```
Service

↓

Utility Service
```

Avoid

```
Service

↓

Component
```

Avoid circular dependencies.

Services should remain independent whenever possible.

---

# Caching Strategy

Configuration files

Loaded once.

Cached.

Messages

Loaded once.

Cached.

Themes

Loaded once.

Cached.

Avoid repeated network requests.

---

# Error Handling

Services are responsible for handling invalid data.

Components should receive predictable results.

Preferred strategy

Validate

↓

Fallback

↓

Continue

Avoid exposing technical errors to visitors.

---

# Async Strategy

Services should expose asynchronous APIs where appropriate.

Examples

```
load()

refresh()

initialize()
```

Avoid synchronous assumptions for future scalability.

---

# Testing

Business logic belongs in services because services are testable.

Future unit tests should primarily target:

MessageService

ThemeService

RewardService

VisitService

ExperienceService

AnimationService

These services contain the majority of application logic.

---

# Documentation

Every service should document:

Purpose

Dependencies

Public API

Owned Data

Side Effects

Future contributors should understand a service before reading its implementation.

---

# Final Statement

Services represent the business layer of Bloom Again, Nemo.

Components render.

Services decide.

Configuration defines.

Content inspires.

Keeping these responsibilities separate is essential to preserving the long-term maintainability of the project.
