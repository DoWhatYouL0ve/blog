import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Socials from "../components/Socials";
import {SocialType} from "../types/types";
import { FC } from 'react';
import {GetStaticProps} from "next";

type HomePropsType = {
    socials: Array<SocialType>
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const data = await response.json()

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {socials: data}
    }
}

const Home:FC<HomePropsType> = ({socials}) => {
  return(
      <div className={styles.wrapper}>
          <Head>
              <title>Home</title>
          </Head>
          <h1>Next JS application</h1>
          <Socials socials={socials}/>
      </div>
  )
}

export default Home
