import styles from '../src/styles/Home.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href='/'>
                    <p>Início</p>
                </a>
                <a href='/logos'>
                    <p>Logos</p>
                </a>
            </nav>
            <div className={styles.right}>
                <h1>LogoVerse</h1>
            </div>
        </header>
    )
}
