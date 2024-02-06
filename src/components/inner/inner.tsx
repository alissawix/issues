import classNames from 'classnames';
import styles from './inner.module.scss';
import type { ReactNode } from 'react';

export interface InnerProps {
    className?: string;
    children?: ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Inner = ({ className, children }: InnerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            My children
            {children}
        </div>
    );
};
