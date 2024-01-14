import { createBoard } from '@wixc3/react-board';
import styles from './new-board.module.scss';

export default createBoard({
    name: 'NewBoard',
    Board: () => <div className={styles.root}>AAAAAA</div>,
    isSnippet: true,
});
