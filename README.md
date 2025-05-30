# Emby Data Check Tool

[![GitHub](https://img.shields.io/github/license/jfandy1982/emby-data-check?logo=GitHub)](https://github.com/jfandy1982/emby-data-check/blob/main/LICENSE.md)
[![CI Pipeline](https://github.com/jfandy1982/emby-data-check/actions/workflows/ci_pipeline.yml/badge.svg?branch=main&event=push)](https://github.com/jfandy1982/emby-data-check/actions/workflows/ci_pipeline.yml)

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

## Local development

After cloning the repository locally, navigate into the new folder containing the file `package.json`. Run an initial

```sh
npm install
```

Create an environment configuration file `.env` in the root folder. Use the provided file `.env.sample` as a template to configure some settings.

_Remark:_ The applications can't be started in parallel. A running database container is shutdown and _NOT_ reused.

### edc-api

Emby Data Check API application exposes a REST API and connects to a PostgreSQL container executed locally. Use it, when working on the API only.

The API is exposed via [http://localhost:3000/api](http://localhost:3000/api). A swagger API documentation can be reached via [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger).

Start this stack using the script from `package.json`:

```sh
npm run stack:api
```

### edc-ui-ng

Emby Data Check UI application using [Angular Material](https://material.angular.io/) design system. It also spins up the REST API and connects to a PostgreSQL container executed locally.

The API is exposed via [http://localhost:3000/api](http://localhost:3000/api). A swagger API documentation can be reached via [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger). The UI is available via [http://localhost:4200](http://localhost:4200)

Start this stack using the script from `package.json`:

```sh
npm run stack:ng
```

### Upgrading to newer versions

As this repository is setup with Nx, upgrades for dependencies can be done using the Nx tooling itself.

Start the upgrade procedure using the script from `package.json`:

```sh
npm run upgrade
```

After completion of the first step, you're asked to check the file `package.json`. Sometimes, a file `migrations.json` is generated. If it is available, you may run the second upgrade script from `package.json`:

```sh
npm run upgrade:doit
```

If the file `migrations.json` was not created, you simply run an `npm install` command.

But a lot of the other dependencies are not updated automatically, but only manually.

### Generate new TypeORM migrations

There are a few scripts starting with name `typeorm:migration:` defined in `package.json`, so that TypeORM migrations can be processed easily. Generated migration files are stored within the `edc-api`-application.

- Create a new migration with name 'test'

```sh
npm run typeorm:migration:create --name=test
```

- Generate a new migration from the existing DB schema with name 'test'

```sh
npm run typeorm:migration:generate --name=test
```

- List pending migrations

```sh
npm run typeorm:migration:show
```

- Run pending migrations

```sh
npm run typeorm:migration:run
```

- Revert already processed migrations

```sh
npm run typeorm:migration:revert
```

### Cleanup scripts

As there are a lot of files generated or downloaded and cached, it sometimes helps to vanish these generated artifacts completed with a fresh `npm install` command. It makes sense to run this script from file `package.json`.

```sh
npm run cleanup:all
```

### Spellchecker scripts

This repository enables the [cSpell](https://cspell.org/) spellchecker tool. The domain-specific words for this project are recorded in an own dictionary. But a lot of default dictionaries are configured for the validation itself. There are two relevant scripts in the file `package.json`.

- Run the spell check itself: `npm run spell:check`
- Search a word in all dictionaries: `npm run spell:search:dict [word]`

The search option might identify a dictionary, which should be enabled for the project.

### Add new Nx apps into CI-workflow

Beside the automatic trigger, the CI-workflow of this repository can be triggered manually as well. New apps created in this Nx monorepo need to be added to the list of inputs for the `workflow_dispatch`-trigger. It should be an optional boolean value.

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
