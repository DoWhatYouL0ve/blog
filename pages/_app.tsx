import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Image from 'next/image'
import mainPic from '../public/main.jpg'

const App = ({ Component, pageProps }: AppProps) => {
  return <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image src={mainPic} width={500} height={350} alt={'main pic'} placeholder={"blur"}/>
  </Layout>

}

export default App