import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPlaylist } from '../../actions/playlists';
import { clearAllRelatedArtistsData } from '../../actions/relatedArtists';
import { Form, Select } from 'semantic-ui-react';

const audioFeatures = ['Acousticness', 'Danceability', 'Energy', 'Instrumentalness', 'Liveness', 'Speechiness', 'Valence'];

class PlaylistForm extends React.Component {
  state = {
    playlistTitle: ''
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleTitle = (e) => {
    this.setState({
      playlistTitle: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.playlistTitle === '' || !this.state.value) {
      alert('Please enter a title and select and audio feature');
    } else {
      // create playlst based on data collected from form
      this.props.addPlaylist(this.state.playlistTitle, this.state.value, this.props.relatedArtistsTracksWithFeatures, this.props.user.id);
      // clearAllRelatedArtistsData() so the next playlist is created with different music
      this.props.clearAllRelatedArtistsData();
      // re-fetch relatedArtists, their topTracks and audioFeatures
      this.props.history.push('/re-loading');
    }
  };

  render() {
    // create options for semantic UI Select Component
    const audioFeatureOptions = audioFeatures.map((feature) => {
      return { text: feature, value: feature };
    });

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal" style={{ width: '40%', margin: 'auto', marginTop: '20px' }}>
          <Form.Input placeholder="My Playlist" label="Playlist Name" onChange={this.handleTitle} />
        </Form.Group>
        <Form.Group widths="equal" style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
          <Form.Input control={Select} options={audioFeatureOptions} label="Select an audio feature to appear prominently in your playlist" onChange={this.handleChange} />
        </Form.Group>
        <Form.Button id="submit-button" style={{ marginTop: '20px' }}>
          Submit
        </Form.Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addPlaylist,
      clearAllRelatedArtistsData
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    relatedArtistsTracksWithFeatures: state.relatedArtists.tracksWithFeatures
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistForm));
