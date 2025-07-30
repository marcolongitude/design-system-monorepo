import { tokens } from "@meu-escopo/theme";
import { FontSize, FontWeight, TextColor } from "@meu-escopo/theme";

export const getWebStyle = (size: FontSize, fontWeight: FontWeight, color: TextColor, style?: any) => ({
	fontSize: tokens.fontSizes[size],
	fontWeight: tokens.fontWeights[fontWeight],
	color: tokens.colors.textColors[color],
	fontFamily: "system-ui, -apple-system, sans-serif",
	...style,
});

export const getNativeStyle = (size: FontSize, fontWeight: FontWeight, color: TextColor, style?: any) => ({
	fontSize: tokens.fontSizes[size],
	fontWeight: tokens.fontWeights[fontWeight],
	color: tokens.colors.textColors[color],
	...style,
});
