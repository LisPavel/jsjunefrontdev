import React from "react";
import { useHistory } from "react-router-dom";

const Post = ({ posts, id }) => {
  const post = posts.find((p) => p.id === Number(id));
  const history = useHistory();
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
