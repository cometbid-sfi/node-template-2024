# How to Setup a Production Node.js Project

[Video Tutorial - How I Set up Production Node.js Project (2024)](https://www.youtube.com/watch?v=GTDYsV5pyZU)

`$ npm init -y`

`$ npm install typescript ts-node @types/node @tsconfig/node20 --save-dev`

i. Generate tsconfig.json

Type in Google search "Typescript handbook", visit dedicated base files on github

Basic sample

```
{
  "extends": "@tsconfig/node20/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Install Jest for testing Node

`$ npm install jest ts-jest @types/jest --save-dev`

Create jest.config.js

`$ code jest.config.js`

Add tsconfig.json in /tests/ as well to ensure type checking

`$ npm run test`

### Install Linting tools

`$ npm init @eslint/config@latest`

```
> template-2024@1.0.0 npx
> create-config

@eslint/create-config: v1.4.0

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · node
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...
```

ii. Ensure you have ESLint from Microsoft (microsoft.com) plugin in your IDE

Type in Google search "eslint config", visit Configure ESLiint - ESLint - Pluggable JavaScript Linter

`$ npm install eslint-plugin-jest --save-dev`

Add Jest to ESLint config

`import jest from "eslint-plugin-jest";`

### Install Prettier - Code formatter plugin

`$ npm install --save-dev eslint-plugin-prettier eslint-config-prettier`

`$ npm install --save-dev --save-exact prettier`

Add Jest to ESLint config

`import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";`

Edit package.json

Add "lint": "eslint" to script section

`$ npm run lint`

If there are errors, run

`$ npm run lint -- --fix`

### Incorporate Github Actions and Workflows

```

  $ code .github/workflows/LintAndTestWorkflow.yml

  $ code .github/pull_request_template.md

  $ code .gitignore

  $ git init

  $ git add .

  $ git commit -m "Initial commit"

```
