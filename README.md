
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

## Library Overview

* `axios` just-works http client (https://github.com/axios/axios)
* `formik` simple forms (https://jaredpalmer.com/formik)
* `reach router` dead-simple routing (https://reach.tech/router)
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
