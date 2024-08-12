import './index.css'

const Navbar = () => (
  <div className="navbar-bg-container">
    <div className="navbar-top-cont">
      <img
        className="logo-img"
        src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723269622/Logologo_g2nnjs.png"
        alt="website-logo"
      />
      <h1 className="nav-heading">LOGO</h1>
      <div className="icons-cont">
        <img
          className="icons"
          src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723269933/search-normalsearchicon_nsndim.png"
          alt="search icon"
        />
        <img
          className="icons"
          src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723270021/Vectorheart_xnedpw.png"
          alt="wish list"
        />
        <img
          className="icons"
          src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723270153/shopping-bag_invwju.png"
          alt="cart icon"
        />
        <img
          className="icons"
          src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723270164/profile_rgspov.png"
          alt="profile icon"
        />
        <select className="select" name="language">
          <option className="option" value="english">
            ENG
          </option>
          <option className="option" value="hindi">
            HIN
          </option>
          <option className="option" value="telugu">
            TEL
          </option>
        </select>
      </div>
    </div>
    <div className="navbar-bottom-cont">
      <ul className="ul-nav">
        <li className="li-nav">SHOP</li>
        <li className="li-nav">SKILLS</li>
        <li className="li-nav">STORIES</li>
        <li className="li-nav">ABOUT</li>
        <li className="li-nav">CONTACT US</li>
      </ul>
    </div>
    <hr className="hrline" />
  </div>
)

export default Navbar
