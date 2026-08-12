import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Car Rental</h3>
            <p>Your trusted partner for quality car rentals</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@carrental.com</p>
            <p>Phone: +1 (555) 000-0000</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Car Rental Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer