import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'

class AudioFeaturesChart extends React.Component {

  render() {
    const data = {
      labels: ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'],
      datasets: [
        {
          label: "Aggregate Audio Features",
          data: this.props.chartData,
          backgroundColor: ['rgb(244,67,54)', 'rgb(103,58,183)', 'rgb(63,81,181)', 'rgb(33,150,243)', 'rgb(255,152,0)', 'rgb(0,150,136)', 'rgb(255,235,59)']
        }
      ]
    }
      return (
        <div className='chart'>
        <Doughnut data={data} width={650}
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
