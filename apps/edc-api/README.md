CLI command to create this app

```bash
nx g @nx/nest:application --directory=apps/edc-api --linter=eslint --name=edc-api --strict=true --tags="type:app, domain:api" --unitTestRunner=jest --e2eTestRunner=jest --useProjectJson=true
```

Generate this app after creating the initial Angular app, so that there are less version conflicts.
