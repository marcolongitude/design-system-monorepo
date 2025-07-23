import React from "react";
import { RNTheme, FontSize, FontWeight, TextColor, tokens } from "@meu-escopo/theme";

export interface TextProps {
	children: React.ReactNode;
	size?: FontSize;
	fontWeight?: FontWeight;
	color?: TextColor;
	// Outras props nativas do Text podem ser passadas
	[key: string]: any;
}

// Detectar se estamos em ambiente web
const isWeb = typeof window !== "undefined" && window.document;

export const Text: React.FC<TextProps> = ({
	children,
	size = "md",
	fontWeight = "normal",
	color = "primary",
	style,
	...rest
}) => {
	// Se estamos no ambiente web (Storybook), usar implementação simples sem restyle
	if (isWeb) {
		const webStyle = {
			fontSize: tokens.fontSizes[size],
			fontWeight: tokens.fontWeights[fontWeight],
			color: tokens.colors.textColors[color],
			fontFamily: "system-ui, -apple-system, sans-serif",
			...style,
		};

		return (
			<span style={webStyle} {...rest}>
				{children}
			</span>
		);
	}

	// No React Native, usar implementação simples com Text nativo
	try {
		const React = require("react");
		const { Text: RNText } = require("react-native");

		const nativeStyle = {
			fontSize: tokens.fontSizes[size],
			fontWeight: tokens.fontWeights[fontWeight],
			color: tokens.colors.textColors[color],
			...style,
		};

		return React.createElement(RNText, { style: nativeStyle, ...rest }, children);
	} catch (error) {
		// Fallback final se nem react-native estiver disponível
		const fallbackStyle = {
			fontSize: tokens.fontSizes[size],
			fontWeight: tokens.fontWeights[fontWeight],
			color: tokens.colors.textColors[color],
			...style,
		};

		return (
			<span style={fallbackStyle} {...rest}>
				{children}
			</span>
		);
	}
};
