export default(state = {
  isLoggedIn: false,
  user: {
    username: null,
    spotify_url: null,
    id: null
  }
}, action) => {
  switch(action.type) {
    case 'AUTHORIZE':
      return state
    default:
      return state
  }
}
