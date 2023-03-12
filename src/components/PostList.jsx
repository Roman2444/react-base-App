import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, deletePost}) => {
    if (!posts.length) {
        return (
            <h3 style={{ textAlign: "center" }}>Посты не найдены</h3>
        )
    }

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>
                {title}
            </h2>
            {posts.map((post, index) => (
                <PostItem number={index + 1} post={post} deletePost={deletePost} id={post.id} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;