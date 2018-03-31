import React from 'react'
import AudioFeaturesChart from './AudioFeaturesChart'
import TopArtists from './TopArtists'
import TopTracksList from './TopTracksList'
import LoggedInNavBar from './NavBars/LoggedInNavBar'
import ArtistsFeaturesCarousel from './Carousel'
import { bindActionCreators } from 'redux'
import { addRelatedArtistsTopTracks } from '../actions/relatedArtists'
import { addRelatedArtistsAudioFeatures } from '../actions/relatedArtists'
import { mapRelatedArtistsFeaturesToTracks } from '../actions/relatedArtists'
import { connect } from 'react-redux'

class UserResults extends React.Component {

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    // fetch relatedArtistsTopTracks for playlist creation later
    if (this.props.relatedArtistsTopTracks.length === 0 && this.props.relatedArtistsAudioFeatures.length === 0) {
      const topEightRelatedArtists = this.props.relatedArtists.slice(0, 8)
      topEightRelatedArtists.map(artist => this.props.addRelatedArtistsTopTracks(this.props.user.id, artist.id))
    }
  }

  componentDidUpdate() {
    // fetch relatedArtistsAudioFeatures using trackIds fetched in componentDidMount()
    if (this.props.relatedArtistsTopTracks.length === 80 && this.props.relatedArtistsAudioFeatures.length === 0) {
      this.props.addRelatedArtistsAudioFeatures(this.props.user.id, this.props.relatedArtistsTopTracks)
    }

    // map relatedArtists' audioFeatures to tracks for filtering after playlist form submission
    if (this.props.relatedArtistsAudioFeatures.length > 0 && this.props.relatedArtistsTracksWithFeatures.length === 0) {
      this.props.mapRelatedArtistsFeaturesToTracks(this.props.relatedArtistsTopTracks, this.props.relatedArtistsAudioFeatures)
    }
  }

  render() {
    return (
      <div>
        <div>
          <LoggedInNavBar />
          <ArtistsFeaturesCarousel slides={[
            <div className='chart-container'>
              <h2 className='chart-header' style={{marginTop: '30px'}}>Audio Features from Top Tracks</h2>
              <AudioFeaturesChart classname='big-chart' chartData={Object.values(this.props.aggregateFeaturesOfTopTracks).map(val => val * 2)} />
            </div>,
            <div >
              <h2 className='artist-header' style={{marginTop: '30px'}}>Top Artists</h2>
              <TopArtists artists={this.props.topArtists} />
            </div>
          ]}/>
        </div>
        <div className="tracks">
          <h1 className="top-tracks-header">Top Tracks</h1>
          <TopTracksList />
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addRelatedArtistsTopTracks,
      addRelatedArtistsAudioFeatures,
      mapRelatedArtistsFeaturesToTracks
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    relatedArtists: state.relatedArtists.relatedArtists,
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsTracksWithFeatures: state.relatedArtists.tracksWithFeatures,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserResults)
