import './VibesPage.css';
import './EmotionsPage.css';
import YourVibeCheck from './../images/VibesPics/YourVibeCheck.svg'
import VibePicture from './../images/VibesPics/VibePicture.svg'
import YourVibe from './../images/VibesPics/YourVibe.svg'
import YourColor from './../images/VibesPics/YourColor.svg'
import Analyze from './../images/VibesPics/Analyze.svg'
import resume from './../images/VibesPics/resume.svg'
import VibeCheck from './../images/EmotionsPics/navbar/VibeCheck.svg'
import vibe from './../images/VibesPics/vibe.svg'
import emotions from './../images/ColorsPics/menu/emotions.svg'
import colors from './../images/EmotionsPics/menu/colors.svg'

import {Link } from "react-router-dom";


function VibesPage() {
    return (
      <div className="VibesPage">
        <div id="list">
          <Link to={'/VibesPage'}>
            <img src={VibeCheck} className="EmotionsPage-logo" />
          </Link>
            <Link to={'/VibesPage'}>
              <img src={vibe} className="EmotionsPage-items" />
            </Link>
            <Link to={'/ColorsPage'}>
              <img src={colors} className="EmotionsPage-ListItems" />
            </Link>
            <Link to={'/EmotionsPage'}>
              <img src={emotions} className="EmotionsPage-ListItems" />
            </Link>
        </div>
          <header className="VibesPage-header">
          <img src={YourVibeCheck} className="VibesPage-items" />
          <div id="list">
            <img src={VibePicture} className="VibesPage-items" />
            <div id="rightbar">
              <div class="intro">Your vibe is</div>
              <div class="result">happiness</div>
              <br></br>
              <div class="intro">Your most frequent</div>
              <div class="intro">color is:</div>
              <div class="result">orange</div>
            </div>
          </div>
        </header>
      </div>
    );
}
  
  
export default VibesPage;