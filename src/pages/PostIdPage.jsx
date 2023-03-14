import React from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchPCommentsById, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentById(id);
      setComments(response.data);
    }
  );

  React.useEffect(() => {
    fetchPostById(params.id);
    fetchPCommentsById(params.id);
  }, []);
  return (
    <div key={post.id}>
      <br />
      <h3>вы открыли страницу поста c ID = {params.id}</h3>
      <br />
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <br />
          <strong>
            {post.id}. {post.title}
          </strong>
          <br />
          <br />
          {post.body}
        </div>
      )}
      <br />
      <h3>комментарии:</h3>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        comments.map((el) => (
          <div key={el.name} style={{ marginTop: 15 }}>
            <strong>{el.name}</strong>
            <br />
            {el.email}
            <br />
            {el.body}
          </div>
        ))
      )}
    </div>
  );
};

export default PostIdPage;
