import { Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import LogIn from "../components/login";
import NavBar from "../components/navBar";
import Posts from "../components/posts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>react router</h1>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/posts" component={Posts} />
    </div>
  );
}

export default App;
