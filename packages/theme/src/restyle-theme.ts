import { tokens } from "./theme";

// Detectar se estamos em ambiente web
const isWeb = typeof window !== "undefined" && window.document;

// Criando um objeto de cores plano para o restyle
const restyleColors = {
	// Cores básicas do sistema
	primary: tokens.colors.primary,
	secondary: tokens.colors.secondary,
	background: tokens.colors.background,
	text: tokens.colors.text,
	error: tokens.colors.error,
	success: tokens.colors.success,
	warning: tokens.colors.warning,
	// Cores específicas de texto (achatadas)
	textPrimary: tokens.colors.textColors.primary,
	textSecondary: tokens.colors.textColors.secondary,
	textTertiary: tokens.colors.textColors.tertiary,
	textMuted: tokens.colors.textColors.muted,
	// Dark theme colors (para uso futuro)
	textPrimaryDark: tokens.colors.textColors.primaryDark,
	textSecondaryDark: tokens.colors.textColors.secondaryDark,
	textTertiaryDark: tokens.colors.textColors.tertiaryDark,
	textMutedDark: tokens.colors.textColors.mutedDark,
};

// Tema base que funciona independente do ambiente
const baseTheme = {
	colors: restyleColors,
	spacing: tokens.spacing,
	fontSizes: tokens.fontSizes,
	fontWeights: tokens.fontWeights,
	textVariants: {
		header: {
			fontSize: tokens.fontSizes.xxl,
			fontWeight: tokens.fontWeights.bold,
			color: "textPrimary", // Usando a nova cor
		},
		body: {
			fontSize: tokens.fontSizes.md,
			fontWeight: tokens.fontWeights.normal,
			color: "textPrimary", // Usando a nova cor
		},
		caption: {
			fontSize: tokens.fontSizes.sm,
			fontWeight: tokens.fontWeights.normal,
			color: "textSecondary", // Usando a nova cor
		},
		muted: {
			fontSize: tokens.fontSizes.sm,
			fontWeight: tokens.fontWeights.normal,
			color: "textMuted", // Nova variante
		},
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
	},
};

export const rnTheme = isWeb
	? baseTheme
	: (() => {
			try {
				const { createTheme } = require("@shopify/restyle");
				return createTheme(baseTheme);
			} catch (error) {
				return baseTheme;
			}
	  })();

export type RNTheme = typeof rnTheme;
