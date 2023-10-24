import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="headComponent">
    <p className="element">
      <Link to="/">Home</Link>
    </p>
    <p className="element">
      <Link to="/about">About</Link>
    </p>
  </div>
)

export default Header
