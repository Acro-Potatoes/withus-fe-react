/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{tsx,jsx,ts,js,html}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['bumblebee'],
        darkTheme: 'business',
    },
};
