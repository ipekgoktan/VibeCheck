import logo from '../logo.svg';
import {Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/Landing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        
    </div>
  );
}

//window.location.replace('/Landing');
export default App;

