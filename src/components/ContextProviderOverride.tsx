import { MyContext } from './ContextProvider';

const value = { color: 'green', desc: 'right' };

export function ContextProviderOverride(props: { children: React.ReactNode }) {
    return <MyContext.Provider value={value}>{props.children}</MyContext.Provider>;
}
