import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children}:any) => {
    return(
        <>
           <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
