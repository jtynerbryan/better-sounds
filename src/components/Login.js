import React from 'react';
import { authorize } from '../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends React.Component {
  componentDidMount() {
    // after being redirected from Spotify login,
    // capture response code from url, use it to authorize user and then push history to data fetching component
    const code = this.props.location.search.split('=')[1];
    this.props.authorize(code);
    this.props.history.push('/loading');
  }

  render() {
    return <div />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ authorize }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
