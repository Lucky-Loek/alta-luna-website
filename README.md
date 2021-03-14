# Alta Luna website

This repo contains the website for Dutch indierock band Alta Luna, hosted at [https://altalunaband.com](https://altalunaband.com)

## Installation

A Docker installation is possible. If you'd like to work locally, then just remove the `docker-compose` bits from the commands.

```
$ docker-compose up -d
$ docker-compose exec app npm install
```

## Usage

Two important rules:

1. All edits go in the `src` folder;
2. The result goes in the `dist` folder. As such, this is the folder you need to test during development.

```
$ docker-compose exec app npm run dev
# If you want webpack to autocompile changes: npm run watch

# Test

# Prepare for production
$ docker-compose exec app npm run prod
```

## License

The code in this repository in licensed MIT. All creative works (photos, videos, music) on the website itself are copyrighted by Alta Luna. Please contact us at [info@altalunaband.com](mailto:altalunaband.com) if you would like to use our works.
