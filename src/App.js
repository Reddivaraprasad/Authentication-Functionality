import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
