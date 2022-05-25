import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-beige h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Oh my Goodnus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />

      <Modal />
    </div>
  )
}
