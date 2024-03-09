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
          const {userName, option, isRegistered} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <CustomHeading regsd={!isRegistered} size={!isRegistered}>
                  {!isRegistered ? `Welcome to Meetup` : `Hello ${userName}`}
                </CustomHeading>
                <CustomPara bold={!isRegistered} size={!isRegistered}>
                  {!isRegistered
                    ? `Please register for the topic`
                    : `Welcome to ${option}`}
                </CustomPara>
                {!isRegistered ? (
                  <Link to="/register">
                    <CustomBtn type="button">Register</CustomBtn>
                  </Link>
                ) : null}
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
