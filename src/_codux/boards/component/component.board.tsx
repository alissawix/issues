import { createBoard } from '@wixc3/react-board';
import { Component } from '@aa/components/component/component';
// import { Component } from '../../../components/component/component';

export default createBoard({
    name: 'Component',
    Board: () => <Component />,
    isSnippet: true,
});
