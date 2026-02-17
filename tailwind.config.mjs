/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'club-red': '#e71c22',
				'club-red-2': '#ff3e41',
				'club-gold': '#f2d044',
				'club-gold-dim': '#c9a92e',
				'club-black': '#030303',
				'club-surface': '#111111',
				'club-card': '#0a0a0a',
				'club-white': '#fdfdfd',
			},
			fontFamily: {
				'display': ['Bebas Neue', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
			},
			animation: {
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 2s infinite',
			},
		},
	},
	plugins: [],
}
