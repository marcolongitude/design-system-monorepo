import { getVariantColors, getSizeStyles, getIconSize } from "./buttonUtils";

describe("Utilitários do Botão (Web)", () => {
	describe("getVariantColors", () => {
		it("deve retornar cores desabilitadas quando disabled é true", () => {
			const result = getVariantColors("save", true);
			expect(result).toEqual({
				backgroundColor: "#F3F4F6", // colorSchema.gray[200]
				borderColor: "#E5E7EB", // colorSchema.gray[300]
				color: "#9CA3AF", // colorSchema.gray[500]
			});
		});

		it("deve retornar cores da variante save quando disabled é false", () => {
			const result = getVariantColors("save", false);
			expect(result).toEqual({
				backgroundColor: "#3B82F6", // colorSchema.blue[500]
				borderColor: "#3B82F6", // colorSchema.blue[500]
				color: "#ffffff",
			});
		});

		it("deve retornar cores da variante warning", () => {
			const result = getVariantColors("warning", false);
			expect(result).toEqual({
				backgroundColor: "#F97316", // colorSchema.orange[500]
				borderColor: "#F97316", // colorSchema.orange[500]
				color: "#ffffff",
			});
		});

		it("deve retornar cores da variante delete", () => {
			const result = getVariantColors("delete", false);
			expect(result).toEqual({
				backgroundColor: "#EF4444", // colorSchema.red[500]
				borderColor: "#EF4444", // colorSchema.red[500]
				color: "#ffffff",
			});
		});

		it("deve retornar cores da variante padrão", () => {
			const result = getVariantColors("default", false);
			expect(result).toEqual({
				backgroundColor: "transparent",
				borderColor: "#6B7280", // colorSchema.gray[600]
				color: "#6B7280", // colorSchema.gray[600]
			});
		});

		it("deve retornar cores da variante padrão para variante desconhecida", () => {
			const result = getVariantColors("unknown" as any, false);
			expect(result).toEqual({
				backgroundColor: "transparent",
				borderColor: "#6B7280", // colorSchema.gray[600]
				color: "#6B7280", // colorSchema.gray[600]
			});
		});

		it("deve retornar cores desabilitadas para qualquer variante quando disabled é true", () => {
			const variants = ["save", "warning", "delete", "default", "unknown"];
			variants.forEach((variant) => {
				const result = getVariantColors(variant, true);
				expect(result).toEqual({
					backgroundColor: "#F3F4F6", // colorSchema.gray[200]
					borderColor: "#E5E7EB", // colorSchema.gray[300]
					color: "#9CA3AF", // colorSchema.gray[500]
				});
			});
		});
	});

	describe("getSizeStyles", () => {
		it("deve retornar estilos de tamanho pequeno", () => {
			const result = getSizeStyles("small");
			expect(result).toEqual({
				padding: "4px 12px",
				fontSize: "12px",
				gap: "4px",
			});
		});

		it("deve retornar estilos de tamanho médio", () => {
			const result = getSizeStyles("medium");
			expect(result).toEqual({
				padding: "8px 16px",
				fontSize: "14px",
				gap: "8px",
			});
		});

		it("deve retornar estilos de tamanho grande", () => {
			const result = getSizeStyles("large");
			expect(result).toEqual({
				padding: "12px 24px",
				fontSize: "18px",
				gap: "12px",
			});
		});

		it("deve retornar estilos de tamanho médio para tamanho desconhecido", () => {
			const result = getSizeStyles("unknown" as any);
			expect(result).toEqual({
				padding: "8px 16px",
				fontSize: "14px",
				gap: "8px",
			});
		});
	});

	describe("getIconSize", () => {
		it("deve retornar tamanho de ícone pequeno", () => {
			const result = getIconSize("small");
			expect(result).toBe("12px");
		});

		it("deve retornar tamanho de ícone médio", () => {
			const result = getIconSize("medium");
			expect(result).toBe("16px");
		});

		it("deve retornar tamanho de ícone grande", () => {
			const result = getIconSize("large");
			expect(result).toBe("24px");
		});

		it("deve retornar tamanho de ícone médio para tamanho desconhecido", () => {
			const result = getIconSize("unknown" as any);
			expect(result).toBe("16px");
		});
	});
});
