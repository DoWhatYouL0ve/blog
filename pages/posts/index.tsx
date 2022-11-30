import Head from 'next/head'
import Link from "next/link";
import {GetStaticProps} from "next";
import {PostType} from "../../types/types";
import { FC } from 'react';

type PostsPropsType = {
    posts: Array<PostType>
}

export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {posts: data}
    }
}

const Posts:FC<PostsPropsType> = ({posts}) => {
    return(
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <h1>Posts: </h1>
            <ul>
                {posts && posts.map(({id, title})=> (<li key={id}><Link href={`/posts/${id}`}>{title}</Link></li>))}
            </ul>
        </>
    )
}

export default Posts
