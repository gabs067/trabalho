import Header from '../../../Element/Header';
import Footer from '../../../Element/Footer';
import styles from '../../styles/Home.module.css'; 

function Profile({ user = {} }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.idCont}>
          <p className={styles.name}>{user.nome}</p>
          <p className={styles.username}>{user.usuario}</p>
          <p className={styles.description}>{user.descricao}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=logotipo')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=logotipo')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
