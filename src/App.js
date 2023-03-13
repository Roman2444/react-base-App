import React from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import usePosts from "./components/hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const addNewPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
    setModal(false);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // async function fetchPosts() {
  //   setIsLoading(true);
  //   const posts = await PostService.getAll();
  //   setPosts(posts);
  //   setIsLoading(false);
  // }

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={fetchPosts}>
        загрузить посты
      </MyButton>
      <MyButton style={{ marginTop: 30 }} onClick={setModal}>
        добавить пост
      </MyButton>
      <MyModal visible={modal} setVisible={() => setModal(false)}>
        <PostForm create={addNewPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h2> произошла ошибка${postError}</h2>}
      {isLoading ? (
        <Loader style={{ margin: "0 auto" }}>---</Loader>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов JS"
          deletePost={deletePost}
        />
      )}
    </div>
  );
}

export default App;
