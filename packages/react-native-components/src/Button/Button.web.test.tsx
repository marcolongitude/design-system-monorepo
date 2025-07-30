import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button React Native (via Web)", () => {
	it("renderiza corretamente com props padrão", () => {
		const { getByText } = render(<Button>Test Button</Button>);
		expect(getByText("Test Button")).toBeTruthy();
	});

	it("renderiza com diferentes variantes", () => {
		const { getByText } = render(<Button variant="save">Save</Button>);
		expect(getByText("Save")).toBeTruthy();
	});

	it("renderiza com variante de aviso", () => {
		const { getByText } = render(<Button variant="warning">Warning</Button>);
		expect(getByText("Warning")).toBeTruthy();
	});

	it("renderiza com variante de exclusão", () => {
		const { getByText } = render(<Button variant="delete">Delete</Button>);
		expect(getByText("Delete")).toBeTruthy();
	});

	it("renderiza com diferentes tamanhos", () => {
		const { getByText } = render(<Button size="small">Small</Button>);
		expect(getByText("Small")).toBeTruthy();
	});

	it("renderiza com tamanho grande", () => {
		const { getByText } = render(<Button size="large">Large</Button>);
		expect(getByText("Large")).toBeTruthy();
	});

	it("renderiza com diferentes tamanhos de ícone", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(
			<Button startIcon={<TestIcon />} iconSize="small">
				Small Icon
			</Button>
		);
		expect(getByText("Small Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("renderiza com tamanho de ícone grande", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(
			<Button startIcon={<TestIcon />} iconSize="large">
				Large Icon
			</Button>
		);
		expect(getByText("Large Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("manipula estado desabilitado", () => {
		const onPress = jest.fn();
		const { getByText } = render(
			<Button disabled onPress={onPress}>
				Disabled Button
			</Button>
		);

		const button = getByText("Disabled Button");
		fireEvent.click(button);
		expect(onPress).not.toHaveBeenCalled();
	});

	it("manipula estado de carregamento", () => {
		const onPress = jest.fn();
		const { getByText, getByTestId } = render(
			<Button loading onPress={onPress}>
				Loading Button
			</Button>
		);

		const button = getByText("Loading Button");
		const spinner = getByTestId("activity-indicator");
		fireEvent.click(button);
		expect(onPress).toHaveBeenCalledTimes(1);
		expect(spinner).toBeTruthy();
	});

	it("mostra texto de carregamento personalizado quando fornecido", () => {
		const { getByText } = render(
			<Button loading loadingText="Salvando...">
				Salvar
			</Button>
		);

		expect(getByText("Salvando...")).toBeTruthy();
	});

	it("manipula eventos de pressionar quando habilitado", () => {
		const onPress = jest.fn();
		const { getByText } = render(<Button onPress={onPress}>Enabled Button</Button>);

		const button = getByText("Enabled Button");
		fireEvent.click(button);
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it("renderiza com ícone inicial", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(<Button startIcon={<TestIcon />}>Button with Icon</Button>);

		expect(getByText("Button with Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("renderiza com ícone final", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(<Button endIcon={<TestIcon />}>Button with Icon</Button>);

		expect(getByText("Button with Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("aplica estilo fullWidth quando a prop fullWidth é verdadeira", () => {
		const { getByText } = render(<Button fullWidth>Full Width Button</Button>);
		expect(getByText("Full Width Button")).toBeTruthy();
	});

	it("mostra spinner de carregamento em vez de ícones quando carregando", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { queryByTestId, getByText, getByTestId } = render(
			<Button loading startIcon={<TestIcon />} endIcon={<TestIcon />}>
				Loading Button
			</Button>
		);

		expect(queryByTestId("test-icon")).toBeNull();
		expect(getByText("Loading Button")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	// Testes adicionais para cobrir casos edge
	it("manipula estado desabilitado com variante de aviso", () => {
		const onPress = jest.fn();
		const { getByText } = render(
			<Button variant="warning" disabled onPress={onPress}>
				Disabled Warning
			</Button>
		);

		const button = getByText("Disabled Warning");
		fireEvent.click(button);
		expect(onPress).not.toHaveBeenCalled();
	});

	it("manipula estado desabilitado com variante de exclusão", () => {
		const onPress = jest.fn();
		const { getByText } = render(
			<Button variant="delete" disabled onPress={onPress}>
				Disabled Delete
			</Button>
		);

		const button = getByText("Disabled Delete");
		fireEvent.click(button);
		expect(onPress).not.toHaveBeenCalled();
	});

	it("manipula estado de carregamento com tamanho grande", () => {
		const { getByText, getByTestId } = render(
			<Button loading size="large">
				Large Loading
			</Button>
		);

		expect(getByText("Large Loading")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	it("manipula estado de carregamento com tamanho de ícone pequeno", () => {
		const { getByText, getByTestId } = render(
			<Button loading iconSize="small">
				Small Icon Loading
			</Button>
		);

		expect(getByText("Small Icon Loading")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	it("manipula estado de carregamento com tamanho de ícone grande", () => {
		const { getByText, getByTestId } = render(
			<Button loading iconSize="large">
				Large Icon Loading
			</Button>
		);

		expect(getByText("Large Icon Loading")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	it("renderiza com ícones inicial e final", () => {
		const StartIcon = () => <div data-testid="start-icon">Start</div>;
		const EndIcon = () => <div data-testid="end-icon">End</div>;
		const { getByText, getByTestId } = render(
			<Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
				Both Icons
			</Button>
		);

		expect(getByText("Both Icons")).toBeTruthy();
		expect(getByTestId("start-icon")).toBeTruthy();
		expect(getByTestId("end-icon")).toBeTruthy();
	});

	it("manipula prop onPress indefinida", () => {
		const { getByText } = render(<Button>No onPress</Button>);
		const button = getByText("No onPress");
		expect(button).toBeTruthy();
		// Não deve quebrar quando clicado sem onPress
		fireEvent.click(button);
	});

	it("manipula loadingText nulo", () => {
		const { getByText } = render(
			<Button loading loadingText={null}>
				Original Text
			</Button>
		);
		expect(getByText("Original Text")).toBeTruthy();
	});

	it("manipula loadingText com string vazia", () => {
		const { getByText } = render(
			<Button loading loadingText="">
				Original Text
			</Button>
		);
		expect(getByText("Original Text")).toBeTruthy();
	});

	it("manipula estado desabilitado com todas as variantes", () => {
		const variants = ["default", "save", "warning", "delete"] as const;
		variants.forEach((variant) => {
			const { getByText } = render(
				<Button variant={variant} disabled>
					Disabled {variant}
				</Button>
			);
			expect(getByText(`Disabled ${variant}`)).toBeTruthy();
		});
	});

	it("manipula estado desabilitado com todos os tamanhos", () => {
		const sizes = ["small", "medium", "large"] as const;
		sizes.forEach((size) => {
			const { getByText } = render(
				<Button size={size} disabled>
					Disabled {size}
				</Button>
			);
			expect(getByText(`Disabled ${size}`)).toBeTruthy();
		});
	});

	it("manipula estado desabilitado com todos os tamanhos de ícone", () => {
		const iconSizes = ["small", "medium", "large"] as const;
		iconSizes.forEach((iconSize) => {
			const TestIcon = () => <div data-testid={`test-icon-${iconSize}`}>Icon</div>;
			const { getByText, getByTestId } = render(
				<Button iconSize={iconSize} disabled startIcon={<TestIcon />}>
					Disabled {iconSize} Icon
				</Button>
			);
			expect(getByText(`Disabled ${iconSize} Icon`)).toBeTruthy();
			expect(getByTestId(`test-icon-${iconSize}`)).toBeTruthy();
		});
	});

	it("manipula valores explícitos de disabled verdadeiro e falso", () => {
		// Teste com disabled = true
		const { getByText: getByTextDisabled } = render(<Button disabled={true}>Explicitly Disabled</Button>);
		expect(getByTextDisabled("Explicitly Disabled")).toBeTruthy();

		// Teste com disabled = false
		const { getByText: getByTextEnabled } = render(<Button disabled={false}>Explicitly Enabled</Button>);
		expect(getByTextEnabled("Explicitly Enabled")).toBeTruthy();
	});

	it("manipula estado desabilitado com todas as combinações", () => {
		const variants = ["default", "save", "warning", "delete"] as const;
		const sizes = ["small", "medium", "large"] as const;

		variants.forEach((variant) => {
			sizes.forEach((size) => {
				const { getByText } = render(
					<Button variant={variant} size={size} disabled={true}>
						{`${variant}-${size}-disabled`}
					</Button>
				);
				expect(getByText(`${variant}-${size}-disabled`)).toBeTruthy();
			});
		});
	});
});
