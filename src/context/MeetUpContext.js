import React from 'react'

const MeetUpContext = React.createContext({
  userName: '',
  option: 'ARTS_AND_CULTURE',
  changeUsername: () => {},
  changeOption: () => {},
  onToggleRegistration: () => {},
  isRegistered: false,
})

export default MeetUpContext
