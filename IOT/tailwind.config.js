/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
        extend: {
          keyframes: {
            pathAnimate: {
              '0%, 100%': { 
                strokeDasharray: '0, 1200',
                strokeDashoffset: '0',
              },
              '50%': { 
                strokeDasharray: '600, 1200',
                strokeDashoffset: '-600',
              }
            }
          },
          animation: {
            'path': 'pathAnimate 4s cubic-bezier(0.45, 0, 0.55, 1) infinite',
          }
        },
      },
  plugins: [],
}