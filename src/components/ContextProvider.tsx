import React from 'react';

export type ContextType = { color: string; desc: string };

export const MyContext = React.createContext<ContextType>({ color: 'blue', desc: 'default' });

const value = { color: 'red', desc: 'wrong' };

export function ContextProvider(props: { children: React.ReactNode }) {
    return <MyContext.Provider value={value}>{props.children}</MyContext.Provider>;
}
