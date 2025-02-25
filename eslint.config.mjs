import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{files: ["**/*.{js,mjs,cjs,ts}"]},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				project: "./tsconfig.json",
				projectService: true,
				projectFolderIgnoreList: [
					"**dist**",
				],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		ignores: ["dist", "*.config.*"]
	},
	pluginJs.configs.recommended,
	tseslint.configs.strictTypeChecked,
	{
		rules: {
			"brace-style": ["error", "1tbs", { "allowSingleLine": true }],
			"semi": ["error", "always"],
			"quotes": ["error", "double"],
			"indent": ["error", "tab", { "SwitchCase": 1 }],
			"no-trailing-spaces": "error",
			"no-case-declarations": "off",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"sort-imports": "off",
			"@typescript-eslint/no-unnecessary-type-parameters": "off",
		},
	}
);