import React from "react";
import Article from "./Article"; // assuming you have an Article component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
