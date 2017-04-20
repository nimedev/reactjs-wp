# ReactJS Seed

> A starting point for building web applications with ReactJS using ES6, Webpack and PostCSS.


## Prerequisites

- [Node.js](https://nodejs.org/en/download/).
- [npm](https://www.npmjs.com/), installed with Node.js.
- [yarn](https://yarnpkg.com/) a package manager for project dependencies.


## Install dependencies

#### 1) Check `Node.js` version.

```sh
node --version
```
The version should be at or above 6.9

If you don't have Node.js installed go to [nodejs](https://nodejs.org/en/download/) and install the appropiate version or use [nvm](http://www.sergiolepore.net/2014/06/30/nvm-instalando-y-usando-node-version-manager/) (Recommended).

#### 2) Check `yarn` version.

```sh
yarn --version
```
The version should be at or above 0.20.0

If you don't have yarn installed go to [yarn](https://yarnpkg.com/en/docs/install) and install the appropiate version.


## Workflow

### Environment variables

```sh
##
# reactjs-wp environment variables
##

# Host configuration
## Environment for server.
export NODE_ENV="development"
## Host of webapplication.
export REACTJS_HOST=localIP
## Port of webapplication.
export REACTJS_PORT=3000

# Access URLs
## Url of API.
export REACTJS_API_URL="http://${ip.address()}:${8080}/api"
```

You can copy this script in bashrc file, modify the variables and delete variables that don't need modification or are undefined.

To change any of this variables:

```sh
export REACTJS_PORT=8000
```

### Development workflow

#### Install the workspace dependencies.

```sh
# cd to project folder
yarn
```

#### Static server with live reload
Create a server using `webpack-dev-server` to serve the application in development environment.
The browser reloads the app when any file change:

```sh
# cd to project folder
yarn start
# After this, a message indicate the url to run the application
```

### Production workflow

You can use two ways:

#### The repository is in `production` server
- Set the environment variables with production values. `export NODE_ENV='production'`, ...
- Run:

```sh
# cd to project folder
# Install the workspace dependencies.
# This npm script force the installation of development dependencies.
yarn install:dev

# Build
yarn build
```
After run this script the `dist` folder is ready for production.
> Run the previous script again every time that update the repository.

#### Build in `development` environment and upload the files to production server.
- Verify that all dependencies are installed.
- Set the environment variable with production values
- Build the application

```sh
# cd to project folder
yarn build
```
After this, all files are ready in `dist` folder to upload in any production server.

:warning: Reset the environment variables to `development` values.

### Install/Uninstall/Update dependencies
Follow this rules to update dependencies:

- Install dependencies

```sh
# To install production dependencies
# cd to project folder
yarn add react-router --exact

# To install development dependencies
# cd to project folder
yarn add eslint --exact --dev
```

- Uninstall dependencies

```sh
# cd to project folder
yarn remove react-router
```

- **To Upgrade any dependencies follow `Uninstall dependencies` step and install again like `Install dependencies`.**

### Others scripts

To run eslint in console type:

```sh
# cd to project folder
yarn lint
```


## Style Guides

### JavaScript

**[Nimedev JavaScript style guide](https://github.com/nimedev/javascript)**.

### ReactJS

**[Airbnb React/JSX style suide](https://github.com/nimedev/javascript/tree/master/react)**.

### CSS

**[niduscss-framework](https://github.com/nimedev/niduscss-framework)**.

**[SuitCSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)**.


## [Contributing](CONTRIBUTING.md)


## [Changelog](CHANGELOG.md)


## [License](LICENSE.md)
