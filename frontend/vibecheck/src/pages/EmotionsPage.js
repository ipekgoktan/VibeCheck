import './EmotionsPage.css';
import ChangeYourVibes from './../images/EmotionsPics/ChangeYourVibes.svg'
import anger from './../images/EmotionsPics/emotionslist/anger.svg'
import happy from './../images/EmotionsPics/emotionslist/happy.svg'
import neutral from './../images/EmotionsPics/emotionslist/neutral.svg'
import sad from './../images/EmotionsPics/emotionslist/sad.svg'
import surprise from './../images/EmotionsPics/emotionslist/surprise.svg'
import colors from './../images/EmotionsPics/menu/colors.svg'
import emotions from './../images/EmotionsPics/emotions.svg'
import objects from './../images/EmotionsPics/menu/objects.svg'
import comments from './../images/EmotionsPics/navbar/comments.svg'
import VibeCheck from './../images/EmotionsPics/navbar/VibeCheck.svg'
import engagement from './../images/EmotionsPics/navbar/engagement.svg'
import vibe from './../images/EmotionsPics/navbar/vibe.svg'
import likes from './../images/EmotionsPics/navbar/likes.svg'
import OverviewResults from './../images/EmotionsPics/overview/OverviewResults.svg'
import Rect from './../images/EmotionsPics/overview/Rectangle.svg'
import coolicon from './../images/EmotionsPics/overview/coolicon.svg'
import {Link } from "react-router-dom";


function EmotionsPage() {
    return (
      <div className="EmotionsPage">
        {/* header */}
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

        
        
        <header className="EmotionsPage-header" >
        <div id="list">
          <div id="leftbar">
            <img src={ChangeYourVibes} className="EmotionsPage-leftBarItems" />
            <br></br>
            <img src={OverviewResults} className="EmotionsPage-leftBarItems" />
          </div>

          <div id="rightbar">
            <img id = "smaller_bar" src={anger} className="EmotionsPage-rightBarItems" />
            <br></br>
            <img  id = "smaller_bar" src={happy} className="EmotionsPage-rightBarItems" />
            <br></br>
            <img  id = "smaller_bar" src={neutral} className="EmotionsPage-rightBarItems" />
            <br></br>
            <img  id = "smaller_bar" src={sad} className="EmotionsPage-rightBarItems" />
            <br></br>
            <img  id = "smaller_bar" src={surprise} className="EmotionsPage-rightBarItems" />
          </div>
        </div>
          
          
          
        </header>
      </div>
    );
}
  
  
export default EmotionsPage;