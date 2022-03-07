import Head from 'next/head'
import Homepage from '../components/Home/Homepage'

export default function Home() {
  return (
    <div className='bg-[#231F20]'>
      <Head>
        <title>Twee Sketch</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Homepage />
    </div>
  )
}
