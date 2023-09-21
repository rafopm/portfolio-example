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