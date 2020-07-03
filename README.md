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

## Testing

### Unit tests

Unit tests are written and executed with [Jest][jest] testing frameworks which provides wide set of features for assertions, mocks, code coverage settings out of the box. In order to run unit tests, use the following command:

```bash
npm test
```

### Security audit

There are couple of tools being set up in order to be protected from major source code vulnerabilities:

- [npm-audit][npm-audit] which is built-in with npm
- [snyk][snyk] security audit: `npm run test:security`

In order to run security audit locally, run following commands:

```bash
npm audit

npm run test:security
```

## Building the project

TBD

## License

[MIT][mit]

[mit]: https://opensource.org/licenses/MIT
[npm-audit]: https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities
[snyk]: https://snyk.io/
[jest]: https://jestjs.io/
[dotenv]: https://www.npmjs.com/package/dotenv
