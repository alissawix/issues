import { createBoard } from '@wixc3/react-board';
import { Hover } from '../../../components/hover/hover';

export default createBoard({
    name: 'Hover',
    Board: () => <Hover />,
    isSnippet: true,
});
