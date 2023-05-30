/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				boxing: ['boxing', 'sans-serif'],
				'boxing-striped': ['Boxing Striped', 'sans-serif'],
			},
			colors: {
				"blue-1": "#003566",
				"blue-2": "#001d3d",
				"blue-3": "#000814",
				"yellow-1": "#ffd60a",
				"yellow-2": "#ffc300",
			  },
		},
	},
	plugins: [
		require('tailwindcss-animated')
	  ],
}
