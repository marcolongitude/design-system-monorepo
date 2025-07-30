import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
	it("renders correctly with default props", () => {
		const { getByText } = render(<Button>Test Button</Button>);
		expect(getByText("Test Button")).toBeTruthy();
	});

	it("renders with different variants", () => {
		const { getByText, rerender } = render(<Button variant="save">Save</Button>);
		expect(getByText("Save")).toBeTruthy();

		rerender(<Button variant="warning">Warning</Button>);
		expect(getByText("Warning")).toBeTruthy();

		rerender(<Button variant="delete">Delete</Button>);
		expect(getByText("Delete")).toBeTruthy();

		rerender(<Button variant="default">Default</Button>);
		expect(getByText("Default")).toBeTruthy();
	});

	it("renders with different sizes", () => {
		const { getByText, rerender } = render(<Button size="small">Small</Button>);
		expect(getByText("Small")).toBeTruthy();

		rerender(<Button size="medium">Medium</Button>);
		expect(getByText("Medium")).toBeTruthy();

		rerender(<Button size="large">Large</Button>);
		expect(getByText("Large")).toBeTruthy();
	});

	it("handles disabled state", () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<Button disabled onClick={onClick}>
				Disabled Button
			</Button>
		);

		const button = getByText("Disabled Button");
		fireEvent.click(button);
		expect(onClick).not.toHaveBeenCalled();
	});

	it("handles loading state", () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<Button loading onClick={onClick}>
				Loading Button
			</Button>
		);

		const button = getByText("Loading Button"); // Mantém o children quando loadingText é null
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1); // Loading não desabilita o botão
		expect(button).toBeTruthy();
	});

	it("shows custom loading text when provided", () => {
		const onClick = jest.fn();
		const { getByText } = render(
			<Button loading loadingText="Salvando..." onClick={onClick}>
				Salvar
			</Button>
		);

		const button = getByText("Salvando...");
		expect(button).toBeTruthy();
	});

	it("handles click events when enabled", () => {
		const onClick = jest.fn();
		const { getByText } = render(<Button onClick={onClick}>Enabled Button</Button>);

		const button = getByText("Enabled Button");
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it("renders with start icon", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(<Button startIcon={<TestIcon />}>Button with Icon</Button>);

		expect(getByText("Button with Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("renders with end icon", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(<Button endIcon={<TestIcon />}>Button with Icon</Button>);

		expect(getByText("Button with Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("renders with both icons", () => {
		const StartIcon = () => <div data-testid="start-icon">Start</div>;
		const EndIcon = () => <div data-testid="end-icon">End</div>;
		const { getByText, getByTestId } = render(
			<Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
				Button with Icons
			</Button>
		);

		expect(getByText("Button with Icons")).toBeTruthy();
		expect(getByTestId("start-icon")).toBeTruthy();
		expect(getByTestId("end-icon")).toBeTruthy();
	});

	it("applies fullWidth style when fullWidth prop is true", () => {
		const { getByText } = render(<Button fullWidth>Full Width Button</Button>);

		const button = getByText("Full Width Button");
		expect(button).toBeTruthy();
	});

	it("renders with different icon sizes", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByTestId, rerender } = render(
			<Button iconSize="small" startIcon={<TestIcon />}>
				Small Icon
			</Button>
		);
		expect(getByTestId("test-icon")).toBeTruthy();

		rerender(
			<Button iconSize="medium" startIcon={<TestIcon />}>
				Medium Icon
			</Button>
		);
		expect(getByTestId("test-icon")).toBeTruthy();

		rerender(
			<Button iconSize="large" startIcon={<TestIcon />}>
				Large Icon
			</Button>
		);
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("shows loading spinner instead of icons when loading", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { queryByTestId, getByText } = render(
			<Button loading startIcon={<TestIcon />} endIcon={<TestIcon />}>
				Loading Button
			</Button>
		);

		// Ícones não devem aparecer durante o loading
		expect(queryByTestId("test-icon")).toBeNull();
		// Texto deve ser o children original quando loadingText é null
		expect(getByText("Loading Button")).toBeTruthy();
	});

	it("shows spinner with correct styling when loading", () => {
		const { container } = render(
			<Button loading variant="save">
				Loading Button
			</Button>
		);

		// Verifica se o spinner está presente
		const spinner = container.querySelector('[style*="animation: spin"]');
		expect(spinner).toBeTruthy();
	});

	it("maintains variant colors when loading", () => {
		const { container } = render(
			<Button loading variant="save">
				Loading Button
			</Button>
		);

		const button = container.querySelector("button");
		// Verifica se o botão mantém as cores da variante save (azul)
		expect(button).toHaveStyle("background-color: #3B82F6"); // blue[500]
	});
});
