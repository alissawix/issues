import { createBoard } from '@wixc3/react-board';
import { Comp } from '../../../components/comp/comp';
import { useEffect, useState } from 'react';

export default createBoard({
    name: 'Comp',
    Board: () => {
        const [data, setData] = useState<{ str?: string } | undefined>(undefined);
        useEffect(() => {
            setData({ str: 'asdfasdf' });
        }, []);
        return <Comp initialOpen data={data} />;
    },
    isSnippet: true,
});
