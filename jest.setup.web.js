const React = require("react");
require("@testing-library/jest-dom");

// Mock simplificado para styled-components
jest.mock("styled-components", () => {
	const styled = (tag) => {
		return (strings, ...interpolations) => {
			return React.forwardRef((props, ref) => {
				const { children, ...rest } = props;
				return React.createElement(tag || "div", { ...rest, ref }, children);
			});
		};
	};

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
