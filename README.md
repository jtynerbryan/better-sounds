# Better Sounds
• Gain insight into your Spotify listening habits and create playlists of new music based on your needs<br>
• View live site [here](https://bettersoundz.herokuapp.com) (please be patient while Heroku wakes up)<br>
• Relies on Rails API back end ([repo](https://github.com/jtynerbryan/better-sounds-api))
## Features
• Authorizes users through [Spotify's Web API Authorization](https://developer.spotify.com/web-api/authorization-guide/) to access a user's top tracks, recently played tracks, top artists, and playlists<br>
• Users are able to view their top and recently played tracks with [audio features](https://developer.spotify.com/web-api/get-audio-features/) information for each track<br>
• Aggregate Audio Features for top and recently played tracks are displayed using Chart.js to give Users greater understanding of their listening habits<br>
• Users can create new playlists of previously undiscovered music based on their top artists<br>
• New playlists feature a specific audio feature prominently, as selected by Users<br>
• Embedded Spotify player allows users to listen to newly created playlists directly on the page 
• Redux provides persistent state across all app pages
## Architecture
• This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
