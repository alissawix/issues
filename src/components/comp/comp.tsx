import classNames from 'classnames';
import styles from './comp.module.scss';

export interface CompProps {
    className?: string;
    text: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Comp = ({ className, text }: CompProps) => {
    return <div className={classNames(styles.root, className)}>{text}</div>;
};
