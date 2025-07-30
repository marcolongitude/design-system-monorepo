const React = require("react");
require("@testing-library/jest-dom");

// Configuração para React Native via Web
global.React = React;

// Mock para react-native-web
jest.mock("react-native", () => {
	const React = require("react");

	return {
		Text: React.forwardRef((props, ref) => React.createElement("span", { ...props, ref })),
		View: React.forwardRef((props, ref) => React.createElement("div", { ...props, ref })),
		TouchableOpacity: React.forwardRef((props, ref) => {
			const { onPress, ...restProps } = props;
			return React.createElement("button", { ...restProps, onClick: onPress, ref });
		}),
		ActivityIndicator: React.forwardRef((props, ref) =>
			React.createElement("div", { ...props, ref, "data-testid": "activity-indicator" })
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
	createText: () => (props) => React.createElement("span", props),
	createTheme: (theme) => theme,
	ThemeProvider: ({ children }) => children,
}));
