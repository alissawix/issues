import { createBoard } from '@wixc3/react-board';
import styles from './new-component.module.scss';

export default createBoard({
    name: 'NewComponent',
    Board: () => <div className={styles.root}>AAAAAA</div>,
    isSnippet: true,
});
