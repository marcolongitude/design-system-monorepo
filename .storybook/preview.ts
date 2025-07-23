import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			toc: true,
		},
	},
	globalTypes: {
		platform: {
			name: "Platform",
			description: "Platform for components",
			defaultValue: "web",
			toolbar: {
				icon: "component",
				items: [
					{ value: "web", title: "Web Components" },
					{ value: "react-native", title: "React Native Components" },
				],
				showName: true,
				dynamicTitle: true,
			},
		},
	},
};

export default preview;
