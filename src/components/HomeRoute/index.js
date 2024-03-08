import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import MeetUpContext from '../../context/MeetUpContext'

import {
  HomeContainer,
  CustomHeading,
  CustomPara,
  CustomBtn,
  CustomImg,
} from './styledComponents'

class HomeRoute extends Component {
  render() {
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {userName} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <CustomHeading>Welcome {userName}</CustomHeading>
                <CustomPara>Please register for the topic</CustomPara>
                <Link to="/register">
                  <CustomBtn type="button">Register</CustomBtn>
                </Link>
                <CustomImg
                  alt="meetup"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                />
              </HomeContainer>
            </>
          )
        }}
      </MeetUpContext.Consumer>
    )
  }
}

export default HomeRoute
