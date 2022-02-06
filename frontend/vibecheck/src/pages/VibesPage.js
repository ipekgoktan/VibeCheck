import './VibesPage.css';
import './EmotionsPage.css';
import YourVibeCheck from './../images/VibesPics/YourVibeCheck.svg'
import VibePicture from './../images/VibesPics/VibePicture.svg'
import MostCaptions from './../images/VibesPics/MostCaptions.svg'
import MostCommented from './../images/VibesPics/MostCommented.svg'
import MostPromoted from './../images/VibesPics/MostPromoted.svg'
import Analyze from './../images/VibesPics/Analyze.svg'
import resume from './../images/VibesPics/resume.svg'
import VibeCheck from './../images/EmotionsPics/navbar/VibeCheck.svg'
import vibe from './../images/EmotionsPics/navbar/vibe.svg'
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
          <img src={VibePicture} className="VibesPage-items" />
          <img src={MostCaptions} className="VibesPage-items" />
          <img src={MostCommented} className="VibesPage-items" />
          <img src={MostPromoted} className="VibesPage-items" />
          <Link to={'/LikesPage'}>
            <img src={Analyze} className="VibesPage-items" />
          </Link>
          <img src={resume} className="VibesPage-items" />
        </header>
      </div>
    );
}
  
  
export default VibesPage;