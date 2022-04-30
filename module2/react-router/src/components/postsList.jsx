import React from "react";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h4>{post.label}</h4>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
