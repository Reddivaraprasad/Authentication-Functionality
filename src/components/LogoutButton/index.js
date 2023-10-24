import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onClickLogout = () => {
    history.replace('/login')
    Cookies.remove('jwt_token')
  }
  return (
    <div className="logout">
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
