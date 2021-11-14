module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		extend: {
			width: {
				90: "22.75rem",
				92: "23.25rem",
				94: "23.75rem",
			},
			gridAutoRows: {
				44: "minmax(0, 11rem)",
			},
		},
		fontFamily: {
			sans: [
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			mono: [
				"Fira Code",
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
