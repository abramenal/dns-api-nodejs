# dns-api-nodejs

A drone navigation service for Atlas Corp.

## Setting up project locally

### Prerequisites

This project is built with Node.js and npm – use your favorite approach for installing it (direct download, nvm, homebrew, etc.). Please make sure to install proper Node.js version which could be found in [package.json](package.json)

### Installation

Change directory to the project's root folder, then execute:

```bash
npm install
```

### Configuration & startup

Sensitive app configuration is kept using ENV variables concept along with [dotenv][dotenv] package. Make sure you've created `.env` file in the project's root folder and defined all required variables (see [.env.example](.env.example))

To start the app, simply run:

```bash
npm run dev
```

## Documentation

### Design definition

In a nutshell, the service is built with microservice approach, DDD and clean architecture in mind. To learn more about it, please see [architecture.md](./docs/architecture.md).

### API documentation

This project uses [Swagger OpenAPI][swagger] specification which essentially describes the contracts this service has support for. In order to see the spec, please navigate to [Swagger Editor][swagger-editor] and import [swagger.yml](./docs/swagger.yml) file.

## Testing

In testing mode, ENV variables are loaded from `.env.test` file. It is similar to `.env` except it never contains any real sensitive data (tokens, credentials, etc.) but rather dummy data just to ensure application behaves normally.

### Unit tests

Unit tests are written and executed with [Jest][jest] testing frameworks which provides wide set of features for assertions, mocks, code coverage settings out of the box. In order to run unit tests, use the following command:

```bash
npm run test:unit
```

### Integration tests

Integration tests are written with [light-my-request][light-my-request] package and executed with [Jest][jest]. This tool hooks up with root web server object and provides API test RESTful API endpoints without having server app to listen to specific port.

This type of tests help to assert the whole flow from a black box perspective.

Inorder to run integration tests, use the following command:

```bash
npm run test:integration
```

## Security audit

There are couple of tools being set up in order to be protected from major source code vulnerabilities:

- [npm-audit][npm-audit] which is built-in with npm
- [snyk][snyk] security audit: `npm run test:security`

In order to run security audit locally, run following commands:

```bash
npm audit

npm run test:security
```

## Building the project

### Local production-like environment

```bash
npm run build

npm start
```

### Wrapping up with [Docker][docker]

```bash
docker build --rm -t dns-api-nodejs .

docker run -p 8000:8000 dns-api-nodejs
```

## License

[MIT][mit]

[mit]: https://opensource.org/licenses/MIT
[npm-audit]: https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities
[snyk]: https://snyk.io/
[jest]: https://jestjs.io/
[dotenv]: https://www.npmjs.com/package/dotenv
[light-my-request]: https://www.npmjs.com/package/light-my-request
[docker]: https://docs.docker.com/
[swagger]: https://swagger.io/resources/open-api/
[swagger-editor]: https://editor.swagger.io/
