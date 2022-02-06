import './LikesPage.css';
import Look from './../images/LikesPics/Look.svg'
import VibeCheck from './../images/LikesPics/VibeCheck.svg'
import engagement from './../images/LikesPics/engagement.svg'
import vibe from './../images/LikesPics/vibe.svg'
import Rectangle from './../images/LikesPics/Rectangle.svg'
import comments from './../images/LikesPics/comments.svg'
import likes from './../images/LikesPics/likes.svg'
import {Link } from "react-router-dom";

function LikesPage() {
    return (
      <div className="LikesPage">
        <header className="LikesPage-header">
          <img src={Look} className="LikesPage-items" />
          <Link to={'/VibesPage'}>
          <img src={VibeCheck} className="LikesPage-items" />
          </Link>
          <Link to={'/ColorsPage'}>
            <img src={engagement} className="LikesPage-items" />
          </Link>
          <Link to={'/VibesPage'}>
            <img src={vibe} className="LikesPage-items" />
          </Link>
          <img src={Rectangle} className="LikesPage-items" />
          <Link to={'/CommentsPage'}>
            <img src={comments} className="LikesPage-items" />
          </Link>
          <Link to={'/LikesPage'}>
            <img src={likes} className="LikesPage-items" />
          </Link>
        </header>
      </div>
    );
}
  
  
export default LikesPage;