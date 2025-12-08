/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0E3D2F",
                secondary: "#476A57",
                accent: "#D4B98A",
                bg: "#F3F0E6",
                text: "#1A1A1A",
            },
            fontFamily: {
                serif: ["Playfair Display", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
