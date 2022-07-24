import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>Loading...</p>
    </div>
  )
}

function LoadingUser() {
  return (<p className={styles.loadingUser}>Loading...</p>)
}

export {Loading, LoadingUser};
