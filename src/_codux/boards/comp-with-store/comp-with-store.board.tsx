import { createBoard } from '@wixc3/react-board';
import { CompWithStore } from '../../../components/comp-with-store/comp-with-store';

export default createBoard({
    name: 'CompWithStore',
    Board: () => <CompWithStore />,
    isSnippet: true,
});