/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'forest-green': '#0a2d1d',
                'dark-wood': '#3d2b1f',
                'bonfire-orange': '#ff5722',
                'glow-yellow': '#ffeb3b',
                'love-red': '#e91e63',
                'love-pink': '#f48fb1',
                'starlight': '#fff9c4',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                handwriting: ['"Dancing Script"', 'cursive'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'twinkle': 'twinkle 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' },
                },
            },
        },
    },
    plugins: [],
}
