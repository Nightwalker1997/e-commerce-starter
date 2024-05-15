'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const ThemesProvider = ({ 
    children
}:{ 
    children: ReactNode
}) => {

    return (
        <ThemeProvider
            // attribute="class"
            attribute = 'data-theme'
            defaultTheme='system'
            enableSystem
        >
            {children}
        </ThemeProvider>
    );
}
export default ThemesProvider;