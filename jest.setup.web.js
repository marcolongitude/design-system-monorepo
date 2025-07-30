const React = require("react");
require("@testing-library/jest-dom");

// Mock mais completo para styled-components que força execução das funções de interpolação
jest.mock("styled-components", () => {
	const styled = (tag) => {
		return (strings, ...interpolations) => {
			// Forçar execução das funções de interpolação
			if (interpolations && interpolations.length > 0) {
				interpolations.forEach((interpolation) => {
					if (typeof interpolation === "function") {
						// Executar a função de interpolação com props de exemplo
						try {
							interpolation({
								size: "medium",
								variant: "default",
								disabled: false,
								fullWidth: false,
								iconSize: "medium",
							});
						} catch (e) {
							// Ignorar erros de execução
						}
					}
				});
			}

			return React.forwardRef((props, ref) => {
				// Executar novamente as funções de interpolação com as props reais
				if (interpolations && interpolations.length > 0) {
					interpolations.forEach((interpolation) => {
						if (typeof interpolation === "function") {
							try {
								interpolation(props);
							} catch (e) {
								// Ignorar erros de execução
							}
						}
					});
				}

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
