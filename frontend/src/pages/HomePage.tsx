import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Car Rental Management</h1>
            <p>Browse and rent quality vehicles for your journey</p>
            <Link to="/cars" className="btn btn-primary">
              Browse Cars
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Quality Vehicles</h3>
              <p>Well-maintained fleet of modern vehicles</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Prices</h3>
              <p>Affordable rental rates with flexible options</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Insurance Included</h3>
              <p>Comprehensive coverage for peace of mind</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy Booking</h3>
              <p>Quick and simple online reservation system</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage