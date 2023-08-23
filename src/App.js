import logo from './pics/Cake.jpg'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CakeSelection from './CakeSelection';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/">
          </Route>
        </Switch>
        <img src={logo} />
        <p> Freshly made with the finest ingredients. </p>
        
      </div>
    </Router>
  );
}

export default App;
