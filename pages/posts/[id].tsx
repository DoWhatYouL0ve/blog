import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import {GetStaticPaths, GetStaticProps} from "next";
import {PostType} from "../../types/types";
import {FC} from "react";

type PostPropsType = {
    post: PostType
}

export const getStaticPaths:GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(({id}: any) => ({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps:GetStaticProps = async (context: any) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {post: data}
    }
}

const Post:FC<PostPropsType> = ({post}) => {
    return (
        <>
            <Head>
                <title>PostPage</title>
            </Head>
            <PostInfo post={post}/>
        </>
    )
}

export default Post