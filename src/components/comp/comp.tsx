import classNames from 'classnames';
import styles from './comp.module.scss';
import { useEffect, useState } from 'react';

export interface CompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Comp = ({ className }: CompProps) => {
    const [data, setData] = useState('');

    useEffect(() => {
        setData('qwer');
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className={classNames(styles.root, className)}>
            <p>{data}</p>
        </div>
    );
};
