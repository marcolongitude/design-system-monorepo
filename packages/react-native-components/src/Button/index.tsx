import React from "react";
import { TouchableOpacity, Text as RNText, View, ActivityIndicator } from "react-native";
import { colorSchema } from "../../../theme/src/colorSchema";

interface ButtonProps {
	children: React.ReactNode;
	variant?: "save" | "warning" | "delete" | "default";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	onPress?: () => void;
	fullWidth?: boolean;
	loading?: boolean;
	loadingText?: string | null;
	endIcon?: React.ReactNode;
	startIcon?: React.ReactNode;
	iconSize?: "small" | "medium" | "large";
}

// Função para obter as cores baseada na variant usando colorSchema
const getVariantColors = (variant: string, disabled: boolean = false) => {
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
const getSizeStyles = (size: string) => {
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
const getIconSize = (iconSize: string) => {
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

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "default",
	size = "medium",
	disabled = false,
	onPress,
	fullWidth = false,
	loading = false,
	loadingText = null,
	endIcon,
	startIcon,
	iconSize = "medium",
}) => {
	const colors = getVariantColors(variant, disabled);
	const sizeStyles = getSizeStyles(size);
	const iconSizeValue = getIconSize(iconSize);

	return (
		<TouchableOpacity
			onPress={disabled ? undefined : onPress}
			disabled={disabled}
			style={{
				paddingVertical: sizeStyles.paddingVertical,
				paddingHorizontal: sizeStyles.paddingHorizontal,
				borderRadius: 4,
				borderWidth: 1,
				borderColor: colors.borderColor,
				backgroundColor: colors.backgroundColor,
				width: fullWidth ? "100%" : undefined,
				opacity: disabled ? 1 : 1, // Mantém opacidade 1 para desabilitado
			}}
			activeOpacity={disabled ? 1 : 0.8}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					minHeight: iconSizeValue,
				}}
			>
				{loading ? (
					// Estado de loading - mostra apenas o spinner
					<ActivityIndicator
						size={iconSizeValue * 0.8}
						color={colors.color}
						style={{ marginRight: sizeStyles.gap }}
					/>
				) : (
					// Estado normal - mostra ícone inicial se existir
					startIcon && (
						<View
							style={{
								width: iconSizeValue,
								height: iconSizeValue,
								marginRight: sizeStyles.gap,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{startIcon}
						</View>
					)
				)}

				<RNText
					style={{
						fontSize: sizeStyles.fontSize,
						color: colors.color,
						fontWeight: "500",
						textAlign: "center",
						lineHeight: sizeStyles.fontSize * 1.2, // Melhora o alinhamento vertical
					}}
				>
					{loading ? loadingText || children : children}
				</RNText>

				{!loading && endIcon && (
					<View
						style={{
							width: iconSizeValue,
							height: iconSizeValue,
							marginLeft: sizeStyles.gap,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{endIcon}
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};
