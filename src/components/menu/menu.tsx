import classNames from 'classnames';
import styles from './menu.module.scss';
import * as RadixMenu from '@radix-ui/react-navigation-menu';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <RadixMenu.Root className={classNames(styles.root, className)}>
            <RadixMenu.List className={styles.topMenu}>
                <RadixMenu.Item className={styles.item}>
                    <RadixMenu.Link>Link A</RadixMenu.Link>
                </RadixMenu.Item>
                <RadixMenu.Item className={styles.item}>
                    <RadixMenu.Link>Link B</RadixMenu.Link>
                </RadixMenu.Item>
                <RadixMenu.Item className={styles.item}>
                    <RadixMenu.Link>Link C</RadixMenu.Link>
                </RadixMenu.Item>
            </RadixMenu.List>
        </RadixMenu.Root>
    );
};
