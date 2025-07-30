const React = require("react");
require("@testing-library/jest-dom");

// Mock mais completo para styled-components
jest.mock("styled-components", () => {
	const styled = (tag) => {
		return (strings, ...interpolations) => {
			return React.forwardRef((props, ref) => {
				return React.createElement(tag || "div", { ...props, ref });
			});
		};
	};

	// Adicionar métodos para diferentes tags
	styled.div = styled("div");
	styled.span = styled("span");
	styled.p = styled("p");
	styled.button = styled("button");

	return {
		__esModule: true,
		default: styled,
	};
});

// Configuração básica para React 18
global.React = React;
