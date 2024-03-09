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
<<<<<<< HEAD
          const {userName, option, isRegistered} = value
=======
          const {userName} = value
>>>>>>> fcfb122722a052d58152652bf2d99560030c8936
          return (
            <>
              <Header />
              <HomeContainer>
<<<<<<< HEAD
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
=======
                <CustomHeading>Welcome {userName}</CustomHeading>
                <CustomPara>Please register for the topic</CustomPara>
                <Link to="/register">
                  <CustomBtn type="button">Register</CustomBtn>
                </Link>
>>>>>>> fcfb122722a052d58152652bf2d99560030c8936
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
