module.exports = {
    mode: "jit",
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            dark: {
                DEFAULT: '#1A1A1A',
                dark: '#1A1616',
            },
            yellow: {
                DEFAULT: '#f4c859',
                750: '#FFDA00',
            },
        },
        fontFamily: {
            'mont': ['Montserrat', 'sans-serif'],
            'dosis': ['Dosis', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
