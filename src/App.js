import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CakeSelection from './CakeSelection';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="chooseFromSelection">
            <CakeSelection />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
