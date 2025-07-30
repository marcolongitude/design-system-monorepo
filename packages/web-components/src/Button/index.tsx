import React from "react";
import styled from "styled-components";
import { colorSchema } from "../../../theme/src/colorSchema";
import { getVariantColors, getSizeStyles, getIconSize } from "./utils/buttonUtils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "save" | "warning" | "delete" | "default";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	onClick?: () => void;
	fullWidth?: boolean;
	loading?: boolean;
	loadingText?: string | null;
	endIcon?: React.ReactNode;
	startIcon?: React.ReactNode;
	iconSize?: "small" | "medium" | "large";
	iconBackgroundColor?: string;
}

// Componente de spinner para web
const Spinner = styled.div<{ size: string; color: string }>`
	width: ${({ size }) => getIconSize(size)};
	height: ${({ size }) => getIconSize(size)};
	border: 2px solid transparent;
	border-top: 2px solid ${({ color }) => color};
	border-radius: 50%;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Button = ({
	children,
	variant = "default",
	size = "medium",
	disabled = false,
	onClick,
	fullWidth = false,
	loading = false,
	loadingText = null,
	endIcon,
	startIcon,
	iconSize = "medium",
	iconBackgroundColor,
	...props
}: ButtonProps) => {
	const colors = getVariantColors(variant, disabled);

	return (
		<ButtonStyled
			variant={variant}
			size={size}
			iconSize={iconSize}
			disabled={disabled}
			fullWidth={fullWidth}
			onClick={onClick}
			{...props}
		>
			{loading ? (
				<Spinner size={iconSize} color={colors.color} />
			) : (
				startIcon && (
					<IconWrapper iconSize={iconSize} color={colors.color}>
						{startIcon}
					</IconWrapper>
				)
			)}
			{loading ? loadingText || children : children}
			{!loading && endIcon && (
				<IconWrapper iconSize={iconSize} color={colors.color}>
					{endIcon}
				</IconWrapper>
			)}
		</ButtonStyled>
	);
};

const IconWrapper = styled.span<{ iconSize: string; color: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ iconSize }) => getIconSize(iconSize)};
	height: ${({ iconSize }) => getIconSize(iconSize)};
	color: ${({ color }) => color};

	svg {
		width: 100%;
		height: 100%;
		fill: currentColor;
	}
`;

const ButtonStyled = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${({ size = "medium" }) => getSizeStyles(size).gap};
	padding: ${({ size = "medium" }) => getSizeStyles(size).padding};
	font-size: ${({ size = "medium" }) => getSizeStyles(size).fontSize};
	border-radius: 4px;
	border: 1px solid ${({ variant = "default", disabled = false }) => getVariantColors(variant, disabled).borderColor};
	background-color: ${({ variant = "default", disabled = false }) =>
		getVariantColors(variant, disabled).backgroundColor};
	color: ${({ variant = "default", disabled = false }) => getVariantColors(variant, disabled).color};
	cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
	transition: all 0.2s ease;
	width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

	&:hover {
		opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
	}

	&:active {
		transform: ${({ disabled }) => (disabled ? "none" : "scale(0.98)")};
	}

	&:focus {
		outline: ${({ disabled }) => (disabled ? "none" : `2px solid ${colorSchema.blue[500]}`)};
	}

	&:disabled {
		opacity: 1;
		cursor: not-allowed;
	}
`;
