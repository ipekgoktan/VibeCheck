import './ColorsPage.css';
import './EmotionsPage.css';
import ChangeYourVibes from './../images/ColorsPics/ChangeYourVibes.svg'
import Ellipse from './../images/ColorsPics/colorslist/Ellipse.svg'
import Rectangle from './../images/ColorsPics/colorslist/Rectangle.svg'
import colors from './../images/ColorsPics/colors.svg'
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
import {Link } from "react-router-dom";


function ColorsPage() {
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
            <Link to={'/ColorsPage'}>
              <img src={colors} className="EmotionsPage-ListItems" />
            </Link>
            <Link to={'/EmotionsPage'}>
              <img src={emotions} className="EmotionsPage-ListItems" />
            </Link>
        </div>

        <header className="EmotionsPage-header" >

          <div id="list">
            <div id="leftbar">
              <img src={ChangeYourVibes} className="EmotionsPage-leftBarItems" />
              <br></br>
              <div class="container">
                <img src={OverviewResults} className="EmotionsPage-leftBarItems" />
                <div class="centered">
                  <p> To prioritize likes, post </p>
                  <p>dark pink more. </p>
                  <p> To prioritize comments, post </p>
                  <p> orange more. </p>
                  <p> To prioritize overall engagement, </p>
                  <p>post pink more. </p>
                </div>
              </div>
            </div>

            <div id="rightbar">
              <div class="container">
                <img src={Ellipse} className="ColorsPage-rightBarItems" />
                <img src={Rectangle} className="ColorsPage-rightBarItems" />
                <div class="colorInfo">
                  <p>Your most posted color is grey.</p>
                  <p>You get 10% less likes and 4% less comments when you post this color.</p>
                </div>
              </div>

              <div class="container">
                <img src={Ellipse} className="ColorsPage-rightBarItems" />
                <img src={Rectangle} className="ColorsPage-rightBarItems" />
                <div class="colorInfo">
                  <p>Your most posted color is grey.</p>
                  <p>You get 10% less likes and 4% less comments when you post this color.</p>
                </div>
              </div>

              <div class="container">
                <img src={Ellipse} className="ColorsPage-rightBarItems" />
                <img src={Rectangle} className="ColorsPage-rightBarItems" />
                <div class="colorInfo">
                  <p>Your most posted color is grey.</p>
                  <p>You get 10% less likes and 4% less comments when you post this color.</p>
                </div>
              </div>

              <div class="container">
                <img src={Ellipse} className="ColorsPage-rightBarItems" />
                <img src={Rectangle} className="ColorsPage-rightBarItems" />
                <div class="colorInfo">
                  <p>Your most posted color is grey.</p>
                  <p>You get 10% less likes and 4% less comments when you post this color.</p>
                </div>
              </div>
              
              
            </div>

          </div>
        </header>
      </div>
    );
}
  
  
export default ColorsPage;