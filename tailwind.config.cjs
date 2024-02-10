/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'avatar': "url('/assets/Images/waqarahmad/jpg')",
     
    }},
  },
  plugins: [],
};
