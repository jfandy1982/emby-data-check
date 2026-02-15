# Emby Data Check Tool

<!-- Badges -->

<!-- Build & Quality -->

[![CI](https://github.com/jfandy1982/emby-data-check/actions/workflows/ci_pipeline_simple.yml/badge.svg)](https://github.com/jfandy1982/emby-data-check/actions/workflows/ci_pipeline_simple.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jfandy1982_emby-data-check&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jfandy1982_emby-data-check)
[![Coverage](https://codecov.io/gh/jfandy1982/emby-data-check/branch/main/graph/badge.svg)](https://codecov.io/gh/jfandy1982/emby-data-check)

<!-- Security & Maintenance -->

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jfandy1982_emby-data-check&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jfandy1982_emby-data-check)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Tech Stack -->

[![Node.js](https://img.shields.io/badge/node-22.21.1-brightgreen.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-10.9.4-blue.svg)](https://www.npmjs.com/)
[![Nx](https://img.shields.io/badge/Nx-22.5-orange.svg)](https://nx.dev/)
[![Angular](https://img.shields.io/badge/Angular-21.1-red.svg)](https://angular.io/)
[![NestJS](https://img.shields.io/badge/NestJS-11-ea2845.svg)](https://nestjs.com/)

> An opinionated validation tool for Emby Media Server metadata and watch states.

## Features

- ✅ **Metadata Validation** - Verify media metadata, especially for German content (Umlaute: ä, ö, ü)
- 📸 **Snapshot Comparison** - Compare current tags and watch states against snapshots
- 🔄 **Migration Support** - Ensure data consistency during migrations
- 🧪 **Comprehensive Testing** - Jest, Cypress, and Cucumber BDD tests
- 🎯 **Nx Monorepo** - Optimized builds with NestJS backend and Angular frontend

## Quick Start

```bash
# Install dependencies
npm install

# Create environment config
cp .env.sample .env

# Start full stack (API on port 3000, UI on port 4200)
npm run stack:ng
```

## Documentation

This repository uses a structured documentation approach for both humans and AI coding assistants.

**For AI Tools:**

- 🤖 **[CLAUDE.md](CLAUDE.md)** - Guidance for Claude Code and Cline (workspace commands, architecture, workflows)
- 🤖 **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - Instructions for GitHub Copilot
- 🤖 **[AGENTS.md](AGENTS.md)** - Nx-specific guidelines and MCP tools

**For Developers:**

- 📱 **[apps/edc-api/README.md](apps/edc-api/README.md)** - NestJS backend documentation
- 🖥️ **[apps/edc-ui-ng/README.md](apps/edc-ui-ng/README.md)** - Angular frontend documentation

**For Testing:**

- 🧪 **[apps/edc-api-e2e/README.md](apps/edc-api-e2e/README.md)** - API E2E tests (Jest)
- 🧪 **[apps/edc-ui-ng-cypress-e2e/README.md](apps/edc-ui-ng-cypress-e2e/README.md)** - UI E2E tests (Cypress)
- 🧪 **[apps/edc-ui-ng-cucumber-e2e/README.md](apps/edc-ui-ng-cucumber-e2e/README.md)** - UI BDD tests (Cucumber)

## Motivation

<details>
<summary>Why this project exists (click to expand)</summary>

I am using Emby Server running as an application on a NAS server, where also my media files are stored. The Emby Server allows to stream media files on various devices within the LAN, for example mobile devices or Kodi installations. I see the main advantage for that in a centralized meta data maintenance.

But a few use cases don't work for me that perfect yet. For example, let's take the detection of meta data for German TV shows containing special characters like 'ä', 'ö' or 'ü' (the German 'Umlaute'). The scraping feature of Emby Server sometimes identifies completely wrong meta data records. Features of available plugins for the Emby Media Server are not covering all use cases as well.

Another use case is the comparison of tags stored for individual media items or watch states against a corresponding snapshot. That is especially important for data migrations. I also tested [trakt.tv](https://trakt.tv/) to synchronize watch states of my media files, but that is not working very consistently for me.

My main target is checking some selected values of my media items against a snapshot.

It might be wrong to implement that on my own, because there might be already tons of other implementation projects covering the same topic. But I see that as a learning opportunity to develop in the area of the "cool new stuff" using 'modern' technologies like Node.js, Typescript as well as Angular UI.

</details>

## Local Development

### Initial Setup

```bash
npm install
cp .env.sample .env
```

### Upgrading

Upgrade Nx and dependencies:

```bash
npm run upgrade:nx:prepare    # Prepare Nx upgrade (interactive)
npm run upgrade:nx:doit       # Install new Nx version and apply Nx migrations, if needed
```

### Cleanup

Clean all caches as well as generated artifacts and reinstall dependencies:

```bash
npm run cleanup:all
```

### Spellchecker

Check spelling across the repository:

```bash
npm run spell:check:all                # Check all files
npm run spell:search:dict [word]       # Find word in dictionaries
```

## Development Notes

This Nx workspace has been created with version 21.6.2 CLI using this CLI command:

```bash
npx create-nx-workspace@latest --interactive --skipGit --aiAgents=copilot --preset=apps --name=emby-data-check
```

I used a separate script for that, which is not included in this repository. That script helps me to also install basic dependencies and generated config files, so that the initial setup is repeatable. It could be, that I add this in the future as well.

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
