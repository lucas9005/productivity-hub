/** @type {import("eslint").ESLint.ConfigData[]} */
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // JavaScript rules
  js.configs.recommended,

  // TypeScript rules
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["tsconfig.base.json"],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        console: "readonly",
        process: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "unused-imports": unusedImports,
      "@angular-eslint": angular
    },
    rules: {
      "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "app", style: "camelCase" }],
      "@angular-eslint/component-selector": ["error", { type: "element", prefix: "app", style: "kebab-case" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ]
    }
  },

  // Test rules
  {
    files: ["**/*.spec.ts", "**/*.e2e-spec.ts"],
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        vi: "readonly",
        jest: "readonly",
        test: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  },

  // Template rules
  //  {
  //    files: ["**/*.html"],
  //    plugins: {
  //      "@angular-eslint/template": angularTemplate
  //    },
  //    processor: angularTemplate.processors[".html"],
  //    rules: {
  //      ...angularTemplate.configs.recommended.rules,
  //      "prettier/prettier": ["error", { parser: "html" }]
  //    }
  //  },

  // ESLint ignore
  {
    ignores: ["**/dist/**"]
  }
];
