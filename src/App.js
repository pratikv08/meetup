import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import HomeRoute from './components/HomeRoute'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetUpContext from './context/MeetUpContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
// Replace your code here
class App extends Component {
  state = {
    userName: '',
    option: topicsList[0].id,
    isRegistered: false,
  }

  changeUsername = name => {
    this.setState({
      userName: name,
    })
  }

  changeOption = cate => {
    this.setState({
      option: cate,
    })
  }

  onToggleRegistration = () => {
    this.setState({
      isRegistered: true,
    })
  }

  render() {
    const {userName, option, isRegistered} = this.state
    return (
      <MeetUpContext.Provider
        value={{
          userName,
          option,
          isRegistered,
          changeOption: this.changeOption,
          changeUsername: this.changeUsername,
          onToggleRegistration: this.onToggleRegistration,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
