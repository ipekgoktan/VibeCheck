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

## Challenges we ran into
Most of the difficulties we faced were related to the time constraints. We originally wanted to include more in-depth analysis of users’ posts that showed what type of picture generates the most likes or comments. However, our plan changed when we realized that this wasn’t possible due to our already limited knowledge of the API’s we used on top of the time limit we had. So, we simplified Vibe Check to be a more concise and compressed version of our original idea.

Another challenge we had to work through was working with the Meta API. We ran into a cors error that prevented us from accessing an authentication key from our frontend, so we had to create a backend server that would support our API calls.

We ran into a similar problem when using the Google Vision API, as our functions would not wait for the API call to stop processing before returning results. We are currently working on solving this issue by making API calls to asynchronous functions from the backend.

## Accomplishments that we're proud of
We are proud of the project we created in the short amount of time we were given and how we used new technologies to make a tool that creators can use to develop follower interaction strategies. Vibe Check could make a difference in creators’ lives where the platform makes it easier to come up with ways to increase engagement using data analytics. As developers, we are especially proud of getting our web app and API calls to both the Meta and Google Vision API’s to work.

## What we learned
Prior to this hackathon, our team had limited experience with web development. This project was the first time many of our developers created a React App from scratch and made API calls for a web application. We learned a lot about how to use different API’s, and gained experience in working with HTML, CSS, and JavaScript. This was also our first time working on the backend portion of a web application, which was a valuable learning experience.

## What's next for Vibe Check
We will continue to develop Vibe Check and create advancements for creators to access more analysis on their Instagram profiles. In the future, we aim to create pages where users can see their most liked/commented posts distributed into categories (Food, Fashion, Views, Selfies, and Miscellaneous) and can see what elements made these posts so popular. We also plan to implement a section for a more in-depth analysis of emotions that generated more likes/comments and show the distribution of these emotions in the user’s top liked/commented posts. Later on, we hope to analyze creators’ other social media platforms, such as Twitter, as well. This way, with more variables for more suggestion options, we would be able to maximize the number of platforms creators can improve their engagement rate. Another goal is to make Vibe Check a bridge between creators, where creators with the same “vibe” could connect through Vibe Check. However, our end goal is to empower creators by showing them what’s going on in their feed and guiding them to optimize their decision making for what they’re making or promoting.
