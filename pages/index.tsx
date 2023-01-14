import styles from "../styles/Home.module.scss";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Description <div className={styles.inside}>inside </div>
      </div>
    </div>
  );
}
