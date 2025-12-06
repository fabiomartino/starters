# Contributing to the Project

Thank you for your interest in contributing! We welcome all contributions, from bug reports to new features. To ensure a smooth and collaborative process, please read through these guidelines.

## Table of Contents
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
- [Development Workflow](#development-workflow)
  - [Setup](#setup)
  - [Pull Request Process](#pull-request-process)
- [Style Guides](#style-guides)
  - [Coding Style](#coding-style)
  - [Commit Message Convention](#commit-message-convention)

## How to Contribute

### Reporting Bugs
If you find a bug, please ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/your-username/your-repo/issues). If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample or an executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements
If you have an idea for an enhancement, please open an issue to discuss it. This allows us to coordinate our efforts and prevent duplication of work.

### Your First Code Contribution
Unsure where to begin contributing? You can start by looking through `good first issue` and `help wanted` issues.

## Development Workflow

### Setup
1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a new branch for your changes:
   ```sh
   git checkout -b my-feature-branch
   ```

### Pull Request Process
1. Make your changes in your local repository.
2. Ensure your code lints:
   ```sh
   npm run lint
   ```
3. Commit your changes using our commit convention:
   ```sh
   npm run commit
   ```
4. Push your branch to your fork on GitHub:
   ```sh
   git push origin my-feature-branch
   ```
5. Open a pull request to the main repository. Provide a clear description of the changes.

## Style Guides

### Coding Style
This project uses ESLint to enforce a consistent coding style. Before committing, please run the linter to check your code:
```sh
npm run lint
```

### Commit Message Convention
All commit messages **must** adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This project uses a command-line wizard to help you create compliant commit messages.

To commit your changes, run:
```sh
npm run commit
```
And follow the prompts. This ensures that our commit history is readable and that our changelogs can be generated automatically.
