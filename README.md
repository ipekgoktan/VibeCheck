# VibeCheck
 HackSC 2022 Submission

in order to run a quick demonstration of our frontend, clone the frontend branch of our repository. 
Navigate to the frontend/vibecheck/src directory, run $npm install followed by $npm start.

## Inspiration
In the past, the fastest way for creators to boost their work or brand was by getting shoutouts from larger creators or by paying for advertisements. Even now, it’s almost impossible to maximize engagement without an external tool. With Vibe Check, we wanted to create a platform that encourages all creators to improve their branding, aesthetics, and marketing on social media in order to reach more consumers. We were inspired to make this easy-to-use tool that aims to boost engagement for profiles that are trying to get more recignition for their work. Users would also be able to learn about patterns in their posts that result in greater engagement and optimize their content accordingly. Vibe Check is the perfect way to help the creator economy and support creators’ goal of sharing their content with their target consumers.

## What it does
Our team, TooManyEggs, decided to create a platform for creators to boost interactions from their followers. Vibe Check is an online platform that analyzes users’ Instagram posts, visualizes their overall vibe, and gives suggestions on how to increase engagement with their profile. Creators see which emotions and colors followers see the most on their feed and get tips on how to grow their account. You simply enter your Instagram username to get a Vibe Check!

After the user enters their username, they get their “overall vibe”. On this page, the user sees their most recent post, what emotion the majority of their posts convey, and the most prominent color on their profile. Users can share this page with their friends or followers to compare their results with each other. The other two pages are dedicated to giving feedback on how to boost interaction for the user in terms of colors and emotions. The “Colors” page gives suggestions for users on how to increase likes, comments, and overall engagement by evaluating the most common colors in posts. Similarly, the “Emotions” page lists the emotions most frequently detected in the posts and compares the increase or decrease in likes or comments in order to recommend which emotions the creator should prioritize posting. With this, users can modify and plan their posts to get maximum involvement from followers.

## How we built it
We first made a low-fidelity model using Figma and continued to develop the idea going from our design. After finalizing the features we wanted to include in Vibe Check, we created a web application based on the final design components using React. We then used the Meta API to connect to an individual Instagram account and return the links to different posts and specific data, such as the number of likes and comments. We used an express server that handles axios post calls in order to make these Meta API calls. From there, we used the Google Vison API, which when given an image would return the top colors and the emotions of the people in these pictures. The information collected by these API calls are displayed on our React App.

<img width="200" alt="customer data" src="https://user-images.githubusercontent.com/36688658/165654696-1d282dd8-3cd7-4b33-8689-05cfb0eba16a.png">
<img width="200" alt="customer data" src="https://user-images.githubusercontent.com/36688658/165654696-1d282dd8-3cd7-4b33-8689-05cfb0eba16a.png">
<img width="200" alt="customer data" src="https://user-images.githubusercontent.com/36688658/165654696-1d282dd8-3cd7-4b33-8689-05cfb0eba16a.png">
<img width="200" alt="customer data" src="https://user-images.githubusercontent.com/36688658/165654696-1d282dd8-3cd7-4b33-8689-05cfb0eba16a.png">
