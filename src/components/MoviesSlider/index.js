// Write your code here
import Slider from 'react-slick'
import PopUp from '../PopUp'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {movieList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movieList.map(each => (
          <PopUp details={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
