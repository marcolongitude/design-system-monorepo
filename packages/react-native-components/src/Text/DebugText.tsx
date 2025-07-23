import React from "react";
import { Text } from "./index"; // Importar nosso componente corrigido

export const DebugText: React.FC = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
			<h3>🐛 Debug: Investigando problema de fontSize</h3>

			<div style={{ border: "2px solid green", padding: "12px", borderRadius: "8px" }}>
				<h4>🎯 TESTE: Nosso componente Text corrigido (deve funcionar!):</h4>
				<Text size="xs">Text xs (deve ser 12px)</Text>
				<Text size="sm">Text sm (deve ser 14px)</Text>
				<Text size="md">Text md (deve ser 16px)</Text>
				<Text size="lg">Text lg (deve ser 18px)</Text>
				<Text size="xl">Text xl (deve ser 20px)</Text>
				<Text size="xxl">Text xxl (deve ser 24px)</Text>
			</div>

			<div style={{ border: "2px solid blue", padding: "12px", borderRadius: "8px" }}>
				<h4>🎯 TESTE: FontWeight + Size combinados:</h4>
				<Text size="lg" fontWeight="bold">
					Large Bold
				</Text>
				<Text size="md" fontWeight="semibold">
					Medium Semibold
				</Text>
				<Text size="sm" fontWeight="normal">
					Small Normal
				</Text>
			</div>

			<div style={{ border: "2px solid purple", padding: "12px", borderRadius: "8px" }}>
				<h4>🎯 TESTE: Cores + Tamanhos:</h4>
				<Text size="xl" color="primary">
					XL Primary
				</Text>
				<Text size="lg" color="secondary">
					LG Secondary
				</Text>
				<Text size="md" color="tertiary">
					MD Tertiary
				</Text>
				<Text size="sm" color="muted">
					SM Muted
				</Text>
			</div>

			<div style={{ border: "2px solid orange", padding: "12px", borderRadius: "8px" }}>
				<h4>✅ SUCESSO: Componente funcionando no Storybook!</h4>
				<Text size="md" color="primary">
					O componente Text agora funciona tanto no React Native quanto no Web/Storybook
				</Text>
				<Text size="sm" color="secondary">
					Detecta automaticamente o ambiente e usa a implementação apropriada
				</Text>
			</div>
		</div>
	);
};
