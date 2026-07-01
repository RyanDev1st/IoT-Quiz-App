---
description: Scaffold or refresh a project's AGENTS.md from the full Agent-Workspace template, filled from the real repo
---

Update this file with the context at hand
# /init-project — create or refresh this project's AGENTS.md

Run this in a new project, or when the project's `AGENTS.md` is missing, empty, or a stub.
If a real, project-specific `AGENTS.md` already exists, do NOT overwrite it — follow it and amend only as the project changes.

## Procedure

1. Check the project root for `AGENTS.md`. Missing / empty / stub → build it from the template below.
2. Fill from the ACTUAL repo. Read `package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod` / `Makefile` / the directory tree, and replace every `[bracketed]` placeholder with real values: project name, goal, build & test commands, real paths.
3. **Adapt, do not impose.** The template assumes a multi-folder `src/` app. If reality differs — single-file script, mandated lab layout, notebook, library, monorepo — keep the spirit (Mission, Repository map, Build/Run, Verification) and rewrite or drop sections that don't fit. A map that lies about the project is worse than no map.
4. **Seed `.gitignore`.** Ensure a `.gitignore` exists at root; create it or extend it to cover secrets + throwaways + local agent files — never commit those. Minimum:
   ```gitignore
   # secrets / local
   .env
   .env.*
   *.pem
   .claude/settings.local.json
   .claude/worktrees/
   # throwaways (the scratch_* convention)
   scratch_*
   # caches / build (add per language)
   __pycache__/
   *.pyc
   node_modules/
   dist/
   build/
   ```
5. Say in one line that you created/refreshed `AGENTS.md`, then carry on with the user's request.

---

## BEGIN TEMPLATE FOR PROJECT `AGENTS.md`

# [Project Name] — Agent Workspace

Project memory for Claude Code and other agents. Loaded every session. Keep **under 200 lines**, signal-dense, and verifiable. Update this file when layout, commands, or rules change.

<!-- Maintainer: add path-scoped rules under .claude/rules/ when this file grows. -->

## Mission

Ship **working software** for [Core Project Goal/Domain] using strict Domain-Driven modularity.

| In scope | Out of scope (unless user says otherwise) |
| --- | --- |
| Implementation, integration, release-quality behavior | Toy or simulated backends (label test fixtures explicitly) |
| Strict Folder-by-Feature Separation of Concerns (SoC) | Secrets in repo, commits, or chat |

## Repository map

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Team agent instructions (this file) |
| `docs/` | Documentation, organized by lifecycle. Index = `docs/README.md` |
| `docs/reference/` | How the system works **now** — architecture, contracts, designs (mutable in place) |
| `docs/findings/` | Dated audits / triage / inspections / reports (immutable; supersede by date) |
| `docs/legacy/` | Superseded docs — archive (move here, never delete) |
| `src/` | Primary source code directory (Feature/Domain folders only) |
| `tests/` | Test suites matching the `src/` hierarchy exactly |
| `scripts/` | Tooling, build, and automation scripts |
| `docs/adr/` | Architecture Decision Records — one short file per non-obvious decision (the *why*) |
| `.claude/` | Agent context, custom skills, and path-scoped rules |

**Root policy:** Only `AGENTS.md`, `.gitignore`, standard setup files (e.g., `package.json`, `pyproject.toml`), CI/CD directories (e.g., `.github/`), and containerization files (e.g., `Dockerfile`, `.dockerignore`) at repo root. All feature code MUST live in scoped directories under `src/`.

## Product principles

### File size (hard cap)
- No code source file may exceed **[200-500] lines** (imports and blank lines count); pick the exact cap per project.
- If a change would exceed this cap: split into additional files under the **same feature folder**, creating a logical hierarchy (e.g., `api.py`, `core.py`, `utils.py`). Never bypass the cap with comments or string concatenation.
- **Exceptions:** Purely declarative configuration maps, large static dictionaries, or router registries where splitting actively degrades readability.

### Feature colocation & Hierarchical Nesting (Strict)
- **Deep Modularity:** Do not create a flat, bloated `src/` directory. Group related domains into a logical tree structure.
- One macro-capability → **one parent directory**. Sub-capabilities MUST be extracted into **nested sub-directories** (e.g., `src/auth/session/`, `src/auth/mfa/`).
- **Refactor Trigger:** If a single folder accumulates more than 5-7 files, it lacks cohesion. You MUST extract related logic into a new nested sub-directory within that parent.
- All code, interfaces, tests, and local docs of the exact same sub-domain stay in their specific nested folder.
- If generating a new helper, type, or function for a specific sub-feature, it MUST go in that exact nested directory. **Do not dump domain-specific logic into a global `utils/` or `types/` folder.**

```text
  [WRONG - Flat & Bloated]      [CORRECT - Nested & Modular]
  src/                          src/
  ├── auth_login/               └── auth/
  ├── auth_mfa/                     ├── login/
  └── auth_session/                 ├── mfa/
                                    └── session/
```
- Multi-Nested is acceptable and readability as well as searchability is prioritized.

### File placement & lifecycle (where does this go?)

Decide the home BEFORE creating a file — never default to repo root or a "misc" pile.

