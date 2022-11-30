import {FC} from "react";
import {PostType} from "../types/types";

type PostInfoPropsType = {
    post: PostType
}

const PostInfo:FC<PostInfoPropsType> = ({ post }) => {
    const { title, body } = post || {};

    if (!post) {
        return <h1>Sorry, there is no information for this post</h1>
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
        </>
    );
}

export default PostInfo;