import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

// Função para obter __dirname de forma compatível
const getDirname = () => {
	try {
		const { fileURLToPath } = require("url");
		const { dirname } = require("path");
		return dirname(fileURLToPath(import.meta.url));
	} catch {
		// Fallback usando process.cwd() se import.meta.url não estiver disponível
		return process.cwd() + "/.storybook";
	}
};

const currentDir = getDirname();

const config: StorybookConfig = {
	stories: ["../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)", "../.storybook/*.stories.mdx"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	viteFinal: async (config) => {
		// Configuração para suportar react-native-web
		config.resolve = config.resolve || {};
		config.resolve.alias = {
			...config.resolve.alias,
			// Alias para React Native Web
			"react-native": "react-native-web",
			// Aliases para os workspaces do monorepo usando caminhos relativos
			"@meu-escopo/theme": resolve(currentDir, "../packages/theme/src"),
			"@meu-escopo/react-native-components": resolve(currentDir, "../packages/react-native-components/src"),
			"@meu-escopo/web-components": resolve(currentDir, "../packages/web-components/src"),
		};

		// Extensões para resolver arquivos web primeiro
		config.resolve.extensions = [
			".web.tsx",
			".web.ts",
			".web.jsx",
			".web.js",
			".tsx",
			".ts",
			".jsx",
			".js",
			".json",
		];

		// Configuração do define
		config.define = {
			...config.define,
			global: "globalThis",
			__DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
			// Evitar problemas com React Native
			"process.env.REACT_NATIVE": JSON.stringify(false),
		};

		// Configuração otimizada para dependências
		config.optimizeDeps = config.optimizeDeps || {};
		config.optimizeDeps.include = [...(config.optimizeDeps.include || []), "react-native-web"];
		config.optimizeDeps.exclude = [
			...(config.optimizeDeps.exclude || []),
			"react-native",
			"@shopify/restyle", // Excluir restyle do pre-bundling para evitar problemas
		];

		// Configuração para ESBuild
		config.optimizeDeps.esbuildOptions = {
			...config.optimizeDeps.esbuildOptions,
			jsx: "automatic",
			loader: { ".js": "jsx" },
			resolveExtensions: [".web.tsx", ".web.ts", ".web.jsx", ".web.js", ".tsx", ".ts", ".jsx", ".js", ".json"],
		};

		// Configure packages as external for SSR
		config.ssr = config.ssr || {};
		config.ssr.noExternal = Array.isArray(config.ssr.noExternal)
			? [...config.ssr.noExternal, "react-native-web", "inline-style-prefixer"]
			: ["react-native-web", "inline-style-prefixer"];

		// Configurações para build que resolve problemas de CommonJS/ES modules
		config.build = config.build || {};
		config.build.commonjsOptions = {
			...config.build.commonjsOptions,
			include: [/inline-style-prefixer/, /react-native-web/, /node_modules/],
			transformMixedEsModules: true,
		};

		return config;
	},
};

export default config;
