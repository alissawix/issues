import { createBoard } from '@wixc3/react-board';
import { Comp } from '../../../components/comp/comp';

export default createBoard({
    name: 'Comp',
    Board: () => <Comp />,
    isSnippet: true,
});
