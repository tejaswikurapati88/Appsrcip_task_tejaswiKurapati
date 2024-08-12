import './index.css'

const Products = props => {
  const {productDetails} = props
  const {id, description, title, image} = productDetails
  return (
    <li className="list">
      <div className="list-cont">
        <img src={image} alt={id} className="images" />
        <h2 className="name">{title}</h2>
        <div className="desc-cont">
          <p className="desc">{description}</p>
          <img
            className="icons heart"
            src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723270021/Vectorheart_xnedpw.png"
            alt="wish list"
          />
        </div>
      </div>
    </li>
  )
}

export default Products
