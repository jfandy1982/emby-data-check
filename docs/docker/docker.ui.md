# Emby Data Check Tool - UI

For detailed information, check out the repository [jfandy1982/emby-data-check](https://github.com/jfandy1982/emby-data-check/) hosted on Github.

## How to use this image

The image contains a Nest.js API server (currently still Node.js + Express). It exposes REST API endpoints for checking data of an Emby Media Server. No example data is provided.
It requires a running Emby Media Server within the LAN.

Spawn a container by:

```bash
docker run -p 4200:4200 jfandy1982/emby-data-check-ui:latest
```

## License

Check-out the license in the file [LICENSE.md](https://github.com/jfandy1982/emby-data-check/blob/main/LICENSE.md) stored in the Github repository.
