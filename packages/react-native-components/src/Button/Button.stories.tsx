import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "react-native";
import { Button } from ".";

// Ícones de exemplo para demonstrar os ícones
const SaveIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
	</svg>
);

const WarningIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
	</svg>
);

const DeleteIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
	</svg>
);

const ArrowRightIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
		<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
	</svg>
);

const meta: Meta<typeof Button> = {
	title: "React Native Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			description: "Conteúdo do botão",
		},
		variant: {
			control: "select",
			options: ["save", "warning", "delete", "default"],
			description: "Variante de cor do botão",
		},
		size: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Tamanho do botão",
		},
		iconSize: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Tamanho dos ícones",
		},
		disabled: {
			control: "boolean",
			description: "Estado desabilitado do botão",
		},
		fullWidth: {
			control: "boolean",
			description: "Botão ocupa toda a largura disponível",
		},
		loading: {
			control: "boolean",
			description: "Estado de carregamento - mostra spinner e texto personalizado",
		},
		loadingText: {
			control: "text",
			description: "Texto exibido durante o loading. Se null, mantém o children original",
		},
		onPress: {
			action: "pressed",
			description: "Função chamada quando o botão é pressionado",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Botão Padrão",
		variant: "default",
		size: "medium",
	},
};

export const Save: Story = {
	args: {
		children: "Salvar",
		variant: "save",
		size: "medium",
	},
};

export const Warning: Story = {
	args: {
		children: "Atenção",
		variant: "warning",
		size: "medium",
	},
};

export const Delete: Story = {
	args: {
		children: "Excluir",
		variant: "delete",
		size: "medium",
	},
};

export const Small: Story = {
	args: {
		children: "Pequeno",
		size: "small",
		variant: "default",
	},
};

export const Large: Story = {
	args: {
		children: "Grande",
		size: "large",
		variant: "default",
	},
};

export const Disabled: Story = {
	args: {
		children: "Desabilitado",
		disabled: true,
		variant: "save",
	},
};

export const Loading: Story = {
	args: {
		children: "Salvar",
		loading: true,
		loadingText: "Salvando...",
		variant: "save",
	},
};

export const FullWidth: Story = {
	args: {
		children: "Largura Total",
		fullWidth: true,
		variant: "save",
	},
};

export const WithStartIcon: Story = {
	args: {
		children: "Salvar",
		variant: "save",
		startIcon: <SaveIcon />,
	},
};

export const WithEndIcon: Story = {
	args: {
		children: "Próximo",
		variant: "default",
		endIcon: <ArrowRightIcon />,
	},
};

export const WithBothIcons: Story = {
	args: {
		children: "Ação",
		variant: "warning",
		startIcon: <WarningIcon />,
		endIcon: <ArrowRightIcon />,
	},
};

export const LoadingWithIcon: Story = {
	args: {
		children: "Salvando",
		variant: "save",
		startIcon: <SaveIcon />,
		loading: true,
		loadingText: "Processando...",
	},
};

export const LoadingWithDisabled: Story = {
	args: {
		children: "Salvando",
		variant: "save",
		loading: true,
		loadingText: "Aguarde...",
		disabled: true, // Exemplo de como o front-end pode controlar o disabled
	},
};

export const LoadingWithoutCustomText: Story = {
	args: {
		children: "Enviar",
		variant: "default",
		loading: true,
		loadingText: null, // Mantém o children original
	},
};

// Exemplo mostrando todas as variantes
export const AllVariants: Story = {
	render: () => (
		<View style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
			<Button variant="save">Salvar</Button>
			<Button variant="warning">Atenção</Button>
			<Button variant="delete">Excluir</Button>
			<Button variant="default">Padrão</Button>
		</View>
	),
};

// Exemplo mostrando todos os tamanhos
export const AllSizes: Story = {
	render: () => (
		<View style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
			<Button size="small" variant="save">
				Pequeno
			</Button>
			<Button size="medium" variant="save">
				Médio
			</Button>
			<Button size="large" variant="save">
				Grande
			</Button>
		</View>
	),
};

// Exemplo mostrando todos os tamanhos de ícone
export const AllIconSizes: Story = {
	render: () => (
		<View style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
			<Button iconSize="small" startIcon={<SaveIcon />}>
				Ícone Pequeno
			</Button>
			<Button iconSize="medium" startIcon={<SaveIcon />}>
				Ícone Médio
			</Button>
			<Button iconSize="large" startIcon={<SaveIcon />}>
				Ícone Grande
			</Button>
		</View>
	),
};

// Exemplo mostrando estados diferentes
export const AllStates: Story = {
	render: () => (
		<View style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
			<Button variant="save">Normal</Button>
			<Button variant="save" disabled>
				Desabilitado
			</Button>
			<Button variant="save" loading>
				Salvando...
			</Button>
			<Button variant="save" fullWidth>
				Largura Total
			</Button>
		</View>
	),
};

// Exemplo combinando diferentes propriedades
export const CombinedProps: Story = {
	render: () => (
		<View style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
			<Button variant="save" size="large" iconSize="large" startIcon={<SaveIcon />} endIcon={<ArrowRightIcon />}>
				Salvar e Continuar
			</Button>

			<Button variant="warning" size="medium" iconSize="medium" startIcon={<WarningIcon />}>
				Atenção
			</Button>

			<Button variant="delete" size="small" iconSize="small" startIcon={<DeleteIcon />}>
				Excluir
			</Button>

			<Button variant="default" size="medium" fullWidth endIcon={<ArrowRightIcon />}>
				Próximo Passo
			</Button>
		</View>
	),
};

// Exemplo de uso em contexto
export const UsageContext: Story = {
	render: () => (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 20,
				maxWidth: 400,
				padding: 20,
				borderWidth: 1,
				borderColor: "#e0e0e0",
				borderRadius: 8,
			}}
		>
			<View style={{ marginBottom: 16 }}>
				<Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>Formulário de Exemplo</Text>
			</View>

			<View style={{ display: "flex", flexDirection: "row", gap: 8, justifyContent: "flex-end" }}>
				<Button variant="default" size="small">
					Cancelar
				</Button>
				<Button variant="save" size="small" startIcon={<SaveIcon />}>
					Salvar
				</Button>
			</View>

			<View
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 12,
					marginTop: 20,
					padding: 16,
					backgroundColor: "#f5f5f5",
					borderRadius: 4,
				}}
			>
				<Text style={{ marginBottom: 12, fontSize: 16, fontWeight: "bold", color: "#666" }}>
					Ações Destrutivas
				</Text>
				<Button variant="delete" size="small" startIcon={<DeleteIcon />} fullWidth>
					Excluir Item
				</Button>
			</View>
		</View>
	),
};
