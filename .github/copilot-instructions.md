<!-- Auto-generated starter for AI coding agents. Update after discovery. -->
# Copilot / AI agent guidance (starter)

Purpose
- Short: help an AI coding agent become productive in this repository quickly.
- Note: when this file was created no project source files were found in the workspace root. Use the discovery commands below first and update this document with concrete references.

Quick discovery (run from repo root)
- List tracked files: `git ls-files --exclude-standard` (identify manifests and entry points)
- Cross-platform file peek: `dir /s` (Windows) or `ls -laR` (Unix)
- Show recent commits: `git log --oneline -n 20`

Files & locations to open first (common indicators)
- JavaScript/TypeScript: `package.json`, `playwright.config.ts`, `src/`, `tests/`
- Python: `pyproject.toml`, `requirements.txt`, `src/`, `tests/`
- CI/workflows: `.github/workflows/`
- Containers & scripts: `Dockerfile`, `Makefile`, `scripts/`

Project-specific quick checks (if present)
- Playwright projects: look for `playwright.config.*` + `tests/` — test runner command is usually `npx playwright test`.
- Node projects: check `package.json` scripts for `test`, `start`, `build`.

What to extract and document
- Entrypoints: module/file used to start services (e.g., `main`, `index.js`, `src/main.py`).
- Build/test commands: exact `npm`, `pip`, or `make` commands used in CI or README.
- Service boundaries: independent folders or packages under `services/`, `packages/`, or `src/`.
- Configuration sources: `config/*.json`, `env` files, `.env`, or `process.env` usage.
- External integrations: any API clients, cloud SDKs, Docker images, or DB connection strings in config.

How to produce concise edits to this file
- If you find an existing `.github/copilot-instructions.md`, preserve any project-specific sections and only add/replace discovery results (commands, filenames, entrypoints).
- When merging, keep example run commands verbatim from `package.json` / CI YAML to avoid guesswork.

Conventions an agent should respect here
- Use exact commands found in manifests/CI; prefer copying rather than inferring.
- Prefer small, focused PRs: change one behavior or add one file at a time.
- Add tests only when there are existing test patterns to follow; mirror existing test runner and folder layout.

When information is missing
- Ask the human owner to point to the primary language (Node/Python), the test command, and any required secrets/credentials.
- If Playwright is likely (repo name contains "playwright"), propose `npx playwright test --list` as a safe read-only exploration step.

Examples (edit after discovery)
- If `package.json` exists: copy the `scripts.test` value here and the exact `node`/`npm` commands used in CI.
- If `playwright.config.ts` exists: reference its `projects` list and the `use` fixture configs to guide test runs.

Next steps for the agent that created this file
- Run the discovery commands above and update this file with concrete file paths and commands.
- Then run the test/build commands and report back failing suites or missing deps.

If anything here is unclear or incomplete, please update this file and notify the repository owner.
