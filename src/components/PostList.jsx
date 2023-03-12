import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, deletePost }) => {
  if (!posts.length) {
    return <h3 style={{ textAlign: "center" }}>Посты не найдены</h3>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => 
            <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post"   
            >
                <PostItem
                    number={index + 1}
                    post={post}
                    deletePost={deletePost}
                    id={post.id}
                />
            </CSSTransition>
        )}
        
      </TransitionGroup>
    </div>
  );
};

export default PostList;
