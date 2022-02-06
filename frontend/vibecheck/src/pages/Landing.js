import './Landing.css';
import Prompt from './../images/LandingPics/Prompt.svg'
import VibeCheck from './../images/LandingPics/VibeCheck.svg'
import Rectangle from './../images/LandingPics/Rectangle.svg'
import button from './../images/LandingPics/button.svg'
import {Link } from "react-router-dom";

function Landing() {
    return (
      <div className="Landing">
        <header className="Landing-header">
          <img src={Prompt} className="Landing-items" />
          <img src={VibeCheck} className="Landing-items" />
          <Link to={'/VibesPage'}>
            <img src={button} className="Landing-items" />
          </Link>
        </header>
      </div>
    );
}
  
  
export default Landing;