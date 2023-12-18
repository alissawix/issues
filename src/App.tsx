import { useState } from 'react';
import styles from './App.module.scss';
import { Comp } from './components/comp/comp';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Comp />
            <div className={styles.card}>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles['read-the-docs']}>
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
