/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Every color references a CSS var defined in src/styles/global.css.
      // The :root and .dark blocks switch the palette in one place.
      colors: {
        'background':                 'rgb(var(--c-background) / <alpha-value>)',
        'on-background':              'rgb(var(--c-on-background) / <alpha-value>)',
        'surface':                    'rgb(var(--c-surface) / <alpha-value>)',
        'on-surface':                 'rgb(var(--c-on-surface) / <alpha-value>)',
        'surface-bright':             'rgb(var(--c-surface-bright) / <alpha-value>)',
        'surface-dim':                'rgb(var(--c-surface-dim) / <alpha-value>)',
        'surface-container-lowest':   'rgb(var(--c-surface-container-lowest) / <alpha-value>)',
        'surface-container-low':      'rgb(var(--c-surface-container-low) / <alpha-value>)',
        'surface-container':          'rgb(var(--c-surface-container) / <alpha-value>)',
        'surface-container-high':     'rgb(var(--c-surface-container-high) / <alpha-value>)',
        'surface-container-highest':  'rgb(var(--c-surface-container-highest) / <alpha-value>)',
        'surface-variant':            'rgb(var(--c-surface-variant) / <alpha-value>)',
        'on-surface-variant':         'rgb(var(--c-on-surface-variant) / <alpha-value>)',
        'primary':                    'rgb(var(--c-primary) / <alpha-value>)',
        'on-primary':                 'rgb(var(--c-on-primary) / <alpha-value>)',
        'primary-container':          'rgb(var(--c-primary-container) / <alpha-value>)',
        'on-primary-container':       'rgb(var(--c-on-primary-container) / <alpha-value>)',
        'secondary':                  'rgb(var(--c-secondary) / <alpha-value>)',
        'on-secondary':               'rgb(var(--c-on-secondary) / <alpha-value>)',
        'secondary-container':        'rgb(var(--c-secondary-container) / <alpha-value>)',
        'on-secondary-container':     'rgb(var(--c-on-secondary-container) / <alpha-value>)',
        'outline':                    'rgb(var(--c-outline) / <alpha-value>)',
        'outline-variant':            'rgb(var(--c-outline-variant) / <alpha-value>)',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Newsreader', 'serif'],
        serif:    ['Newsreader', 'serif'],
        body:     ['Manrope', 'sans-serif'],
        label:    ['Manrope', 'sans-serif'],
      },
      maxWidth: { '7xl': '80rem' },
    },
  },
  plugins: [],
};
