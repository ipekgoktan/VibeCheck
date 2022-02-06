import axios from "axios";
import Cookies from 'js-cookie';

const INSTAGRAM_APP_ID = '711683256903938';
const INSTAGRAM_APP_SECRET = '4a67f6e1c3f297c378e78088c1da2903';
const HOMEPAGE = 'https://ipekgoktan.github.io/VibeCheck';

class MediaService {

setupInsta(){
	let appId = INSTAGRAM_APP_ID;
	let redUri = HOMEPAGE + "/Redirect";
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
	window.open(url, "_blank").focus();

    // //added this
    // let code = url.substring(url.find("code="), url.length - 2);
    // window.alert("button pushed, code:" + code);
    // this.postAuth(code);
}

postAuth(){

    // request.post(
    //     { form: { client_id: INSTAGRAM_APP_ID,
    //               client_secret: INSTAGRAM_APP_SECRET,
    //               grant_type: 'authorization_code',
    //               redirect_uri: HOMEPAGE + "/insta",
    //               code: code
    //             },
    //       url: 'https://api.instagram.com/oauth/access_token'
    //     },
    //     function (err, response, body) {
    //       if (err) {
    //         console.log("error in Post", err)
    //       }else{
    //         console.log(JSON.parse(body))
    //       }
    //     }
    //   );

      
    axios.post('https://api.instagram.com/oauth/access_token', {
        code: Cookies.get("code"),
        redirectUrl: HOMEPAGE // needs to be registered at fb developer console
    })
    .then(({ data }) => {
        // handle success case
        console.log(data.status);
        console.log(data.code);
    })
}



//   getUsersLists(userId){ 
//     return http.get(`/listcode/${userId}`);
//   }

//   //listData is actually a listCode. 
//   //Add list code to table
//   addListCode(listData) {
//     return http.post('/listcode', listData);
//   }

//   checkListCode(listid) {
//     return http.get(`/listcode?listid=${listid}`);
//   }

//   //Parameter is a list code, which is actually named listID. 
//   //Get all user emails that can see a certain list code. 
//   //Returns a set of user emails.
//   getUserEmails(listid){
//     return http.get(`/email?listid=${listid}`)
//   }

}

export default new MediaService();