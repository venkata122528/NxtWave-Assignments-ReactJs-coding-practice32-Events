// Write your code here
import './index.css'

const EventItem = props => {
  const {each, onClickEventItem} = props
  const {imageUrl, name, location, registrationStatus} = each

  const onClickButton = () => {
    onClickEventItem(registrationStatus)
  }

  return (
    <li className="eachListItem">
      <button type="button" className="button" onClick={onClickButton}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="nameTitle">{name}</p>
      <p className="locationTitle">{location}</p>
    </li>
  )
}

export default EventItem
