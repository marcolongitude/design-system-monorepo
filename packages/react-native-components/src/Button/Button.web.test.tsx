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

	it("renders with different sizes", () => {
		const { getByText } = render(<Button size="small">Small</Button>);
		expect(getByText("Small")).toBeTruthy();
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
});
