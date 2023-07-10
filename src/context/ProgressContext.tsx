import { ReactNode, createContext } from 'react';

interface ProgressContext {
    children: ReactNode;
}
interface ProgressDefault {
    times: string;
    status: string;
}

const contextDefault: ProgressDefault = {
    times: '21/4/2023',
    status: 'Hoc TypeScript',
};

export const ProgressDefault =
    createContext<ProgressDefault>(contextDefault);

export const ProgressProvider = ({ children }: ProgressContext) => {
    return (
        <ProgressDefault.Provider value={contextDefault}>
            {children}
        </ProgressDefault.Provider>
    );
};
