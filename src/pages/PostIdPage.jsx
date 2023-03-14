import React from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState({});

  const [fetchPostById, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  React.useEffect(() => {
    fetchPostById();
  }, []);
  console.log(post);
  return (
    <div>
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
            {post.id}. {post.title}{" "}
          </strong>{" "}
          <br />
          <br />
          {post.body}
        </div>
      )}
      <h3>комментарии:</h3>
    </div>
  );
};

export default PostIdPage;
