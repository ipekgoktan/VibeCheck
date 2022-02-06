import './LikesPage.css';
import Look from './../images/LikesPics/Look.svg'
import VibeCheck from './../images/LikesPics/VibeCheck.svg'
import engagement from './../images/LikesPics/engagement.svg'
import vibe from './../images/LikesPics/vibe.svg'
import Rectangle from './../images/LikesPics/Rectangle.svg'
import comments from './../images/LikesPics/comments.svg'
import likes from './../images/LikesPics/likes.svg'

function LikesPage() {
    return (
      <div className="LikesPage">
        <header className="LikesPage-header">
          <img src={Look} className="LikesPage-items" />
          <img src={VibeCheck} className="LikesPage-items" />
          <img src={engagement} className="LikesPage-items" />
          <img src={vibe} className="LikesPage-items" />
          <img src={Rectangle} className="LikesPage-items" />
          <img src={comments} className="LikesPage-items" />
          <img src={likes} className="LikesPage-items" />
        </header>
      </div>
    );
}
  
  
export default LikesPage;