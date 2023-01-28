import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <button className={styles['App-skipButton']}>Skip</button>
                <img src="public/Ellipse 7.png" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn{'Learn '}
                </a>
            </header>
        </div>
    );
}

export default App;
