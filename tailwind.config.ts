import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            primary:    'var(--c-primary)',
            secondary:  'var(--c-secondary)',
            tertiary:   'var(--c-tertiary)',
            quaternary: 'var(--c-quaternary)',
            neutral:    'var(--c-neutral)',
            // Background color
            bg:{
                darkest:  'var(--c-bg-darkest)',
                darker:   'var(--c-bg-darker)',
                dark:     'var(--c-bg-dark)',
                base:     'var(--c-bg)',
                light:    'var(--c-bg-light)',
                lighter:  'var(--c-bg-lighter)',
                lightest: 'var(--c-bg-lightest)',
            },
            // Text color
            tx:{
                darkest:  'var(--c-tx-darkest)',
                darker:   'var(--c-tx-darker)',
                dark:     'var(--c-tx-dark)',
                base:     'var(--c-tx)',
                light:    'var(--c-tx-light)',
                lighter:  'var(--c-tx-lighter)',
                lightest: 'var(--c-tx-lightest)',
            },
            /* Warning */
            yellow:{
                dark:  'var(--c-yellow-dark)',
                base:  'var(--c-yellow)',
                light: 'var(--c-yellow-light)',
            },
            /* Error */
            red:{
                dark:  'var(--c-red-dark)',
                base:  'var(--c-red)',
                light: 'var(--c-red-light)',
            },
            /* Success */
            green:{
                dark:  'var(--c-green-dark)',
                base:  'var(--c-green)',
                light: 'var(--c-green-light)',
            },
            /* Info */
            blue:{

                dark:  'var(--c-blue-dark)',
                base:  'var(--c-blue)',
                light: 'var(--c-blue-light)',
            },
        },
    },
    plugins: [],
};
export default config;
