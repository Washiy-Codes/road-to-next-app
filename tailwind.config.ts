
// @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          "fade-in-from-top": {
            "from": { opacity: 0, transform: "translateY(-16px)"},
            "to": { opacity: 1, transform: "translate(0)" },
          },
        },
        animation: {
          fade: "fade-in-from-top 0.5s ease-in-out",
        },
      },
    },
    plugins: [],
  };