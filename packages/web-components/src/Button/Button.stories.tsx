import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
	title: "Web Components/Button",
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
			description: "Estado de carregamento (ainda não implementado)",
		},
		onClick: {
			action: "clicked",
			description: "Função chamada quando o botão é clicado",
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

// Exemplo mostrando todas as variantes
export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
			<Button variant="save">Salvar</Button>
			<Button variant="warning">Atenção</Button>
			<Button variant="delete">Excluir</Button>
			<Button variant="default">Padrão</Button>
		</div>
	),
};

// Exemplo mostrando todos os tamanhos
export const AllSizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
			<Button size="small" variant="save">
				Pequeno
			</Button>
			<Button size="medium" variant="save">
				Médio
			</Button>
			<Button size="large" variant="save">
				Grande
			</Button>
		</div>
	),
};

// Exemplo mostrando todos os tamanhos de ícone
export const AllIconSizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
			<Button iconSize="small" startIcon={<SaveIcon />}>
				Ícone Pequeno
			</Button>
			<Button iconSize="medium" startIcon={<SaveIcon />}>
				Ícone Médio
			</Button>
			<Button iconSize="large" startIcon={<SaveIcon />}>
				Ícone Grande
			</Button>
		</div>
	),
};

// Exemplo mostrando estados diferentes
export const AllStates: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
			<Button variant="save">Normal</Button>
			<Button variant="save" disabled>
				Desabilitado
			</Button>
			<Button variant="save" fullWidth>
				Largura Total
			</Button>
		</div>
	),
};

// Exemplo combinando diferentes propriedades
export const CombinedProps: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
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
		</div>
	),
};

// Exemplo de uso em contexto
export const UsageContext: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				maxWidth: "400px",
				padding: "20px",
				border: "1px solid #e0e0e0",
				borderRadius: "8px",
			}}
		>
			<h3 style={{ margin: "0 0 16px 0", color: "#333" }}>Formulário de Exemplo</h3>

			<div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
				<Button variant="default" size="small">
					Cancelar
				</Button>
				<Button variant="save" size="small" startIcon={<SaveIcon />}>
					Salvar
				</Button>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "12px",
					marginTop: "20px",
					padding: "16px",
					backgroundColor: "#f5f5f5",
					borderRadius: "4px",
				}}
			>
				<h4 style={{ margin: "0 0 12px 0", color: "#666" }}>Ações Destrutivas</h4>
				<Button variant="delete" size="small" startIcon={<DeleteIcon />} fullWidth>
					Excluir Item
				</Button>
			</div>
		</div>
	),
};
