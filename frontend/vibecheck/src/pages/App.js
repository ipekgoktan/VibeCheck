import logo from '../logo.svg';
import {Link } from "react-router-dom";
import './App.css';
import media from '../mediaService.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>This is a vibe check.</p>
        {/* <button
          onclick={media.setupInsta}
        >
          AUTHORIZE INSTAGRAM
        </button> */}
        <button type="button" id = "BUTTON"  onClick={media.setupInsta} >AUTHORIZE INSTAGRAM</button>
      </header>
        
    </div>
  );
}

//window.location.replace('/Landing');
export default App;

