module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text-light': 'var(--text-light)',
        'background-light':'var(--background-light)',
        'text-dark':'var(--text-dark)',
        'background-dark':'var(--background-dark)',
        'secondary':'var(--secondary)',
        'tertiary':'var(--tertiary)',
        'quaternary':'var(--quaternary)',
        'dark-blue':'var(--dark-blue)',
        'gradient-dark':'var(--gradient-dark)',
        'primary':'var(--primary)',
        light: {
          background: 'var(--background-light)',
          text: 'var(--text-light)',
        },
        dark: {
          background: 'var(--background-dark)',
          text: 'var(--text-dark)',
        },
      },
    },
  },
  plugins: [],
};