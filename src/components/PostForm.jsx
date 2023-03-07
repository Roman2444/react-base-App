import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({ title: "", body: "" });

    const createPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({ title: "", body: "" });
    };

    return (
        <form action="">
            <MyInput
                value={post.title}
                type="text"
                placeholder="название поста"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="описание поста"
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyButton onClick={createPost}>создать пост</MyButton>
        </form>
    );
};

export default PostForm;