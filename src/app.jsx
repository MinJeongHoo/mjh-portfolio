import './app.css';
import Profile from './components/leftcomponents/profile';
import About from './components/rightcomponents/about/about';
import Portfolio from './components/rightcomponents/portfolio/portfolio';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Profile />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="*" component={About}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
