import { PropTypes } from '@mui/material';
import { createContext, ReactNode, useState } from 'react';

interface ThemeContextProps {
    children: ReactNode;
}
interface ThemeContextDefault {
    theme: PropTypes.Color;
    toggleTheme?: (themess: PropTypes.Color) => void;
}

const themeContextDefault: ThemeContextDefault = {
    theme: 'secondary' as PropTypes.Color,
    toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextDefault>(
    themeContextDefault,
);

export const ThemeContextProvider = ({
    children,
}: ThemeContextProps) => {
    const [theme, setThemeSelect] = useState<PropTypes.Color>(
        themeContextDefault.theme,
    );

    const toggleTheme = (theme: PropTypes.Color) =>
        setThemeSelect(theme);
    const ThemeContextDynamic = {
        theme,
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={ThemeContextDynamic}>
            {children}
        </ThemeContext.Provider>
    );
};
