import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div  className="App">
      <Header name="Overreacted"/>
      <About
        image="https://via.placeholder.com/215"
        about="I love to think about React and its ecosystem."
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
     
export default App;
