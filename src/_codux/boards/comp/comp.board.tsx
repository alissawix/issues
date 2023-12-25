import { createBoard } from '@wixc3/react-board';
import { Comp, type CompProps } from '../../../components/comp/comp';

export default createBoard({
    name: 'Comp',
    Board: () => {
        const props: CompProps = {text: "my text"}
        return <Comp text={props.text}/>;
    },
    isSnippet: true,
});
