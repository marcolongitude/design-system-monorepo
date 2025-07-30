import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from ".";

describe("Button React Native (via Web)", () => {
	it("renders correctly with default props", () => {
		const { getByText } = render(<Button>Test Button</Button>);
		expect(getByText("Test Button")).toBeTruthy();
	});

	it("renders with different variants", () => {
		const { getByText } = render(<Button variant="save">Save</Button>);
		expect(getByText("Save")).toBeTruthy();
	});

	it("renders with warning variant", () => {
		const { getByText } = render(<Button variant="warning">Warning</Button>);
		expect(getByText("Warning")).toBeTruthy();
	});

	it("renders with delete variant", () => {
		const { getByText } = render(<Button variant="delete">Delete</Button>);
		expect(getByText("Delete")).toBeTruthy();
	});

	it("renders with different sizes", () => {
		const { getByText } = render(<Button size="small">Small</Button>);
		expect(getByText("Small")).toBeTruthy();
	});

	it("renders with large size", () => {
		const { getByText } = render(<Button size="large">Large</Button>);
		expect(getByText("Large")).toBeTruthy();
	});

	it("renders with different icon sizes", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(
			<Button startIcon={<TestIcon />} iconSize="small">
				Small Icon
			</Button>
		);
		expect(getByText("Small Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("renders with large icon size", () => {
		const TestIcon = () => <div data-testid="test-icon">Icon</div>;
		const { getByText, getByTestId } = render(
			<Button startIcon={<TestIcon />} iconSize="large">
				Large Icon
			</Button>
		);
		expect(getByText("Large Icon")).toBeTruthy();
		expect(getByTestId("test-icon")).toBeTruthy();
	});

	it("handles disabled state", () => {
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

	it("handles loading state", () => {
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

	it("shows custom loading text when provided", () => {
		const { getByText } = render(
			<Button loading loadingText="Salvando...">
				Salvar
			</Button>
		);

		expect(getByText("Salvando...")).toBeTruthy();
	});

	it("handles press events when enabled", () => {
		const onPress = jest.fn();
		const { getByText } = render(<Button onPress={onPress}>Enabled Button</Button>);

		const button = getByText("Enabled Button");
		fireEvent.click(button);
		expect(onPress).toHaveBeenCalledTimes(1);
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

	it("applies fullWidth style when fullWidth prop is true", () => {
		const { getByText } = render(<Button fullWidth>Full Width Button</Button>);
		expect(getByText("Full Width Button")).toBeTruthy();
	});

	it("shows loading spinner instead of icons when loading", () => {
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
	it("handles disabled state with warning variant", () => {
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

	it("handles disabled state with delete variant", () => {
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

	it("handles loading state with large size", () => {
		const { getByText, getByTestId } = render(
			<Button loading size="large">
				Large Loading
			</Button>
		);

		expect(getByText("Large Loading")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	it("handles loading state with small icon size", () => {
		const { getByText, getByTestId } = render(
			<Button loading iconSize="small">
				Small Icon Loading
			</Button>
		);

		expect(getByText("Small Icon Loading")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	it("handles loading state with large icon size", () => {
		const { getByText, getByTestId } = render(
			<Button loading iconSize="large">
				Large Icon Loading
			</Button>
		);

		expect(getByText("Large Icon Loading")).toBeTruthy();
		expect(getByTestId("activity-indicator")).toBeTruthy();
	});

	it("renders with both start and end icons", () => {
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

	it("handles undefined onPress prop", () => {
		const { getByText } = render(<Button>No onPress</Button>);
		const button = getByText("No onPress");
		expect(button).toBeTruthy();
		// Não deve quebrar quando clicado sem onPress
		fireEvent.click(button);
	});

	it("handles null loadingText", () => {
		const { getByText } = render(
			<Button loading loadingText={null}>
				Original Text
			</Button>
		);
		expect(getByText("Original Text")).toBeTruthy();
	});

	it("handles empty string loadingText", () => {
		const { getByText } = render(
			<Button loading loadingText="">
				Original Text
			</Button>
		);
		expect(getByText("Original Text")).toBeTruthy();
	});

	it("handles disabled state with all variants", () => {
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

	it("handles disabled state with all sizes", () => {
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

	it("handles disabled state with all icon sizes", () => {
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

	it("handles explicit disabled true and false values", () => {
		// Teste com disabled = true
		const { getByText: getByTextDisabled } = render(<Button disabled={true}>Explicitly Disabled</Button>);
		expect(getByTextDisabled("Explicitly Disabled")).toBeTruthy();

		// Teste com disabled = false
		const { getByText: getByTextEnabled } = render(<Button disabled={false}>Explicitly Enabled</Button>);
		expect(getByTextEnabled("Explicitly Enabled")).toBeTruthy();
	});

	it("handles disabled state with all combinations", () => {
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
