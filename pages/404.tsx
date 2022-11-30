import Head from 'next/head'
import styles from '../styles/404.module.scss'
import {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {

    const router = useRouter()

    useEffect(()=> {
        const timeout = setTimeout(()=>{
            router.push('/')
        }, 3000)
        return ()=>clearTimeout(timeout)
    },[router])
    return(
        <div className={styles.wrapper}>
            <Head>
                <title>404</title>
            </Head>
            <h1>404 error </h1>
            <p>Something went wrong ...</p>
        </div>
    )
}

export default Error
