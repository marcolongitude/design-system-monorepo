import React from "react";
import { Text } from "./Text";

export const TextExample: React.FC = () => {
	return (
		<div style={{ padding: "20px", fontFamily: "sans-serif" }}>
			<h2>Exemplo do componente Text with styled-components props</h2>

			<div style={{ marginBottom: "20px" }}>
				<h3>Diferentes tamanhos usando tokens do tema:</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
					<Text size="xs">Extra Small (xs) - 12px</Text>
					<Text size="sm">Small (sm) - 14px</Text>
					<Text size="md">Medium (md) - 16px (padrão)</Text>
					<Text size="lg">Large (lg) - 18px</Text>
					<Text size="xl">Extra Large (xl) - 20px</Text>
					<Text size="xxl">Extra Extra Large (xxl) - 24px</Text>
				</div>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h3>Diferentes pesos de fonte:</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
					<Text fontWeight="normal">Normal (400) - Padrão</Text>
					<Text fontWeight="medium">Medium (500)</Text>
					<Text fontWeight="semibold">Semibold (600)</Text>
					<Text fontWeight="bold">Bold (700)</Text>
				</div>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h3>Cores de texto do design system:</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
					<Text color="primary">Primary - Texto principal (#111827)</Text>
					<Text color="secondary">Secondary - Texto secundário (#374151)</Text>
					<Text color="tertiary">Tertiary - Texto terciário (#6B7280)</Text>
					<Text color="muted">Muted - Texto mais sutil (#9CA3AF)</Text>
				</div>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h3>Hierarquia tipográfica combinada:</h3>
				<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
					<Text size="xxl" fontWeight="bold" color="primary">
						Título Principal H1
					</Text>
					<Text size="lg" fontWeight="semibold" color="secondary">
						Subtítulo H2
					</Text>
					<Text size="md" fontWeight="normal" color="primary">
						Texto do corpo principal para leitura
					</Text>
					<Text size="sm" fontWeight="medium" color="tertiary">
						Informação complementar ou destaque
					</Text>
					<Text size="xs" fontWeight="normal" color="muted">
						Legenda, nota de rodapé ou texto auxiliar
					</Text>
				</div>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h3>Como usar:</h3>
				<pre style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "4px" }}>
					{`// Padrão (md, normal, primary)
<Text>Texto normal</Text>

// Apenas cor
<Text color="secondary">Texto secundário</Text>
<Text color="muted">Texto sutil</Text>

// Combinações simples
<Text size="lg" fontWeight="bold">Título grande</Text>
<Text fontWeight="semibold" color="secondary">Destaque secundário</Text>

// Hierarquia completa
<Text 
  size="xl" 
  fontWeight="bold" 
  color="primary"
>
  Título principal
</Text>

<Text 
  size="sm" 
  fontWeight="normal" 
  color="tertiary"
>
  Informação complementar
</Text>`}
				</pre>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h3>Exemplo prático de uso:</h3>
				<div
					style={{
						border: "1px solid #e5e7eb",
						borderRadius: "8px",
						padding: "16px",
						backgroundColor: "#f9fafb",
					}}
				>
					<Text size="lg" fontWeight="bold" color="primary">
						Design System Monorepo
					</Text>
					<Text
						size="sm"
						fontWeight="normal"
						color="secondary"
						style={{ marginTop: "4px", display: "block" }}
					>
						Por Marco Developer
					</Text>
					<Text size="md" fontWeight="normal" color="primary" style={{ marginTop: "12px", display: "block" }}>
						Um sistema de design escalável usando styled-components com controle total via props, mantendo
						consistência visual através de tokens centralizados.
					</Text>
					<Text size="sm" fontWeight="medium" color="tertiary" style={{ marginTop: "8px", display: "block" }}>
						Recursos: Size control • Font weight • Color system • TypeScript
					</Text>
					<Text size="xs" fontWeight="normal" color="muted" style={{ marginTop: "8px", display: "block" }}>
						Última atualização: hoje
					</Text>
				</div>
			</div>

			<div>
				<h3>Benefícios desta implementação:</h3>
				<ul>
					<li>
						✅ <Text size="sm">Controle via props como no restyle</Text>
					</li>
					<li>
						✅ <Text size="sm">Uso de tokens do tema centralizados</Text>
					</li>
					<li>
						✅ <Text size="sm">TypeScript com autocomplete</Text>
					</li>
					<li>
						✅ <Text size="sm">Cores limitadas para manter consistência</Text>
					</li>
					<li>
						✅ <Text size="sm">Tons de cinza apropriados para light/dark themes</Text>
					</li>
					<li>
						✅ <Text size="sm">Destaque através de fontWeight, não cores</Text>
					</li>
					<li>
						✅ <Text size="sm">Hierarquia visual clara e profissional</Text>
					</li>
				</ul>
			</div>
		</div>
	);
};
