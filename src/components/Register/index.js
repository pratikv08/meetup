import {Component} from 'react'
import Header from '../Header'
import MeetUpContext from '../../context/MeetUpContext'
import {
  RegisterContainer,
  ImgContainer,
  CustomImg,
  RegisterForm,
  CustomHeading,
  CustomLabel,
  CustomInput,
  CustomSelect,
  Option,
  LabInpContainer,
  CustomBtn,
  ErrorMsg,
} from './styledComponents'

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

class Register extends Component {
  state = {
<<<<<<< HEAD
    errMsg: '',
  }

  render() {
    const {errMsg} = this.state
    return (
      <MeetUpContext.Consumer>
        {value => {
          const {
            userName,
            option,
            changeOption,
            changeUsername,
            onToggleRegistration,
          } = value

          const onChangeUserName = event => {
            changeUsername(event.target.value)
          }

          const onChangeOption = event => {
            changeOption(event.target.value)
          }

          const onSuccessRegister = () => {
            const {history} = this.props
            history.replace('/')
            onToggleRegistration()
          }

          console.log(option)
          const onRegister = event => {
            event.preventDefault()
            if (!userName) {
              this.setState({
                errMsg: 'Please enter your name',
              })
            } else {
              onSuccessRegister()
            }
          }

          return (
            <>
              <Header />
              <RegisterContainer>
                <ImgContainer>
                  <CustomImg
                    alt="website register"
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  />
                </ImgContainer>
                <RegisterForm onSubmit={onRegister}>
                  <CustomHeading>Let us join</CustomHeading>
                  <LabInpContainer>
                    <CustomLabel htmlFor="username">NAME</CustomLabel>
                    <CustomInput
                      placeholder="Your name"
                      value={userName}
                      onChange={onChangeUserName}
                      type="text"
                      id="username"
                    />
                  </LabInpContainer>
                  <LabInpContainer>
                    <CustomLabel htmlFor="topics">TOPICS</CustomLabel>
                    <CustomSelect
                      id="topics"
                      onChange={onChangeOption}
                      value={option}
                    >
                      {topicsList.map(eachItem => (
                        <Option
                          id={eachItem.id}
                          value={eachItem.id}
                          key={eachItem.id}
                        >
                          {eachItem.displayText}
                        </Option>
                      ))}
                    </CustomSelect>
                  </LabInpContainer>
                  <CustomBtn type="submit">Register Now</CustomBtn>
                  <ErrorMsg>{errMsg}</ErrorMsg>
                </RegisterForm>
              </RegisterContainer>
            </>
          )
        }}
      </MeetUpContext.Consumer>
=======
    userName: '',
    option: topicsList[0].id,
    errMsg: '',
    isRegistrationFalied: false,
    isRegistered: false,
  }

  onSuccessRegister = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({
      isRegistered: true,
    })
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangeOption = event => {
    this.setState({
      option: event.target.value,
    })
    console.log(event.target.value)
  }

  onRegister = event => {
    const {userName} = this.state
    event.preventDefault()
    if (!userName.trim()) {
      this.setState({
        isRegistrationFalied: false,
        errMsg: 'Please enter your name',
      })
    } else {
      this.onSuccessRegister()
    }
  }

  render() {
    const {userName, option, errMsg} = this.state
    return (
      <MeetUpContext.Provider
        value={{userName, changeUsername: this.onChangeUserName}}
      >
        <>
          <Header />
          <RegisterContainer>
            <ImgContainer>
              <CustomImg
                alt="website register"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              />
            </ImgContainer>
            <RegisterForm onSubmit={this.onRegister}>
              <CustomHeading>Let us join</CustomHeading>
              <LabInpContainer>
                <CustomLabel htmlFor="username">NAME</CustomLabel>
                <CustomInput
                  placeholder="Your name"
                  value={userName}
                  onChange={this.onChangeUserName}
                  type="text"
                  id="username"
                />
              </LabInpContainer>
              <LabInpContainer>
                <CustomLabel htmlFor="topics">TOPICS</CustomLabel>
                <CustomSelect
                  id="topics"
                  onChange={this.onChangeOption}
                  value={option}
                >
                  {topicsList.map(eachItem => (
                    <Option
                      id={eachItem.id}
                      value={eachItem.id}
                      key={eachItem.id}
                    >
                      {eachItem.displayText}
                    </Option>
                  ))}
                </CustomSelect>
              </LabInpContainer>
              <CustomBtn type="submit">Register Now</CustomBtn>
              <ErrorMsg>{errMsg}</ErrorMsg>
            </RegisterForm>
          </RegisterContainer>
        </>
      </MeetUpContext.Provider>
>>>>>>> fcfb122722a052d58152652bf2d99560030c8936
    )
  }
}

export default Register
<<<<<<< HEAD
=======

// const onChangeUserName = event => {
//           changeUsername(userName)
//         }
//         const onChangeOption = event => {
//           changeOption(option)
//         }
>>>>>>> fcfb122722a052d58152652bf2d99560030c8936
