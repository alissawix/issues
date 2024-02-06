import { createBoard } from '@wixc3/react-board';
import { useEffect, useState } from 'react';
import { CompWithComment } from '../../../components/comp-with-comment/comp';

export default createBoard({
    name: 'Comp With Comment',
    Board: () => {
        const [data, setData] = useState<{ str?: string } | undefined>(undefined);
        useEffect(() => {
            setData({ str: 'asdfasdf' });
        }, []);
        return <CompWithComment initialOpen data={data} />;
    },
    isSnippet: true,
});
