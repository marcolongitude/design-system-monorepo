// Tokens base compartilhados entre plataformas
export const tokens = {
	colors: {
		primary: "#4F46E5",
		secondary: "#7C3AED",
		background: "#ffffff",
		text: "#000000",
		textSecondary: "#6B7280",
		error: "#EF4444",
		success: "#10B981",
		warning: "#F59E0B",
		// Cores específicas para Text component
		// Design system com tons de cinza limitados
		textColors: {
			// Para Light Theme (tons mais escuros)
			primary: "#111827", // Gray-900 - Texto principal
			secondary: "#374151", // Gray-700 - Texto secundário
			tertiary: "#6B7280", // Gray-500 - Texto terciário
			muted: "#9CA3AF", // Gray-400 - Texto mais sutil
			// Para Dark Theme (tons mais claros) - futura implementação
			primaryDark: "#F9FAFB", // Gray-50 - Texto principal dark
			secondaryDark: "#E5E7EB", // Gray-200 - Texto secundário dark
			tertiaryDark: "#9CA3AF", // Gray-400 - Texto terciário dark
			mutedDark: "#6B7280", // Gray-500 - Texto mais sutil dark
		},
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

// Tema para Web (styled-components)
export const webTheme = {
	...tokens,
};

// Tipos para TypeScript
export type WebTheme = typeof webTheme;
export type FontSize = keyof typeof tokens.fontSizes;
export type FontWeight = keyof typeof tokens.fontWeights;
export type TextColor = keyof typeof tokens.colors.textColors;
