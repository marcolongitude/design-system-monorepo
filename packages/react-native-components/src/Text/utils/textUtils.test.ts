import { getWebStyle, getNativeStyle } from "./textUtils";

// Mock do tema
jest.mock("@meu-escopo/theme", () => ({
	tokens: {
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
		colors: {
			textColors: {
				primary: "#111827",
				secondary: "#374151",
				tertiary: "#6B7280",
				muted: "#9CA3AF",
			},
		},
	},
}));

describe("Text Utils", () => {
	describe("getWebStyle", () => {
		it("should return correct web style with default props", () => {
			const style = getWebStyle("md", "normal", "primary");
			expect(style).toEqual({
				fontSize: 16,
				fontWeight: "400",
				color: "#111827",
				fontFamily: "system-ui, -apple-system, sans-serif",
			});
		});

		it("should return correct web style with custom props", () => {
			const style = getWebStyle("lg", "bold", "secondary");
			expect(style).toEqual({
				fontSize: 18,
				fontWeight: "700",
				color: "#374151",
				fontFamily: "system-ui, -apple-system, sans-serif",
			});
		});

		it("should merge custom style", () => {
			const customStyle = { marginTop: 10 };
			const style = getWebStyle("md", "normal", "primary", customStyle);
			expect(style).toEqual({
				fontSize: 16,
				fontWeight: "400",
				color: "#111827",
				fontFamily: "system-ui, -apple-system, sans-serif",
				marginTop: 10,
			});
		});
	});

	describe("getNativeStyle", () => {
		it("should return correct native style with default props", () => {
			const style = getNativeStyle("md", "normal", "primary");
			expect(style).toEqual({
				fontSize: 16,
				fontWeight: "400",
				color: "#111827",
			});
		});

		it("should return correct native style with custom props", () => {
			const style = getNativeStyle("lg", "bold", "secondary");
			expect(style).toEqual({
				fontSize: 18,
				fontWeight: "700",
				color: "#374151",
			});
		});

		it("should merge custom style", () => {
			const customStyle = { marginTop: 10 };
			const style = getNativeStyle("md", "normal", "primary", customStyle);
			expect(style).toEqual({
				fontSize: 16,
				fontWeight: "400",
				color: "#111827",
				marginTop: 10,
			});
		});
	});
});
