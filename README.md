# Spark Blue Poppins Theme (@sphnl/volto-sphnl25-theme)

Spark Holland intranet theme 2025

[![npm](https://img.shields.io/npm/v/@sphnl/volto-sphnl25-theme)](https://www.npmjs.com/package/@sphnl/volto-sphnl25-theme)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://ghnire.github.io/volto-sphnl25-theme/)
[![Code analysis checks](https://github.com/ghnire/volto-sphnl25-theme/actions/workflows/code.yml/badge.svg)](https://github.com/ghnire/volto-sphnl25-theme/actions/workflows/code.yml)
[![Unit tests](https://github.com/ghnire/volto-sphnl25-theme/actions/workflows/unit.yml/badge.svg)](https://github.com/ghnire/volto-sphnl25-theme/actions/workflows/unit.yml)

## Features

<!-- List your awesome features here -->

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @sphnl/volto-sphnl25-theme
cd my-volto-project
```

Add `@sphnl/volto-sphnl25-theme` to your package.json:

```JSON
"addons": [
    "@sphnl/volto-sphnl25-theme"
],

"dependencies": {
    "@sphnl/volto-sphnl25-theme": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

### Volto 18 and later

Add `@sphnl/volto-sphnl25-theme` to your `package.json`:

```json
"dependencies": {
    "@sphnl/volto-sphnl25-theme": "*"
}
```

Add `@sphnl/volto-sphnl25-theme` to your `volto.config.js`:

```javascript
const addons = ['@sphnl/volto-sphnl25-theme'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@sphnl/volto-sphnl25-theme';
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

Crafted with care by **Generated using [Cookieplone (0.8.2)](https://github.com/plone/cookieplone) and [cookiecutter-plone (d9b5293)](https://github.com/plone/cookiecutter-plone/commit/d9b52933cbc6efd137e93e35a270214e307359f0) on 2025-01-25 09:25:40.913491**. A special thanks to all contributors and supporters!
