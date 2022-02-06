import './VibesPage.css';
import YourVibeCheck from './../images/VibesPics/YourVibeCheck.svg'
import VibePicture from './../images/VibesPics/VibePicture.svg'
import MostCaptions from './../images/VibesPics/MostCaptions.svg'
import MostCommented from './../images/VibesPics/MostCommented.svg'
import MostPromoted from './../images/VibesPics/MostPromoted.svg'
import Analyze from './../images/VibesPics/Analyze.svg'
import resume from './../images/VibesPics/resume.svg'

function VibesPage() {
    return (
      <div className="VibesPage">
        <header className="VibesPage-header">
          <p>
            test!!
          </p>
          <img src={YourVibeCheck} className="VibesPage-items" />
          <img src={VibePicture} className="VibesPage-items" />
          <img src={MostCaptions} className="VibesPage-items" />
          <img src={MostCommented} className="VibesPage-items" />
          <img src={MostPromoted} className="VibesPage-items" />
          <img src={Analyze} className="VibesPage-items" />
          <img src={resume} className="VibesPage-items" />
        </header>
      </div>
    );
}
  
  
export default VibesPage;