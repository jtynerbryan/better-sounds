export function authorize(code){
  const body = {
    method: 'POST'
  }
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/users/create?code=${code}`, body)
    .then(res => res.json())
    .then(res => {
      console.log("authrize response",res);
      dispatch({type:"AUTHORIZE", payload: res})})
  }
}
