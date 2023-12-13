import classNames from 'classnames';
import styles from './nested.module.css';

export interface NestedProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Nested = ({ className }: NestedProps) => {
    return <div className={classNames(styles.root, className)}>
        <span>text</span></div>;
};
