const React = require("react");
require("@testing-library/jest-dom");

// Mock completo e funcional para styled-components
jest.mock("styled-components", () => {
	const styled = (tag) => {
		return (strings, ...interpolations) => {
			return React.forwardRef((props, ref) => {
				const { children, $size, $fontWeight, $color, ...otherProps } = props;

				// Simular os estilos baseados nas props
				const style = {
					fontSize: $size ? `${getMockFontSize($size)}px` : "16px",
					fontWeight: $fontWeight ? getMockFontWeight($fontWeight) : "400",
					color: $color ? getMockColor($color) : "#111827",
					fontFamily: "system-ui, -apple-system, sans-serif",
					...otherProps.style,
				};

				return React.createElement(
					tag,
					{
						...otherProps,
						ref,
						style,
					},
					children
				);
			});
		};
	};

	// Helper functions para simular valores do tema
	function getMockFontSize(size) {
		const sizes = { xs: 12, sm: 14, md: 16, lg: 18, xl: 20, xxl: 24 };
		return sizes[size] || 16;
	}

	function getMockFontWeight(weight) {
		const weights = { normal: "400", medium: "500", semibold: "600", bold: "700" };
		return weights[weight] || "400";
	}

	function getMockColor(color) {
		const colors = {
			primary: "#111827",
			secondary: "#374151",
			tertiary: "#6B7280",
			muted: "#9CA3AF",
		};
		return colors[color] || "#111827";
	}

	// Adicionar métodos para diferentes tags
	styled.span = styled("span");
	styled.div = styled("div");
	styled.p = styled("p");
	styled.button = styled("button");

	return {
		__esModule: true,
		default: styled,
	};
});

// Mock para detectar ambiente web
Object.defineProperty(global, "window", {
	value: {
		document: {},
	},
	writable: true,
});

// Suprimir warnings de console durante os testes
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
	console.error = (...args) => {
		if (
			typeof args[0] === "string" &&
			(args[0].includes("Warning: ReactDOM.render is deprecated") ||
				args[0].includes("Warning: React does not recognize") ||
				args[0].includes("Warning: Invalid attribute name") ||
				args[0].includes("Warning: Attempted to synchronously unmount"))
		) {
			return;
		}
		originalError.call(console, ...args);
	};

	console.warn = (...args) => {
		if (typeof args[0] === "string" && args[0].includes("componentWillReceiveProps")) {
			return;
		}
		originalWarn.call(console, ...args);
	};
});

afterAll(() => {
	console.error = originalError;
	console.warn = originalWarn;
});
