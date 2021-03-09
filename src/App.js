import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Home1 from './components/pages/Home1';
import Navigation from './components/navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      <BrowserRouter>
      <Navigation/>

      <Switch>    
        <Route exact path="/home" component={Home}/>
        <Route exact path="/home1" component={Home1}/>      
      </Switch>
      </BrowserRouter>
      </header>
      <div>
        Hello chris
        <h2>Testing CI/CD  in overallDemo.</h2>
      </div>
    </div>
  );
}

export default App;
