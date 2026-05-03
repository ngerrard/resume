# Resume

Personal resume site built with Angular.

## Development server

### Prerequisites
- Node.js **22.x** (recommended via `nvs`)
- npm (comes with Node)

### Node version (NVS)
This repo pins Node via `.node-version`.

```powershell
nvs add 22
nvs use 22
nvs auto on
```

### Run locally

```powershell
npm install
npm run start
```

Then open `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```powershell
npm run build
```

## Running unit tests

```powershell
npm run test
```

For a single headless run (CI-friendly):

```powershell
npm run test:ci
```

## Running end-to-end tests

This project uses Playwright for e2e.

First-time setup (downloads browser binaries):

```powershell
npx playwright install --with-deps chromium
```

Run e2e:

```powershell
npm run e2e
```

## Further help

Angular CLI help:

```powershell
npx ng help
```
