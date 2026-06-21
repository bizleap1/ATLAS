/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Final Selection (Clinical Option)
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        
        // Backups
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}

