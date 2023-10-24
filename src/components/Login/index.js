import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const tokenData = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      tokenData(data.jwt_token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onLogin}>
        Please login with creads
      </button>
    </div>
  )
}

export default withRouter(Login)
