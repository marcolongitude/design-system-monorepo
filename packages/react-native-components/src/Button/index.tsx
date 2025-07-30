import React from "react";
import { TouchableOpacity, Text as RNText, View, ActivityIndicator } from "react-native";
import { getVariantColors, getSizeStyles, getIconSize } from "./utils/buttonUtils";

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
