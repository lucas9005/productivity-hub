# 🚀 Productivity Hub — Frontend Scripts Reference

## `ng`

```sh
ng
```

> Shortcut to invoke Angular CLI.

## `start:dev`

```sh
ng serve --configuration development
```

> Start the Angular app using the development configuration with live reload.

## `start:prod`

```sh
ng serve --configuration production
```

> Start the Angular app using the production configuration with live reload.

## `build:dev`

```sh
ng build --configuration development
```

> Build the Angular app using the development configuration.

## `build:prod`

```sh
ng build --configuration production
```

> Build the Angular app using the production configuration.

## `build:watch:dev`

```sh
ng build --watch --configuration development
```

> Build the Angular app on changes using the development configuration.

## `build:watch:prod`

```sh
ng build --watch --configuration production
```

> Build the Angular app on changes using the production configuration.

## `test`

```sh
jest
```

> Run unit tests using Jest.

## `test:watch`

```sh
jest --watch
```

> Run unit tests with live reload.

## `test:coverage`

```sh
jest --coverage
```

> Run unit tests and generate code coverage report.

## `test:ci`

```sh
jest --ci --runInBand --coverage 
```

> Run unit tests in CI mode with sequential execution and generate code coverage report.

## `docs`

```sh
compodoc -p tsconfig.docs.json -d documentation -s
```

> Build and serve the Angular documentation using Compodoc.

## `docs:build`

```sh
compodoc -p tsconfig.docs.json -d documentation
```

> Build the Angular documentation using Compodoc.
