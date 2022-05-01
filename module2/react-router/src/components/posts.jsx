import React from "react";
import PostsList from "./postsList";
import Post from "./post";
import query from "query-string";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

const Posts = () => {
  // const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();
  const { postId } = params;
  const search = query.parse(location.search);
  console.log(search);
  const posts = [
    { id: 11, content: "post1", label: "p1" },
    { id: 12, content: "post2", label: "p2" },
    { id: 13, content: "post3", label: "p3" },
    { id: 14, content: "post4", label: "p4" },
    { id: 15, content: "post5", label: "p5" },
  ];

  return !postId ? (
    <PostsList {...{ posts }} />
  ) : (
    <Post {...{ posts, id: postId }} />
  );
};

export default Posts;
