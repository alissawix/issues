import { createBoard } from '@wixc3/react-board';
import { Inner } from '../../../components/inner/inner';

export default createBoard({
    name: 'Inner',
    Board: () => <Inner />,
    isSnippet: true,
});
