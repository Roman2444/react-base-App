import React from "react";
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  const onDeletePost = () => {
    props.deletePost(props.id);
  };
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__text">
          <strong>
            {props.post.id} {props.post.title}
          </strong>{" "}
          <br />
          {props.post.body}
        </div>
        <div className="post__btn">
          <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
            открыть
          </MyButton>
          <MyButton onClick={onDeletePost}>удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
