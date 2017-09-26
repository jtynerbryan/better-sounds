import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Slider from 'react-viewport-slider';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class AggregateFeaturesChart extends React.Component {

  render() {
    const topTrackVals = [
      this.props.aggregateFeaturesOfTopTracks.danceability * 2,
      this.props.aggregateFeaturesOfTopTracks.energy * 2,
      this.props.aggregateFeaturesOfTopTracks.speechiness * 2,
      this.props.aggregateFeaturesOfTopTracks.acousticness * 2,
      this.props.aggregateFeaturesOfTopTracks.instrumentalness * 2,
      this.props.aggregateFeaturesOfTopTracks.liveness * 2,
      this.props.aggregateFeaturesOfTopTracks.valence * 2
    ]
    const recentTrackVals = [
      this.props.aggregateFeaturesOfRecentTracks.danceability * 2,
      this.props.aggregateFeaturesOfRecentTracks.energy * 2,
      this.props.aggregateFeaturesOfRecentTracks.speechiness * 2,
      this.props.aggregateFeaturesOfRecentTracks.acousticness * 2,
      this.props.aggregateFeaturesOfRecentTracks.instrumentalness * 2,
      this.props.aggregateFeaturesOfRecentTracks.liveness * 2,
      this.props.aggregateFeaturesOfRecentTracks.valence * 2
    ]
    const data = {
      labels: ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'],
      datasets: [
        {
          label: "Aggregate Audio Features",
          data: topTrackVals,
          backgroundColor: ['rgb(244,67,54)', 'rgb(103,58,183)', 'rgb(63,81,181)', 'rgb(33,150,243)', 'rgb(255,152,0)', 'rgb(0,150,136)', 'rgb(255,235,59)']
        }
      ]
    }
    console.log(this.props)
      return (
        <div className='App'>
        <h1>{this.props.user.username}s Audio Features (scale of 0-100)</h1>
        <Doughnut data={data} options={ {} }/>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    aggregateFeaturesOfRecentTracks: state.audioFeatures.aggregateFeaturesOfRecentTracks
  }
}


export default connect(mapStateToProps, null)(AggregateFeaturesChart)
