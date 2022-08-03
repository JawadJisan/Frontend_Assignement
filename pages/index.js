import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from './components/Navbar/Navbar'
import About from './components/Sidebar/About'
import Sidebar from './components/Sidebar/Sidebar'
import Homes from './Page/Home/Homes.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next Apps</title>
        <meta name="description" content="Created by Jawad Jisan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      <Homes></Homes>


    </div>
  )
}
