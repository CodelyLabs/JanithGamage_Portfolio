/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Default Tailwind CSS breakpoints
        'sm': '640px',  // Small devices (phones, portrait)
        'md': '768px',  // Medium devices (tablets)
        'lg': '1024px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // Double extra-large devices

        // Custom Breakpoints
        'xs': '480px',  // Extra small devices
        '3xl': '1920px', // Very large desktops
        '4k': '2560px',  // 4K resolution devices
      },
    },
  },
  plugins: [],
}