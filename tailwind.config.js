/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cotact-visit-us-dekstop': "url('/contact2.png')",
        'cotact-location': "url('/contact1.png')",
        'contact-bg': "url('/contact_bg.png')",
        'contact-bg-mobile': "url('/contact_bg_mobile.png')",
        'jobs-PerkBenifits-bg': "url('/PerkBenifits.png')",
        'jobs-hero-bg': "url('/jobs_bg.png')",
        'jobs-hero-bg-mobile': "url('/contact_bg_mobile.png')",
        'services-bg-large': "url('/services.png')",
        'home-bg-2-large': "url('/home-bg-3.png')",
        'footer-bg-large': "url('/footer-bg.png')",
      },
      colors: {
        'light-dark': 'var(--background-light-gray)',
        fuchsia: 'var(--fuchsia)',
        'dark-purple': 'var(--dark-purple)',
        'darken-black': 'rgba(3, 8, 21, 0.345098);',
        'light-black': 'rgba(52, 64, 95, 0.160784)',
      },
      fontFamily: {
        NeuePlakRegular: "'Neue Plak Regular'",
      },
    },
  },
  plugins: [require('daisyui')],
});
