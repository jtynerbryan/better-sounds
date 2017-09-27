import React from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

class BarChart extends React.Component {

  render() {
    const featureValues = [
      this.props.chartData.danceability * 10,
      this.props.chartData.energy * 10,
      this.props.chartData.speechiness * 10,
      this.props.chartData.acousticness * 10,
      this.props.chartData.instrumentalness * 10,
      this.props.chartData.liveness * 10,
      this.props.chartData.valence * 10
    ]
    const data = {
      labels: ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'],
      datasets: [
        {
          label: "Audio Features",
          data: featureValues,
          backgroundColor: ['rgb(244,67,54)', 'rgb(103,58,183)', 'rgb(63,81,181)', 'rgb(33,150,243)', 'rgb(255,152,0)', 'rgb(0,150,136)', 'rgb(255,235,59)']
        }
      ]
    }
      return (
        <div className='App'>
        <Bar data={data} options={ {} }/>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(BarChart)
