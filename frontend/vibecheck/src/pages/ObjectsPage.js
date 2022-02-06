import './ObjectsPage.css';
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


function ObjectsPage() {
    return (
      <div className="ObjectsPage">
        <header className="ObjectsPage-header">
          <img src={ChangeYourVibes} className="ObjectsPage-items" />
          <img src={object1} className="ObjectsPage-items" />
          <img src={object2} className="ObjectsPage-items" />
          <img src={object3} className="ObjectsPage-items" />
          <img src={colors} className="ObjectsPage-items" />
          <img src={emotions} className="ObjectsPage-items" />
          <img src={objects} className="ObjectsPage-items" />
          <img src={comments} className="ObjectsPage-items" />
          <img src={VibeCheck} className="ObjectsPage-items" />
          <img src={engagement} className="ObjectsPage-items" />
          <img src={vibe} className="ObjectsPage-items" />
          <img src={likes} className="ObjectsPage-items" />
          <img src={OverviewResults} className="ObjectsPage-items" />
          <img src={Rect} className="ObjectsPage-items" />
          <img src={coolicon} className="ObjectsPage-items" />
        </header>
      </div>
    );
}
  
  
export default ObjectsPage;