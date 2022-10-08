import Head from 'next/head'
import Image from 'next/image'
import Collection from './collection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Collection </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Collection />
    </div>
  )
}
