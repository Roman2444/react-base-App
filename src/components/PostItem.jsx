import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                
                <div className="post__text">
                    <strong>{props.post.id} {props.post.title}</strong> <br />
                    {props.post.body}
                </div>
                <div className="post__btn">
                    <button>удалить</button>
                </div>
            </div>
      </div>
    );
};

export default PostItem;