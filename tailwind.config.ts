export default {
	content: [
		'./app/**/*.{html,js,ts,jsx,tsx}',
		'./components/**/*.{html,js,ts,jsx,tsx}',
		'./layouts/**/*.{html,js,ts,jsx,tsx}',
		'./pages/**/*.{html,js,ts,jsx,tsx}',
		'./plugins/**/*.{html,js,ts,jsx,tsx}',
		'./nuxt.config.{html,js,ts}',
		'./content/**/*.{html,js,ts,jsx,tsx}',
		'./public/**/*.{html,js,ts,jsx,tsx}',
		'./assets/**/*.{html,js,ts,jsx,tsx}',
		'./app.vue',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			clash: {
				gold: '#FFD700',
				red: '#E53935',
				purple: '#8E24AA',
				blue: '#4FC3F7',
				green: '#43A047',
				gray: '#424242',
				black: '#212121',
			},
		},
		fontFamily: {
			clash: ['"Supercell-Magic"', 'sans-serif'], // Tipografía similar al juego
			arena: ['"Arial Black"', 'Impact', 'sans-serif'], // Alternativa
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
				arena: '4rem', // Espaciado temático
				card: '2.5rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				// 'card-texture': "url('/textures/card-bg.png')", // Textura de cartas
				// 'wood-texture': "url('/textures/wood-bg.jpg')", // Fondo de madera estilo CR
			},
			boxShadow: {
				clash: '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 0 2px #FFD700', // Borde dorado
				card: '0 8px 16px rgba(0, 0, 0, 0.4)',
			},
			animation: {
				'pulse-gold': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
		},
	},
}
