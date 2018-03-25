import React from 'react'
import { connect } from 'react-redux'
import HomeNavBar from './HomeNavBar'
import LoggedInNavBar from './LoggedInNavBar'
import { Container, List, Grid } from 'semantic-ui-react'

class About extends React.Component {

  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <LoggedInNavBar/>
          <div className='about'>
          <h1>How does Better Sounds work?</h1>
          <Grid columns={2} textAlign='center' className='about-content'>
            <Grid.Row >
              <Grid.Column>
                <Container >
                  <h2>Spotify data accessed by Better Sounds:</h2>
                  <List bulleted className='about-list'>
                    <List.Item>Top Artists</List.Item>
                    <List.Item>Top Tracks</List.Item>
                    <List.Item>Artists Related to your Top Artists</List.Item>
                    <List.Item>Audio Features</List.Item>
                  </List>
                  <h3>Audio Features give an analytical portait of each song</h3>
                  <h4>Each feature is measured on a scale of 0-1</h4>
                  <List bulleted className='about-list'>
                    <List.Item>
                      Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.
                    </List.Item>
                    <List.Item>
                      Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.
                    </List.Item>
                    <List.Item>
                      Instrumentalness predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal".
                    </List.Item>
                    <List.Item>
                      Liveness detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.
                    </List.Item>
                    <List.Item>
                      Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words.
                    </List.Item>
                    <List.Item>
                      Acousticness is a confidence measure from of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
                    </List.Item>
                    <List.Item>
                      Valence describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
                    </List.Item>
                  </List>
                </Container>
              </Grid.Column>
              <Grid.Column id='playlist-creation'>
                <h2>Playlist Creation</h2>
                <h3>The algorithm for creating custom playlists is as follows:</h3>
                <List bulleted className='about-list'>
                  <List.Item>Retrieve a user's Top Artists</List.Item>
                  <List.Item>Randomly select one Top Artist and retrieve their Related Artists</List.Item>
                  <List.Item>Retrieve Top Tracks from multiple Related Artists</List.Item>
                  <List.Item>Retrieve Audio Features for each of these tracks</List.Item>
                  <List.Item>Map Audio Features to tracks and sort based on a user's desired audio feature</List.Item>
                  <List.Item>Post the top 30 tracks (shuffled) to Spotify, creating a new playlist</List.Item>
                  <List.Item>Throw away data used in steps 2-5 and repeat the process to ensure new music every time a playlist is created</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
        </div>
      )
    } else {
      return (
        <div className='about'>
          <HomeNavBar/>
          <h1>How does Better Sounds work?</h1>
          <Grid columns={2} textAlign='center' className='about-content'>
            <Grid.Row >
              <Grid.Column>
                <Container >
                  <h2>Spotify data accessed by Better Sounds:</h2>
                  <List bulleted className='about-list'>
                    <List.Item>Top Artists</List.Item>
                    <List.Item>Top Tracks</List.Item>
                    <List.Item>Artists Related to your Top Artists</List.Item>
                    <List.Item>Audio Features</List.Item>
                  </List>
                  <h3>Audio Features give an analytical portait of each song</h3>
                  <h4>Each feature is measured on a scale of 0-1</h4>
                  <List bulleted className='about-list'>
                    <List.Item>
                      Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.
                    </List.Item>
                    <List.Item>
                      Energy represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.
                    </List.Item>
                    <List.Item>
                      Instrumentalness predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal".
                    </List.Item>
                    <List.Item>
                      Liveness detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.
                    </List.Item>
                    <List.Item>
                      Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words.
                    </List.Item>
                    <List.Item>
                      Acousticness is a confidence measure from of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
                    </List.Item>
                    <List.Item>
                      Valence describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
                    </List.Item>
                  </List>
                </Container>
              </Grid.Column>
              <Grid.Column id='playlist-creation'>
                <h2>Playlist Creation</h2>
                <h3>The algorithm for creating custom playlists is as follows:</h3>
                <List bulleted className='about-list'>
                  <List.Item>Retrieve a user's Top Artists</List.Item>
                  <List.Item>Randomly select one Top Artist and retrieve their Related Artists</List.Item>
                  <List.Item>Retrieve Top Tracks from multiple Related Artists</List.Item>
                  <List.Item>Retrieve Audio Features for each of these tracks</List.Item>
                  <List.Item>Map Audio Features to tracks and sort based on a user's desired audio feature</List.Item>
                  <List.Item>Post the top 30 tracks (shuffled) to Spotify, creating a new playlist</List.Item>
                  <List.Item>Throw away data used in steps 2-5 and repeat the process to ensure new music every time a playlist is created</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  }
}

export default connect(mapStateToProps, null)(About)
