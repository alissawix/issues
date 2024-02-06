import classNames from 'classnames';
import styles from './comp.module.scss';
import { useState } from 'react';
import { Inner } from '../inner/inner';

export interface CompProps {
    className?: string;
    initialOpen?: boolean;
    data?: { str?: string };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CompWithComment = ({ className, initialOpen, data }: CompProps) => {
    const [open, setOpen] = useState(initialOpen ?? false);

    return (
        <>
            <button className={classNames(styles.comp, className)}>Comp</button>
            {/*  */}
            {open && (
                <Inner>
                    <div>
                        what about here
                        {data?.str}
                    </div>
                </Inner>
            )}
        </>
    );
};
