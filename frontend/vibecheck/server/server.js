const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const querystring = require('querystring');
const axios = require('axios');
const port = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/api/auth', async (req, res) => {
  try {
      const form = new URLSearchParams();
      form.append('client_id', '711683256903938');
      form.append('client_secret', '4a67f6e1c3f297c378e78088c1da2903');
      form.append('grant_type', 'authorization_code');
      form.append('code', req.query.code);
      form.append('redirect_uri', 'https://ipekgoktan.github.io/VibeCheck/VibesPage');
      // send form based request to Instagram API
      let result = await axios.post('https://api.instagram.com/oauth/access_token', form, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });

      // Got access token. Parse string response to JSON
      console.log(result.data);
      let accessToken = result.data.access_token;
      res.send({ accessToken });
  } catch (e) {
      console.log("Error=====", e);
      res.sendStatus(500);
  }
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Listening on port: ', port);
});