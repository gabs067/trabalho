import Link from 'next/link';
import Header from '../../Element/Header';
import Footer from '../../Element/Footer';
import styles from '../styles/Home.module.css'

const Logos = ({ items }) => {
    return (
        <div className={styles.logoContainer}>
            <Header />
            <div className={styles.logoContent}>
                <h1 className={styles.title}>Descrições das Logos</h1>
                <ul className={styles.logoList}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.logoItem}>
                            <Link href='/profile/[id]' as={`/profile/${index}`}>
                                <div className={styles.item} key={item.id}>
                                    <p className={styles.logoLink}>{item.nome}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=logotipo');
    const repo = await res.json();

    const items = await repo;
    return {
        props: {
            items
        }
    };
};

export default Logos;
