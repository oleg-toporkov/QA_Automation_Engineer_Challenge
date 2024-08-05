# QA Automation Engineer Challenge #
Web UI tests in using page object pattern
REST API tests using Supertest


### Based on ###

* [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
* [Playwright](https://github.com/microsoft/playwright) - Node library to automate e2e browser tests
* [Jest](https://jestjs.io/) - Test framework and assertions
* [Allure](https://allurereport.org/docs/) - Nice reports :)
* [Supertest](https://github.com/visionmedia/supertest) - REST API testing automation tool


### Prerequisites ###

* [JDK](https://openjdk.org/install/)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

### Set up ###

First, install all dependencies using running [NPM](https://www.npmjs.com/) from root folder as current working directory

```
#!bash
npm install
```

Then install browser packages 

```
npx playwright install
```


### Running tests ###

Run all tests

```
#!bash
npm run test
```


### Running report ###

Run the following command from project root

```
#!bash
npm run allure-report
```

## Problems found UI
1. No email validation during the signup
2. No user details validation (can be just a whitespace etc.)


## Testing code improvements
* Add JSON schema validation
* Add more logging and reporting bindings (for steps etc)
* DTOs for web services could be reused from dev code (if any)
* Split one file with UI tests
* Create one account for UI tests and reuse it as much as possible
* Move browser init to other place
* See other TODOs ¯\_(ツ)_/¯ 