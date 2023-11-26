// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <MoviesSlider
        movieList={moviesList.filter(each => each.categoryId === 'ACTION')}
      />
      <h1>Comedy Movies</h1>
      <MoviesSlider
        movieList={moviesList.filter(each => each.categoryId === 'COMEDY')}
      />
    </div>
  )
}

export default PrimeVideo
