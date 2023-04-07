# Emby Data Check Tool

[![GitHub](https://img.shields.io/github/license/jfandy1982/emby-data-check?logo=GitHub)](https://github.com/jfandy1982/emby-data-check/blob/main/LICENSE.md)
[![CI Pipeline](https://github.com/jfandy1982/emby-data-check/actions/workflows/continuous_integration_checks.yml/badge.svg?branch=main&event=push)](https://github.com/jfandy1982/emby-data-check/actions/workflows/continuous_integration_checks.yml)
[![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/jfandy1982_emby-data-check/main?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/project/overview?id=jfandy1982_emby-data-check)
[![Docker Image Size](https://img.shields.io/docker/image-size/jfandy1982/edc-api/latest?label=API&logo=docker)](https://hub.docker.com/repository/docker/jfandy1982/edc-api)
[![Docker Image Size](https://img.shields.io/docker/image-size/jfandy1982/edc-ui-ng/latest?label=UI&logo=docker)](https://hub.docker.com/repository/docker/jfandy1982/edc-ui-ng)
[![Docker Image Size](https://img.shields.io/docker/image-size/jfandy1982/edc-ui-ngx/latest?label=UI&logo=docker)](https://hub.docker.com/repository/docker/jfandy1982/edc-ui-ngx)

The project contains an Angular Material Web Frontend component and a NestJS Backend API. The NestJS Backend API itself interacts with the API of concrete Emby Media Server available in the local network. Data is backed up in a separate postgres database.

The components are exposed as containerized apps and can be composed into an application stack. During development, I am executing them together in one stack. But having them also available as containers, also other stack might be set up in the future.

An end user documentation for this specific Emby Data Check Tool is published [here](https://jfandy1982.github.io/emby-data-check/) - it is still 'work in progress'. For more detailed information about the Emby Media Server itself, visit its website [emby.media](https://emby.media/).

## Motivation

I am using Emby Server running as an application on a NAS server, where also my media files are stored.
The Emby Server allows to stream media files on various devices within the LAN, for example mobile devices or Kodi installations. I see the main advantage for that in a centralized meta data maintenance.

But a few use cases don't work for me that perfect yet. For example, let's take the detection of meta data for German TV shows containing special characters like 'ä', 'ö' or 'ü' (the German 'Umlaute'). The scraping feature of Emby Server sometimes identifies completely wrong meta data records. Features of available plugins for the Emby Media Server are not covering all use cases as well.

Another use case is the comparison of tags stored for individual media items or watch states against a corresponding snapshot. That is especially important for data migrations.
I also tested [trakt.tv](https://trakt.tv/) to synchronize watch states of my media files, but that is not working very consistently for me.

My main target is checking some selected values of my media items against a snapshot.

It might be wrong to implement that on my own, because there might be already tons of other implementation projects covering the same topic.
But I see that as a learning opportunity to develop in the area of the "cool new stuff" using 'modern' technologies like Node.js, Typescript as well as Angular UI.

## Installation

This repository itself is set up as a monorepo using [Nx technology](https://nx.dev/). It stores all required components within one repository and allow for a consistent dependency management.

_Remark_: Currently, I only offer one option to set up a development environment. It might change in the future - similar to the previously offered VSCode DevContainer.

- Option: Use locally set up Node.js etc.:

Although the versions of the dependencies listed in file `package.json` are fixed currently, the system-wide setup might become an issue. As frequency of released versions is quite high, some of the system-wide dependencies might be outdated (or newer versions are breaking the implementation).

These are the steps and requirements to start development:

1. Make sure, you've installed required tools Node.js, Git, Docker, Docker-Compose on your development machine.
   1. Globally installed NPM packages in my personal setup are:
      1. @angular/cli
      2. @nestjs/cli
      3. mega-linter-runner
      4. nodemon
      5. npm
      6. npm-check
      7. nx
      8. ts-node
      9. typeorm
      10. typescript
2. Clone this repository into a folder of your choice.
3. Navigate into that cloned folder (containing the file `package.json`).
4. Run command `npm install`.
5. Use your code editor of your choice.

Finally, there is nothing left to say than "Happy coding..."

## Usage

After performing the steps described in section [Installation](#installation), you may start a development stack by one the following commands. Only one stack can run at once locally.

Angular Material UI:

```bash
npm run start:stack:ng:dev
```

SAP Fundamentals UI:

```bash
npm run start:stack:ngx:dev
```

This starts the development stack comprising of:

1. Postgres Database Container
2. PgAdmin Container (UI to manage the Postgres Database)
3. NestJs Backend API
   1. Use [http://localhost:3000/api/](http://localhost:3000/api/) to access the API endpoints
   2. A Swagger API documentation is available at [http://localhost:3000/swagger/](http://localhost:3000/swagger/)
4. Angular Web UI
   1. Use [http://localhost:4200/](http://localhost:4200/) to access the UI locally

The development server restarts after each saved change of a source code file. Changing configuration files may require to stop the development server (usually [CTRL+C]) and start it again.

## Keep the dependencies up-to-date

There are some places, which define dependencies for the project. Especially, version updates of the dependencies need to be managed reasonably. The target is to keep the fixed version numbers in sync across the repository.

1. Dependencies defined in `package.json`:

The first step to update project dependencies should always be the NPM script `npm run upgrade`. That will upgrade the Nx workspace to a newer version. That also may trigger required migrations of workspace-related files.

After the Nx workspace is upgraded, the dependencies might get their remaining updates. Use the NPM script `npm run cleanup` to cleanup generated folders and files before executing an `npm install`.

Finally, the VSCode extension `Version Lens` shown in the file `package.json` in the code editor helps spotting missing package updates.
Additionally, the CLI command `npm-check -u` generates an interactive list of updated dependencies from `package.json`-file.

2. Project-specific node version defined in `.nvmrc`:

That definition is used by a locally installed [Node Version Manager](https://github.com/nvm-sh/nvm). Additionally, that definition is referenced in the Github Workflow for the CI/CD pipeline. The change of the version value should also be done in the docker files stored in directory `/docker`.

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
