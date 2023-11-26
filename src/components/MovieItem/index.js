// Write your code here
const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl} = details
  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  )
}

export default MovieItem
