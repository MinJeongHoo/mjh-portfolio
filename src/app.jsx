import './app.css';
import Profile from './components/leftcomponents/profile';
import About from './components/rightcomponents/about/about';
import Portfolio from './components/rightcomponents/portfolio/portfolio';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Profile />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      </Router>
    </>
  );
}

export default App;
