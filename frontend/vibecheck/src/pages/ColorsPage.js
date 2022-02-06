import './ColorsPage.css';
import ChangeYourVibes from './../images/ColorsPics/ChangeYourVibes.svg'
import Ellipse from './../images/ColorsPics/colorslist/Ellipse.svg'
import Rectangle from './../images/ColorsPics/colorslist/Rectangle.svg'
import colors from './../images/ColorsPics/menu/colors.svg'
import emotions from './../images/ColorsPics/menu/emotions.svg'
import objects from './../images/ColorsPics/menu/objects.svg'
import comments from './../images/ColorsPics/navbar/comments.svg'
import VibeCheck from './../images/ColorsPics/navbar/VibeCheck.svg'
import engagement from './../images/ColorsPics/navbar/engagement.svg'
import vibe from './../images/ColorsPics/navbar/vibe.svg'
import likes from './../images/ColorsPics/navbar/likes.svg'
import OverviewResults from './../images/ColorsPics/overview/OverviewResults.svg'
import Rect from './../images/ColorsPics/overview/Rectangle.svg'
import coolicon from './../images/ColorsPics/overview/coolicon.svg'


function ColorsPage() {
    return (
      <div className="ColorsPage">
        <header className="ColorsPage-header">
          <img src={ChangeYourVibes} className="ColorsPage-items" />
          <img src={Ellipse} className="ColorsPage-items" />
          <img src={Rectangle} className="ColorsPage-items" />
          <img src={colors} className="ColorsPage-items" />
          <img src={emotions} className="ColorsPage-items" />
          <img src={objects} className="ColorsPage-items" />
          <img src={comments} className="ColorsPage-items" />
          <img src={VibeCheck} className="ColorsPage-items" />
          <img src={engagement} className="ColorsPage-items" />
          <img src={vibe} className="ColorsPage-items" />
          <img src={likes} className="ColorsPage-items" />
          <img src={OverviewResults} className="ColorsPage-items" />
          <img src={Rect} className="ColorsPage-items" />
          <img src={coolicon} className="ColorsPage-items" />
        </header>
      </div>
    );
}
  
  
export default ColorsPage;