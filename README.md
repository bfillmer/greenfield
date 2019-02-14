
# Greenfield

Opinionated application organization and libraries for bootstrapping new React-based applications.

Build pipeline provided by [Create React App](https://github.com/facebookincubator/create-react-app).

## Commands

```bash
npm i # install dependencies
npm start # development server
npm test # Jest in watch-mode
npm run lint # fix basic linting errors
npm run build # production build
```

All commands use `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports in source code.

## Commit Hooks
Husky commit hooks are setup by default to attempt to run a static build on any commit. This ensures that everything has been linted and a build would be successful if the code went to production.

While this boilerplate does not have tests, if any were added the husky configuration in `package.json` should be changed to:

```json
"husky": {
  "hooks": {
    "pre-commit": "npm run ci-build && npm run ci-test"
  }
}
```

## Library Overview

* `axios` just-works http client (https://github.com/axios/axios)
* `reach router` dead-simple routing (https://reach.tech/router)
* `styled-components` css-in-js (https://www.styled-components.com)
