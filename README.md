# Emby Data Check Tool

[![GitHub](https://img.shields.io/github/license/jfandy1982/emby-data-check?logo=GitHub)](https://github.com/jfandy1982/emby-data-check/blob/main/LICENSE.md)

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

Emby Data Check UI application using Angular Material design system. It also spins up the REST API and connects to a PostgreSQL container executed locally.

The API is exposed via [http://localhost:3000/api](http://localhost:3000/api). A swagger API documentation can be reached via [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger). The UI is available via [http://localhost:4200](http://localhost:4200)

Start this stack using the script from `package.json`:

```sh
npm run stack:ng
```

### edc-ui-ngx

Emby Data Check UI application using SAP Fundamentals design system. It also spins up the REST API and connects to a PostgreSQL container executed locally.

The API is exposed via [http://localhost:3000/api](http://localhost:3000/api). A swagger API documentation can be reached via [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger). The UI is available via [http://localhost:4201](http://localhost:4201)

Start this stack using the script from `package.json`:

```sh
npm run stack:ngx
```

### edc-ui-nord

Emby Data Check UI application using SAP Fundamentals design system. It also spins up the REST API and connects to a PostgreSQL container executed locally.

The API is exposed via [http://localhost:3000/api](http://localhost:3000/api). A swagger API documentation can be reached via [http://localhost:3000/api/swagger](http://localhost:3000/api/swagger). The UI is available via [http://localhost:4202](http://localhost:4202)

Start this stack using the script from `package.json`:

```sh
npm run stack:nord
```

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
