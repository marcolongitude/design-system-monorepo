import React from "react";
import styled from "styled-components";
import { webTheme, FontSize, FontWeight, TextColor } from "@meu-escopo/theme";

interface StyledTextProps {
	$size?: FontSize;
	$fontWeight?: FontWeight;
	$color?: TextColor;
}

const StyledText = styled.span<StyledTextProps>`
	color: ${({ $color = "primary" }) => webTheme.colors.textColors[$color]};
	font-size: ${({ $size = "md" }) => webTheme.fontSizes[$size]}px;
	font-weight: ${({ $fontWeight = "normal" }) => webTheme.fontWeights[$fontWeight]};
`;

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
	size?: FontSize;
	fontWeight?: FontWeight;
	color?: TextColor;
}

export const Text: React.FC<TextProps> = ({
	children,
	size = "md",
	fontWeight = "normal",
	color = "primary",
	...rest
}) => (
	<StyledText $size={size} $fontWeight={fontWeight} $color={color} {...rest}>
		{children}
	</StyledText>
);
