// Mock para React Native
jest.mock("react-native", () => ({
	Text: "Text",
	View: "View",
	StyleSheet: {
		create: (styles) => styles,
	},
	Dimensions: {
		get: () => ({ width: 375, height: 667 }),
	},
}));

// Mock para @shopify/restyle
jest.mock("@shopify/restyle", () => ({
	createText: jest.fn(() => (props) => {
		const React = require("react");
		return React.createElement("Text", props, props.children);
	}),
	createTheme: jest.fn((theme) => theme),
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
