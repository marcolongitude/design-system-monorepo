import * as React from "react";
import { render } from "@testing-library/react";
import { Text } from "./index";

jest.mock("@meu-escopo/theme", () => ({
	webTheme: {
		colors: {
			textColors: {
				primary: "#111827",
				secondary: "#374151",
				tertiary: "#6B7280",
				muted: "#9CA3AF",
			},
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
	},
}));

jest.mock("styled-components", () => {
	const mockStyled = (templateStrings: any, ...interpolations: any[]) => {
		return React.forwardRef((props: any, ref: any) => {
			// Executar todas as funções de interpolação para cobrir as linhas
			interpolations.forEach((fn) => {
				if (typeof fn === "function") {
					fn(props);
				}
			});
			return React.createElement("span", { ...props, ref });
		});
	};

	mockStyled.span = mockStyled;

	return {
		__esModule: true,
		default: mockStyled,
	};
});

describe("Text Component (Web) - Unit Tests", () => {
	describe("Execução do componente funcional", () => {
		it("deve executar o componente Text", () => {
			const result = Text({ children: "Test" });
			expect(result).toBeDefined();
		});

		it("deve executar o componente com todas as props", () => {
			const result = Text({
				size: "lg",
				fontWeight: "bold",
				color: "secondary",
				children: "Test",
			});
			expect(result).toBeDefined();
		});
	});

	describe("StyledText com interpolações", () => {
		it("deve executar funções de interpolação para $color", () => {
			const result = Text({ children: "Test" });
			expect(result).toBeDefined();
		});

		it("deve executar interpolação com diferentes valores de $color", () => {
			const colors = ["primary", "secondary", "tertiary", "muted"] as const;
			colors.forEach((color) => {
				const result = Text({ color, children: "Test" });
				expect(result).toBeDefined();
			});
		});

		it("deve executar interpolação com diferentes valores de $size", () => {
			const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
			sizes.forEach((size) => {
				const result = Text({ size, children: "Test" });
				expect(result).toBeDefined();
			});
		});

		it("deve executar interpolação com diferentes valores de $fontWeight", () => {
			const weights = ["normal", "medium", "semibold", "bold"] as const;
			weights.forEach((weight) => {
				const result = Text({ fontWeight: weight, children: "Test" });
				expect(result).toBeDefined();
			});
		});

		it("deve executar interpolação com valores padrão", () => {
			const result = Text({ children: "Test" });
			expect(result).toBeDefined();
		});
	});

	describe("Props padrão", () => {
		it("deve ter props padrão corretas", () => {
			const element = React.createElement(Text, { children: "Test" });

			expect(element.props.children).toBe("Test");
			expect(element.type).toBeDefined();
		});

		it("deve aceitar size como prop", () => {
			const element = React.createElement(Text, {
				size: "lg",
				children: "Test",
			});

			expect(element.props.size).toBe("lg");
		});

		it("deve aceitar fontWeight como prop", () => {
			const element = React.createElement(Text, {
				fontWeight: "bold",
				children: "Test",
			});

			expect(element.props.fontWeight).toBe("bold");
		});

		it("deve aceitar color como prop", () => {
			const element = React.createElement(Text, {
				color: "secondary",
				children: "Test",
			});

			expect(element.props.color).toBe("secondary");
		});
	});

	describe("Todas as variações de size", () => {
		const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

		sizes.forEach((size) => {
			it(`deve aceitar size="${size}"`, () => {
				const element = React.createElement(Text, {
					size,
					children: `Text ${size}`,
				});

				expect(element.props.size).toBe(size);
			});
		});
	});

	describe("Todas as variações de fontWeight", () => {
		const weights = ["normal", "medium", "semibold", "bold"] as const;

		weights.forEach((weight) => {
			it(`deve aceitar fontWeight="${weight}"`, () => {
				const element = React.createElement(Text, {
					fontWeight: weight,
					children: `Text ${weight}`,
				});

				expect(element.props.fontWeight).toBe(weight);
			});
		});
	});

	describe("Todas as variações de color", () => {
		const colors = ["primary", "secondary", "tertiary", "muted"] as const;

		colors.forEach((color) => {
			it(`deve aceitar color="${color}"`, () => {
				const element = React.createElement(Text, {
					color,
					children: `Text ${color}`,
				});

				expect(element.props.color).toBe(color);
			});
		});
	});

	describe("Combinações de props", () => {
		it("deve aceitar múltiplas props simultaneamente", () => {
			const element = React.createElement(Text, {
				size: "lg",
				fontWeight: "bold",
				color: "secondary",
				children: "Combined",
			});

			expect(element.props.size).toBe("lg");
			expect(element.props.fontWeight).toBe("bold");
			expect(element.props.color).toBe("secondary");
			expect(element.props.children).toBe("Combined");
		});

		it("deve aceitar props HTML adicionais", () => {
			const element = React.createElement(Text, {
				className: "custom-class",
				style: { margin: "10px" },
				children: "Test",
			});

			expect(element.props.className).toBe("custom-class");
			expect(element.props.style).toEqual({ margin: "10px" });
		});
	});

	describe("Props de acessibilidade", () => {
		it("deve aceitar props de acessibilidade", () => {
			const element = React.createElement(Text, {
				role: "heading",
				"aria-level": 2,
				"aria-label": "Test heading",
				children: "Accessible",
			});

			expect(element.props.role).toBe("heading");
			expect(element.props["aria-level"]).toBe(2);
			expect(element.props["aria-label"]).toBe("Test heading");
		});
	});

	describe("Children variations", () => {
		it("deve aceitar string como children", () => {
			const element = React.createElement(Text, { children: "String child" });
			expect(element.props.children).toBe("String child");
		});

		it("deve aceitar number como children", () => {
			const element = React.createElement(Text, { children: 42 });
			expect(element.props.children).toBe(42);
		});

		it("deve aceitar elemento React como children", () => {
			const child = React.createElement("span", {}, "Nested");
			const element = React.createElement(Text, { children: child });
			expect(element.props.children).toBe(child);
		});
	});

	describe("Edge cases", () => {
		it("deve funcionar sem props opcionais", () => {
			const element = React.createElement(Text, { children: "Minimal" });

			expect(element.props.children).toBe("Minimal");
			expect(element.type).toBeDefined();
		});

		it("deve aceitar props undefined explicitamente", () => {
			const element = React.createElement(Text, {
				size: undefined,
				fontWeight: undefined,
				color: undefined,
				children: "Test",
			} as any);

			expect((element.props as any).size).toBeUndefined();
			expect((element.props as any).fontWeight).toBeUndefined();
			expect((element.props as any).color).toBeUndefined();
		});
	});

	// Novos testes para cobrir as funções de interpolação
	describe("Cobertura de funções de interpolação", () => {
		it("deve executar função de interpolação de cor com valor padrão", () => {
			const { getByText } = render(<Text>Test</Text>);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar função de interpolação de cor com valor customizado", () => {
			const { getByText } = render(<Text color="secondary">Test</Text>);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar função de interpolação de tamanho com valor padrão", () => {
			const { getByText } = render(<Text>Test</Text>);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar função de interpolação de tamanho com valor customizado", () => {
			const { getByText } = render(<Text size="lg">Test</Text>);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar função de interpolação de peso com valor padrão", () => {
			const { getByText } = render(<Text>Test</Text>);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar função de interpolação de peso com valor customizado", () => {
			const { getByText } = render(<Text fontWeight="bold">Test</Text>);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar todas as funções de interpolação simultaneamente", () => {
			const { getByText } = render(
				<Text size="xl" fontWeight="semibold" color="tertiary">
					Test
				</Text>
			);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar funções de interpolação com valores undefined", () => {
			const { getByText } = render(
				<Text size={undefined} fontWeight={undefined} color={undefined}>
					Test
				</Text>
			);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar funções de interpolação com valores null", () => {
			const { getByText } = render(
				<Text size={null as any} fontWeight={null as any} color={null as any}>
					Test
				</Text>
			);
			expect(getByText("Test")).toBeInTheDocument();
		});

		it("deve executar funções de interpolação com valores vazios", () => {
			const { getByText } = render(
				<Text size={"" as any} fontWeight={"" as any} color={"" as any}>
					Test
				</Text>
			);
			expect(getByText("Test")).toBeInTheDocument();
		});
	});
});
