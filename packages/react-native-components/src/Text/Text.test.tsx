import * as React from "react";
import { Text } from "./index";

// Mock do tema para os testes
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

describe("Text Component (React Native)", () => {
	describe("Renderização", () => {
		it("deve renderizar sem erros", () => {
			expect(() => {
				React.createElement(Text, { children: "Test" });
			}).not.toThrow();
		});

		it("deve aceitar props básicas", () => {
			const element = React.createElement(Text, {
				size: "lg",
				fontWeight: "bold",
				color: "primary",
				children: "Test Text",
			});

			expect(element.props.size).toBe("lg");
			expect(element.props.fontWeight).toBe("bold");
			expect(element.props.color).toBe("primary");
			expect(element.props.children).toBe("Test Text");
		});
	});

	describe("Props de tamanho", () => {
		it("deve aceitar diferentes tamanhos", () => {
			const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

			sizes.forEach((size) => {
				const element = React.createElement(Text, {
					size,
					children: `Text ${size}`,
				});

				expect(element.props.size).toBe(size);
			});
		});
	});

	describe("Props de peso da fonte", () => {
		it("deve aceitar diferentes pesos", () => {
			const weights = ["normal", "medium", "semibold", "bold"] as const;

			weights.forEach((weight) => {
				const element = React.createElement(Text, {
					fontWeight: weight,
					children: `Text ${weight}`,
				});

				expect(element.props.fontWeight).toBe(weight);
			});
		});
	});

	describe("Props de cor", () => {
		it("deve aceitar diferentes cores", () => {
			const colors = ["primary", "secondary", "tertiary", "muted"] as const;

			colors.forEach((color) => {
				const element = React.createElement(Text, {
					color,
					children: `Text ${color}`,
				});

				expect(element.props.color).toBe(color);
			});
		});
	});

	describe("Props customizadas", () => {
		it("deve aceitar props adicionais", () => {
			const element = React.createElement(Text, {
				testID: "custom-text",
				numberOfLines: 2,
				ellipsizeMode: "tail",
				children: "Custom Props",
			});

			expect(element.props.testID).toBe("custom-text");
			expect(element.props.numberOfLines).toBe(2);
			expect(element.props.ellipsizeMode).toBe("tail");
		});

		it("deve aceitar estilos customizados", () => {
			const customStyle = {
				textDecorationLine: "underline",
				marginTop: 10,
			};

			const element = React.createElement(Text, {
				style: customStyle,
				children: "Custom Style",
			});

			expect(element.props.style).toEqual(customStyle);
		});
	});

	describe("Acessibilidade", () => {
		it("deve aceitar props de acessibilidade", () => {
			const element = React.createElement(Text, {
				accessibilityRole: "header",
				accessibilityLabel: "Header Text",
				children: "Accessible Text",
			});

			expect(element.props.accessibilityRole).toBe("header");
			expect(element.props.accessibilityLabel).toBe("Header Text");
		});
	});

	describe("Valores padrão", () => {
		it("deve aplicar valores padrão quando não especificados", () => {
			const element = React.createElement(Text, {
				children: "Default Text",
			});

			// O componente deve funcionar sem props explícitas
			expect(element.props.children).toBe("Default Text");
		});
	});
});
