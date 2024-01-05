/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme  : {
		fontFamily: {
			mono: ['"Fira Code"', "monospace"],
		},
		extend : {
			colors: {
				'blue': '#607B96',
				'dark-blue': "#011627",
				'stroke-color': 'rgba(96, 123, 150, 0.30)'
			}
		},
	},
	plugins: [],
};
