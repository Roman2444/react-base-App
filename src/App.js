import React from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Input from "./components/Input";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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
  const [post, setPost] = React.useState({ title: "", body: "" });
  // const [title, setTitle] = React.useState("ffff");
  // const [body, setBody] = React.useState("text");
  const createPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };
    setPosts((prev) => [...prev, newPost]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
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
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
