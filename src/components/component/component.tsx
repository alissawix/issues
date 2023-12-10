import classNames from 'classnames';
import styles from './component.module.scss';

export interface ComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Component = ({ className }: ComponentProps) => {
    return <div className={classNames(styles.root, className)}>Component kkkkkk</div>;
};
