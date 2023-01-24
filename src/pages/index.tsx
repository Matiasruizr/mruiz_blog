import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Jesus Ruiz - Blog</title>
        <meta name="description" content="Matias Jesus Ruiz - Tech entrepreneur, Startup cofounder, Fullstack developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Matias Jesus Ruiz</h1>
        <ul>
          <li>Fullstack developer</li>
          <li>Cofounder Alseco</li>
          <li>Individial contributor on Icapital Network</li>
          <li>Cofounder Databot</li>
        </ul>
      </main>
    </>
  )
}
