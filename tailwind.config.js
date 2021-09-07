module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                main: "var(--main)",
                background: "var(--background)",
                header: "var(--header)",
                accent: "var(--accent)",
            },
            fontFamily: {
                Roboto: ["Roboto", "sans - serif"],
                serif: ["Merriweather", "serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
