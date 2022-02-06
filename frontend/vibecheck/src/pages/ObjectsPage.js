import './ObjectsPage.css';
import './EmotionsPage.css';
import ChangeYourVibes from './../images/ObjectsPics/ChangeYourVibes.svg'
import object1 from './../images/ObjectsPics/objectslist/object1.svg'
import object2 from './../images/ObjectsPics/objectslist/object2.svg'
import object3 from './../images/ObjectsPics/objectslist/object3.svg'
import colors from './../images/ObjectsPics/menu/colors.svg'
import emotions from './../images/ObjectsPics/menu/emotions.svg'
import objects from './../images/ObjectsPics/menu/objects.svg'
import comments from './../images/ObjectsPics/navbar/comments.svg'
import VibeCheck from './../images/ObjectsPics/navbar/VibeCheck.svg'
import engagement from './../images/ObjectsPics/navbar/engagement.svg'
import vibe from './../images/ObjectsPics/navbar/vibe.svg'
import likes from './../images/ObjectsPics/navbar/likes.svg'
import OverviewResults from './../images/ObjectsPics/overview/OverviewResults.svg'
import Rect from './../images/ObjectsPics/overview/Rectangle.svg'
import coolicon from './../images/ObjectsPics/overview/coolicon.svg'
import {Link } from "react-router-dom";


function ObjectsPage() {
    return (
      <div className="ColorsPage">
      {/* header */}
      <div id="list">
        <Link to={'/VibesPage'}>
          <img src={VibeCheck} className="EmotionsPage-logo" />
        </Link>
          <Link to={'/VibesPage'}>
            <img src={vibe} className="EmotionsPage-items" />
          </Link>
          <Link to={'/LikesPage'}>
            <img src={likes} className="EmotionsPage-items" />
          </Link>
          <Link to={'/CommentsPage'}>
            <img src={comments} className="EmotionsPage-items" />
          </Link>
          <Link to={'/ColorsPage'}>
            <img src={engagement} className="EmotionsPage-items" />
          </Link>
      </div>

      <header className="EmotionsPage-header" >
        <div id="menuList" >
          <Link to={'/ColorsPage'}>
            <img src={colors} className="EmotionsPage-ListItems" />
          </Link>
          <Link to={'/ObjectsPage'}>
            <img src={objects} className="EmotionsPage-ListItems" />
          </Link>
          <Link to={'/EmotionsPage'}>
            <img src={emotions} className="EmotionsPage-ListItems" />
          </Link>
        </div>

        <div id="list">
          <div id="leftbar">
            <img src={ChangeYourVibes} className="EmotionsPage-leftBarItems" />
            <br></br>
            <img src={OverviewResults} className="EmotionsPage-leftBarItems" />
          </div>

          <div id="rightbar">
            <img src={object1} className="ColorsPage-rightBarItems" />
            <br></br>
            <img src={object2} className="ColorsPage-rightBarItems" />
            <br></br>
            <img src={object3} className="ColorsPage-rightBarItems" />
          </div>
        </div>
      </header>
    </div>
    );
}
  
  
export default ObjectsPage;