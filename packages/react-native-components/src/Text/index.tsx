import React from "react";
import { FontSize, FontWeight, TextColor } from "@meu-escopo/theme";
import { getWebStyle, getNativeStyle } from "./utils/textUtils";

export interface TextProps {
	children: React.ReactNode;
	size?: FontSize;
	fontWeight?: FontWeight;
	color?: TextColor;
	style?: React.CSSProperties;
	[key: string]: any;
}

export const Text: React.FC<TextProps> = ({
	children,
	size = "md",
	fontWeight = "normal",
	color = "primary",
	style,
	...rest
}) => {
	// Sempre usar span para web, mais simples e testável
	const webStyle = getWebStyle(size, fontWeight, color, style);

	return (
		<span style={webStyle} {...rest}>
			{children}
		</span>
	);
};
