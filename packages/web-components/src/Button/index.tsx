import React from "react";
import styled from "styled-components";
import { colorSchema } from "../../../theme/src/colorSchema";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "save" | "warning" | "delete" | "default";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	onClick?: () => void;
	fullWidth?: boolean;
	loading?: boolean;
	endIcon?: React.ReactNode;
	startIcon?: React.ReactNode;
	iconSize?: "small" | "medium" | "large";
	iconBackgroundColor?: string;
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
				padding: "4px 12px",
				fontSize: "12px",
				gap: "4px",
			};
		case "large":
			return {
				padding: "12px 24px",
				fontSize: "18px",
				gap: "12px",
			};
		case "medium":
		default:
			return {
				padding: "8px 16px",
				fontSize: "14px",
				gap: "8px",
			};
	}
};

// Função para obter o tamanho do ícone
const getIconSize = (iconSize: string) => {
	switch (iconSize) {
		case "small":
			return "12px";
		case "large":
			return "24px";
		case "medium":
		default:
			return "16px";
	}
};

export const Button = ({
	children,
	variant = "default",
	size = "medium",
	disabled = false,
	onClick,
	fullWidth = false,
	loading = false,
	endIcon,
	startIcon,
	iconSize = "medium",
	iconBackgroundColor,
	...props
}: ButtonProps) => {
	return (
		<ButtonStyled
			variant={variant}
			size={size}
			iconSize={iconSize}
			disabled={disabled}
			fullWidth={fullWidth}
			{...props}
		>
			{startIcon && <IconWrapper iconSize={iconSize}>{startIcon}</IconWrapper>}
			{children}
			{endIcon && <IconWrapper iconSize={iconSize}>{endIcon}</IconWrapper>}
		</ButtonStyled>
	);
};

const IconWrapper = styled.span<{ iconSize: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ iconSize }) => getIconSize(iconSize)};
	height: ${({ iconSize }) => getIconSize(iconSize)};

	svg {
		width: 100%;
		height: 100%;
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
