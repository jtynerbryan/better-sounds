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
    console.log("Auth Reducer action",action)
      localStorage.setItem("jwt", action.payload.jwt)
      return Object.assign({}, state, {
        user: action.payload.user,
        isLoggedIn: true
      })
    default:
      return state
  }
}
