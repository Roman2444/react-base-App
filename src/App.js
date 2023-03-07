import React from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Input from "./components/Input";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
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
  const [posts2, setPost2] = React.useState([
    {
      id: 1,
      title: "Python",
      body: "lorem gwegwe  gw4gwer w w wegweg wegewgweg wegwegwd gfewgsege",
    },
    {
      id: 2,
      title: "Python2",
      body: "lorem gwegwe  gw4gwer w w wegweg wegewgweg wegwegwd gfewgsege",
    },
    {
      id: 3,
      title: "Python3",
      body: "lorem gwegwe  gw4gwer w w wegweg wegewgweg wegwegwd gfewgsege",
    },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов JS" />
      <PostList posts={posts2} title="Список постов Python" />

    </div>
  );
}

export default App;
