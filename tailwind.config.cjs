/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
				},
			},
      textColor: {
        cris: {
          inverted: withOpacity('--fill-color'),
          dark: withOpacity('--dark-primary-color'),
          light: withOpacity('--light-primary-color'),
          primary: withOpacity('--primary-text'),
          secondary: withOpacity('--secondary-text'),
          accent: withOpacity('--accent-color'),

          base: withOpacity('--primary-color'),
        },
        
      },
      backgroundColor: {
        cris: {
          dark: withOpacity('--dark-primary-color'),
          light: withOpacity('--light-primary-color'),
          fill: withOpacity('--fill-color'),
          accent: withOpacity('--accent-color'),
          primary: withOpacity('--primary-color'),
          inverted: withOpacity('--primary-text'),
          card: withOpacity('--card-color'),
          'card-muted': withOpacity('--card-muted-color'),

          
        },
        
        transparent: 'transparent',

        
      },
      outlineColor: {
        cris: {
          fill: withOpacity('--accent-color'),
        },
        transparent: 'transparent',

      },
      borderColor: {
        cris: {
          dark: withOpacity('--dark-primary-color'),
          line: withOpacity('--light-primary-color'),
          fill: withOpacity('--primary-text'),
          accent: withOpacity('--accent-color'),
        },
        
        transparent: 'transparent',
        
      },
      fill: {
        cris: {
          base: withOpacity('--primary-text'),
          accent: withOpacity('--accent-color'),
        },
        
        transparent: 'transparent',
      },
      ringColor: {
        cris: {
          dark: withOpacity('--dark-primary-color'),
          light: withOpacity('--light-primary-color'),
          accent: withOpacity('--accent-color'),
        },
        transparent: 'transparent',

      },
    },
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
		require('flowbite-typography'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
}
