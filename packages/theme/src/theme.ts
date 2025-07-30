import { colorSchema } from "./colorSchema";

export const tokens = {
	colors: {
		primary: colorSchema.purple[500],
		secondary: colorSchema.purple[700],
		background: colorSchema.gray[200],
		text: colorSchema.black[900],
		textSecondary: colorSchema.gray[500],
		error: colorSchema.red[500],
		success: colorSchema.green[500],
		warning: colorSchema.yellow[500],
		textColors: {
			primary: colorSchema.black[900],
			secondary: colorSchema.black[700],
			tertiary: colorSchema.gray[500],
			muted: colorSchema.gray[400],
			primaryDark: colorSchema.gray[200],
			secondaryDark: colorSchema.gray[300],
			tertiaryDark: colorSchema.gray[400],
			mutedDark: colorSchema.gray[500],
		},
		// Adicionando acesso direto ao colorSchema
		schema: colorSchema,
	},
	spacing: {
		xs: 4,
		s: 8,
		m: 16,
		l: 24,
		xl: 32,
		xxl: 48,
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 20,
		xxl: 24,
	},
	fontWeights: {
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
	},
	borderRadius: {
		sm: 4,
		md: 8,
		lg: 12,
		xl: 16,
	},
};

export const webTheme = {
	...tokens,
};

export type WebTheme = typeof webTheme;
export type FontSize = keyof typeof tokens.fontSizes;
export type FontWeight = keyof typeof tokens.fontWeights;
export type TextColor = keyof typeof tokens.colors.textColors;
