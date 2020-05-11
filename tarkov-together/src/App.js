import React from 'react';
import './App.css';
import Base from '../src/controllers/Base';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MapDisplay from '../src/components/MapDisplay';

function App() {
  return(
  <Router>
    <Switch>
      <Route path="/tarkov"><MapDisplay components={{name:"tarkov"}} /></Route>
      <Route path="/valorant"><MapDisplay components={{name:"valorant"}}/></Route>
      <Route path="/">{Home }</Route>
    </Switch>
  </Router>
  );
}

function Home(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tarkov Together Beta 0.0.1
        </h1>
        <hr></hr>
      </header>
      < Base />
    </div>
  );
}
export default App;
