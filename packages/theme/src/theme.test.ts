import { tokens, webTheme } from "./theme";

describe("Theme Module", () => {
	describe("tokens", () => {
		it("deve ter todas as cores definidas", () => {
			expect(tokens.colors).toBeDefined();
			expect(tokens.colors.primary).toBe("#A855F7"); // purple[500]
			expect(tokens.colors.secondary).toBe("#7C3AED"); // purple[700]
			expect(tokens.colors.background).toBe("#F3F4F6"); // gray[200]
			expect(tokens.colors.text).toBe("#111827"); // black[900]
		});

		it("deve ter cores de texto definidas", () => {
			expect(tokens.colors.textColors).toBeDefined();
			expect(tokens.colors.textColors.primary).toBe("#111827");
			expect(tokens.colors.textColors.secondary).toBe("#374151");
			expect(tokens.colors.textColors.tertiary).toBe("#9CA3AF"); // gray[500]
			expect(tokens.colors.textColors.muted).toBe("#D1D5DB"); // gray[400]
		});

		it("deve ter cores de dark theme definidas", () => {
			expect(tokens.colors.textColors.primaryDark).toBe("#F3F4F6"); // gray[200]
			expect(tokens.colors.textColors.secondaryDark).toBe("#E5E7EB"); // gray[300]
			expect(tokens.colors.textColors.tertiaryDark).toBe("#D1D5DB"); // gray[400]
			expect(tokens.colors.textColors.mutedDark).toBe("#9CA3AF"); // gray[500]
		});

		it("deve ter espaçamentos definidos", () => {
			expect(tokens.spacing).toBeDefined();
			expect(tokens.spacing.xs).toBe(4);
			expect(tokens.spacing.s).toBe(8);
			expect(tokens.spacing.m).toBe(16);
			expect(tokens.spacing.l).toBe(24);
			expect(tokens.spacing.xl).toBe(32);
			expect(tokens.spacing.xxl).toBe(48);
		});

		it("deve ter tamanhos de fonte definidos", () => {
			expect(tokens.fontSizes).toBeDefined();
			expect(tokens.fontSizes.xs).toBe(12);
			expect(tokens.fontSizes.sm).toBe(14);
			expect(tokens.fontSizes.md).toBe(16);
			expect(tokens.fontSizes.lg).toBe(18);
			expect(tokens.fontSizes.xl).toBe(20);
			expect(tokens.fontSizes.xxl).toBe(24);
		});

		it("deve ter pesos de fonte definidos", () => {
			expect(tokens.fontWeights).toBeDefined();
			expect(tokens.fontWeights.normal).toBe("400");
			expect(tokens.fontWeights.medium).toBe("500");
			expect(tokens.fontWeights.semibold).toBe("600");
			expect(tokens.fontWeights.bold).toBe("700");
		});

		it("deve ter border radius definidos", () => {
			expect(tokens.borderRadius).toBeDefined();
			expect(tokens.borderRadius.sm).toBe(4);
			expect(tokens.borderRadius.md).toBe(8);
			expect(tokens.borderRadius.lg).toBe(12);
			expect(tokens.borderRadius.xl).toBe(16);
		});
	});

	describe("webTheme", () => {
		it("deve conter todos os tokens", () => {
			expect(webTheme.colors).toEqual(tokens.colors);
			expect(webTheme.spacing).toEqual(tokens.spacing);
			expect(webTheme.fontSizes).toEqual(tokens.fontSizes);
			expect(webTheme.fontWeights).toEqual(tokens.fontWeights);
			expect(webTheme.borderRadius).toEqual(tokens.borderRadius);
		});
	});

	describe("Types", () => {
		it("deve ter tipos corretos para FontSize", () => {
			const validSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
			const fontSizeKeys = Object.keys(tokens.fontSizes);
			expect(fontSizeKeys).toEqual(validSizes);
		});

		it("deve ter tipos corretos para FontWeight", () => {
			const validWeights = ["normal", "medium", "semibold", "bold"];
			const fontWeightKeys = Object.keys(tokens.fontWeights);
			expect(fontWeightKeys).toEqual(validWeights);
		});

		it("deve ter tipos corretos para TextColor", () => {
			const validColors = [
				"primary",
				"secondary",
				"tertiary",
				"muted",
				"primaryDark",
				"secondaryDark",
				"tertiaryDark",
				"mutedDark",
			];
			const textColorKeys = Object.keys(tokens.colors.textColors);
			expect(textColorKeys).toEqual(validColors);
		});
	});

	describe("Design System Consistency", () => {
		it("deve ter escala consistente de espaçamentos", () => {
			expect(tokens.spacing.s).toBe(tokens.spacing.xs * 2);
			expect(tokens.spacing.m).toBe(tokens.spacing.s * 2);
			expect(tokens.spacing.l).toBe(tokens.spacing.xs * 6);
			expect(tokens.spacing.xl).toBe(tokens.spacing.xs * 8);
			expect(tokens.spacing.xxl).toBe(tokens.spacing.xs * 12);
		});

		it("deve ter escala consistente de fonte", () => {
			expect(tokens.fontSizes.sm).toBeGreaterThan(tokens.fontSizes.xs);
			expect(tokens.fontSizes.md).toBeGreaterThan(tokens.fontSizes.sm);
			expect(tokens.fontSizes.lg).toBeGreaterThan(tokens.fontSizes.md);
			expect(tokens.fontSizes.xl).toBeGreaterThan(tokens.fontSizes.lg);
			expect(tokens.fontSizes.xxl).toBeGreaterThan(tokens.fontSizes.xl);
		});

		it("deve ter valores hexadecimais válidos para cores", () => {
			const hexColorRegex = /^#[0-9A-F]{6}$/i;

			expect(tokens.colors.primary).toMatch(hexColorRegex);
			expect(tokens.colors.secondary).toMatch(hexColorRegex);
			expect(tokens.colors.background).toMatch(hexColorRegex);
			expect(tokens.colors.text).toMatch(hexColorRegex);

			Object.values(tokens.colors.textColors).forEach((color) => {
				expect(color).toMatch(hexColorRegex);
			});
		});
	});
});
