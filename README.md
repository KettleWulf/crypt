# CRYPT

CRYPT is a small experimental **text-based dungeon crawler** focused on
deterministic game systems and procedural encounters.

Instead of handcrafted levels, the game generates events using **seeded
pseudo-randomness** and **table-driven mechanics**, allowing runs to be
reproduced exactly by reusing the same seed.

The project explores how minimal systems can produce interesting
gameplay through **emergent interactions rather than scripted content**.

Inspired by classic roguelikes, low-fantasy RPGs, and system-driven
tabletop design.

------------------------------------------------------------------------

## Status

Work in progress.

Current development focuses on building the **core systems layer**
before expanding content.

Areas currently being explored:

-   deterministic RNG
-   encounter and event tables
-   player state management
-   dungeon progression logic

------------------------------------------------------------------------

## Core Concepts

### Deterministic RNG

The game uses a seeded pseudo-random number generator.\
All random outcomes derive from a single seed value.

This enables:

-   reproducible runs
-   easier debugging of procedural systems
-   the ability to share seeds between players

Conceptually:

    seed → RNG → event roll → encounter table → outcome

Using the same seed will always generate the same sequence of results.

------------------------------------------------------------------------

### Table-Driven Design

Game logic relies heavily on lookup tables rather than deeply nested
logic.

Examples include:

-   encounter tables
-   loot tables
-   dungeon events
-   environmental hazards

Example:

  Roll      Result
  --------- ------------------
  1--30     Nothing happens
  31--60    Minor encounter
  61--85    Hostile creature
  86--100   Rare event

This approach keeps the system easy to extend while keeping the core
engine simple.

------------------------------------------------------------------------

### Emergent Gameplay

Rather than scripted quests, the game aims to generate stories through
system interaction.

Runs are shaped by:

-   random encounters
-   resource scarcity
-   dungeon progression
-   player decisions

The intention is that interesting situations arise naturally from the
interaction of simple mechanics.

------------------------------------------------------------------------

## Planned Features

Planned mechanics include:

-   procedural dungeon exploration
-   simple turn-based encounters
-   lightweight character stats
-   inventory and resource management
-   persistent seed system
-   expandable encounter/event tables

------------------------------------------------------------------------

## Technical Focus

CRYPT also functions as a small sandbox for experimenting with:

-   deterministic pseudo-random generation
-   system-driven gameplay
-   modular game logic
-   reproducible procedural content

The codebase prioritizes **clarity and experimentation** over production
complexity.

------------------------------------------------------------------------

## Example Run

Example seed:

    Seed: 184392

Possible generated sequence:

    Entrance
    ↓
    Collapsed tunnel
    ↓
    Corpse with rusted dagger
    ↓
    Hostile scavenger
    ↓
    Flooded chamber

Reusing the same seed reproduces the same sequence.

------------------------------------------------------------------------

## Vision

The long-term goal is to explore how far **simple deterministic
systems** can go in creating compelling gameplay without relying on
large amounts of handcrafted content.

CRYPT is ultimately an experiment in **procedural storytelling through
systems**.

------------------------------------------------------------------------

## Project Structure (planned)

    src/
      systems/
        rng.ts
        tables.ts
        dungeon.ts

      entities/
        player.ts
        enemies.ts

      engine/
        run.ts
        events.ts

      content/
        encounters.ts
        loot.ts

The intent is to keep **systems**, **engine logic**, and **content
tables** clearly separated.

------------------------------------------------------------------------

## Design Philosophy

CRYPT is intentionally designed around a few guiding principles:

-   **Small systems over large content pools**
-   **Deterministic behavior for reproducibility**
-   **Readable and modular code**
-   **Procedural storytelling through mechanics**

Rather than building a large content-heavy game, the project explores
how far a small set of well-designed systems can go.

------------------------------------------------------------------------

## Why Deterministic RNG Matters

Using deterministic randomness allows:

-   exact reproduction of bugs and edge cases
-   sharing seeds between players
-   debugging procedural systems more easily
-   building layered systems that rely on predictable randomness

This makes the game behave more like a **simulation driven by a seed**
rather than a sequence of uncontrolled random events.

------------------------------------------------------------------------

## Inspiration

The project draws inspiration from:

-   classic roguelikes
-   old-school dungeon crawlers
-   tabletop RPG encounter tables
-   bleak low-fantasy adventure settings
