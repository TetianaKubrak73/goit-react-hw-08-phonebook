import styles from './Home.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Phonebook!{' '}
        {/* <span role="img" aria-label="Phone icon">
          ☎️
        </span> */}
      </h1>
    </div>
  );
}
