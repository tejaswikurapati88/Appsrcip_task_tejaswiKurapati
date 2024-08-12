import './index.css'

const Footer = () => (
  <div className="footer-bg-cont">
    <div className="footer-top-cont">
      <div className="subscrib-container">
        <h2 className="headings-contact">BE THE FIRST TO KNOW</h2>
        <p className="contact-content">Signup for updates from metta muse</p>
        <div className="sub-inpu-cont">
          <input
            className="sub-input"
            placeholder="Enter your e-mail..."
            type="text"
          />
          <button className="sub-butn" type="button">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="contact-cont">
        <h2 className="headings-contact">CONTACT US</h2>
        <p className="contact-content">+44 221 133 5360</p>
        <p className="contact-content">customercare@mettamuse.com</p>
        <h2 className="headings-contact">CURRENCY</h2>
        <div className="usd-cont">
          <img
            className="contact-img"
            src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1723429716/Group_upr057.png"
            alt="usd"
          />
          <p className="usd">USD</p>
        </div>
        <p className="contact-content-small">
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
    <hr className="hrline" />
    <div className="bottum-cont-footer">
      <div className="cont-1">
        <h2 className="headings-contact">mettā muse</h2>
        <ul className="ul-contact">
          <li className="list-contact">About Us</li>
          <li className="list-contact">Stories</li>
          <li className="list-contact">Artisans</li>
          <li className="list-contact">Boutiques</li>
          <li className="list-contact">Contact US</li>
          <li className="list-contact">EU Compliances Docs</li>
        </ul>
      </div>
      <div className="cont-1">
        <h2 className="headings-contact">QUICK LINKS</h2>
        <ul className="ul-contact">
          <li className="list-contact">Orders & Shipping</li>
          <li className="list-contact">Join/Login as a Seller</li>
          <li className="list-contact">Payment & Pricing</li>
          <li className="list-contact">Return & Refunds</li>
          <li className="list-contact">FAQs</li>
          <li className="list-contact">Privacy Policy</li>
          <li className="list-contact">Terms & Conditions</li>
        </ul>
      </div>
    </div>
  </div>
)

export default Footer
