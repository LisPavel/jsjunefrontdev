const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = async () => {
  try {
    const postsResponse = await fetch(POSTS_URL, { method: "POST" });
    if (!postsResponse.ok)
      throw new Error(`Can't get posts, error code is ${postsResponse.status}`);

    const result = await postsResponse.json();
    console.log("result", result);
  } catch (error) {
    console.log("error", error);
  } finally {
    isLoading = false;
  }
};
createNewPost();
