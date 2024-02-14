import { createBoard } from '@wixc3/react-board';
import { Other } from '../../../components/other/other';

export default createBoard({
    name: 'Other',
    Board: () => <Other />,
    isSnippet: true,
});