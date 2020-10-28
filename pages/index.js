import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  const handleClickItsWorkingButton = (event) => {
    router.push({
      pathname: 'posts/[postId]/comments/[commentId]',
      query: { postId: 1, commentId: 5 }
    })
  };

  const handleClickNotWorkingButton = (event) => {
    router.push({
      pathname: 'posts/[postId]/comments/5',
      query: { postId: 1 }
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Router Push Issue</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Router Push Issue
        </h1>

        <div className={styles.grid}>
          <button className={styles.card} onClick={handleClickItsWorkingButton}>
            <h3>It's Working</h3>
          </button>

          <button className={styles.card} onClick={handleClickNotWorkingButton}>
            <h3>Not Working</h3>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Router push issue</p>
      </footer>
    </div>
  )
}
