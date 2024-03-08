import React from 'react'

const MeetUpContext = React.createContext({
  userName: '',
  changeUsername: () => {},
  option: 'ARTS_AND_CULTURE',
  changeOption: () => {},
})

export default MeetUpContext
