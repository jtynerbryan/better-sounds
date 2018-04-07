import React from 'react';
import PlaylistForm from './PlaylistForm';
import PlaylistGrid from './PlaylistGrid';
import LoggedInNavBar from '../NavBars/LoggedInNavBar';
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';

class Playlists extends React.Component {
  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.playlists.length > 0) {
      return (
        <div className="playlist">
          <LoggedInNavBar />
          <h1 style={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic' }}>Playlists</h1>
          <Modal style={{ backgroundColor: '#FAFAFA' }} trigger={<Button style={{ fontFamily: 'Roboto, sans-serif' }}>Create a Playlist</Button>}>
            <Modal.Header style={{ backgroundColor: '#1b1c1d', color: '#fff', borderRadius: 0 }}>New Playlist</Modal.Header>
            <PlaylistForm />
          </Modal>
          <PlaylistGrid playlists={this.props.playlists} user={this.props.user} />
        </div>
      );
    } else {
      return (
        <div className="empty-playlist">
          <LoggedInNavBar />
          <h1 style={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'italic' }}>Playlists</h1>
          <h3>You haven't created any playlists yet</h3>
          <PlaylistForm />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    playlists: state.playlists.playlists
  };
}

export default connect(mapStateToProps, null)(Playlists);
