import React from 'react';
import MyButton from "../components/UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                
                <div className="post__text">
                    <strong>{props.number} {props.post.title}</strong> <br />
                    {props.post.body}
                </div>
                <div className="post__btn">
                    <MyButton>удалить</MyButton>
                </div>
            </div>
      </div>
    );
};

export default PostItem;