| Kind of file | Goes to | Lifecycle |
| --- | --- | --- |
| Shippable code | `src/<feature>/…` (nested feature folder) | — |
| Test | `tests/` mirroring `src/` | — |
| How a thing works **now** (architecture, contract, design) | `docs/reference/<topic>.md` (no date) | mutable in place |
| Dated audit / triage / inspection / report | `docs/findings/YYYY-MM-DD-<topic>.md` | immutable; supersede by newer date → `docs/legacy/` |
| Non-obvious decision (the *why*) | `docs/adr/NNNN-title.md` | immutable; reverse via a new ADR |
| Cross-session lesson / preference / gotcha | memory (`MEMORY.md` row + one-fact file) | update file; delete if wrong |
| Throwaway / experiment / probe / sample output | `scratch_*` (gitignored prefix) | promote w/ refs or delete before "done" |
| Generated artifact (model, build, large data) | gitignored data dir | never committed unless a documented fixture |

**Each `docs/` bucket has a one-line `README.md` stating its shape + lifecycle.** `docs/README.md` is the single index. **Lessons live in memory, not a `docs/experience` folder.** `scratch_*` files are temporary by contract — promoted (with refs) or deleted; they never survive a "done".

### Workspace hygiene (required before "done")
1. No new root-level files except those defined in the **Repository map**.
2. No `_copy`, `_old`, `temp`, or duplicate scripts.
3. Every new path is referenced by code, tests, or docs in the same change set.
4. New top-level or feature folder → add one row to **Repository map** in this file in the same change set.
5. No stray `scratch_*` throwaways committed or left in `src/`; `docs/README.md` index and memory updated if a durable doc or fact emerged.

### Findings & reports (required layout)
- **Prefer the smallest durable home first:** should this update a `reference/` doc (investigation then dies) or become an ADR? Write a dated finding only when the snapshot itself has lasting value (e.g. an experiment/eval log) — don't let `findings/` rot into a graveyard.
- Path: `docs/findings/YYYY-MM-DD-<topic>.md` (a tool that emits a report writes a fresh dated file here — never overwrites a `reference/` or archived doc).
- Line 1: `Parent: <relative-path>` or `Parent: none`. Sections in order: **Status**, **Scope**, **Evidence** (commands + outcomes), **Next** (numbered list).
- Same topic, newer date → write a fresh file and `git mv` the prior one to `docs/legacy/` (move, never delete); update the `docs/README.md` index in the same change.

## Verification

Agents perform best with explicit success criteria. Before claiming completion:

| Check | Command / rule |
| --- | --- |
| Tests | `[Insert primary test command here, e.g., npm test, pytest]` or the path named in the task |
| Lint / Typecheck | Use project-standard commands when present; do not invent new tooling |
| Behavior | State expected output; if tests do not exist, give a manual repro the user can run |
| UI (if applicable) | Screenshot or browser snapshot compare against stated expectation |

If verification fails, fix or report the failure with the failing command and error excerpt. Do not claim "done" on assumptions.

## Engineering Standards

- **Secrets:** Never paste keys, cookies, tokens, or private URLs. Before any commit, confirm `.gitignore` covers `.env`, `.claude/settings.local.json`, and any generated key materials.
- **Dependencies:** Prefer the existing stack; justify new dependencies or external packages in the PR or report.
- **Real backends:** Integrations must hit real services or documented local runtimes—not silent mocks—in production paths.

## Agent Orchestration & Workflow

- **Orchestrator Loop:** Use a structured `Discuss → Plan → Execute → Verify` workflow for any multi-step task.
  - **Plan:** Map the codebase, align on constraints, and compile a token-bounded, actionable plan document *before* writing code.
  - **Execute:** Spawn specialized sub-agents to implement tasks concurrently where possible (max ~4 concurrent threads). **Warning: If sub-agents are writing to the exact same feature directory, force sequential execution to prevent git lock collisions and state drift.**
  - **Verify:** Use a backward-looking verification step. Did we actually meet the goal stated in the plan? Run tests and visual checks.
- **Drift & State Sync:** Regularly audit execution progress against the active plan document. If reality drifts from the plan due to discovered constraints, **update the plan document** if the pivot is safe and retains original intent. If the pivot is risky, halt and consult the user.
- **Team Convention:** After tasks are confirmed with the user, respond **AYE** once that turn.
- **Resilience:** If a subagent fails identically >3 times, the orchestrator must halt the local loop, record the failure state, and escalate to the user with a specific blocker description.

## Git and Delivery

- **Commit** every turn.
- **Push / PR** only when the user explicitly requests it.
- Commit messages: Follow conventional commits (`feat:`, `fix:`, `refactor:`). One logical change per commit; subject states *why*.
- Never commit secrets, `.env`, or large generated artifacts unless they are intentional, documented fixtures.

## Maintaining this file

Add a rule here when an agent makes the **same mistake twice** or you repeat the same correction across sessions. Remove stale rows from the **Repository map** when folders are deleted. Prefer `.claude/rules/<topic>.md` with `paths:` frontmatter for file-type-specific rules instead of growing this file past 200 lines.
