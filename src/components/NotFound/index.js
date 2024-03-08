import {
  NotFoundContainer,
  CustomImg,
  CustomHeading,
  CustomPara,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <CustomImg
      alt="not found"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
    />
    <CustomHeading>Page Not Found</CustomHeading>
    <CustomPara>
      We are sorry, the page you requested could not be found.
    </CustomPara>
  </NotFoundContainer>
)

export default NotFound
