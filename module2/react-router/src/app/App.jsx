import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import LogIn from "../components/login";
import NavBar from "../components/navBar";
import Posts from "../components/posts";
import Stats from "../components/stats";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>react router</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        <Route path="/login" component={LogIn} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
