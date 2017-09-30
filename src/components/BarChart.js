import React from 'react'
import { Bar } from 'react-chartjs-2'
import { connect } from 'react-redux'

class BarChart extends React.Component {

  render() {
    const data = {
      labels: ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'],
      datasets: [
        {
          label: "Audio Features",
          data: this.props.chartData,
          backgroundColor: ['rgb(244,67,54)', 'rgb(103,58,183)', 'rgb(63,81,181)', 'rgb(33,150,243)', 'rgb(255,152,0)', 'rgb(0,150,136)', 'rgb(255,235,59)']
        }
      ]
    }
      return (
        <div className='App'>
        <Bar data={data} width={500} height={500} options={ {maintainAspectRatio: false} }/>
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
