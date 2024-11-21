import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps {
    className?: string;
    inputProps?: React.HTMLAttributes<HTMLInputElement>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Input = ({ className, inputProps }: InputProps) => {
    return <input {...inputProps} className={classNames(styles.root, className)}/>;
};
