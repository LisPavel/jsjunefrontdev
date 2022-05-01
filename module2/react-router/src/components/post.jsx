import React from "react";

const Post = ({ posts, id, history }) => {
  const post = posts.find((p) => p.id === Number(id));
  const handleSave = (post) => {
    // history.push("/posts");
    history.replace("/posts");
  };
  return post ? (
    <>
      <h3>{post.label}</h3>
      <p>{post.content}</p>
      <button onClick={() => handleSave(post)}>Save</button>
    </>
  ) : (
    <h3>Post with id {id} not found</h3>
  );
};

export default Post;
