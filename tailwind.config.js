/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],
    darkMode:"class",
    theme: {
        fontFamily:{
            'sans':['Titillium Web', 'ui-sans-serif', 'system-ui']
        },
        extend: {
            colors:{
                'jade': {
                    '50': '#ebfef3',
                    '100': '#cffce1',
                    '200': '#a4f6c9',
                    '300': '#69ecac',
                    '400': '#2dda8c',
                    '500': '#08b86e',
                    '600': '#009d5d',
                    '700': '#007d4e',
                    '800': '#02633f',
                    '900': '#035136',
                    '950': '#002e1f',
                },
                'nile-blue': {
                    '50': '#f2f8fd',
                    '100': '#e4effa',
                    '200': '#c2dff5',
                    '300': '#8cc6ed',
                    '400': '#4fa8e1',
                    '500': '#298dce',
                    '600': '#1a6faf',
                    '700': '#16598e',
                    '800': '#164c76',
                    '900': '#143652',
                    '950': '#102941',
                },
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
