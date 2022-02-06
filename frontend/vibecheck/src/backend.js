// data from frontend
let code = req.body.code;
let redirectUri = req.body.redirectUri;

let accessToken = null;
try {

    // send form based request to Instagram API
    let result = await request.post({
        url: 'https://api.instagram.com/oauth/access_token',
        form: {
            client_id: process.env.INSTA_APP_ID,
            client_secret: process.env.INSTA_APP_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: req.body.redirectUri,
            code: req.body.code
        }
    });

    // Got access token. Parse string response to JSON
    accessToken = JSON.parse(result).access_token;
} catch (e) {
    console.log("Error=====", e);
}

try {
  let instaAccessToken = "XXXXXX"; // get from DB
  let resp = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url&access_token=${instaAccessToken}`);
  resp = resp.data;
  let instaPhotos = resp.data.filter(d => d.media_type === "IMAGE").map(d => d.media_url);
  // Got insta photos
} catch (e) {
   console.log(e.response.data.error);
}