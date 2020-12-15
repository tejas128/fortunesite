
import './App.css';
import Header from "./header/Header"
import Grid from "./grid/Grid"
import Hotitems from "./Hotitems/Hotitems"
import Footer from "./footer/Footer"
import Catlog from "./catlog/Catlog"
import Home from './Home/Home';
import { HashRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
   
      <div className="App">


        <Router>
        <div class="body-content">
          <Header />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/catlog"  component={Catlog}/>
            
          </Switch>
          <Footer />
        </div>
        </Router>




      </div>
   
  );
}

export default App;
