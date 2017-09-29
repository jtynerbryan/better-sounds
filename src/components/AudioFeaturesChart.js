import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'

class AudioFeaturesChart extends React.Component {

  render() {
    const featureValues = [
      this.props.chartData.danceability * 2,
      this.props.chartData.energy * 2,
      this.props.chartData.speechiness * 2,
      this.props.chartData.acousticness * 2,
      this.props.chartData.instrumentalness * 2,
      this.props.chartData.liveness * 2,
      this.props.chartData.valence * 2
    ]
    const data = {
      labels: ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'],
      datasets: [
        {
          label: "Aggregate Audio Features",
          data: featureValues,
          backgroundColor: ['rgb(244,67,54)', 'rgb(103,58,183)', 'rgb(63,81,181)', 'rgb(33,150,243)', 'rgb(255,152,0)', 'rgb(0,150,136)', 'rgb(255,235,59)']
        }
      ]
    }
      return (
        <div className='App'>
        <Doughnut data={data} width={500}
        height={500}
        options={{
          maintainAspectRatio: false
        }}/>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(AudioFeaturesChart)
