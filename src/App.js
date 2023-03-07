import React from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Input from "./components/Input";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import MyButton from "./components/UI/button/MyButton";
import "./styles/App.css";

function App() {
  const [posts, setPost] = React.useState([
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

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder="название поста" />
        <input type="text" placeholder="описание поста" />
        <MyButton>создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов JS" />
    </div>
  );
}

export default App;
