import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 110vh;
  padding: 20px;
`

export const CustomHeading = styled.h1`
  font-size: ${props => (props.size ? '47px' : '52px')};
  color: ${props => (props.regsd ? '#64748b' : '#3b82f6')};
  font-weight: 500;
  margin-bottom: 0px;
`

export const CustomPara = styled.p`
  font-size: ${props => (props.size ? '25px' : '28px')};
  color: #475569;
  margin-bottom: 30px;
  font-weight: ${props => (props.bold ? 'normal' : '700')};
`

export const CustomBtn = styled.button`
  font-size: 16px;
  color: white;
  padding: 12px 26px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #3b82f6;
  cursor: pointer;
`
export const CustomImg = styled.img`
  width: 70%;
  margin-top: 60px;
  margin-bottom: 40px;
`
