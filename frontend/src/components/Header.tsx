import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            🚗 Car Rental
          </Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/cars">Cars</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header