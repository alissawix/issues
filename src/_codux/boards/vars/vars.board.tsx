import { createBoard } from '@wixc3/react-board';
import { Vars } from '../../../components/vars/vars';

export default createBoard({
    name: 'Vars',
    Board: () => <Vars />,
    isSnippet: true,
});
