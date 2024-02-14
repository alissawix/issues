import classNames from 'classnames';
import styles from './with-generic.module.scss';
export type Variant<Variants extends Record<string, string>> = keyof Variants | 'none';
export type VariantProp<Variants extends Record<string, string>> = Variant<Variants>[];

export type VariantNoRecord<Variants extends Record<string, string>> = keyof Variants | 'none';
export type VariantPropNoRecod<Variants extends Record<string, string>> = Variant<Variants>[];

export type VariantPropNoArray<Variants extends Record<string, string>> = Variant<Variants>;
const vars = {
    a: 'a',
    b: 'b'
}
export interface WithGenericProps {
    className?: string;
    prop?: VariantProp<typeof vars>
    noRecord?: VariantPropNoRecod<typeof vars>
    noArray?: VariantPropNoArray<typeof vars>
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const WithGeneric = ({ className }: WithGenericProps) => {
    return <div className={classNames(styles.root, className)}>WithGeneric</div>;
};
