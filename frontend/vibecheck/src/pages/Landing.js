import './Landing.css';
import Prompt from './../images/LandingPics/Prompt.svg'
import VibeCheck from './../images/LandingPics/VibeCheck.svg'
import Rectangle from './../images/LandingPics/Rectangle.svg'

function Landing() {
    return (
      <div className="Landing">
        <header className="Landing-header">
          <p>
            test!!
          </p>
          <img src={Prompt} className="Landing-items" />
          <img src={VibeCheck} className="Landing-items" />
          <img src={Rectangle} className="Landing-items" />
        </header>
      </div>
    );
}
  
  
export default Landing;