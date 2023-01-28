import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <button className={styles['App-skipButton']}>Skip</button>
                <img
                    src="https://raw.githubusercontent.com/GoranGulevski/test-project/main/public/img/pexels-lynda-sanchez-1777813.png?token=GHSAT0AAAAAAB6BOYMGONDPH5Z23NOLBDYOY6VQK2Q"
                    className={styles.coverImg}
                />
                <img
                    src="https://raw.githubusercontent.com/GoranGulevski/test-project/main/public/img/Ellipse%207.png?token=GHSAT0AAAAAAB6BOYMHKBGB6R27SGZMMY4YY6VQM4Q"
                    className={styles.eclipseImg}
                />
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
