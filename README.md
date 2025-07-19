# Emby Data Check Tool

## Motivation

I am using Emby Server running as an application on a NAS server, where also my media files are stored.
The Emby Server allows to stream media files on various devices within the LAN, for example mobile devices or Kodi installations. I see the main advantage for that in a centralized meta data maintenance.

But a few use cases don't work for me that perfect yet. For example, let's take the detection of meta data for German TV shows containing special characters like 'ä', 'ö' or 'ü' (the German 'Umlaute'). The scraping feature of Emby Server sometimes identifies completely wrong meta data records. Features of available plugins for the Emby Media Server are not covering all use cases as well.

Another use case is the comparison of tags stored for individual media items or watch states against a corresponding snapshot. That is especially important for data migrations.
I also tested [trakt.tv](https://trakt.tv/) to synchronize watch states of my media files, but that is not working very consistently for me.

My main target is checking some selected values of my media items against a snapshot.

It might be wrong to implement that on my own, because there might be already tons of other implementation projects covering the same topic.
But I see that as a learning opportunity to develop in the area of the "cool new stuff" using 'modern' technologies like Node.js, Typescript as well as Angular UI.

## License

Check-out the license in the file [LICENSE.md](LICENSE.md) within this repository.

## Contributing

Thanks for taking the time to read this file until the end. As in every project, there need to be at least some kind of guideline, how to collaborate and contribute. Please check out the [CONTRIBUTING.md](https://github.com/jfandy1982/.github/blob/main/CONTRIBUTING.md) to get more details about possibilities to contribute.
