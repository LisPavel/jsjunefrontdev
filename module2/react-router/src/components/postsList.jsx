import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.label}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
