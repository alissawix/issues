import { createBoard } from '@wixc3/react-board';
import { LiteralArray } from '../../../components/literal-array/literal-array';

export default createBoard({
    name: 'LiteralArray',
    Board: () => <LiteralArray />,
    isSnippet: true,
});
