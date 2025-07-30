import { colorSchema } from "../../../../theme/src/colorSchema";

// Função para obter as cores baseada na variant usando colorSchema
export const getVariantColors = (variant: string, disabled: boolean = false) => {
	// Cores para estado desabilitado
	if (disabled) {
		return {
			backgroundColor: colorSchema.gray[200],
			borderColor: colorSchema.gray[300],
			color: colorSchema.gray[500],
		};
	}

	switch (variant) {
		case "save":
			return {
				backgroundColor: colorSchema.blue[500],
				borderColor: colorSchema.blue[500],
				color: "#ffffff",
			};
		case "warning":
			return {
				backgroundColor: colorSchema.orange[500],
				borderColor: colorSchema.orange[500],
				color: "#ffffff",
			};
		case "delete":
			return {
				backgroundColor: colorSchema.red[500],
				borderColor: colorSchema.red[500],
				color: "#ffffff",
			};
		case "default":
		default:
			return {
				backgroundColor: "transparent",
				borderColor: colorSchema.gray[600],
				color: colorSchema.gray[600],
			};
	}
};

// Função para obter os estilos de tamanho
export const getSizeStyles = (size: string) => {
	switch (size) {
		case "small":
			return {
				paddingVertical: 4,
				paddingHorizontal: 12,
				fontSize: 12,
				gap: 4,
			};
		case "large":
			return {
				paddingVertical: 12,
				paddingHorizontal: 24,
				fontSize: 18,
				gap: 12,
			};
		case "medium":
		default:
			return {
				paddingVertical: 8,
				paddingHorizontal: 16,
				fontSize: 14,
				gap: 8,
			};
	}
};

// Função para obter o tamanho do ícone
export const getIconSize = (iconSize: string) => {
	switch (iconSize) {
		case "small":
			return 12;
		case "large":
			return 24;
		case "medium":
		default:
			return 16;
	}
};
