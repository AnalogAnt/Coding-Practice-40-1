/* eslint-disable jsx-a11y/control-has-associated-label */
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import VideoPlayer from '../VideoPlayer'
import MovieItem from '../MovieItem'
import 'reactjs-popup/dist/index.css'

const PopUp = props => {
  const {details} = props
  const {videoUrl} = details
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button">
            <MovieItem details={details} />
          </button>
        }
      >
        {close => (
          <>
            <div>
              <VideoPlayer videtails={videoUrl} />
            </div>
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default PopUp
