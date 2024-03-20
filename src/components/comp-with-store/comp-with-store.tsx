import classNames from 'classnames';
import styles from './comp-with-store.module.scss';
import useSWR from 'swr';

export interface CompWithStoreProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CompWithStore = ({ className }: CompWithStoreProps) => {
    const { data, isLoading } = useSWR('test', () => Promise.resolve('qwer'));

    if (!data && isLoading) return <div>Loading...</div>;

    return (
        <div className={classNames(styles.root, className)}>
            <p>{data}</p>
        </div>
    );
};
