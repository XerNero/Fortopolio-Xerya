/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#607D8B",
                secondary: "#546E7A",
                base: "#36393F",
            },
        },
    },
    plugins: [],
};
