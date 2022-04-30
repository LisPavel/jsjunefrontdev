import React from "react";
import PostsList from "./postsList";
import Post from "./post";
import query from "query-string";
import _ from "lodash";

const Posts = ({ match, location }) => {
  const {
    params: { postId },
  } = match;
  const search = query.parse(location.search);
  console.log(search);
  const posts = [
    { id: 11, content: "post1", label: "p1" },
    { id: 12, content: "post2", label: "p2" },
    { id: 13, content: "post3", label: "p3" },
    { id: 14, content: "post4", label: "p4" },
    { id: 15, content: "post5", label: "p5" },
  ];

  const postsCrop = search?.count
    ? _(posts).slice(0).take(search.count).value()
    : posts;

  return !postId ? (
    <PostsList {...{ posts: postsCrop }} />
  ) : (
    <Post {...{ posts: postsCrop, id: postId }} />
  );
};

export default Posts;
