import { MyContext } from '@comps/ContextProvider';
import { ContextProviderOverride } from '../ContextProviderOverride';
import { useContext } from 'react';

export interface CompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Comp = () => {
    return (
        <ContextProviderOverride>
            <Content />
        </ContextProviderOverride>
    );
};

function Content() {
    const value = useContext(MyContext);
    return <div style={{ backgroundColor: value.color }}>{value.desc}</div>;
}
