import Header from "./Header";
import Footer from "./Footer";
import {FC, ReactNode} from "react";

type LayoutPropsType = {
    children: ReactNode
}

const Layout:FC<LayoutPropsType> = ({children}) => {
    return(
        <>
           <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
