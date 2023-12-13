import { createBoard } from '@wixc3/react-board';
import { Nested } from '../../../components/nested/nested';

export default createBoard({
    name: 'Nested',
    Board: () => <Nested />,
    isSnippet: true,
});
