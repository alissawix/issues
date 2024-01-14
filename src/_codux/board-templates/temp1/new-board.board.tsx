import { createBoard, ContentSlot } from '@wixc3/react-board';

export default createBoard({
    name: 'NewBoard',
    Board: () => (
        <div>
            AAAAAA
            <ContentSlot name="content" />
        </div>
    ),
    isSnippet: true,
});
