import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leoborder1}>
          <div className={styles.leocore1}></div>
        </div>
        <div className={styles.leoborder2}>
          <div className={styles.leocore2}></div>
        </div>
    </div>
  );
};

export default Loader;
