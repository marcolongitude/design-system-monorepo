import { getVariantColors, getSizeStyles, getIconSize } from "./buttonUtils";

describe("Button Utils (Web)", () => {
	describe("getVariantColors", () => {
		it("should return disabled colors when disabled is true", () => {
			const result = getVariantColors("save", true);
			expect(result).toEqual({
				backgroundColor: "#F3F4F6", // colorSchema.gray[200]
				borderColor: "#E5E7EB", // colorSchema.gray[300]
				color: "#9CA3AF", // colorSchema.gray[500]
			});
		});

		it("should return save variant colors when disabled is false", () => {
			const result = getVariantColors("save", false);
			expect(result).toEqual({
				backgroundColor: "#3B82F6", // colorSchema.blue[500]
				borderColor: "#3B82F6", // colorSchema.blue[500]
				color: "#ffffff",
			});
		});

		it("should return warning variant colors", () => {
			const result = getVariantColors("warning", false);
			expect(result).toEqual({
				backgroundColor: "#F97316", // colorSchema.orange[500]
				borderColor: "#F97316", // colorSchema.orange[500]
				color: "#ffffff",
			});
		});

		it("should return delete variant colors", () => {
			const result = getVariantColors("delete", false);
			expect(result).toEqual({
				backgroundColor: "#EF4444", // colorSchema.red[500]
				borderColor: "#EF4444", // colorSchema.red[500]
				color: "#ffffff",
			});
		});

		it("should return default variant colors", () => {
			const result = getVariantColors("default", false);
			expect(result).toEqual({
				backgroundColor: "transparent",
				borderColor: "#6B7280", // colorSchema.gray[600]
				color: "#6B7280", // colorSchema.gray[600]
			});
		});

		it("should return default variant colors for unknown variant", () => {
			const result = getVariantColors("unknown" as any, false);
			expect(result).toEqual({
				backgroundColor: "transparent",
				borderColor: "#6B7280", // colorSchema.gray[600]
				color: "#6B7280", // colorSchema.gray[600]
			});
		});

		it("should return disabled colors for any variant when disabled is true", () => {
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
		it("should return small size styles", () => {
			const result = getSizeStyles("small");
			expect(result).toEqual({
				padding: "4px 12px",
				fontSize: "12px",
				gap: "4px",
			});
		});

		it("should return medium size styles", () => {
			const result = getSizeStyles("medium");
			expect(result).toEqual({
				padding: "8px 16px",
				fontSize: "14px",
				gap: "8px",
			});
		});

		it("should return large size styles", () => {
			const result = getSizeStyles("large");
			expect(result).toEqual({
				padding: "12px 24px",
				fontSize: "18px",
				gap: "12px",
			});
		});

		it("should return medium size styles for unknown size", () => {
			const result = getSizeStyles("unknown" as any);
			expect(result).toEqual({
				padding: "8px 16px",
				fontSize: "14px",
				gap: "8px",
			});
		});
	});

	describe("getIconSize", () => {
		it("should return small icon size", () => {
			const result = getIconSize("small");
			expect(result).toBe("12px");
		});

		it("should return medium icon size", () => {
			const result = getIconSize("medium");
			expect(result).toBe("16px");
		});

		it("should return large icon size", () => {
			const result = getIconSize("large");
			expect(result).toBe("24px");
		});

		it("should return medium icon size for unknown size", () => {
			const result = getIconSize("unknown" as any);
			expect(result).toBe("16px");
		});
	});
});
