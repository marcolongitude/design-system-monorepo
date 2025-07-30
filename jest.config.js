module.exports = {
	projects: [
		{
			displayName: "web-components",
			testMatch: ["<rootDir>/packages/web-components/**/*.test.{ts,tsx}"],
			testEnvironment: "jsdom",
			setupFilesAfterEnv: ["<rootDir>/jest.setup.web.js"],
			moduleNameMapper: {
				"^@meu-escopo/theme$": "<rootDir>/packages/theme/src",
				"^@meu-escopo/web-components$": "<rootDir>/packages/web-components/src",
			},
			transform: {
				"^.+\\.(ts|tsx)$": "ts-jest",
			},
			moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
			collectCoverageFrom: [
				"packages/web-components/src/**/*.{ts,tsx}",
				"!packages/web-components/src/**/*.stories.{ts,tsx}",
				"!packages/web-components/src/**/*.d.ts",
			],
		},
		{
			displayName: "react-native-components",
			testMatch: [
				"<rootDir>/packages/react-native-components/**/*.test.ts",
				"<rootDir>/packages/react-native-components/**/*.test.tsx",
			],
			testPathIgnorePatterns: ["\\.web\\.test\\.(ts|tsx)$"],
			testEnvironment: "node",
			setupFilesAfterEnv: ["<rootDir>/jest.setup.native.js"],
			moduleNameMapper: {
				"^@meu-escopo/theme$": "<rootDir>/packages/theme/src",
				"^@meu-escopo/react-native-components$": "<rootDir>/packages/react-native-components/src",
			},
			transform: {
				"^.+\\.(ts|tsx)$": "ts-jest",
			},
			moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
			collectCoverageFrom: [
				"packages/react-native-components/src/**/*.{ts,tsx}",
				"!packages/react-native-components/src/**/*.stories.{ts,tsx}",
				"!packages/react-native-components/src/**/*.d.ts",
			],
		},
		{
			displayName: "react-native-components-web",
			testMatch: ["<rootDir>/packages/react-native-components/**/*.web.test.{ts,tsx}"],
			testEnvironment: "jsdom",
			setupFilesAfterEnv: ["<rootDir>/jest.setup.native-web.js"],
			moduleNameMapper: {
				"^@meu-escopo/theme$": "<rootDir>/packages/theme/src",
				"^@meu-escopo/react-native-components$": "<rootDir>/packages/react-native-components/src",
			},
			transform: {
				"^.+\\.(ts|tsx)$": "ts-jest",
			},
			moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
			collectCoverageFrom: [
				"packages/react-native-components/src/**/*.{ts,tsx}",
				"!packages/react-native-components/src/**/*.stories.{ts,tsx}",
				"!packages/react-native-components/src/**/*.d.ts",
			],
		},
		{
			displayName: "react-native-components-node",
			testMatch: ["<rootDir>/packages/react-native-components/**/*.node.test.{ts,tsx}"],
			testEnvironment: "node",
			setupFilesAfterEnv: ["<rootDir>/jest.setup.native.js"],
			moduleNameMapper: {
				"^@meu-escopo/theme$": "<rootDir>/packages/theme/src",
				"^@meu-escopo/react-native-components$": "<rootDir>/packages/react-native-components/src",
			},
			transform: {
				"^.+\\.(ts|tsx)$": "ts-jest",
			},
			moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
			collectCoverageFrom: [
				"packages/react-native-components/src/**/*.{ts,tsx}",
				"!packages/react-native-components/src/**/*.stories.{ts,tsx}",
				"!packages/react-native-components/src/**/*.d.ts",
			],
		},
		{
			displayName: "theme",
			testMatch: ["<rootDir>/packages/theme/**/*.test.{ts,tsx}"],
			testEnvironment: "node",
			transform: {
				"^.+\\.(ts|tsx)$": "ts-jest",
			},
			moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
			collectCoverageFrom: ["packages/theme/src/**/*.{ts,tsx}", "!packages/theme/src/**/*.d.ts"],
		},
	],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov", "html"],
	verbose: true,
};
