import './EmotionsPage.css';
import ChangeYourVibes from './../images/EmotionsPics/ChangeYourVibes.svg'
import anger from './../images/EmotionsPics/emotionslist/anger.svg'
import happy from './../images/EmotionsPics/emotionslist/happy.svg'
import neutral from './../images/EmotionsPics/emotionslist/neutral.svg'
import sad from './../images/EmotionsPics/emotionslist/sad.svg'
import surprise from './../images/EmotionsPics/emotionslist/surprise.svg'
import colors from './../images/EmotionsPics/menu/colors.svg'
import emotions from './../images/EmotionsPics/menu/emotions.svg'
import objects from './../images/EmotionsPics/menu/objects.svg'
import comments from './../images/EmotionsPics/navbar/comments.svg'
import VibeCheck from './../images/EmotionsPics/navbar/VibeCheck.svg'
import engagement from './../images/EmotionsPics/navbar/engagement.svg'
import vibe from './../images/EmotionsPics/navbar/vibe.svg'
import likes from './../images/EmotionsPics/navbar/likes.svg'
import OverviewResults from './../images/EmotionsPics/overview/OverviewResults.svg'
import Rect from './../images/EmotionsPics/overview/Rectangle.svg'
import coolicon from './../images/EmotionsPics/overview/coolicon.svg'


function EmotionsPage() {
    return (
      <div className="EmotionsPage">
        <header className="EmotionsPage-header">
          <img src={ChangeYourVibes} className="EmotionsPage-items" />
          <img src={anger} className="EmotionsPage-items" />
          <img src={happy} className="EmotionsPage-items" />
          <img src={neutral} className="EmotionsPage-items" />
          <img src={sad} className="EmotionsPage-items" />
          <img src={surprise} className="EmotionsPage-items" />
          <img src={colors} className="EmotionsPage-items" />
          <img src={emotions} className="EmotionsPage-items" />
          <img src={objects} className="EmotionsPage-items" />
          <img src={comments} className="EmotionsPage-items" />
          <img src={VibeCheck} className="EmotionsPage-items" />
          <img src={engagement} className="EmotionsPage-items" />
          <img src={vibe} className="EmotionsPage-items" />
          <img src={likes} className="EmotionsPage-items" />
          <img src={OverviewResults} className="EmotionsPage-items" />
          <img src={Rect} className="EmotionsPage-items" />
          <img src={coolicon} className="EmotionsPage-items" />
        </header>
      </div>
    );
}
  
  
export default EmotionsPage;