import React from "react";
import { useParams } from "react-router-dom";

const PostIdPage = () => {
  const params = useParams();

  return (
    <div>
      <h2>вы открыли страницу поста c ID = {params.id}</h2>
    </div>
  );
};

export default PostIdPage;
