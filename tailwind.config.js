/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'prompt-sindoor': '#9B2226',
				'prompt-sindoor-dark': '#660708',
				'prompt-parchment': '#FDFBF7',
				'prompt-parchment-dark': '#EAE0CC',
				'prompt-brass': '#B58332',
				'prompt-ink': '#2B1E16',
			},
			fontFamily: {
				roboto: ['var(--font-roboto)', 'sans-serif'],
				yatra: ['var(--font-yatra)', 'cursive'],
				cinzel: ['Cinzel', 'serif'],
				eczar: ['Eczar', 'serif'],
				playfair: ['Playfair Display', 'serif'],
			},
			keyframes: {
				'rotate-gear': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				'drift-up': {
					from: { opacity: '0', transform: 'translateY(40px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'rotate-gear': 'rotate-gear 60s linear infinite',
				'drift-up': 'drift-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			},
			backgroundImage: {
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E\")",
				'kundli': "linear-gradient(to right, rgba(181, 131, 50, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(181, 131, 50, 0.1) 1px, transparent 1px)",
			},
			boxShadow: {
				'physical': '8px 8px 0px 0px rgba(43, 30, 22, 0.1)',
				'physical-hover': '12px 12px 0px 0px rgba(43, 30, 22, 0.15)',
				'physical-btn': '4px 4px 0px 0px rgba(43, 30, 22, 0.2)',
				'physical-btn-hover': '6px 6px 0px 0px rgba(43, 30, 22, 0.25)',
			}
		},
	},
	plugins: [],
};
