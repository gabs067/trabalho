import Head from 'next/head';
import Header from '../../Element/Header';
import Footer from '../../Element/Footer';
import styles from '../styles/Home.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LogoVerse</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>LogoVerse</h1>
        <main className={styles.mainContent}>
          <p>
            LogoVerse, onde você encontra diversas logos e suas descrições. Clique <a href='/logos'>aqui</a> para conhecer nossa página.
          </p>
        </main>
      </div>
      <Footer />
    </div>
  )
}
