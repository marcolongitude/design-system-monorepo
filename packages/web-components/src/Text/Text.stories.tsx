import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
	title: "Web Components/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: "text",
			description: "Conteúdo do texto",
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl", "xxl"],
			description: "Tamanho da fonte usando tokens do tema",
		},
		fontWeight: {
			control: "select",
			options: ["normal", "medium", "semibold", "bold"],
			description: "Peso da fonte usando tokens do tema",
		},
		color: {
			control: "select",
			options: ["primary", "secondary", "tertiary", "muted"],
			description: "Cor do texto usando tons de cinza do design system",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Texto padrão (md, normal, primary)",
	},
};

export const Small: Story = {
	args: {
		children: "Texto pequeno",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		children: "Texto grande",
		size: "lg",
	},
};

export const Bold: Story = {
	args: {
		children: "Texto em negrito",
		fontWeight: "bold",
	},
};

export const SecondaryColor: Story = {
	args: {
		children: "Texto com cor secundária",
		color: "secondary",
	},
};

export const MutedText: Story = {
	args: {
		children: "Texto mais sutil",
		color: "muted",
	},
};

export const LargeBoldSecondary: Story = {
	args: {
		children: "Texto grande, negrito e cor secundária",
		size: "xl",
		fontWeight: "bold",
		color: "secondary",
	},
};

// Exemplo mostrando todos os tamanhos
export const AllSizes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<Text size="xs">Extra Small (xs): 12px</Text>
			<Text size="sm">Small (sm): 14px</Text>
			<Text size="md">Medium (md): 16px - Padrão</Text>
			<Text size="lg">Large (lg): 18px</Text>
			<Text size="xl">Extra Large (xl): 20px</Text>
			<Text size="xxl">Extra Extra Large (xxl): 24px</Text>
		</div>
	),
};

// Exemplo mostrando todos os pesos de fonte
export const AllFontWeights: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<Text fontWeight="normal">Normal (400)</Text>
			<Text fontWeight="medium">Medium (500)</Text>
			<Text fontWeight="semibold">Semibold (600)</Text>
			<Text fontWeight="bold">Bold (700)</Text>
		</div>
	),
};

// Exemplo mostrando todas as cores de texto
export const AllTextColors: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<Text color="primary">Primary - Texto principal mais escuro</Text>
			<Text color="secondary">Secondary - Texto secundário</Text>
			<Text color="tertiary">Tertiary - Texto terciário</Text>
			<Text color="muted">Muted - Texto mais sutil</Text>
		</div>
	),
};

// Exemplo combinando tamanhos, pesos e cores
export const CombinedStyles: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
			<Text size="xxl" fontWeight="bold" color="primary">
				Título Principal
			</Text>
			<Text size="lg" fontWeight="semibold" color="secondary">
				Subtítulo
			</Text>
			<Text size="md" fontWeight="normal" color="primary">
				Texto do corpo principal
			</Text>
			<Text size="sm" fontWeight="medium" color="tertiary">
				Texto menor com ênfase
			</Text>
			<Text size="xs" fontWeight="normal" color="muted">
				Legenda ou texto auxiliar
			</Text>
		</div>
	),
};

// Exemplo de hierarquia tipográfica
export const TypographyHierarchy: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "500px" }}>
			<Text size="xxl" fontWeight="bold" color="primary">
				Design System Typography
			</Text>
			<Text size="md" fontWeight="normal" color="secondary">
				Este é um exemplo de como usar as diferentes combinações de tamanho, peso e cor para criar uma
				hierarquia visual consistente usando apenas tons de cinza.
			</Text>
			<Text size="lg" fontWeight="semibold" color="primary">
				Seção Principal
			</Text>
			<Text size="md" fontWeight="normal" color="primary">
				Conteúdo principal da seção com texto na cor primária para máxima legibilidade.
			</Text>
			<Text size="sm" fontWeight="medium" color="tertiary">
				Informação complementar em cor terciária
			</Text>
			<Text size="xs" fontWeight="normal" color="muted">
				Nota de rodapé ou informação adicional em cor mais sutil
			</Text>
		</div>
	),
};

export const WithCustomProps: Story = {
	args: {
		children: "Texto com todas as propriedades customizadas",
		size: "lg",
		fontWeight: "semibold",
		color: "secondary",
		style: { textDecoration: "underline" },
	},
};
