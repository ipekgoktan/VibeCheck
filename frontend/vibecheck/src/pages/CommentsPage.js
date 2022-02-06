import './CommentsPage.css';
import Look from './../images/CommentsPics/Look.svg'
import VibeCheck from './../images/CommentsPics/VibeCheck.svg'
import engagement from './../images/CommentsPics/engagement.svg'
import vibe from './../images/CommentsPics/vibe.svg'
import Rectangle from './../images/CommentsPics/Rectangle.svg'
import comments from './../images/CommentsPics/comments.svg'
import likes from './../images/CommentsPics/likes.svg'
import {Link } from "react-router-dom";

function CommentsPage() {
    return (
      <div className="CommentsPage">
        <header className="CommentsPage-header">
          <img src={Look} className="CommentsPage-items" />
          <Link to={'/VibesPage'}>
          <img src={VibeCheck} className="CommentsPage-items" />
          </Link>
          <Link to={'/ColorsPage'}>
            <img src={engagement} className="CommentsPage-items" />
          </Link>
          <Link to={'/VibesPage'}>
          <img src={vibe} className="CommentsPage-items" />
          </Link>
          <img src={Rectangle} className="CommentsPage-items" />
          <Link to={'/CommentsPage'}>
          <img src={comments} className="CommentsPage-items" />
          </Link>
          <Link to={'/LikesPage'}>
            <img src={likes} className="CommentsPage-items" />
          </Link>
        </header>
      </div>
    );
}
  
  
export default CommentsPage;