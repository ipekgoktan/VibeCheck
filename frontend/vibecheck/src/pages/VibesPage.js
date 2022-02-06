import axios from 'axios';
import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

import './VibesPage.css';
import YourVibeCheck from './../images/VibesPics/YourVibeCheck.svg'
import VibePicture from './../images/VibesPics/VibePicture.svg'
import MostCaptions from './../images/VibesPics/MostCaptions.svg'
import MostCommented from './../images/VibesPics/MostCommented.svg'
import MostPromoted from './../images/VibesPics/MostPromoted.svg'
import Analyze from './../images/VibesPics/Analyze.svg'
import resume from './../images/VibesPics/resume.svg'

function VibesPage() {
    const [images, setImages] = useState([]);

    // We are using an "async" function here so that we can use "await"
    useEffect(async () => {
      const accessToken = Cookie.get('access_token');
      const userInfoResponse = await axios.get(`https://graph.instagram.com/me?fields=id&access_token=${accessToken}`);
      const userId = userInfoResponse.data.id;
      // id, media_url, permalink
      const imageResponse = await axios.get(`https://graph.instagram.com/${userId}/media?fields=id,media_url,permalink&access_token=${accessToken}`);
      // Break out the "data" attribute once from the response (it ends up at imageResponse.data.data because facebook is weird)
      const imageData = imageResponse.data;

      // Eventually refactor into image processing code. We would not simply "set images", we would upload them to GCP for processing.
      setImages(imageData.data);
    }, []);

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
        <main>
          {images.length === 0 && (<p>No images...</p>)}
          <ul>
            {images.map(image => (
              <li key={image.id}>
                <a href={image.permalink}>
                  <img src={image.media_url} />
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
}
  
  
export default VibesPage;