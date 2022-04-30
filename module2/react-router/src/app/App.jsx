import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import LogIn from "../components/login";
import NavBar from "../components/navBar";
import NotFound from "../components/not-fount";
import Posts from "../components/posts";
import Stats from "../components/stats";
// import PostsList from "../components/postsList";
// import Post from "../components/post";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>react router</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={LogIn} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
