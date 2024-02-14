import classNames from 'classnames';
import styles from './literal-array.module.scss';

export type LiteralOption = 'A' | 'B' | 'C';

export interface LiteralArrayProps {
    className?: string;
    value: LiteralOption;
    valueArr: LiteralOption[];
    valueEither: LiteralOption | LiteralOption[];
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const LiteralArray = ({ className }: LiteralArrayProps) => {
    return <div className={classNames(styles.root, className)}>LiteralArray</div>;
};
