import React from 'react';
import { Grid } from 'semantic-ui-react';

const PlaylistGrid = (props) => {
  const playlists = props.playlists.map((playlist, index) => {
    return (
      <iframe
        key={index}
        title={playlist.spotify_id}
        src={`https://open.spotify.com/embed?uri=spotify:user:${props.user.username}:playlist:${playlist.spotify_id}`}
        width="300"
        height="380"
        frameBorder="0"
      />
    );
  });

  return (
    <div>
      <Grid centered>
        <Grid.Row columns={4}>{playlists}</Grid.Row>
      </Grid>
    </div>
  );
};

export default PlaylistGrid;
