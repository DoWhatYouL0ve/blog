import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/404.module.scss'
import {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {

    const router = useRouter()
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    useEffect(()=> {

    },[router])
    return(
        <div className={styles.wrapper}>
            <h1>404 error </h1>
            <p>Something went wrong ...</p>
        </div>
    )
}

export default Error
