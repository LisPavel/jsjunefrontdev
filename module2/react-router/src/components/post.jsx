import React from "react";

const Post = ({ posts, id }) => {
  const post = posts.find((p) => p.id === Number(id));
  return post ? (
    <>
      <h3>{post.label}</h3>
      <p>{post.content}</p>
    </>
  ) : (
    <h3>Post with id {id} not found</h3>
  );
};

export default Post;
