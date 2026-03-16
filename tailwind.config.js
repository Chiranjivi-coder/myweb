/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                nature: {
                    50: '#f4f7f4',
                    100: '#e3ebe3',
                    200: '#c5d8c5',
                    300: '#9bbd9b',
                    400: '#729c72',
                    500: '#527f52',
                    600: '#3f633f',
                    700: '#354f35',
                    800: '#2d3f2d',
                    900: '#263526',
                }
            }
        },
    },
    plugins: [],
}
