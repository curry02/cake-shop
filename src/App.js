import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CakeSelection from './CakeSelection';
import Home from './Home';
import Contact from './Contact';
import TwoChoices from './TwoChoices';
import CakeDetails from './CakeDetails';
import Checkout from './Checkout';
import Thankyou from './Thankyou';

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

          <Route path="/order">
            <TwoChoices/>
          </Route>

          <Route path="/chooseFromSelection">
            <CakeSelection />
          </Route>


          

          <Route path= "/cakeSelection/:id">
            <CakeDetails />
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/thankyou">
            <Thankyou />
          </Route>
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
