import React from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      title: "Java Script",
      body: "lorem gwegwe  gw4gwer w w wegweg wegewgweg wegwegwd gfewgsege",
    },
    {
      id: 2,
      title: "Java Script2",
      body: "lorem gwegwe  gw4gwer w w wegweg wegewgweg wegwegwd gfewgsege",
    },
    {
      id: 3,
      title: "Java Script3",
      body: "lorem gwegwe  gw4gwer w w wegweg wegewgweg wegwegwd gfewgsege",
    },
  ]);

  const addNewPost = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));

    console.log(posts.filter((post) => post.id === id));
  };
  // deletePost(1);

  return (
    <div className="App">
      <PostForm create={addNewPost} />
      <PostList
        posts={posts}
        title="Список постов JS"
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
