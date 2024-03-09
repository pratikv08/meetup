import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  min-height: 80vh;
`

export const ImgContainer = styled.div`
  padding: 20px 0px 20px 30px;
  width: 50%;
`
export const CustomImg = styled.img`
  width: 84%;
`

export const RegisterForm = styled.form`
  width: 50%;
  padding: 2px 5px;
`
export const CustomHeading = styled.h1`
  font-size: 36px;
  color: #334155;
  font-weight: 500;
  margin-top: 0px;
`
export const LabInpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-item: center;
`
export const CustomLabel = styled.label`
  font-size: 14px;
  margin-bottom: 7px;
  color: #64748b;
  font-weight: 500;
`
export const CustomInput = styled.input`
  padding: 10px 10px;
  width: 73%;
  outline: none;
`
export const CustomSelect = styled.select`
  padding: 10px 10px;
  width: 73%;
  outline: none;
`
export const Option = styled.option`
  padding: 10px 20px;
`

export const CustomBtn = styled.button`
  font-size: 14px;
  color: white;
  padding: 12px 22px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #3b82f6;
  cursor: pointer;
  margin-top: 14px;
`

export const ErrorMsg = styled.p`
  font-size: 13px;
  color: red;
  margin-top: 2px;
`
