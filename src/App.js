import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import HomeRoute from './components/HomeRoute'
import Register from './components/Register'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/register" component={Register} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)
export default App
