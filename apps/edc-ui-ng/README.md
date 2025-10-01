CLI command to create this app

```bash
nx g @nx/angular:application --directory=apps/edc-ui-ng --name=edc-ui-ng --backendProject=edc-api --e2eTestRunner=cypress --unitTestRunner=jest --linter=eslint --port=4200 --prefix=edc-ng --style=scss --bundler=webpack --tags="type:app, domain:edc-ui-ng, ui:angular"
```

The generated e2e app has been renamed and then copied to cover the cypress-approach but also the cucumber-approach.

Ending the app name by '-e2e' is important for Nx as well as this is the naming convention to detect it as project type 'e2e'. Otherwise, it is a regular Nx app.

Create this as a first app in the Nx Workspace, so that less version conflicts arise.
