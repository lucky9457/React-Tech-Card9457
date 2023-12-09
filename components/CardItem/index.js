import './index.css'

const CardItem = props => {
  const {user, key} = props
  const {title, description, imgUrl, className} = user
  return (
    <li id={key} className={className}>
      <h1 className="card_head">{title}</h1>
      <p className="para_card">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
