export function authorize(code){
  const body = {
    method: 'POST'
  }
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/create?code=${code}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type:"AUTHORIZE", payload: res})
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({type: 'LOGOUT_USER'})
  }
}
