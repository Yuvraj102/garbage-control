import "./App.css";
import Create from "./Create/Create";
import Home from "./Home/Home";
import Login from "./Login/Login";
import NavigationBarComponent from "./NavigationBar/NavigationBarComponent";
import Feature from "./Feature/Feature";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./Context/StateProvider";
import { useState } from "react";
import About from "./About/About";

function App() {
  const [state, dispatch] = useStateValue();
  const [postsData, setPostsData] = useState([]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        {state.token && (
          <>
            <NavigationBarComponent />
            <Route path="/create" exact>
              <Create setPostsData={setPostsData} />
            </Route>
            <Route path="/post/:id" exact>
              <Feature setPostsData={setPostsData} />
            </Route>
            <Route path="/home" exact>
              <Home postsData={postsData} setPostsData={setPostsData} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
