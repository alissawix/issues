import classNames from 'classnames';
import styles from './other.module.scss';

export type Settings = {
    a?: string;
    b?: number;
};
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Other = (props: { className?: string; settings?: Settings, b?: string }) => {
    return <div className={classNames(styles.root, props.className)}>Other</div>;
};
