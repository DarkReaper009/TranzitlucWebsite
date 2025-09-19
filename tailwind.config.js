/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // adjust to your project structure
  theme: {
    extend: {
      colors: {
        brand: '#1DA1F2', // custom brand color
      },
      fontSize: {
        'xxs': '1.1rem', // extra tiny text
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'], // body text
        heading: ['Space Grotesk', 'sans-serif'],           // optional for headings
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};