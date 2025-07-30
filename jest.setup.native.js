const React = require("react");

// Mock mais robusto para React Native
jest.mock("react-native", () => {
	const React = require("react");

	return {
		Text: React.forwardRef((props, ref) => React.createElement("Text", { ...props, ref })),
		View: React.forwardRef((props, ref) => React.createElement("View", { ...props, ref })),
		TouchableOpacity: React.forwardRef((props, ref) => React.createElement("TouchableOpacity", { ...props, ref })),
		ActivityIndicator: React.forwardRef((props, ref) =>
			React.createElement("ActivityIndicator", { ...props, ref })
		),
		StyleSheet: {
			create: (styles) => styles,
		},
		Dimensions: {
			get: () => ({ width: 375, height: 667 }),
		},
	};
});

// Mock para @shopify/restyle
jest.mock("@shopify/restyle", () => ({
	createText: () => (props) => React.createElement("Text", props),
	createTheme: (theme) => theme,
	ThemeProvider: ({ children }) => children,
}));

// Mock para detectar ambiente React Native (não web)
Object.defineProperty(global, "window", {
	value: undefined,
	writable: true,
});

// Suprimir warnings de console durante os testes
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
	console.error = (...args) => {
		if (typeof args[0] === "string" && (args[0].includes("Warning:") || args[0].includes("deprecated"))) {
			return;
		}
		originalError.call(console, ...args);
	};

	console.warn = (...args) => {
		if (typeof args[0] === "string" && args[0].includes("Warning:")) {
			return;
		}
		originalWarn.call(console, ...args);
	};
});

afterAll(() => {
	console.error = originalError;
	console.warn = originalWarn;
});
