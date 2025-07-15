import React from "react";
import posts from "../data.json";

function PostList() {
  return (
    <div style={{ textAlign: "center" }}>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          {post.title && <h2>{post.title}</h2>}
          {post.content && <p>{post.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default PostList;
