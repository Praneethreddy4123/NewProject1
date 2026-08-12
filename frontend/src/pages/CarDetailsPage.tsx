import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './CarDetailsPage.css'

function CarDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [rentalDays, setRentalDays] = useState(1)

  // TODO: Replace with actual API call
  const car = {
    id: id,
    year: 2023,
    make: 'Toyota',
    model: 'Camry',
    pricePerDay: 50,
    imageUrl: '🚗',
    description: 'A reliable and comfortable sedan perfect for daily commutes or long road trips.',
    features: ['Air Conditioning', 'Power Steering', 'Automatic Transmission', 'Bluetooth', 'Backup Camera'],
    available: true
  }

  const totalCost = car.pricePerDay * rentalDays

  return (
    <div className="car-details-page">
      <div className="container">
        <button onClick={() => navigate('/cars')} className="back-btn">
          ← Back to Cars
        </button>

        <div className="details-grid">
          <div className="details-image">
            <div className="image-placeholder">{car.imageUrl}</div>
          </div>

          <div className="details-content">
            <h1>{car.year} {car.make} {car.model}</h1>
            <p className="price">${car.pricePerDay} per day</p>
            <p className="description">{car.description}</p>

            <div className="features">
              <h3>Features</h3>
              <ul>
                {car.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="rental-form">
              <div className="form-group">
                <label>Rental Days</label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={rentalDays}
                  onChange={(e) => setRentalDays(parseInt(e.target.value))}
                />
              </div>

              <div className="cost-summary">
                <div className="cost-line">
                  <span>${car.pricePerDay} × {rentalDays} days</span>
                  <span>${totalCost}</span>
                </div>
                <div className="cost-total">
                  <span>Total</span>
                  <span>${totalCost}</span>
                </div>
              </div>

              <button className="btn btn-primary btn-block">
                Proceed to Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailsPage