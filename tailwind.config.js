/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        verde1: "#1D976C",
        verde2: "#93F9B9",
        roxo: "#400259",
        roxo2: "#2f0743",
        "preto": "#1b191b",
        "verde": "#e3fb54"
      },
      spacing: {
        '100': '32rem',
      },
      screens: {
        'pq': '400px',
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

