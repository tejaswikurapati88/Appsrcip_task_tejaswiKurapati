import './index.css'
import {Audio} from 'react-loader-spinner'
import {Component} from 'react'
import TopBar from '../TopBar'
import Navbar from '../Navbar'
import Heading from '../Heading'
import Products from '../Products'
import Footer from '../Footer'

class Home extends Component {
  state = {isLoading: true, productsData: []}

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const url = 'https://fakestoreapi.com/products/'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({isLoading: false, productsData: data})
  }

  renderLeftFilter = () => (
    <div className="left-cont">
      <div className="conta">
        <input className="inp-box" id="checkBox" type="checkBox" />
        <label className="content" htmlFor="checkBox">
          CUSTOMIZBLE
        </label>
      </div>
      <ul className="filter-containers">
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">IDEAL FOR</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">OCCASION</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">WORK</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">FABRIC</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">SEGMENT</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">SUITABLE FOR</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">RAW MATERIALS</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
        <li className="list border">
          <div className="fil-con">
            <p className="content fil-cont">PATTERN</p>
            <img
              src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
              alt="down arrow"
              className="arrow-down"
            />
          </div>
          <p className="">All</p>
        </li>
      </ul>
    </div>
  )

  renderData = () => {
    const {isLoading, productsData} = this.state
    return (
      <div className="ul-con">
        {isLoading ? (
          <></>
        ) : (
          <ul className="ul">
            {productsData.map(each => (
              <Products key={each.id} productDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }

  render() {
    return (
      <>
        <TopBar />
        <Navbar />
        <div className="bg-home-cont">
          <Heading />
          <div className="filter-top-cont">
            <div className="cont">
              <p className="content">3425 ITEMS</p>
              <div className="container">
                <img
                  src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283618/Vector_axgkof.png"
                  alt="left arrow"
                  className="arrow"
                />
                <p className="hide">HIDE FILTER</p>
              </div>
            </div>
            <div className="container">
              <p className="recommended">RECOMMENDED</p>
              <img
                src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723283943/Vectordown_juungp.png"
                alt="down arrow"
                className="arrow-down"
              />
            </div>
          </div>
          <div className="bg-home-con">
            {this.renderLeftFilter()}
            {this.renderData()}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
