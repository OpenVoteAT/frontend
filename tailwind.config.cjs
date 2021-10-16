const colors = require('tailwindcss/colors')

const config = {
    mode: "jit",
    purge: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
        colors: {
            openblue: {
                light: '#45aaf2',
                DEFAULT: '#4b7bec',
                dark: '#3867d6'
            },
            graphite: {
                DEFAULT: '#1f1f1f'
            },
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            blue: colors.sky,
            yellow: colors.amber,
            white: colors.white,
            black: colors.black,
            cyan: colors.cyan,
            blue: colors.blue,
        }
    },

    plugins: [],
};

module.exports = config;