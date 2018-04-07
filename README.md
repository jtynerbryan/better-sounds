# Better Sounds
* Gain insight into your Spotify listening habits and create playlists of new music based on your needs
* View live site [here](https://bettersoundz.herokuapp.com) (please be patient while Heroku wakes up)
* Relies on Rails API back end ([repo](https://github.com/jtynerbryan/better-sounds-api))
## Features
* Authorizes users through [Spotify's Web API Authorization](https://developer.spotify.com/web-api/authorization-guide/) to access user's top tracks, top artists, audio features and playlists
* Users are able to view their top played tracks with [audio features](https://developer.spotify.com/web-api/get-audio-features/) information for each track using Chart.js
* User's Top Artists are displayed with images, follower count and related genres
* Aggregate Audio Features for top tracks are displayed using Chart.js to give Users greater understanding of their listening habits
* Users can create new playlists of previously undiscovered music based on their top artists' related artists
* New playlists feature a specific audio feature prominently, as selected by Users
* Embedded Spotify player allows users to listen to newly created playlists directly on the page 
* Redux provides persistent state across all app pages
* [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) copies Redux store into localstorage and re-hydrates Redux store on User page refresh. This minimizes Rails API requests and avoids rate-limiting issues with Spotify's API 
## Architecture
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
