import React, { createContext, useContext, useState, ReactNode } from 'react';

type DarkModeContextType = {
    theme: string; // Adicione a propriedade 'theme' de tipo string
    setTheme: (theme: string) => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

type DarkModeProviderProps = {
    children: ReactNode;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    return (
        <DarkModeContext.Provider value={{ theme, setTheme }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};
