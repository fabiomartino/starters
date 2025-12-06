# Ionic Angular Standalone Starter

This is a blank starter project for building mobile applications using Ionic and Angular with the standalone components architecture.

## About This Project

This project provides a clean, well-structured foundation for developing cross-platform apps. It is pre-configured with modern tools and best practices to ensure a smooth development workflow.

## Key Technologies

- **Ionic Framework v8**
- **Angular v20**
- **TypeScript**
- **Standalone Components**
- **SCSS** for styling

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. It is also recommended to have the Ionic CLI installed globally:

```sh
npm install -g @ionic/cli
```

### Installation

1.  Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd <repository-name>
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run the following commands:

- `npm start` or `ionic:serve`
  Runs the app in development mode. Open [http://localhost:8100](http://localhost:8100) to view it in the browser.

- `npm run build`
  Builds the app for production to the `www` folder.

- `npm test`
  Launches the test runner in interactive watch mode.

- `npm run lint`
  Lints the source code using ESLint.

* `npm run release`
  Creates a new version, generates a changelog, and tags the release.

## Environment Configuration

This project uses environment files to manage configurations for different deployment targets. You can find the environment files in `src/environments/`.

- `environment.ts`: Default environment, used for development.
- `environment.development.ts`: Specific environment for local development, used when running `npm start` or `ng serve`.
- `environment.prod.ts`: Production environment, used when building for production (`npm run build`).

To use a specific environment, Angular's build process automatically replaces `environment.ts` with the appropriate file based on the build configuration (e.g., `environment.prod.ts` for production builds, `environment.development.ts` for development builds).

## Path Aliases

To improve import readability and maintainability, this project uses path aliases configured in `tsconfig.json`.

- `@environments/*`: Alias for `src/environments/`. Example: `import { environment } from '@environments/environment';`
- `@services/*`: Alias for `src/app/services/`. Example: `import { ThemeService } from '@services/theme/theme.service';`

These aliases allow for cleaner and more absolute imports throughout the project.

## Continuous Integration

This project uses [GitHub Actions](https://docs.github.com/en/actions) for Continuous Integration (CI). A workflow is configured to automatically build, lint, and test the application on every push to the `master` branch and on every pull request.

The CI workflow ensures code quality and helps catch issues early in the development cycle. You can view the CI status and details in the [Actions tab](https://github.com/your-organization/your-repository/actions) of this repository.

## Contribution Guidelines

We welcome contributions to this project! To ensure a smooth collaboration, please follow these guidelines:

### Pull Requests

When submitting a Pull Request, please use the provided [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md). This template helps us understand your changes and ensures all necessary information is included.

### Reporting Issues

If you find a bug or have a feature request, please open an issue using the appropriate template:

- **Bug Report:** Use the [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) to provide detailed information about the bug you encountered.
- **Feature Request:** Use the [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md) to suggest new features or improvements.

Following these templates helps us to quickly understand and address your contributions.

## Commit Message Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to enforce a structured commit history. Additionally, code formatting is enforced using [Prettier](https://prettier.io/) and `pretty-quick` via a `pre-commit` hook.

All commits should be made using the `commitizen` assistant. Before a commit is created, `pretty-quick` will automatically format staged files to ensure consistent code style.

To create a commit:

1.  Stage your changes (`git add .`).
2.  Run the commit script:
    ```sh
    npm run commit
    ```
3.  Follow the interactive prompts to generate the commit message. This will be automatically validated by `commitlint` before the commit is created.

## Releasing and Changelog

This project uses [standard-version](https://github.com/conventional-changelog/standard-version) to automate versioning and changelog generation.

To cut a new release, simply run:

```sh
npm run release
```

This command will analyze the commits since the last release, determine the new version number, update the `CHANGELOG.md` file, and create a new git tag.

## Patching Dependencies with `patch-package`

This project uses [`patch-package`](https://www.npmjs.com/package/patch-package) to manage local modifications to `node_modules` dependencies. This is useful for applying quick fixes or custom changes to third-party packages without forking them.

### How to create a patch:

1.  Make your desired changes directly in the `node_modules` directory (e.g., modify a file in `node_modules/some-package/index.js`).
2.  Run the `patch-package` command, specifying the package you modified:
    ```sh
    npx patch-package <package-name>
    ```
    For example, if you modified `@ionic/angular`:
    ```sh
    npx patch-package @ionic/angular
    ```
    This will create a new patch file in the `patches/` directory (e.g., `patches/@ionic+angular+8.6.4.patch`).
3.  Commit the generated patch file to your repository.

### How patches are applied:

Patches are automatically applied every time `npm install` is run, thanks to a `postinstall` script configured in `package.json`.

This ensures that all developers working on the project, and your CI/CD pipelines, have the same patched versions of dependencies.
