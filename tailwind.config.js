/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        accent: {
          emerald: 'var(--color-accent-emerald)',
          blue: 'var(--color-accent-blue)',
          purple: 'var(--color-accent-purple)',
          orange: 'var(--color-accent-orange)',
        },
        neutral: {
          white: 'var(--color-neutral-white)',
          lightGray: 'var(--color-neutral-lightGray)',
          darkGray: 'var(--color-neutral-darkGray)',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      }
    },
  },
  plugins: [],
}
