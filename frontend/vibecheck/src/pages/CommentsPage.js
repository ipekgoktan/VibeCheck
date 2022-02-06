import './CommentsPage.css';
import Look from './../images/CommentsPics/Look.svg'
import VibeCheck from './../images/CommentsPics/VibeCheck.svg'
import engagement from './../images/CommentsPics/engagement.svg'
import vibe from './../images/CommentsPics/vibe.svg'
import Rectangle from './../images/CommentsPics/Rectangle.svg'
import comments from './../images/CommentsPics/comments.svg'
import likes from './../images/CommentsPics/likes.svg'

function CommentsPage() {
    return (
      <div className="CommentsPage">
        <header className="CommentsPage-header">
          <img src={Look} className="CommentsPage-items" />
          <img src={VibeCheck} className="CommentsPage-items" />
          <img src={engagement} className="CommentsPage-items" />
          <img src={vibe} className="CommentsPage-items" />
          <img src={Rectangle} className="CommentsPage-items" />
          <img src={comments} className="CommentsPage-items" />
          <img src={likes} className="CommentsPage-items" />
        </header>
      </div>
    );
}
  
  
export default CommentsPage;