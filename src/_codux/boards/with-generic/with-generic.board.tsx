import { createBoard } from '@wixc3/react-board';
import { WithGeneric } from '../../../components/with-generic/with-generic';

export default createBoard({
    name: 'WithGeneric',
    Board: () => <WithGeneric />,
    isSnippet: true,
});
